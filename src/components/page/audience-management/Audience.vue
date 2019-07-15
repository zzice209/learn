<template>
  <div>
    <div class="cbt-filter-container">
      <v-layout class="cbt-filter-group" row wrap>
        <cbt-select
          v-for="(item, index) in filter"
          :key="index" :list='listFilter[item.type]'
          :type='item.type'
          :title='item.title'
          :result='item.result'
          @updateFilter='updateFilter'>
        </cbt-select>
      </v-layout>
    </div>
    <div v-if="pending" class="cbt-alert alert-error mt-3 ml-3 mr-3">
      <v-layout row wrap>
        <v-icon class="cbt-icon font-size-14 color-warning icon-alert-triangle mr-2"></v-icon>
        <span class="text-line font-regular font-size-12 color-warning">{{$t('account.noPermission')}}</span>
      </v-layout>
    </div>
    <div class="audience">
      <div class="title-group">
        <v-layout row wrap>
          <div class="page-title">
            <span>{{$t('audience.title')}}</span>
          </div>
        </v-layout>
      </div>
      <template>
        <v-container class="audience-container full-width" v-if="typing || search || list.length > 0">
          <v-layout row class="mb-4">
            <v-tooltip :content-class="selected.length === 0?'cbt-tooltip bottom show':'cbt-tooltip bottom hide'" bottom>
              <v-menu :disabled="selected.length === 0" class="cbt-menu" offset-y slot="activator">
                <v-btn class="cbt-select-btn" slot="activator">
                  <span class="cbt-select-label">{{$t('audience.select.label')}}</span>
                </v-btn>
                <v-list class="audience-action-menu">
                  <v-list-tile class="audience-action-item toolbar-list" v-for="(item, index) in items" :key="index" @click="to(item.link)">
                    <v-list-tile-title class="audience-action-menu-title">{{$t(item.title)}}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <span>{{$t('tooltip.pleaseSelect', {type: $t('type.audience')})}}</span>
            </v-tooltip>
            <div class="cbt-search ml-2">
              <v-text-field class="cbt-textfield" solo append-icon="icon-search3" @click:append="loadList" @keydown.enter="loadList" @change="loadList" v-model="search" :placeholder="$t('select.search')"></v-text-field>
            </div>
            <div class="spacer"></div>
            <div class="cbt-btn-group pull-right">
              <v-btn v-if="permission.AUDIENCE_CREATE === '1'" class="cbt-btn ml-2 accent-main" @click="selectTypeAudience">
                <v-icon class="cbt-icon icon-plus2"></v-icon>
                {{$t('audience.add')}}
              </v-btn>
            </div>
          </v-layout>
          <div class="cbt-table-container">
            <v-data-table item-key="id" class="cbt-table" select-all v-model="selected" :headers="headers" :items="list" hide-actions>
              <template slot="headers" slot-scope="props">
                <tr class="cbt-table-header">
                  <th class="width3 pt-0 pb-0 pl-0 pr-0 text-left">
                    <section class="cbt-checkbox-container">
                      <input type="checkbox" v-model="isSelectAll" @change="selectAll" color="success" height="15px" class="cbt-checkbox">
                      <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
                      <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
                    </section>
                  </th>
                  <th v-for="(item,index) in props.headers" :key="index" :class="item.style?item.style:''" :style="item.color ? item.color : ''">{{$t(item.text)}}</th>
                </tr>
              </template>
              <template slot="items" slot-scope="props">
                <tr class="cbt-table-row" :active="props.selected">
                  <td class="width3 pt-0 pb-0 pl-0 pr-0 text-left">
                    <section class="cbt-checkbox-container">
                      <input type="checkbox" @click="props.selected = !props.selected" v-model="props.selected" color="success" height="15px" class="cbt-checkbox">
                      <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
                      <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
                    </section>
                  </td>
                  <td v-for="(item, index) in properties" :key="index" :class="headers[index].style?headers[index].style:''">
                    <cbt-table-cell v-if="item.prop !== 'name'" :item="item" :data="props"></cbt-table-cell>
                    <span>
                      <a class="color-success" v-if="item.prop === 'name'" :title="props.item[item.prop]" @click="editAudience(props.item['id'], props.item['typeAudience'])">{{props.item[item.prop]}}</a>
                    </span>
                  </td>
                  <td class="width15">
                    <span>
                      <v-icon v-if="props.item.status === 4" class="dot color-warning">fiber_manual_record</v-icon>
                      <v-icon v-if="props.item.status === 3" class="dot color-success">fiber_manual_record</v-icon>
                      <v-icon v-if="props.item.status === 2" class="dot color-alert">fiber_manual_record</v-icon>
                      <v-icon v-if="props.item.status === 1" class="dot text-color-4">fiber_manual_record</v-icon>
                      <span class="cbt-status-label">{{props.item.state}}</span>
                    </span>
                  </td>
                  <td class="width20">
                    <div class="cbt-table-btn-group cbt-btn-group text-right">
                      <v-btn :disabled="props.item.analyticStatus == analyticStatus.analyzing" v-if="props.item.typeAudience == 2" :ripple="false" class="cbt-btn ml-2 accent-outline" @click="analysisAudience(props.item)">
                        <v-icon class="cbt-icon icon-bar-chart-2"></v-icon>
                        <span class="cbt-select-value" v-if="props.item.analyticStatus == analyticStatus.analysis">{{$t('audience.action.analysis')}}</span>
                        <span class="cbt-select-value" v-if="props.item.analyticStatus == analyticStatus.analyzing">{{$t('audience.action.analyzing')}}</span>
                        <span class="cbt-select-value" v-if="props.item.analyticStatus == analyticStatus.analyzed">{{$t('audience.action.analyzed')}}</span>
                      </v-btn>
                      <v-btn v-if="props.item.typeAudience != 1 && props.item.submitDone == 0" :ripple="false" class="cbt-btn ml-2 accent-outline" @click="submitAudience(props.item)">
                        <v-icon class="cbt-icon icon-upload3"></v-icon>
                        <span class="cbt-select-value">{{$t('audience.action.submit')}}</span>
                      </v-btn>
                      <!--<v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="viewStatusDetail(props.item)" v-if="props.item['status']=== 3">-->
                      <!--<v-icon class="cbt-icon icon-alert-circle"></v-icon>-->
                      <!--<span class="cbt-select-value">{{$t('audience.action.detail')}}</span>-->
                      <!--</v-btn>-->

                      <!--<v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="viewStatusDetail(props.item)" v-if="props.item['status']=== 4">-->
                      <!--<v-icon class="cbt-icon icon-info"></v-icon>-->
                      <!--<span class="cbt-select-value">{{$t('audience.action.watch')}}</span>-->
                      <!--</v-btn>-->
                      <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="watchDetail(props.item)">
                        <v-icon class="cbt-icon icon-info"></v-icon>
                        <span class="cbt-select-value">{{$t('audience.action.watch')}}</span>
                      </v-btn>
                      <!--<v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="viewStatusDetail(props.item)" v-if="props.item['status']=== 2">-->
                      <!--<v-icon class="cbt-icon icon-alert-circle"></v-icon>-->
                      <!--<span class="cbt-select-value">{{$t('audience.action.detail')}}</span>-->
                      <!--</v-btn>-->
                      <!-- <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="editAudience(props.item['id'])" v-if="props.item['status']=== 1">
                        <v-icon class="cbt-icon icon-edit-2"></v-icon>
                        <span class="cbt-select-value">{{$t('action.edit')}}</span>
                      </v-btn> -->

                      <!--<v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="changeName(props.item)">-->
                      <!--<v-icon class="cbt-icon icon-copy"></v-icon>-->
                      <!--<span class="cbt-select-value">{{$t('audience.action.copy')}}</span>-->
                      <!--</v-btn>-->

                      <!-- <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="deleteUsers(props.item)">
                        <v-icon class="cbt-icon icon-trash-2"></v-icon>
                        <span class="cbt-select-value">{{$t('action.delete')}}</span>
                      </v-btn>-->

                      <v-menu content-class="toolbar-control-list" class="cbt-menu" offset-y >
                        <v-btn slot="activator" class="cbt-btn ml-2 accent-outline">
                          <v-icon class="cbt-icon icon-more-vertical"></v-icon>
                        </v-btn>
                        <v-list class="toolbar-list">
                          <v-list-tile class="toolbar-list-item" v-for="(item, index) in items" :key="index" @click="to(item.link)">
                            <v-list-tile-title v-if="item.action === 'edit'" @click="editAudience(props.item['id'], props.item['typeAudience'])" class="toolbar-list-title">{{$t(item.title)}}</v-list-tile-title>
                            <v-list-tile-title v-if="item.action === 'delete'" @click="deleteUsers(props.item)" class="toolbar-list-title">{{$t(item.title)}}</v-list-tile-title>
                            <v-list-tile-title v-if="item.action === 'copy'" @click="changeName(props.item)" class="toolbar-list-title">{{$t(item.title)}}</v-list-tile-title>
                          </v-list-tile>
                        </v-list>
                      </v-menu>
                    </div>
                  </td>
                </tr>
              </template>
              <template slot="no-data">
                <tr>
                  <td class="cbt-table-no-data text-xs-center pa-3">{{$t('common.emptyTable')}}</td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-container>
        <div class="cbt-pagination pull-right" v-if="(!loading &&  typing || search || list.length > 0) && list.length >0">
          <v-layout row wrap>
            <div class="cbt-size-select-group">
              <v-layout row wrap>
                <span class="cbt-pagination-text">{{$t('pagination.display')}}</span>
                <v-menu class="cbt-menu cbt-pagination-size-select" offset-y>
                  <v-btn class="cbt-select-btn" slot="activator">
                    <span class="cbt-select-label">{{page.size}}</span>
                  </v-btn>
                  <v-list class="users-action-menu">
                    <v-list-tile @click="changePageSize(item)" class="users-action-item" v-for="(item, index) in size" :key="index">
                      <v-list-tile-title class="users-action-menu-title">{{item}}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
                <span class="cbt-pagination-text">{{$t('pagination.on')}} {{page.total}} {{$t('pagination.results')}}</span>
              </v-layout>
            </div>
            <div class="cbt-navigation-group">
              <div class="cbt-navigation-detail">
                <v-layout row wrap>
                  <span class="cbt-pagination-text">{{$t('pagination.moveTo')}}</span>
                  <v-text-field class="cbt-pagination-input cbt-textfield" solo min="1" :max="page.totalPage" @change="changePage(page.number)" v-model="page.number"></v-text-field>
                  <span class="cbt-pagination-text">/ {{page.totalPage}}</span>
                  <div class="cbt-btn-group cbt-navigation-button-group">
                    <v-btn @click="changePage(--page.number)" :disabled="page.number == 1" class="cbt-btn cbt-navigation-button accent-outline">
                      <v-icon class="cbt-icon icon-chevron-left"></v-icon>
                    </v-btn>
                    <v-btn @click="changePage(++page.number)" :disabled="page.number == page.totalPage" class="cbt-btn cbt-navigation-button accent-outline">
                      <v-icon class="cbt-icon icon-chevron-right"></v-icon>
                    </v-btn>
                  </div>
                </v-layout>
              </div>
            </div>
          </v-layout>
        </div>
        <loading :show="loading"></loading>
        <v-container class="audience-container-new full-width" v-if="!loading && !typing && !search && list.length === 0">
          <div class="cbt-table-null-group">
            <div class="text-xs-center cbt-table-null-text">
              {{$t('audience.table.null')}}
              <span v-if="permission.AUDIENCE_CREATE === '1'">{{$t('audience.table.null2')}}</span>
            </div>
            <div class="cbt-btn-group text-center cbt-table-null-btn">
              <v-btn v-if="permission.AUDIENCE_CREATE === '1'" class="cbt-btn accent-main ml-0" @click="selectTypeAudience">
                <v-icon class="cbt-icon icon-plus2"></v-icon>
                {{$t('audience.addSecond')}}
              </v-btn>
            </div>
          </div>
        </v-container>
      </template>
      <v-dialog v-model="selectDialog" persistent max-width="760px">
        <audience-select v-if="selectDialog" name="select" :audience="selectedAudience" @closeDialog="closeDialog" @confirmAction="selectAudienceDone"></audience-select>
      </v-dialog>
      <v-dialog v-model="createDialog" persistent max-width="688px">
        <audience-create v-if="createDialog" name="create" :audience="selectedAudience" @closeDialog="closeDialog" @confirmAction="cloneAudience"></audience-create>
      </v-dialog>
      <v-dialog v-model="deleteDialog" persistent max-width="699px">
        <delete-content :type="'type.audience'" :value="deleteName" @confirmDelete="confirmDelete" @closeDialog="closeDialog"></delete-content>
      </v-dialog>
      <v-dialog v-model="submitDialog" persistent max-width="688px">
        <audience-submit v-if="submitDialog" name="submit" :audience="selectedAudience" @closeDialog="closeDialog" @confirmAction="submitAudience"></audience-submit>
      </v-dialog>
      <v-dialog v-model="statusDialog" persistent max-width="688px">
        <audience-submit-status v-if="statusDialog" name="status" :audience="selectedAudience" @closeDialog="closeDialog"></audience-submit-status>
      </v-dialog>
      <v-dialog v-model="watchDetailDialog" persistent max-width="910px">
        <audience-watch-detail v-if="watchDetailDialog" name="status" :audience="selectedAudience" @closeDialog="closeDialog"></audience-watch-detail>
      </v-dialog>
      <v-alert v-model="error" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-x">
        <span>{{message}}</span>
      </v-alert>
    </div>
  </div>
</template>

<script>
  import HEADERS from '@/const/headers.js';
  import PROPERTIES from '@/const/properties.js';
  import FILTER from '@/const/filter.js';
  import DeleteDialog from '@/components/page/dialog/DeleteDialog';
  import CBTSelect from '@/components/common/CBTSelect';
  import CBTTableCell from '@/components/common/CBTTableCell';
  import AudienceForm from '@/components/page/audience-management/AudienceForm';
  import AudienceCreate from '@/components/page/audience-management/AudienceCreate';
  import AudienceSubmit from '@/components/page/audience-management/AudienceSubmit';
  import AudienceSubmitStatus from '@/components/page/audience-management/AudienceSubmitStatus';
  import AudienceWatchDetail from '@/components/page/audience-management/AudienceWatchDetail';

  import audienceService from '@/api/audience.api';
  import i18n from '@/lang';
  import AudienceSelectType from '@/components/page/audience-management/AudienceSelectType.vue';
  import AudienceType from '@/const/type_audience'

  export default {
    components: {
      'cbt-table-cell': CBTTableCell,
      'cbt-select': CBTSelect,
      'delete-content': DeleteDialog,
      'audience-create': AudienceCreate,
      'audience-form': AudienceForm,
      'audience-submit': AudienceSubmit,
      'audience-select': AudienceSelectType,
      'audience-submit-status': AudienceSubmitStatus,
      'audience-watch-detail': AudienceWatchDetail
    },
    data() {
      return {
        audienceTypeMap: {
          0: i18n.t('audience.selectDialog.title'),
          1: i18n.t('audience.selectDialog.creatByPost'),
          2: i18n.t('audience.selectDialog.createByFile')
        },
        permission: {},
        pending: false,
        page: {
          size: 10,
          number: 1,
          total: 1,
          totalPage: 1,
          sortType: '',
          sortBy: ''
        },
        analyticStatus: {
          analysis: 0,
          analyzing: 1,
          analyzed: 2
        },
        typing: false,
        loading: false,
        message: '',
        error: false,
        search: '',
        editId: 0,
        selectDialog: false,
        createDialog: false,
        editDialog: false,
        deleteDialog: false,
        statusDialog: false,
        watchDetailDialog: false,
        deleteName: '',
        submitDialog: false,
        selectedAudience: {},
        deleteId: 0,
        filter: FILTER.audience,
        headers: HEADERS.audience,
        properties: PROPERTIES.audience,
        avatar: false,
        size: [10, 20, 50, 100],
        list: [],
        isSelectAll: false,
        listFilter: {
          creator: [],
          fileType: []
        },
        items: [{
          title: 'audience.action.edit',
          action: 'edit'
        },
        {
          title: 'audience.action.copy',
          action: 'copy'
        },
        {
          title: 'audience.action.delete',
          action: 'delete'
        }],
        selected: []
      };
    },
    watch: {
      search(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.typing = true;
        }
      },
      selected(newVal, oldVal) {
        if (this.selected.length !== this.list.length) {
          this.isSelectAll = false;
        } else {
          this.isSelectAll = true;
        }
      }
    },
    mounted() {
      this.permission = this.$store.state.auth.permission;
      this.pending = this.$store.state.auth.pending;
      this.loadList();
    },
    methods: {
      changePage(number) {
        this.page.number = number;
        if (this.page.number > 0 && this.page.number <= this.page.totalPage) {
          this.loadList();
        }
      },
      changePageSize(number) {
        this.page.size = number;
        this.page.number = 1;
        this.loadList();
      },
      updateFilter(result, type) {
        for (let i = 0; i < this.filter.length; i++) {
          if (this.filter[i].type === type) {
            this.filter[i].result = result;
            this.loadList();
          }
        }
      },
      loadList() {
        this.loading = true
        this.typing = false;
        audienceService
          .ListAudience({
            page: this.page,
            search: this.search.replace(/([.*+?=^!:${}()|[\]\\/\\])/g, '\\$1').trim()
          })
          .then(({
                   data
                 }) => {
            if (data.data.list_audience) {
              this.list = data.data.list_audience;
              this.page.total = data.data.total;
              this.page.totalPage = Math.ceil(this.page.total / this.page.size);
            } else {
              this.list = [];
            }
            this.isSelectAll = false;
            this.selected = [];
            this.loading = false;
          })
          .catch(e => {
            this.error = true;
            this.loading = false;
          });
      },
      selectAll() {
        if (this.isSelectAll) {
          this.selected = this.list.slice();
        } else {
          this.selected = [];
        }
      },
      addAudience() {
        this.toCreate();
      },
      changeName(audience) {
        this.selectedAudience = Object.assign({}, audience);
        this.createDialog = true;
      },
      cloneAudience(name) {
        this.loading = true;
        audienceService
          .CloneAudience({
            id: this.selectedAudience.id,
            name: name.name
          })
          .then(({
                   data
                 }) => {
            switch (data.status) {
              case 200:
                this.closeDialog();
                this.loadList();
                break;
              case 400:
                if (data.statusCode === 16) {
                  this.error = true;
                  this.message = i18n.t('audience.error.existed');
                  setTimeout(() => {
                    this.error = false;
                  }, 2000);
                }
                break;
              default:
                this.error = true;
                this.message = data.message;
                setTimeout(() => {
                  this.error = false;
                }, 2000);
            }
            this.loading = false;
          })
          .catch(e => {
            this.error = true;
            this.loading = false;
            setTimeout(() => {
              this.error = false;
            }, 2000);
          });
      },
      submitAudience(audience) {
        this.submitDialog = true;
        this.selectedAudience = audience;
      },
      selectTypeAudience(audience) {
        this.selectDialog = true;
        this.selectedAudience = audience;
      },
      analysisAudience(audience) {
        this.loading = true;
        this.watchDetailDialog = true
        this.selectedAudience = audience
        // audienceService
        //   .AnalyticAudienceFile({
        //     audience_id: audience.id
        //   })
        //   .then(({
        //            data
        //          }) => {
        //     switch (data.status) {
        //       case 200:
        //         this.loadList();
        //         break;
        //       case 1:
        //         this.error = true;
        //         this.message = data.message;
        //         setTimeout(() => {
        //           this.error = false;
        //         }, 2000);
        //         break;
        //       default:
        //         this.error = true;
        //         this.message = data.message;
        //         setTimeout(() => {
        //           this.error = false;
        //         }, 2000);
        //     }
        //     this.loading = false;
        //   })
        //   .catch(e => {
        //     this.error = true;
        //     this.loading = false;
        //     setTimeout(() => {
        //       this.error = false;
        //     }, 2000);
        //   });
      },
      selectAudienceDone(data) {
        switch (data.selectedType.value) {
          case 1:
            this.toCreate();
            break;
          case 2:
            this.toPostCreate();
            break;
          case 4:
            this.toUploadCreate();
            break;
        }
      },
      viewStatus(status) {
        switch (status) {
          case 1:
            return i18n.t('audience.status.notDo');
          case 2:
            return i18n.t('audience.status.onDo');
          case 3:
            return i18n.t('audience.status.done');
          case 5:
            return i18n.t('audience.status.errorDo');
        }
      },
      viewStatusDetail(audience) {
        this.selectedAudience = audience;
        this.statusDialog = true;
      },
      watchDetail(audience) {
        this.selectedAudience = audience;
        this.watchDetailDialog = true;
      },
      editAudience(id, typeAudience) {
        if (typeAudience === AudienceType.CYBER) {
          this.$router.push(`/audience/edit/${id}`);
        } else if (typeAudience === AudienceType.POST) {
          this.$router.push(`/audience/editpost/${id}`);
        }
      },
      deleteUsers(item) {
        this.deleteName = item.audience;
        this.deleteId = item.id;
        this.deleteDialog = true;
      },
      confirmDelete() {
        this.deleteId = 0;
        this.deleteName = '';
        this.deleteDialog = false;
        this.loadList();
      },
      closeDialog() {
        this.editId = 0;
        this.editDialog = false;

        this.deleteDialog = false;
        this.deleteName = '';
        this.deleteId = 0;

        this.createDialog = false;

        this.selectDialog = false;

        this.submitDialog = false;
        this.statusDialog = false;
        this.watchDetailDialog = false;
        this.selectedAudience = {};
        this.loadList();
      },
      toCreate() {
        this.$router.push('/audience/create');
      },
      toPostCreate() {
        this.$router.push('/audience/post');
      },
      toUploadCreate() {
        this.$router.push('/audience/createupload');
      }
    },
    name: 'Audience'
  };
</script>
