<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header">
      <div class="cbt-dialog-title" v-if="!isLogin">{{$t('adAccount.dialog.createTitleFace')}}</div>
      <div
        class="cbt-dialog-title"
        style="width: 100%"
        v-if="isLogin && !listPages"
      >{{$t('adAccount.dialog.createTitleAcc')}}</div>
      <p
        class="cbt-dialog-desc"
        v-if="isLogin && !listPages"
      >{{$t('adAccount.dialog.createSubTitleAcc')}}</p>
      <div
        class="cbt-dialog-title"
        style="width: 100%"
        v-if="listPages"
      >{{$t('adAccount.dialog.createTitlePages')}}</div>
      <p class="cbt-dialog-desc" v-if="listPages">{{$t('adAccount.dialog.createSubTitlePages')}}</p>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>

    <div class="cbt-confirm-dialog-content" v-if="!isLogin">
      <!-- <v-layout row wrap>
      <v-flex class="cbt-label-group" xs3>
        <v-subheader class="cbt-label pull-right">
          {{$t('adAccount.dialog.label')}}
          <span class="require-icon">*</span>
        </v-subheader>
      </v-flex>
      <v-flex xs9>
        <v-menu class="cbt-select full-width" offset-y>
          <v-btn class="cbt-select-btn full-width" slot="activator">
            <span v-if="!channel" class="cbt-select-label">{{$t('adAccount.dialog.select')}}</span>
            <span v-if="channel" class="cbt-select-label">{{channel}}</span>
          </v-btn>
          <v-list class="users-action-menu">
            <v-list-tile @click="channel = item" class="users-action-item" v-for="(item, index) in list" :key="index">
              <v-list-tile-title class="users-action-menu-title">{{item}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <div class="pt-1 font-regular font-size-12 text-color-3"><span>{{$t('adAccount.dialog.content')}}</span></div>
      </v-flex>
      </v-layout>-->
      <div class="div-btn">
          <button class="circle-icon-fb" @click="loginFb">
            <img src="@/assets/image/facebook.png">
          </button>
          <div class="fb-text">
              {{$t('adAccount.dialog.connectFb')}}
          </div>
           <div class="fb-text-2">
              {{$t('adAccount.dialog.connectFbInfo')}}
          </div>
      </div>

      <facebook-login
        class="facebook-login"
        @loginDone="loginDone"
        :callFb="outdivclick"
      >{{$t('adAccount.dialog.actions.continues')}}</facebook-login>
    </div>

    <div class="cbt-confirm-dialog-content" v-if="isLogin && !listPages">
      <div class="adaccount-list">
        <div class="cbt-table-container">
          <template>
            <v-data-table :items="listData" v-model="listDataSelected" class="elevation-1" hide-actions hide-headers>
              <template slot="items" slot-scope="props">
                <td class="text-xs-left text-color-2">{{ props.item.name }}</td>
                <td class="text-xs-left text-color-2">{{ props.item.id }}</td>
                <td class="text-xs-left">
                    <v-switch
                      type="checkbox"
                      @click="props.selected = !props.selected"
                      v-model="props.selected"
                      color="success"
                      height="15px"
                      class="cbt-checkbox"
                    ></v-switch>
                </td>
              </template>
            </v-data-table>
          </template>
        </div>
      </div>
      <loading :show="loading"></loading>
    </div>

    <div class="cbt-confirm-dialog-content" v-if="listPages">
      <div class="adaccount-list">
        <div class="cbt-table-container">
          <template>
            <v-data-table :items="pagesData" class="elevation-1" v-model="listPageSelected" hide-actions hide-headers>
              <template slot="items" slot-scope="props">
                <td><img src="props.item.logoPage" alt=""></td>
                <td>{{ props.item.name }}
                  <a href="props.item.linkPage" target="_blank">{{ props.item.linkPage }}</a>
                </td>
                <td class="text-xs-right">{{ props.item.id }}</td>
                <td class="text-xs-right">
                    <v-switch
                      type="checkbox"
                      @click="props.selected = !props.selected"
                      v-model="props.selected"
                      color="success"
                      height="15px"
                      class="cbt-checkbox"
                      v-bind:id="props.item.pageId"
                    ></v-switch>
                </td>
              </template>
            </v-data-table>
          </template>
        </div>
      </div>
      <loading :show="loading"></loading>
    </div>

    <v-card-actions class="cbt-dialog-footer text-xs-right" v-if="!listPages">
      <div class="cbt-btn-group">
        <v-btn
          class="cbt-btn accent-semi"
          @click="redirectChoosePage"
        >{{$t('adAccount.dialog.actions.cancel')}}</v-btn>
        <v-btn
          class="cbt-btn accent-main"
          :disabled="!isLogin"
          @click="addChannel"
        >{{$t('adAccount.dialog.actions.continues')}}</v-btn>
      </div>
    </v-card-actions>

    <v-card-actions class="cbt-dialog-footer text-xs-right" v-if="listPages">
      <div class="cbt-btn-group">
        <v-btn
          class="cbt-btn accent-semi"
          @click="closeDialog"
        >{{$t('adAccount.dialog.actions.cancel')}}</v-btn>
        <v-btn
          class="cbt-btn accent-main"
          :disabled="!isLogin"
          @click="addChannelDone"
        >{{$t('adAccount.dialog.actions.continues')}}</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import FacebookLogin from '@/components/common/CBTFacebook.vue';
import adAcountService from '@/api/adacount.api.js';
import AuthService from '@/common/auth.service.js'

export default {
  components: {
    'facebook-login': FacebookLogin
  },
  props: ['type', 'value', 'doThis', 'action', 'object'],
  data() {
    return {
      channel: 'Facebook',
      selected: false,
      loading: true,
      listData: [],
      listDataSelected: [],
      pagesData: [],
      listPageSelected: [],
      id: '',
      pageId: '',
      list: ['Facebook'],
      fbToken: '',
      isLogin: false,
      createDialog: false,
      listPages: false,
      outdivclick: false
    };
  },
  computed: {
  },
  watch: {
    data: function(newVal, oldVal) {
      this.addAcc();
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog', true);
    },
    loginFb() {
      this.outdivclick = true
    },
    loginDone(data) {
      this.fbToken = data.fbToken;
      this.isLogin = true;
      adAcountService
        .AdBusiness({token: this.fbToken})
        .then(({ data }) => {
          this.loading = false;
          this.listData = data.data;
        })
        .catch(e => {
          this.error = true;
          this.loading = false;
        });
    },
    addChannel() {
      AuthService.RefreshToken()
      this.listPages = true;
      adAcountService
        .AddAccount(this.listDataSelected)
        .then(({ data }) => {})
        .catch(e => {
          this.error = true;
        });
      this.loading = true;
      adAcountService
        .ListAddPages({ token: this.fbToken })
        .then(({ data }) => {
          this.loading = false;
          this.pagesData = data.data;
        })
        .catch(e => {
          this.error = true;
          this.loading = false;
        });
    },
    addChannelDone() {
      AuthService.RefreshToken()
      adAcountService
        .AddPages(this.listPageSelected)
        .then(({ data }) => {
          this.closeDialog();
          this.$emit('closeSuccess', true);
        })
        .catch(e => {
          this.error = true;
        });
    },
    redirectChoosePage() {
      AuthService.RefreshToken()
      if (!this.isLogin) {
        this.closeDialog()
      }

      this.listPages = true;
      adAcountService
        .ListAddPages({ token: this.fbToken })
        .then(({ data }) => {
          this.loading = false;
          this.pagesData = data.data;
        })
        .catch(e => {
          this.error = true;
          this.loading = false;
        });
    }
  }
};
</script>
