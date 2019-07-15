import {SET_INTERACTIVE_POST, ADD_NEW_POST_FB, GET_TOTAL_INTERACTIVE, DISABLE_AUDIENCE_CHECK, SET_TOTAL_COUNT, RESET_STORE, EDIT_AUDIENCE, RESET_TOTAL} from '@/store/action.type';
import audienceService from '@/api/audience.api'

const state = {
  posts: {
    1: {
      url: '',
      total: 0,
      postId: '',
      loaded: false,
      errorFromServer: false
    }
  },
  post_ids: {},
  valid: false,
  lastKey: 1,
  total: 0,
  name: ''
}

const getters = {
  posts: state => state.posts,
  audience_valid: state => state.valid,
  post_ids: state => state.post_ids,
  total: state => state.total
}

const actions = {
  /**
   * Data co dang nhu sau
   * {
   *   1: {
   *     url: 'xxx',
   *     total: 'yyy',
   *     post_id: '123213213', (hoac false) // xet url
   *     loaded: false // false la chua goi den server
   *   }
   * }
   */
  [SET_INTERACTIVE_POST](context, data) {
    console.log('SET_INTERACTIVE_POST')
    context.commit(SET_INTERACTIVE_POST, data)
    var key = Object.keys(data)[0]
    context.commit(GET_TOTAL_INTERACTIVE, {
      post_id: data[key].postId,
      index: key
    })
  },
  /**
   * Just add new default post
   * @param state
   */
  [ADD_NEW_POST_FB](context) {
    console.log('ADD_NEW_POST_FB')
    context.commit(ADD_NEW_POST_FB)
  },
  /**
   * Get total interactive from server
   * {
   *   post_id: 123123213321,
   *   access_token: eyasd...
   * }
   */
  [GET_TOTAL_INTERACTIVE](context, data) {
    console.log('GET_TOTAL_INTERACTIVE')
    context.commit(GET_TOTAL_INTERACTIVE, data)
  },
  /**
   * Disable valid
   */
  [DISABLE_AUDIENCE_CHECK](context) {
    console.log('DISABLE_AUDIENCE_CHECK')
    context.commit(DISABLE_AUDIENCE_CHECK)
  },
  /**
   * Set total count
   * data la 1 so integer
   */
  [SET_TOTAL_COUNT](context, data) {
    console.log('SET_TOTAL_COUNT')
    context.commit(SET_TOTAL_COUNT, data)
  },
  /**
   * Reset store
   */
  [RESET_STORE](context) {
    console.log('RESET_STORE')
    context.commit(RESET_STORE)
  },
  [EDIT_AUDIENCE](context, data) {
    console.log('EDIT_AUDIENCE')
    context.commit(EDIT_AUDIENCE, data)
  },
  [RESET_TOTAL](context) {
    console.log('RESET_TOTAL')
    context.commit(RESET_TOTAL)
  }
}
const mutations = {
  /**
   * Data co dang nhu sau
   * {
   *   1: {
   *     url: 'xxx',
   *     total: 'yyy',
   *     valid: 'true' (hoac false) // xet url
   *   }
   * }
  */
  [SET_INTERACTIVE_POST](state, data) {
    state.posts = Object.assign({}, state.posts, data)
    var key = Object.keys(data)[0]
    state.post_ids[key] = data[key].postId
    if (state.post_ids[key] === '') {
      state.valid = false
    }
  },

  /**
   * Just add new default post
   * @param state
   */
  [ADD_NEW_POST_FB](state) {
    state.lastKey += 1
    state.posts = Object.assign({}, state.posts, {
      [state.lastKey]: {
        url: '',
        total: 0,
        postId: '',
        loaded: false,
        errorFromServer: ''
      }
    })
  },
  /**
   * Get total interactive from server
   * {
   *   post_id: 123123213321,
   *   access_token: eyasd...
   * }
   */
  [GET_TOTAL_INTERACTIVE](state, data) {
    audienceService.GetSummaryPostFb(data)
      .then(res => {
        var response = res.data.data
        if (response.error) {
          state.posts[data.index].errorFromServer = response.error.code
          state.posts[data.index].loaded = true
          state.valid = false
          delete state.post_ids[data.index]
        } else {
          state.posts[data.index].loaded = true
          state.posts[data.index].total = response
          state.valid = true
        }
      })
      .catch(e => {
        state.valid = false
        state.posts[data.index].loaded = true
        state.posts[data.index].errorFromServer = 1000 // loi he thong
        delete state.post_ids[data.index]
      })
  },

  [DISABLE_AUDIENCE_CHECK](state) {
    state.valid = false
  },
  [SET_TOTAL_COUNT](state, data) {
    state.total = data
  },
  [RESET_STORE](state) {
    state.total = 0
    state.posts = {
      1: {
        url: '',
        total: 0,
        postId: '',
        loaded: false,
        errorFromServer: ''
      }
    }
    state.valid = false
    state.lastKey = 1
    state.name = ''
    state.post_ids = {}
  },
  [EDIT_AUDIENCE](state, data) {
    state.posts = data.postUrls
    // url: '',
    // total: 0,
    // postId: '',
    // loaded: false,
    // errorFromServer: false

    for (let i = 0; i < data.postUrls.length; i++) {
      let oneData = data.postUrls[i]
      state.posts[i] = {url: oneData, total: 0, postId: '', loaded: false, errorFromServer: false}
    }
    state.total = data.count
    console.log(state.total)
  },
  [RESET_TOTAL](state) {
    state.total = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
