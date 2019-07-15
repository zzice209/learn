import {PAGE_TITLE} from '@/store/action.type';

const state = {
  pageTitle: ''
}

const getters = {
  pageTitle: state => state.pageTitle
}

const actions = {
  [PAGE_TITLE](context, data) {
    context.commit(PAGE_TITLE, data)
  }
}
const mutations = {
  [PAGE_TITLE](state, data) {
    console.log('Action dispatch: ' + data)
    state.pageTitle = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
