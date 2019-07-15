<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header" style="padding-bottom: 0;">
      <div class="cbt-dialog-title">{{$t('audience.status.detail', {name: audience.name})}}</div>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="watch-detail">
      <div class="cbt-table-btn-group cbt-btn-group text-right">
        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline">
          <v-icon class="cbt-icon icon-upload3"></v-icon>
          <span class="cbt-select-value">{{$t('audience.action.submit')}}</span>
        </v-btn>

        <v-btn v-if="audience.typeAudience !== 2" :ripple="false" class="cbt-btn ml-2 accent-outline">
          <v-icon class="cbt-icon icon-edit-2"></v-icon>
          <span class="cbt-select-value">{{$t('audience.action.edit')}}</span>
        </v-btn>

        <v-btn v-if="audience.typeAudience !== 2" :ripple="false" class="cbt-btn ml-2 accent-outline">
          <v-icon class="cbt-icon icon-copy"></v-icon>
          <span class="cbt-select-value">{{$t('audience.action.copy')}}</span>
        </v-btn>
        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline mr-4">
          <v-icon class="cbt-icon icon-trash"></v-icon>
          <span class="cbt-select-value">{{$t('audience.action.delete')}}</span>
        </v-btn>

      </div>
      <v-tabs class="details-tab" slider-color="accent-main">
        <v-tab  :key="1" style="text-transform: none">
          {{$t('audience.form.info')}}</v-tab>

        <v-tab-item :key="1">
          <v-layout>
            <v-flex class="cbt-dialog-column mr-4" md6>
              <v-layout class="cbt-dialog-row" row wrap>
                <div class="cbt-success-return">
                  <v-layout row wrap>
                    <div class="cbt-success-return-title">{{$t('return.result')}}</div>
                    <v-spacer></v-spacer>
                    <i class="cbt-icon color-main font-size-18 icon-users2"></i>
                  </v-layout>
                  <div class="mt-32" v-if="!loading">
                    <div class="font-medium font-size-24 text-color-main">{{audience.count | numberic}}</div>
                    <div class="font-medium font-size-12 text-color-2">{{$t('result', {type: $t('type.customer')})}}</div>
                  </div>
                  <loading :show="loading"></loading>
                </div>
              </v-layout>
              <template>
                <div class="border-1 mt-3 detail-box" row wrap>
                    <tr class="cbt-table-row">
                      <td>{{$t('audience.dialog.createLabel')}}</td>
                      <td class="text-xs-right">{{audience.name}}</td>
                    </tr>
                    <tr class="cbt-table-row">
                      <td>{{$t('audience.table.creator')}}</td>
                      <td class="text-xs-right">{{audience.nameOfUser}}</td>
                    </tr>
                    <tr class="cbt-table-row">
                      <td>{{$t('audience.table.createDate')}}</td>
                      <td class="text-xs-right">{{viewTime(audience.Timestamp)}}</td>
                    </tr>
                    <tr class="cbt-table-row">
                      <td>{{$t('filter.fileType')}}</td>
                      <td class="text-xs-right" v-if="audience.typeAudience === audienceType.CYBER">{{$t('audience.selectDialog.title')}}</td>
                      <td class="text-xs-right" v-if="audience.typeAudience === audienceType.POST">{{$t('audience.selectDialog.creatByPost')}}</td>
                      <td class="text-xs-right" v-if="audience.typeAudience === audienceType.UPLOAD">{{$t('audience.selectDialog.createByFile')}}</td>
                    </tr>
                </div>
              </template>
              <template>
                <div class="border-1 mt-3 detail-box pt-3" row wrap>
                  <thead>
                    {{$t('audience.action.submitState')}}
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in listChannel" class="cbt-table-row">
                      <td>
                        <v-tooltip content-class="cbt-tooltip bottom show" bottom>
                          <span slot="activator" class="ellipsis font-regular font-size-12">{{item.name}}</span>
                          <span>{{item.name}}</span>
                        </v-tooltip>
                      </td>

                      <td class="text-xs-right">
                        <span class="font-size-12 pull-right color-error pointer-handle" v-if="item.statusUpload === 4" @click="backToAdaccount">
                         <u>{{viewFix(item.statusUpload)}}</u>
                        </span>
                        <v-tooltip content-class="cbt-tooltip top show" class="pull-right" top v-if="item.statusUpload === 4">
                        <span slot="activator" class="font-regular font-size-12 pr-1 pl-1">
                          (<u>{{viewError(item.statusUpload)}}</u>)
                        </span>
                          <span>{{item.messageError}}</span>
                        </v-tooltip>
                        <span class="font-size-12 pull-right">{{viewDetailStatus(item.statusUpload)}}</span>
                        <div :class="viewColor(item.statusUpload) + ' cbt-status-icon-group pull-right'">
                          <span :class="viewIcon(item.statusUpload) + ' cbt-status-icon'"></span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
              </template>
            </v-flex>
            <v-flex class="cbt-dialog-column" md7 style="height: auto;">
              <div v-if="audience.typeAudience === 2" class="border-1 detail-box-2">
                <div class="cbt-dialog-title">{{$t('audience.action.detailFile')}}</div>
                <v-layout class="cbt-diaglog-step" row wrap>
                  <div class="csv-logo">
                    <img src="@/assets/image/CSVStep3.png">
                  </div>
                  <div class="cbt-download-content">
                    <div class="cbt-dialog-title">
                      <span>{{audience.name}}.csv ({{audience.file_size}}KB)</span>
                    </div>
                    <v-layout class="cbt-dialog-content audience-content" row wrap>
                      <v-flex class="cbt-dialog-column" md6>
                        <div class="cbt-dialog-title-1">
                          <span>{{$t('audience.form.emailColumn')}}</span>
                        </div>
                        <div class="cbt-dialog-title-2">
                          <span v-if="audience.validate_file">{{audience.validate_file.email_valid}} {{$t('audience.form.acceptdata')}}</span>
                          <v-icon class="cbt-icon icon-check3"></v-icon>
                        </div>
                        <div class="cbt-hidden-text">
                          <span v-if="audience.validate_file">{{audience.validate_file.email_invalid}} {{$t('audience.form.unacceptdata')}}</span>
                          <v-icon class="cbt-icon icon-x"></v-icon>
                        </div>
                      </v-flex>
                      <v-flex class="cbt-dialog-column" md6>
                        <div class="cbt-dialog-title-1">
                          <span>{{$t('audience.form.phoneColumn')}}</span>
                        </div>
                        <div class="cbt-dialog-title-2">
                          <span v-if="audience.validate_file">{{audience.validate_file.phone_valid}} {{$t('audience.form.acceptdata')}}</span>
                          <v-icon class="cbt-icon icon-check3"></v-icon>
                        </div>
                        <div class="cbt-hidden-text">
                          <span v-if="audience.validate_file">{{audience.validate_file.phone_invalid}} {{$t('audience.form.unacceptdata')}}</span>
                          <v-icon class="cbt-icon icon-x"></v-icon>
                        </div>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-layout>
              </div>
              <div v-if="audience.typeAudience === 1" class="border-1 detail-box pt-3" row wrap>
                <thead>
                Chi tiết tập
                </thead>
                  <tr  v-for="(item,index) in listPostUrl" :key="index" class="cbt-table-row">
                    <td>{{$t('audience.form.urlPosts')}}</td>
                    <td class="text-xs-right url-post"><a :href="listPostUrl[index]" target=_blank>{{listPostUrl[index]}}</a></td>
                  </tr>
              </div>

              <div v-if="audience.typeAudience === 0" class="border-1 detail-box pt-3" row wrap>
                <thead>
                 {{$t('audience.action.detailFile')}}
                </thead>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.age')}}</td>
                  <td class="text-xs-right url-post">{{audience.age.from}}-{{audience.age.to}}</td>
                </tr>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.gender')}}</td>
                  <td v-if="this.audience.sex ===1 " class="text-xs-right url-post">{{$t('gender.all')}}</td>
                  <td v-if="this.audience.sex ===2 " class="text-xs-right url-post">{{$t('gender.male')}}</td>
                  <td v-if="this.audience.sex ===3 " class="text-xs-right url-post">{{$t('gender.female')}}</td>
                </tr>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.place')}} ({{audience.address.length}})</td>
                  <td class="text-xs-right url-post">
                    <div v-dragscroll="true" class="cbt-big-selected-data">
                      <span v-if="audience.address.length === 0">{{$t('action.all')}}</span>
                      <v-chip v-else class="cbt-chip" color="white" v-for="(item, index) in audience.address" :key="index">{{item.display_name}}</v-chip>
                    </div>
                  </td>
                </tr>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.income')}} ({{audience.income.length}})</td>
                  <td class="text-xs-right url-post">
                    <div v-dragscroll="true" class="cbt-big-selected-data">
                      <span v-if="audience.income.length === 0">{{$t('action.all')}}</span>
                      <v-chip v-else class="cbt-chip" color="white" v-for="(item, index) in audience.income" :key="index">{{item.name}}</v-chip>
                    </div>
                  </td>
                </tr>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.college')}} ({{audience.college.length}})</td>
                  <td class="text-xs-right url-post">
                    <div v-dragscroll="true" class="cbt-big-selected-data">
                      <span v-if="audience.college.length === 0">{{$t('action.all')}}</span>
                      <v-chip v-else class="cbt-chip" color="white" v-for="(item, index) in audience.college" :key="index">{{item.display_name}}</v-chip>
                    </div>
                  </td>
                </tr>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.company')}} ({{audience.company.length}})</td>
                  <td class="text-xs-right url-post">
                    <div v-dragscroll="true" class="cbt-big-selected-data">
                      <span v-if="audience.company.length === 0">{{$t('action.all')}}</span>
                      <v-chip v-else class="cbt-chip" color="white" v-for="(item, index) in audience.company" :key="index">{{item.display_name}}</v-chip>
                    </div>
                  </td>
                </tr>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.job')}} ({{audience.company.length}})</td>
                  <td class="text-xs-right url-post">
                    <div v-dragscroll="true" class="cbt-big-selected-data">
                      <span v-if="audience.job.length === 0">{{$t('action.all')}}</span>
                      <v-chip v-else class="cbt-chip" color="white" v-for="(item, index) in audience.job" :key="index">{{item.display_name}}</v-chip>
                    </div>
                  </td>
                </tr>
                <tr class="cbt-table-row">
                  <td>{{$t('audience.form.profile.hobby')}} ({{audience.interest.length}})</td>
                  <td class="text-xs-right url-post">
                    <div v-dragscroll="true" class="cbt-big-selected-data">
                      <span v-if="audience.interest.length === 0">{{$t('action.all')}}</span>
                      <v-chip v-else styl class="cbt-chip" color="white" v-for="(item, index) in audience.interest" :key="index">{{item.display_name}}</v-chip>
                    </div>
                  </td>
                </tr>
              </div>
            </v-flex>
          </v-layout>

        </v-tab-item>

        <v-tab :key="2" class="analytic-tab" style="text-transform: none">{{$t('audience.form.analytic')}}</v-tab>
        <v-tab-item class="analytic-content" :key="2" style="overflow: auto;height: 2000px;">
          <div v-if="audience.analyticStatus === 0" class="cbt-table-null-group">
            <div class="text-xs-center cbt-table-null-text">
              <span>{{$t('audience.form.analyticGuide')}}</span>
            </div>
            <div class="cbt-btn-group text-center cbt-table-null-btn">
              <v-btn class="cbt-btn accent-3 white ml-0" @click="analyticInProgress">
                <v-icon class="cbt-icon icon-bar-chart-2"></v-icon>
                {{$t('audience.action.analysis')}}
              </v-btn>
            </div>
          </div>

          <!--<div v-if="audience.analyticStatus === 1" class="cbt-table-null-group" style="top: 50%; left: 50%; width: 50%">-->
            <!--<div class="text-xs-center cbt-table-null-text">-->
              <!--<span>{{$t('audience.analytic.comebacklater')}}</span>-->
            <!--</div>-->
          <!--</div>-->

          <div v-if="audience.analyticStatus === 1" class="analytic-container" style="top: 30%; left: 50%; width: 50%">
            <v-tabs>

              <v-tab :ripple="false" :key="3" style="text-transform: none">
                <span>Biểu đồ</span>
              </v-tab>
              <v-tab-item :key="3">
                <v-card>
                  <analytic-round-chart></analytic-round-chart>
                </v-card>
              </v-tab-item>

              <v-tab :ripple="false" :key="4" style="text-transform: none">
                <span>Tổng Quan</span>
              </v-tab>
              <v-tab-item :key="4">
                <v-card>
                  <analytic-round-chart></analytic-round-chart>
                </v-card>
              </v-tab-item>

            </v-tabs>
          </div>

        </v-tab-item>
      </v-tabs>

      <v-dialog v-model="selectDialog" persistent max-width="442px">
        <audience-progress-analytic v-if="selectDialog" name="select" :audience="audience" @closeSelectDialog="closeSelectDialog" @selectAudienceDone="selectAudienceDone"></audience-progress-analytic>
      </v-dialog>

    </div>
  </v-card>
</template>

<script>
  import CBTCopy from '@/components/common/CBTCopy'
  import adAcountService from '@/api/adacount.api'
  import { mapGetters } from 'vuex'
  import AudienceProgressAnalytic from '@/components/page/audience-management/AudienceProgressAnalytic';
  import AudienceRoundChart from '@/components/page/audience-management/analytic-chart/AudienceRoundChart';

  // import audienceService from '@/api/audience.api'
  import i18n from '@/lang';
  import AudienceType from '@/const/type_audience'
  export default {
    components: {
      'cbt-copy': CBTCopy,
      'audience-progress-analytic': AudienceProgressAnalytic,
      'analytic-round-chart': AudienceRoundChart
    },
    props: ['audience', 'result'],
    data() {
      return {
        errorMessage: '',
        loading: false,
        audienceType: AudienceType,
        id: '',
        pending: false,
        fbAccount: '',
        listChannel: [
        ],
        listPostUrl: [
        ],
        selected: [],
        listResult: [],
        selectDialog: false,
        error: false,
        message: ''
      };
    },
    mounted() {
      this.pending = this.$store.state.auth.pending;
      if (this.audience && this.audience.id) {
        this.id = this.audience.id;
        this.getListAdAccount();
      }
      this.listPostUrl = this.audience.postUrls;
    },
    computed: {
      validate() {
      },
      ...mapGetters([
        'posts',
        'audience_valid',
        'post_ids',
        'total'
      ])
    },
    methods: {
      analyticInProgress() {
        this.selectDialog = true;
      },
      viewTime(time) {
        return moment(time).format('DD/MM/YYYY HH:mm:ss');
      },
      backToAdaccount() {
        this.$router.push('/adaccount');
      },
      getListAdAccount() {
        adAcountService.ListAccountById({
          id: this.id
        }).then((res) => {
          if (res.status === 200) {
            this.listChannel = res.data.data;
          }
        }).catch((err) => {
          console.log(err);
        })
      },
      viewColor(status) {
        switch (status) {
          case 1:
            return 'white';
          case 2:
            return 'alert';
          case 3:
            return 'success';
          case 4:
            return 'error';
        }
      },
      viewIcon(status) {
        switch (status) {
          case 1:
            return 'icon-clock';
          case 2:
            return 'icon-hourglass';
          case 3:
            return 'icon-check3';
          case 4:
            return 'icon-alert-triangle';
        }
      },
      viewDetailStatus(status) {
        switch (status) {
          case 1:
            return i18n.t('audience.status.notSubmit');
          case 2:
            return i18n.t('audience.status.onSubmiting');
          case 3:
            return i18n.t('audience.status.onSubmited');
          case 4:
            return i18n.t('audience.status.onError');
        }
      },
      viewError() {
        return i18n.t('audience.status.detailError')
      },
      viewFix() {
        return i18n.t('audience.status.fix')
      },
      closeDialog() {
        this.$emit('closeDialog', true);
      },
      confirmAction() {
        this.$emit('selectAudienceDone', this.selected);
      }
    }
  };
</script>

