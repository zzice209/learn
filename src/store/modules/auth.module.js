import JwtService from '@/common/jwt.service'
import ApiService from '@/common/api.service'
import router from '@/router';
import {
  LOGIN_AFTER_REGISTER,
  LOGIN,
  LOG_OUT,
  FORGET_TOKEN,
  SET_USER
} from '@/store/action.type'
import {
  SET_AUTH,
  PURGE_AUTH
} from '@/store/mutation.type'

const state = {
  error: '',
  user: {},
  pending: false,
  permission: {},
  isAuthticated: !!JwtService.getToken(),
  token: JwtService.getToken(),
  hobby: []
}

const getters = {
  currentUser: state => state.user,
  isAuthticated: state => state.isAuthticated
}

const actions = {
  [FORGET_TOKEN](context, data) {
    return new Promise((resolve, reject) => {
      context.commit(FORGET_TOKEN, data[0])
      resolve()
    })
  },
  [LOGIN_AFTER_REGISTER](context, data) {
    return new Promise((resolve, reject) => {
      context.commit(SET_AUTH, data)
      resolve()
    })
  },
  [LOGIN](context, data) {
    return new Promise((resolve, reject) => {
      context.commit(SET_AUTH, data)
      resolve()
    })
  },
  [LOG_OUT](context, data) {
    return new Promise((resolve, reject) => {
      context.commit(PURGE_AUTH, data)
      resolve()
    })
  },
  [SET_USER](context, data) {
    return new Promise((resolve, reject) => {
      context.commit(SET_USER, data)
      resolve()
    })
  }
}

const mutations = {
  [FORGET_TOKEN](state, data) {
    let tmp = data.split('');
    tmp.splice(0, 1);
    state.forgetToken = tmp.join('');
    console.log(state.forgetToken);
  },
  [SET_AUTH](state, data) {
    state.isAuthticated = true
    state.user = data.user
    if (data.user && data.user.status === 1) {
      state.pending = true;
    } else {
      if (data.user) {
        if (data.user.status === 3 || data.user.status === 4) {
          router.push('/logout');
          state.pending = false;
        }
      }
    }
    if (data.user && data.user.permission) {
      let arrayPermission = data.user.permission.split('');
      state.permission.AUDIENCE_VIEW = arrayPermission[0];
      state.permission.AUDIENCE_CREATE = arrayPermission[1];
      state.permission.AUDIENCE_EDIT = arrayPermission[2];
      state.permission.DASHBOARD_VIEW = arrayPermission[3];
      state.permission.DASHBOARD_DOWN = arrayPermission[4];
      state.permission.TRACKING_VIEW = arrayPermission[5];
      state.permission.TRACKING_CREATE = arrayPermission[6];
      state.permission.USER_MANAGEMENT = arrayPermission[7];
      state.permission.LEAD_VIEW = arrayPermission[8];
      state.permission.LEAD_DOWN = arrayPermission[9];
      state.permission.AD_ACCOUNT_VIEW = '1';
    }
    JwtService.saveToken(data.token)
    state.token = data.token
    ApiService.setHeader();
  },
  [SET_USER](state, data) {
    state.user = data.user
  },
  [PURGE_AUTH](state, data) {
    state.isAuthticated = false
    state.user = {}
    JwtService.destroyToken()
    state.token = ''
    state.pending = false
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
