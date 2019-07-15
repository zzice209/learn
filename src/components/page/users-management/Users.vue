<template>
  <div>
    <div class="title-group">
      <v-layout row wrap>
        <div class="page-title">
          <span>{{$t('users.title')}}</span>
        </div>
      </v-layout>
    </div>
    <div v-if="pending" class="cbt-alert alert-error mt-3 ml-3 mr-3">
      <v-layout row wrap>
        <v-icon class="cbt-icon font-size-14 color-warning icon-alert-triangle mr-2"></v-icon>
        <span class="text-line font-regular font-size-12 color-warning">{{$t('account.noPermission')}}</span>
      </v-layout>
    </div>
    <div class="users">
      <v-container class="users-container full-width" v-if="typing || search || list.length > 0">
        <v-layout row class="mb-4">
          <v-tooltip :content-class="selected.length === 0?'cbt-tooltip bottom show':'cbt-tooltip bottom hide'" bottom>
            <v-menu :disabled="selected.length === 0 || actionList.length === 0" class="cbt-menu" offset-y slot="activator">
              <v-btn class="cbt-select-btn" slot="activator">
                <span class="cbt-select-label">{{$t('users.select.label')}}</span>
              </v-btn>
              <v-list class="users-action-menu">
                <v-list-tile class="users-action-item" v-for="(item, index) in actionList" :key="index" @click="item.action(item.doThis, item.label)">
                  <v-list-tile-title class="users-action-menu-title">{{$t(item.title)}}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <span>{{$t('tooltip.pleaseSelect', {type: $t('type.account')})}}</span>
          </v-tooltip>
          <div class="cbt-search ml-2">
            <v-text-field class="cbt-textfield" solo append-icon="icon-search3" @click:append="searchList" @keydown.enter="searchList" @change="searchList" v-model="search" :placeholder="$t('select.search')"></v-text-field>
          </div>
          <div class="spacer"></div>
          <div class="cbt-btn-group pull-right">
            <v-btn class="cbt-btn ml-2 accent-main" @click="addUsers">
              <v-icon class="cbt-icon icon-plus2"></v-icon>
              {{$t('users.add')}}
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
                <th v-for="(item,index) in props.headers" :key="index" :class="item.style?item.style:''">{{$t(item.text)}}</th>
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
                  <v-tooltip bottom v-if="item.type==='text' && item.prop === 'phone'" :disabled="tooltips['phone'][props.item.id] === true">
                    <span v-if="item.type==='text' && item.prop === 'phone'" v-bind:ref="'elCpphone' + props.item.id" slot="activator" @mouseover="mouseOverCp(props.item, 'phone')">{{props.item[item.prop]?props.item[item.prop]:''}}</span>
                    <span>{{props.item[item.prop]?props.item[item.prop]:''}}</span>
                  </v-tooltip>

                  <v-tooltip bottom v-if="item.type==='text' && item.prop === 'email'" :disabled="tooltips['email'][props.item.id] === true">
                    <span v-if="item.type==='text' && item.prop === 'email'" v-bind:ref="'elCpemail' + props.item.id" slot="activator" @mouseover="mouseOverCp(props.item, 'email')">{{props.item[item.prop]?props.item[item.prop]:''}}</span>
                    <span>{{props.item[item.prop]?props.item[item.prop]:''}}</span>
                  </v-tooltip>

                  <span v-if="item.type==='text' && item.prop !== 'company' && item.prop !== 'email' && item.prop !== 'phone'">{{props.item[item.prop]?props.item[item.prop]:''}}</span>
                  <div class="cbt-table-avatar-group" v-if="item.type==='avatar'">
                    <img class="cbt-avatar cbt-table-avatar" v-if="avatar" src="@/assets/image/kuon ava.jpg">
                    <img class="cbt-avatar cbt-table-avatar" v-if="!avatar" src="@/assets/image/empty ava.png">
                    <v-tooltip bottom :disabled="tooltips['name'][props.item.id] === true">
                      <span class="cbt-table-avatar-text" v-bind:ref="'elCpname' + props.item.id" slot="activator" @mouseover="mouseOverCp(props.item, 'name')">{{props.item[item.prop]?props.item[item.prop]:''}}</span>
                      <span>{{props.item[item.prop]?props.item[item.prop]:''}}</span>
                    </v-tooltip>
                  </div>
                  <span v-if="item.type==='status'">
                    <v-icon
                      :class="{'dot color-alert': props.item[item.prop]=== 1, 'dot color-success': props.item[item.prop]=== 2,'dot color-warning': props.item[item.prop]=== 3, 'dot text-color-4': props.item[item.prop]=== 4}"
                    >fiber_manual_record</v-icon>
                    <span class="cbt-status-label">{{props.item[item.prop] | status('user')}}</span>
                  </span>
                </td>
                <td class="width28">
                  <div class="cbt-table-btn-group cbt-btn-group text-right" v-if="props.item['status'] === 2">
                    <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="editUsers(props.item['username'])">
                      <v-icon class="cbt-icon icon-edit-2"></v-icon>
                      <span class="cbt-select-value">{{$t('action.edit')}}</span>
                    </v-btn>
                    <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="needConfirm('suspend', 'action.stop', props.item)" v-if="props.item.id !== user.id">
                      <v-icon class="cbt-icon icon-pause-circle"></v-icon>
                      <span class="cbt-select-value">{{$t('action.stop')}}</span>
                    </v-btn>
                    <!-- <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="deleteUsers(props.item)" v-if="props.item.id !== user.id">
                      <v-icon class="cbt-icon icon-trash-2"></v-icon>
                      <span class="cbt-select-value">{{$t('action.delete')}}</span>
                    </v-btn> -->
                  </div>
                  <div class="cbt-table-btn-group cbt-btn-group text-right" v-if="props.item['status'] === 4">
                    <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="editUsers(props.item['username'])">
                      <v-icon class="cbt-icon icon-edit-2"></v-icon>
                      <span class="cbt-select-value">{{$t('action.edit')}}</span>
                    </v-btn>
                    <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="needConfirm('active', 'action.run', props.item)" v-if="props.item.id !== user.id">
                      <v-icon class="cbt-icon icon-play-circle"></v-icon>
                      <span class="cbt-select-value">{{$t('action.run')}}</span>
                    </v-btn>
                    <!-- <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="deleteUsers(props.item)" v-if="props.item.id !== user.id">
                      <v-icon class="cbt-icon icon-trash-2"></v-icon>
                      <span class="cbt-select-value">{{$t('action.delete')}}</span>
                    </v-btn> -->
                  </div>
                  <div class="cbt-table-btn-group cbt-btn-group text-right" v-if="props.item['status'] === 3">
                    <!-- <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="deleteUsers(props.item)" v-if="props.item.id !== user.id">
                      <v-icon class="cbt-icon icon-trash-2"></v-icon>
                      <span class="cbt-select-value">{{$t('action.delete')}}</span>
                    </v-btn> -->
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
                  <v-btn @click="changePage(page.number-1)" :disabled="page.number == 1" class="cbt-btn cbt-navigation-button accent-outline">
                    <v-icon class="cbt-icon icon-chevron-left"></v-icon>
                  </v-btn>
                  <v-btn @click="changePage(page.number+1)" :disabled="page.number == page.totalPage" class="cbt-btn cbt-navigation-button accent-outline">
                    <v-icon class="cbt-icon icon-chevron-right"></v-icon>
                  </v-btn>
                </div>
              </v-layout>
            </div>
          </div>
        </v-layout>
      </div>
      <loading :show="loading"></loading>
      <v-container class="users-container-new full-width" v-if="!loading && !typing && !search && list.length == 0">
        <div class="cbt-table-null-group">
          <div class="text-xs-center cbt-table-null-text">{{$t('users.table.null')}}</div>
          <div class="text-xs-center cbt-table-null-text">{{$t('users.table.null2')}}</div>
          <div class="cbt-btn-group text-center cbt-table-null-btn">
            <v-btn class="cbt-btn accent-main ml-0" @click="addUsers">
              <v-icon class="cbt-icon icon-plus2"></v-icon>
              {{$t('users.addSecond')}}
            </v-btn>
          </div>
        </div>
      </v-container>
      <v-dialog v-model="createDialog" persistent max-width="688px">
        <users-form v-if="createDialog" name="create" @closeDialog="closeDialog" @closeSuccess="closeSuccess" @forBidden="forBidden"></users-form>
      </v-dialog>
      <v-dialog v-model="editDialog" persistent max-width="688px">
        <users-form v-if="editDialog" name="edit" :username="editUsername" @closeDialog="closeDialog" @closeSuccess="closeSuccess"></users-form>
      </v-dialog>
      <v-dialog v-model="deleteDialog" persistent max-width="699px">
        <delete-content v-if="deleteDialog" :type="'type.account'" :value="deleteName" @confirmDelete="confirmDelete" @closeDialog="closeDialog"></delete-content>
      </v-dialog>
      <v-dialog v-model="confirmDialog" persistent max-width="699px">
        <confirm-content
          v-if="confirmDialog"
          :type="'type.account'"
          :doThis="confirm.doThis"
          :action="confirm.action"
          :value="confirm.value"
          :object="confirm.object"
          @confirmAction="confirmAction"
          @closeDialog="closeDialog"
        ></confirm-content>
      </v-dialog>
      <v-alert v-model="alert" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-check3">
        <span v-if="doing === 'create'">{{$t('alert.success', {'type': $t('type.account'), 'action': $t('action.create')})}}</span>
        <span v-if="doing === 'update'">{{$t('alert.success', {'type': $t('type.infomation'), 'action': $t('action.update')})}}</span>
        <span v-if="doing === 'active'">{{$t('alert.success', {'type': $t('type.account'), 'action': $t('action.run')})}}</span>
        <span v-if="doing === 'suspend'">{{$t('alert.success', {'type': $t('type.account'), 'action': $t('action.stop')})}}</span>
      </v-alert>
      <v-alert v-model="forbiddenDialog" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-x">
        <span>{{$t('alert.forbidden')}}</span>
      </v-alert>
    </div>
  </div>
</template>

<script>
import HEADERS from '@/const/headers.js'
import PROPERTIES from '@/const/properties.js'
import UsersForm from '@/components/page/users-management/UsersForm'
import DeleteDialog from '@/components/page/dialog/DeleteDialog'
import ConfirmDialog from '@/components/page/dialog/ConfirmDialog'
import { mapGetters } from 'vuex'
import userService from '@/api/user.api'
import {CHANGE_TOOLTIP, RESET_TOOLTIP_USER_LIST} from '../../../store/action.type';
export default {
  components: {
    'users-form': UsersForm,
    'delete-content': DeleteDialog,
    'confirm-content': ConfirmDialog
  },
  data() {
    return {
      permission: {},
      pending: false,
      forbiddenDialog: false,
      page: {
        size: 10,
        number: 1,
        total: 1,
        totalPage: 1,
        sortType: '',
        sortBy: ''
      },
      size: [5, 10, 20, 50, 100],
      alert: false,
      typing: false,
      search: '',
      doing: '',
      editUsername: '',
      createDialog: false,
      loading: false,
      editDialog: false,
      deleteDialog: false,
      confirmDialog: false,
      confirm: {
        doThis: '',
        action: '',
        value: '',
        object: {}
      },
      user: {},
      deleteName: '',
      deleteUsername: '',
      headers: HEADERS.users,
      properties: PROPERTIES.users,
      avatar: false,
      list: [],
      isSelectAll: false,
      selected: [],
      filterActions: [],
      items: [
        {
          type: 'suspend',
          title: 'users.action.stop',
          label: 'action.stop',
          doThis: 'suspendAll',
          action: this.needConfirm
        },
        {
          type: 'active',
          title: 'users.action.run',
          label: 'action.run',
          doThis: 'activeAll',
          action: this.needConfirm
        // },
        // {
        //   type: 'delete',
        //   title: 'users.action.delete',
        //   label: 'action.delete',
        //   doThis: 'deleteAll',
        //   action: this.needConfirm
        }
      ]
    }
  },
  watch: {
    search(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.typing = true
      }
    },
    selected(newVal, oldVal) {
      if (this.selected.length !== this.list.length) {
        this.isSelectAll = false
      } else {
        this.isSelectAll = true
      }
    }
  },
  mounted() {
    this.user = this.$store.state.auth.user
    this.permission = this.$store.state.auth.permission
    this.pending = this.$store.state.auth.pending
    if (this.permission.USER_MANAGEMENT === '1') {
      this.loadList()
    } else {
      this.$router.push({
        name: '403'
      })
    }
  },
  computed: {
    ...mapGetters([
      'tooltips'
    ]),
    actionList() {
      if (this.selected.length === 0) {
        return this.items
      } else {
        let result = Object.assign([], this.items)
        for (let i = 0; i < this.selected.length; i++) {
          switch (this.selected[i].status) {
            case 1:
              result = result.filter(item => {
                return item.type === 'all'
              })
              break
            case 2:
              result = result.filter(item => {
                return item.type !== 'active'
              })
              break
            case 3:
              result = result.filter(item => {
                return item.type === 'delete'
              })
              break
            case 4:
              result = result.filter(item => {
                return item.type !== 'suspend'
              })
              break
          }
        }
        return (this.filterActions = result)
      }
    }
  },
  methods: {
    mouseOverCp(value, type) {
      var elName = 'elCp' + type + value.id
      var el = this.$refs[elName][0]
      if (this.isOverflowing(el) === true) {
        this.$store.dispatch(CHANGE_TOOLTIP, {
          key: value.id,
          value: false,
          type: type
        })
      } else {
        this.$store.dispatch(CHANGE_TOOLTIP, {
          key: value.id,
          value: true,
          type: type
        })
        this.$forceUpdate()
      }
    },
    isOverflowing(element) {
      return (element.scrollWidth > element.offsetWidth)
    },
    changePage(number) {
      this.page.number = number
      if (this.page.number > 0 && this.page.number <= this.page.totalPage) {
        this.$store.dispatch(RESET_TOOLTIP_USER_LIST)
        this.loadList()
      }
    },
    changePageSize(number) {
      this.page.size = number
      this.page.number = 1
      this.loadList()
    },
    searchList() {
      this.changePageSize(this.page.size);
    },
    loadList() {
      this.loading = true
      userService
        .ListUser({
          page: this.page,
          search: this.search.trim()
        })
        .then(({ data }) => {
          this.list = data.data.listUser
          this.page.total = data.data.total
          this.page.totalPage = Math.ceil(this.page.total / this.page.size)
          this.userEdit = Object.assign({}, data.data)
          this.selected = []
          this.isSelectAll = false
          this.selected = []
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    selectAll() {
      if (this.isSelectAll) {
        this.selected = this.list.slice()
      } else {
        this.selected = []
      }
    },
    addUsers() {
      this.createDialog = true
    },
    editUsers(username) {
      this.editUsername = username
      this.editDialog = true
    },
    active(user) {
      this.loading = true
      userService
        .UpdateStatus({
          username: user.username,
          status: 2
        })
        .then(({ data }) => {
          this.alertResult('active')
          this.loadList()
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    suspend(user) {
      this.loading = true
      userService
        .UpdateStatus({
          username: user.username,
          status: 4
        })
        .then(({ data }) => {
          this.alertResult('suspend')
          this.loadList()
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },

    activeAll() {
      for (let i = 0; i < this.selected.length; i++) {
        this.active(this.selected[i])
      }
    },
    suspendAll() {
      for (let i = 0; i < this.selected.length; i++) {
        this.suspend(this.selected[i])
      }
    },
    deleteAll() {
      for (let i = 0; i < this.selected.length; i++) {
        this.deleteUsers(this.selected[i])
      }
    },
    needConfirm(doThis, action, value, object) {
      this.confirm.action = action
      this.confirm.doThis = doThis
      if (value) {
        this.confirm.value = value.username
        this.confirm.object = value
      } else {
        this.confirm.value = this.selected.length
      }
      this.confirmDialog = true
    },
    confirmAction(data) {
      this.confirmDialog = false
      switch (data.doThis) {
        case 'suspend':
          this.suspend(data.object)
          break
        case 'active':
          this.active(data.object)
          break
        case 'suspendAll':
          this.suspendAll()
          break
        case 'activeAll':
          this.activeAll()
          break
        case 'deleteAll':
          this.deleteAll()
          break
      }
    },
    closeDialog() {
      this.createDialog = false

      this.editId = 0
      this.editDialog = false

      this.confirmDialog = false

      this.deleteDialog = false
      this.deleteName = ''
      this.deleteId = 0
    },
    closeSuccess(data) {
      this.createDialog = false

      this.editId = 0
      this.editDialog = false

      this.deleteDialog = false
      this.deleteName = ''
      this.deleteId = 0

      this.alertResult(data.type)
      this.loadList()
    },
    deleteUsers(item) {
      this.deleteName = item.email
      this.deleteUsername = item.username
      this.deleteDialog = true
    },
    confirmDelete() {
      this.deleteId = 0
      this.deleteName = ''
      this.deleteDialog = false
    },
    alertResult(type) {
      this.alert = true
      this.doing = type
      setTimeout(() => {
        this.alert = false
      }, 2000)
    },
    forBidden() {
      this.closeDialog()
      this.forbiddenDialog = true
    }
  },
  name: 'Users'
}
</script>
