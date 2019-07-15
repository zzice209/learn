<template>
  <div class="sidebar-container">
    <div class="sidebar-toggle click-able" :class="{'show': show}" @click="show = !show"></div>
    <v-navigation-drawer value="true" class="sidebar" v-model="show" persistent :mini-variant="miniVariant" :clipped="clipped" fixed app width="224">
      <div class="sidebar-top text-xs-center">
        <img class="sidebar-logo" src="@/assets/image/CyberTargeting Logo White.png">
      </div>
      <div class="sidebar-user-profile-group">
        <div class="user-profile-avatar-group">
          <img class="user-profile-avatar" v-if="avatar" src="@/assets/image/kuon ava.jpg">
          <img class="user-profile-avatar" v-if="!avatar" src="@/assets/image/empty ava.png">
        </div>
        <div class="user-profile-detail">
          <div class="user-profile-username">{{user.name}}</div>
          <div class="user-profile-usertype">
            {{$t(role)}}
            <span class="color-warning" v-if="status ==='pending'">({{status}})</span>
            <span class="color-success" v-if="status ==='active'">({{status}})</span>
            <span class="color-warning" v-if="status ==='rejected'">({{status}})</span>
            <span class="color-warning" v-if="status ==='suspended'">({{status}})</span>
          </div>
        </div>
      </div>
      <v-list class="sidebar-list">
        <v-list-tile class="sidebar-menu" v-if="permission[item.permission] == '1'" :to="{name: permission[item.permission] == '1'?item.name:'403'}" exact v-for="(item, i) in items" :key="i">
          <!-- <v-list-tile class="sidebar-menu" :to="{name: item.name}" exact v-for="(item, i) in items" :key="i"> -->
          <v-list-tile-action class="sidebar-menu-item-icon">
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="sidebar-menu-item-content">
            <v-list-tile-title v-text="$t(item.title)"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div class="sidebar-bottom">
        <v-btn class="cbt-btn accent-outline font-semi" @click="logout">{{$t('sidebar.logout')}}</v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import MENU from '@/const/menu.js';
import userService from '@/api/user.api';
import router from '@/router';
import store from '@/store'
import {
  LOG_OUT
} from '../../store/action.type'

export default {
  data() {
    return {
      show: true,
      clipped: false,
      fixed: false,
      items: MENU,
      miniVariant: false,
      avatar: false,
      permission: {},
      user: {},
      title: 'Vuetify.js'
    };
  },
  computed: {
    role() {
      switch (this.user.role) {
        case 1:
          return 'role.admin';
        case 2:
          return 'role.subAdmin';
        case 3:
          return 'role.user';
        case 4:
          return 'role.subUser';
      }
    },
    status() {
      switch (this.user.status) {
        case 1:
          return 'pending';
        case 2:
          return 'active';
        case 3:
          return 'rejected';
        case 4:
          return 'suspended';
      }
    }
  },
  mounted() {
    userService
      .Profile()
      .then(({
        data
      }) => {
        this.loading = false;
        this.user = data.data;
        let arrayPermission = data.data.permission.split('');
        this.permission.AUDIENCE_VIEW = arrayPermission[0];
        this.permission.AUDIENCE_CREATE = arrayPermission[1];
        this.permission.AUDIENCE_EDIT = arrayPermission[2];
        this.permission.DASHBOARD_VIEW = arrayPermission[3];
        this.permission.DASHBOARD_DOWN = arrayPermission[4];
        this.permission.TRACKING_VIEW = arrayPermission[5];
        this.permission.TRACKING_CREATE = arrayPermission[6];
        this.permission.USER_MANAGEMENT = arrayPermission[7];
        this.permission.LEAD_VIEW = arrayPermission[8];
        this.permission.LEAD_DOWN = arrayPermission[9];
        this.permission.AD_ACCOUNT_VIEW = '1';
      })
      .catch(e => {
        this.error = true;
        this.loading = false;
      });
  },
  methods: {
    logout() {
      store.dispatch(LOG_OUT);
      router.push('/');
    },
    redirectTo(item) {
      if (this.permission[item.permission] === 1) {
        this.$router.push({
          name: item.name
        });
      }
    }
  },
  name: 'Sidebar'
};
</script>
