// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ApiService from '@/common/api.service'
import VueDragscroll from 'vue-dragscroll'
import * as filters from '@/filters'
import store from './store'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/icon/style.css'
import '@/assets/css/main.scss'
import i18n from './lang'
import Vuelidate from 'vuelidate'
import * as d3 from 'd3'
import HighchartsVue from 'highcharts-vue'
import VueHighcharts from 'vue-highcharts';
import CBTTable from '@/components/common/CBTTable.vue'
import CBTLoading from '@/components/common/CBTLoading.vue'
import CBTExpandOption from '@/components/common/CBTExpandOption.vue'
import VueClipboard from 'vue-clipboard2'
import './filters/filters'
// import {
//   FORGET_TOKEN
// }
// from '@/store/action.type'
Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(VueClipboard)
Vue.use(HighchartsVue);
Vue.use(VueHighcharts);
Vue.use(require('vue-moment'));
Vue.use(VueDragscroll)
Vue.use(d3)
Vue.config.productionTip = false;
window.$ = require('jquery');
window.JQuery = require('jquery');
window.moment = require('moment');
window.daterangepicker = require('daterangepicker');
// init Fb SDK
(function(d, s, id) {
  let js = d.getElementsByTagName(s)[0];
  let fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/zh_TW/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// init API service

ApiService.init()

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.beforeEach((to, from, next) => {
  var old = document.title
  if (to.name === 'Login' && store.getters.isAuthticated) {
    document.title = old
  } else if (to.name !== 'Login' && !store.getters.isAuthticated) {
    document.title = i18n.t('title.Login')
  } else {
    document.title = i18n.t('title.' + to.name);
  }
  if (to.path === '/logout') {
    next();
  } else {
    // router.push('/dashboard');
    // router.push('/audience');
    // router.push('/tracking');
    // this.$router.push('/adaccount');
    // router.push('/users');
    // router.push('/profile')

    next();
    // if (to.path === '/' || to.path === '/login') {
    //   if (store.getters.isAuthticated) {
    //     ApiService.refreshToken().then(({
    //       data
    //     }) => {
    //       document.title = old
    //       store.dispatch('RESET_STORE')
    //       let permission = store.state.auth.permission;
    //       if (permission.DASHBOARD_VIEW === '1') {
    //         router.push('/dashboard');
    //       } else if (permission.AUDIENCE_VIEW === '1') {
    //         router.push('/audience');
    //       } else if (permission.TRACKING_VIEW === '1') {
    //         router.push('/tracking');
    //       } else if (permission.AD_ACCOUNT_VIEW === '1') {
    //         this.$router.push('/adaccount');
    //       } else if (permission.USER_MANAGEMENT === '1') {
    //         router.push('/users');
    //       } else {
    //         router.push('/profile')
    //       }
    //     });
    //   } else {
    //     store.dispatch('RESET_STORE')
    //     next()
    //   }
    // } else {
    //   store.dispatch('RESET_STORE')
    //   if (store.getters.isAuthticated) {
    //     ApiService.refreshToken().then(() => {
    //       next();
    //     });
    //   } else {
    //     const LENGTH_VALID = 31;
    //     if (to.params[0].length === LENGTH_VALID) {
    //       store.dispatch(FORGET_TOKEN, to.params)
    //     }
    //     router.push('/login');
    //   }
    // }
  }
})
Vue.component('loading', CBTLoading);

Vue.component('cbt-table', CBTTable);

Vue.component('cbt-expand-option', CBTExpandOption);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
