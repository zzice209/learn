import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.module'
import page from './modules/page.module'
import audience from './modules/audience.module'
import user from './modules/user.module'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    page,
    audience,
    user
  }
})

export default store
