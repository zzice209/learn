import {
  CHANGE_TOOLTIP,
  RESET_TOOLTIP_USER_LIST
} from '@/store/action.type'

const state = {
  tooltips: {
    company: {},
    email: {},
    name: {},
    phone: {}
  }
}

const getters = {
  tooltips: state => state.tooltips
}

const actions = {
  [CHANGE_TOOLTIP](context, data) {
    context.commit(CHANGE_TOOLTIP, data)
  },
  [RESET_TOOLTIP_USER_LIST](context) {
    context.commit(RESET_TOOLTIP_USER_LIST)
  }
}

const mutations = {
  [CHANGE_TOOLTIP](state, data) {
    state.tooltips[data.type][data.key] = data.value
  },
  [RESET_TOOLTIP_USER_LIST](state, data) {
    state.tooltips = {
      company: {},
      email: {},
      name: {}
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
