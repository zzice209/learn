<template>
  <div>
    <div v-if="pending" class="cbt-alert alert-error mt-3 ml-3 mr-3">
      <v-layout row wrap>
        <v-icon class="cbt-icon font-size-14 color-warning icon-alert-triangle mr-2"></v-icon>
        <span class="text-line font-regular font-size-12 color-warning">{{$t('account.noPermission')}}</span>
      </v-layout>
    </div>
    <div class="title-group">
      <v-layout row wrap>
        <div class="page-title">
          <span>{{$t('adAccount.title')}}</span>
        </div>
      </v-layout>
    </div>
    <div class="ad-account">
      <div class="cbt-btn-group pull-right" v-if="(listpages.length > 0 || list.length > 0) && !pending">
        <v-btn class="cbt-btn ml-2 accent-main" @click="addChannel">
          <v-icon class="cbt-icon icon-plus2"></v-icon>
          {{$t('adAccount.add')}}
        </v-btn>
      </div>
      <v-tabs color="white" dark slider-color="tabs-color-success" v-model="tabs">
        <v-tab :key="0" ripple v-if="list.length > 0">
          {{$t('adAccount.tab.account')}}
        </v-tab>
        <v-tab-item :key="0" v-if="list.length > 0">
          <v-alert v-model="alert" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-check3">
            {{$t('users.dialog.refresh')}}
          </v-alert>
          <v-alert v-model="alertErrorFromServer" type="error" dismissible class="cbt-alert fixed-popup">
            {{alertErrorFromServerMessage}}
          </v-alert>
          <v-container class="ad-account-container full-width" v-if="!loading && list.length > 0">
            <div class="cbt-table-container">
              <v-data-table item-key="id" class="cbt-table ad-account-text" :headers="headers" :items="list" hide-actions>
                <template slot="headers" slot-scope="props">
                  <tr class="cbt-table-header">
                    <th v-for="(item,index) in props.headers" :key="index" :class="item.style?item.style:''">{{$t(item.text)}}</th>
                  </tr>
                </template>
                <template slot="items" slot-scope="props">
                  <tr class="cbt-table-row">
                    <td class="pl-0 width20 text-left">{{ props.item.name }}</td>
                    <td class="width20 text-left">{{ props.item.id }}</td>
                    <td class="width20 text-left">
                      <span v-if="props.item.status === 5">
                        <v-icon class="dot color-warning">fiber_manual_record</v-icon>
                        <span class="cbt-status-label">Cần cấp lại quyền</span>
                      </span>
                      <span v-if="props.item.status === 1">
                        <v-icon class="dot color-success">fiber_manual_record</v-icon>
                        <span class="cbt-status-label">Đang hoạt động</span>
                      </span>
                      <span v-if="props.item.status === 2">
                        <v-icon class="dot color-alert">fiber_manual_record</v-icon>
                        <span class="cbt-status-label">Đang ngừng</span>
                      </span>
                    </td>
                    <td class="width40 text-right">
                      <div class="cbt-table-btn-group cbt-btn-group text-right">
                        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" v-if="props.item.status === 2  && !pending" @click="changeActiveAdAccount(props.item.id, 1)">
                          <v-icon class="cbt-icon icon-play-circle"></v-icon>
                          <span class="cbt-select-value">{{$t('action.play')}}</span>
                        </v-btn>
                        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" v-if="props.item.status === 1  && !pending" @click="changeActiveAdAccount(props.item.id, 2)">
                          <v-icon class="cbt-icon icon-pause-circle"></v-icon>
                          <span class="cbt-select-value">{{$t('action.stop')}}</span>
                        </v-btn>
                        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" v-if="!pending" @click="openFbLoginDialog(props.item)">
                          <v-icon class="cbt-icon icon-refresh-cw"></v-icon>
                          <span class="cbt-select-value">{{$t('action.adjourn')}}</span>
                        </v-btn>
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
        </v-tab-item>
        <v-tab :key="1" ripple v-if="listpages.length > 0 && checkInitTabRendered">
          {{$t('adAccount.tab.fanpage')}}
        </v-tab>
        <v-tab-item :key="1" v-if="listpages.length > 0 && checkInitTabRendered">
          <v-alert v-model="alert" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-check3">
            {{$t('users.dialog.refresh')}}
          </v-alert>
          <v-container class="ad-account-container full-width ad-account-container-pages" v-if="!loading && listpages.length > 0">
            <div class="cbt-table-container">
              <v-data-table item-key="id" class="cbt-table ad-account-text" :headers="headersPages" :items="listpages" hide-actions>
                <template slot="headers" slot-scope="props">
                  <tr class="cbt-table-header">
                    <th v-for="(item,index) in props.headers" :key="index" :class="item.style?item.style:''">{{$t(item.text)}}</th>
                  </tr>
                </template>
                <template slot="items" slot-scope="props">
                  <tr class="cbt-table-row">
                    <td class="pl-0 width20 text-left">
                      <span class="logo-table-adv">
                        <img v-bind:src="props.item.logoPage" alt>
                      </span>
                      <span class="cbt-status-label">{{ props.item.name }}</span>
                    </td>
                    <td class="width20 text-left"><a :href="props.item.linkPage" target=”_blank”>{{ props.item.linkPage }}</a></td>
                    <td class="width20 text-left">
                      <span v-if="props.item.status === 5">
                        <v-icon class="dot color-warning">fiber_manual_record</v-icon>
                        <span class="cbt-status-label">Cần cấp lại quyền</span>
                      </span>
                      <span v-if="props.item.status === 1">
                        <v-icon class="dot color-success">fiber_manual_record</v-icon>
                        <span class="cbt-status-label">Đang hoạt động</span>
                      </span>
                      <span v-if="props.item.status === 2">
                        <v-icon class="dot color-alert">fiber_manual_record</v-icon>
                        <span class="cbt-status-label">Đang ngừng</span>
                      </span>
                    </td>
                    <td class="width40 text-right">
                      <div class="cbt-table-btn-group cbt-btn-group text-right">
                        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" v-if="props.item.status === 2" @click="changeActivePage(props.item.id, 1)">
                          <v-icon class="cbt-icon icon-play-circle"></v-icon>
                          <span class="cbt-select-value">{{$t('action.play')}}</span>
                        </v-btn>
                        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" v-if="props.item.status === 1" @click="changeActivePage(props.item.id, 2)">
                          <v-icon class="cbt-icon icon-pause-circle"></v-icon>
                          <span class="cbt-select-value">{{$t('action.stop')}}</span>
                        </v-btn>
                        <v-btn :ripple="false" class="cbt-btn ml-2 accent-outline" @click="openFbLoginDialog(props.item.id)">
                          <v-icon class="cbt-icon icon-refresh-cw"></v-icon>
                          <span class="cbt-select-value">{{$t('action.adjourn')}}</span>
                        </v-btn>
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
        </v-tab-item>
      </v-tabs>
      <loading :show="loading"></loading>
      <v-container class="ad-account-container-new full-width" v-if="!loading && list.length === 0 && listpages.length === 0 && !pending">
        <div class="cbt-table-null-group">
          <div class="text-xs-center cbt-table-null-text">{{$t('adAccount.table.null')}}</div>
          <div class="cbt-btn-group text-center cbt-table-null-btn">
            <v-btn class="cbt-btn accent-main ml-0" @click="addChannel">
              <v-icon class="cbt-icon icon-plus2"></v-icon>
              {{$t('adAccount.addSecond')}}
            </v-btn>
          </div>
        </div>
      </v-container>
      <v-dialog v-model="createDialog" persistent max-width="688px">
        <ad-account-form v-if="createDialog" name="create" @closeDialog="closeDialog" @closeSuccess="closeSuccess"></ad-account-form>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import HEADERS from '@/const/headers.js'
import PROPERTIES from '@/const/properties.js'
import AdAccountList from '@/components/page/ad-account-management/AdAccountList'
import ConfirmDialog from '@/components/page/dialog/ConfirmDialog'
import adAcountService from '@/api/adacount.api.js'
import AuthService from '@/common/auth.service.js'
const STATUS_ADACCOUNT = {
  ACTIVE: 1,
  STOP: 2,
  TOKEN_EXPIRE: 5
}
export default {
  components: {
    'ad-account-form': AdAccountList,
    'confirm-content': ConfirmDialog
  },
  data() {
    return {
      alert: false,
      alertErrorFromServer: false,
      alertErrorFromServerMessage: '',
      permission: {},
      loading: false,
      createDialog: false,
      confirmDialog: false,
      headers: HEADERS.adAccount,
      headersPages: HEADERS.adAccountPages,
      properties: PROPERTIES.adAccount,
      list: [],
      listpages: [],
      fbToken: '',
      pending: false,
      checkInitTabRendered: false,
      tabs: 0
    }
  },
  mounted() {
    this.permission = this.$store.state.auth.permission
    this.pending = this.$store.state.auth.pending
    if (this.permission.AD_ACCOUNT_VIEW === '1') {
      this.loadList()
      this.loadListPages()
    } else {
      this.$router.push({
        name: '403'
      })
    }
  },
  computed: {},
  methods: {
    openFbLoginDialog(item) {
      window.FB.getLoginStatus((response) => {
        if (response.status !== 'connected') {
          window.FB.login((response) => {
            if (response.authResponse) {
              this.fbToken = response.authResponse.accessToken
              this.needRefresh = false
              this.updateAccountFb(this.fbToken, item)
            }
          })
        } else {
          const token = response.authResponse.accessToken
          this.updateAccountFb(token, item)
        }
      })
    },
    updateAccountFb(token, item) {
      adAcountService
        .UpdateAccountFb({
          token: token,
          id: item.id
        })
        .then((res) => {
          console.log(res.data.statusCode)
          if (res.data.statusCode !== 0) {
            if (item.status !== STATUS_ADACCOUNT.ACTIVE) {
              item.status = STATUS_ADACCOUNT.TOKEN_EXPIRE
            }
            this.alertErrorFromServer = true
            this.alertErrorFromServerMessage = res.data.message
          } else {
            item.status = STATUS_ADACCOUNT.ACTIVE
            this.alert = true
          }
          setTimeout(() => {
            this.alert = false
            this.alertErrorFromServer = false
          }, 1500)
        })
        .catch(e => {
          this.error = true
          setTimeout(() => {
            this.alert = false
          }, 1500)
          // this.loading = false
        })
    },
    changeActivePage(id, status) {
      AuthService.RefreshToken()
      adAcountService
        .ChangeActivePage({
          id: id,
          status: status
        }).then(({
          data
        }) => {
          if (data.status === 200 && data.data === null) {
            this.loadListPages()
          }
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    changeActiveAdAccount(id, status, type) {
      AuthService.RefreshToken()
      adAcountService
        .ChangeActiveAccount({
          id: id,
          status: status
        }).then(({
          data
        }) => {
          if (data.status === 200 && data.data === null) {
            this.loadList()
          }
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    loadList() {
      this.loading = true
      adAcountService
        .ListBusiness({
        })
        .then(({
          data
        }) => {
          if (this.pending) {
            this.list = []
          } else {
            this.list = data.data
          }
          this.loading = false
          // Bug: cannot know what tag is loaded first
          this.checkInitTabRendered = true
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    loadListPages() {
      adAcountService
        .ListPagesBusiness({
        })
        .then(({
          data
        }) => {
          if (this.pending) {
            this.listpages = []
          } else {
            this.listpages = data.data
          }
        })
        .catch(e => {
          this.error = true
        })
    },
    addChannel() {
      AuthService.RefreshToken()
      this.createDialog = true
    },
    closeDialog() {
      this.createDialog = false
      this.confirmDialog = false
    },
    closeSuccess() {
      this.closeDialog();
      this.loadList();
      this.loadListPages();
    }
  },
  name: 'AdAccount'
}
</script>
