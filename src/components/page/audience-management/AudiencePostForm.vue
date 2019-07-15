<template>
  <div>
    <div v-if="pending" class="cbt-alert alert-error mt-3 ml-3 mr-3">
      <v-layout row wrap>
        <v-icon class="cbt-icon font-size-14 color-warning icon-alert-triangle mr-2"></v-icon>
        <span class="text-line font-regular font-size-12 color-warning">{{$t('account.noPermission')}}</span>
      </v-layout>
    </div>
    <div class="audience">
      <div class="title-group">
        <v-layout row wrap>
          <div class="page-title">
            <span>{{$t('audience.title')}}</span>
          </div>
        </v-layout>
      </div>
      <v-alert v-model="alertError" style="z-index: 1000" type="error" dismissible class="cbt-alert fixed-popup">
        {{$t('audience.dialog.errorLessThan10')}}
      </v-alert>
      <v-card class="cbt-dialog-container audience-container-new">
        <v-card-title class="cbt-dialog-header">
          <v-layout column>
            <div class="cbt-dialog-title">
              <span v-if="mode === 'create'">{{$t('audience.post.createTitle')}}</span>
              <span v-if="mode === 'view'">{{$t('audience.post.viewTitle')}}</span>
              <span v-if="mode === 'edit'">{{$t('audience.post.editTitle')}}</span>
            </div>
            <div class="cbt-hidden-text">
              <span v-show="mode !== 'view'">{{$t('audience.post.hiddenTitle')}}</span>
            </div>
          </v-layout>
        </v-card-title>
        <v-layout class="cbt-dialog-content audience-content" row wrap>
          <v-flex class="cbt-dialog-column" md8>
            <v-layout class="cbt-dialog-row" row wrap v-for="(item, index) in posts" :key="index">
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right" v-if="mode==='create'">{{$t('audience.post.labelURL')}} {{index}}</v-subheader>
                <v-subheader class="cbt-label pull-right" v-if="mode==='edit'">{{$t('audience.post.labelURL')}} {{index + 1}}</v-subheader>
              </v-flex>
              <v-flex sm9>
                <v-input v-if="mode==='create'" slot="activator" solo class="cbt-input">
                  <input class="cbt-input-post" autocomplete="off" type="text" maxlength="250" @input="updateUrl($event, index)" :placeholder="$t('audience.post.link')">
                  <label v-if="item.url && item.postId && item.loaded && !item.errorFromServer" class="cbt-post-data color-success">{{item.total}} {{$t('audience.post.interactive')}} </label>
                  <label v-else-if="item.url && item.postId && item.loaded && item.errorFromServer === 190" class="cbt-post-data color-error">{{$t('audience.post.needRefresh')}}</label>
                  <label v-else-if="item.url && item.postId && item.loaded && item.errorFromServer === 100" class="cbt-post-data color-error">{{$t('audience.post.needPermission')}}</label>
                  <label v-else-if="item.url && item.postId && item.loaded && item.errorFromServer === 1000" class="cbt-post-data color-error">{{$t('audience.post.systemError')}}</label>
                  <label v-else-if="item.url && item.postId && item.loaded && item.errorFromServer === 803" class="cbt-post-data color-error">{{$t('audience.post.notExists')}}</label>
                  <label v-else-if="item.url && item.postId && item.loaded && item.errorFromServer === 10" class="cbt-post-data color-error">{{$t('audience.post.needPermission')}}</label>
                  <label v-else-if="item.url && item.postId && !item.loaded" class="cbt-post-data color-success">{{$t('audience.post.loading')}}</label>
                  <label v-else-if="item.url && !item.postId" class="cbt-post-data color-error">{{$t('audience.post.invalidURL')}}</label>
                </v-input>
                <v-input v-if="mode==='edit'" slot="activator" solo class="cbt-input">
                  <input class="cbt-input-post" :disabled="true" v-model="item.url"  autocomplete="off" type="text" maxlength="250" @input="updateUrl($event, index)" :placeholder="$t('audience.post.link')">
                </v-input>

              </v-flex>
            </v-layout>
            <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right"></v-subheader>
              </v-flex>
              <v-flex sm9>
                <a v-if="mode==='create'" class="cbt-link-inline cbt-link" href="javascript:void(0)" @click="addURL">{{$t('audience.post.actionAdd')}}</a>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex class="cbt-dialog-column" md3>
            <div class="cbt-success-return">
              <v-layout row wrap>
                <div class="cbt-success-return-title">{{$t('return.result')}}</div>
                <v-spacer></v-spacer>
                <i class="cbt-icon color-main font-size-18 icon-users2"></i>
              </v-layout>
              <div class="mt-5">
                <div v-if="errorMessage != 'audience.error.count' && !countLoading" class="font-medium font-size-24 text-color-main">{{total | numberic}}</div>
                <div v-if="errorMessage != 'audience.error.count' && !countLoading" class="font-medium font-size-12 text-color-2">{{$t('result', {type: $t('type.customer')})}}</div>
                <div v-if="errorMessage" class="font-medium font-size-12 color-error">{{$t(errorMessage)}}</div>
              </div>
              <loading :show="countLoading"></loading>
            </div>
            <div class="cbt-hidden-text ma-4">{{$t('audience.post.hintTitle')}}</div>
          </v-flex>
        </v-layout>
        <v-card-actions class="cbt-dialog-footer text-sm-right">
          <div class="cbt-btn-group">
            <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
            <v-btn v-if="mode !== 'view' && mode !== 'edit' && !buttonSave" class="cbt-btn accent-main"  :disabled="!audience_valid" @click="countAudience(post_ids)">{{$t('dialog.actions.checkCount')}}</v-btn>
            <v-btn v-if="mode !== 'view' && mode !== 'edit' && buttonSave" class="cbt-btn accent-black" @click="addConfirm">{{$t('dialog.actions.save')}}</v-btn>
          </div>
        </v-card-actions>
        <v-dialog v-model="createDialog" persistent max-width="688px">
          <audience-create v-if="createDialog" name="create" :audience="audience" @closeDialog="closeNewDialog" @confirmAction="createAudience"></audience-create>
        </v-dialog>
        <v-dialog v-model="submitDialog" persistent max-width="688px">
          <audience-submit-post v-if="submitDialog" name="submit" :result="result" :audience="audience" @closeDialog="closeDialog" @confirmAction="submitAudience"></audience-submit-post>
        </v-dialog>
        <v-alert v-model="error" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-x">
          <span>{{message}}</span>
        </v-alert>
      </v-card>
    </div>
  </div>
</template>

<script>
// import audienceService from '@/api/audience.api'
// import i18n from '@/lang'
import {PAGE_TITLE, SET_INTERACTIVE_POST, ADD_NEW_POST_FB, SET_TOTAL_COUNT, RESET_STORE, EDIT_AUDIENCE, RESET_TOTAL} from '../../../store/action.type';
import { mapGetters } from 'vuex'
import audienceService from '@/api/audience.api'
import AudienceCreate from '@/components/page/audience-management/AudienceCreate'
import AudienceSubmit from '@/components/page/audience-management/AudienceSubmit'
import AudienceSubmitPost from '@/components/page/audience-management/AudienceSubmitPost'
import i18n from '@/lang'
import _ from 'lodash'
export default {
  components: {
    AudienceSubmitPost,
    'audience-create': AudienceCreate,
    'audience-submit': AudienceSubmit
  },
  data() {
    return {
      buttonSave: false,
      id: 0,
      permission: {},
      pending: false,
      countLoading: false,
      createDialog: false,
      submitDialog: false,
      loading: false,
      mode: 1,
      displayButtonSave: {},
      errorMessage: '',
      message: '',
      result: 0,
      error: false,
      alertError: false,
      listResult: [{
        result: true,
        value: 200
      }, {
        result: true,
        value: 200
      }, {
        result: false,
        value: 200
      }],
      audience: {
        name: '',
        count: 0
      }
    }
  },
  created() {
    this.$store.dispatch(PAGE_TITLE, 'PAGE_TITLE.AUDIENCE.POST')
    // this.$store.dispatch(RESET_STORE)
  },
  computed: {
    validate() {
    },
    ...mapGetters([
      'posts',
      'audience_valid',
      'post_ids',
      'total'
    ])
  },
  watch: {
    mode: function (val) {
      if (val === 'edit') {
        this.showInitButtonSave()
        this.displayButtonSave.nonDisable = true
      }
      if (val === 'create') {
        this.showInitButtonSave()
        this.displayButtonSave.nonDisable = false
      }
    }
  },
  mounted() {
    this.permission = this.$store.state.auth.permission
    this.pending = this.$store.state.auth.pending
    if (this.permission.AUDIENCE_CREATE === '1') {
      if (this.$route.params[0]) {
        let id = this.$route.params[0]
        console.log(this.$route)
        console.log('IDDDDDDDDDDDDDDDDDDDDDDDD  ++++  ' + id)
        audienceService
            .ViewAudience({
              id: id
            })
            .then(({
                     data
                   }) => {
              // this.audience = data.data
              this.$store.dispatch(EDIT_AUDIENCE, data.data)
              console.log(data)
            })
            .catch(e => {
              this.error = true
              this.message = e.response.data.message
              this.loading = false
              setTimeout(() => {
                this.error = false
              }, 2000)
            })
        this.mode = 'edit'
        this.loading = true
      } else {
        this.mode = 'create'
      }
    } else {
      this.$router.push({
        name: '403'
      })
    }
  },
  methods: {
    updateUrl: _.debounce(function (e, index) {
      this.buttonSave = false
      this.$store.dispatch(RESET_TOTAL)
      var postId = this.getFbPostId(e.target.value)
      this.$store.dispatch(SET_INTERACTIVE_POST, {
        [index]: {
          url: e.target.value,
          total: 0,
          postId: postId,
          loaded: false,
          errorFromServer: ''
        }
      })
    }, 500),
    showInitButtonSave() {
      if (this.mode === 'edit') {
        this.displayButtonSave.showButtonSave = true
        this.displayButtonSave.showButtonCalc = false
      }
      if (this.mode === 'create') {
        this.displayButtonSave.showButtonSave = false
        this.displayButtonSave.showButtonCalc = true
      }
    },
    addURL() {
      this.$store.dispatch(ADD_NEW_POST_FB)
    },
    showButtonSave() {
      this.displayButtonSave.showButtonSave = true
      this.displayButtonSave.showButtonCalc = false
    },
    showButtonCalc() {
      this.displayButtonSave.showButtonSave = false
      this.displayButtonSave.showButtonCalc = true
    },
    closeDialog() {
      this.$store.dispatch(RESET_STORE)
      this.$router.push('/audience')
    },
    addConfirm() {
      if (this.total < 10) {
        this.alertError = true
        setTimeout(() => {
          this.alertError = false
        }, 1500)
        return true
      }
      this.createDialog = true
    },
    submitConfirm() {
      this.submitDialog = true
    },
    closeSubmitDialog() {
      this.submitDialog = false
    },
    closeNewDialog() {
      this.createDialog = false
    },
    submitAudience() {
      this.$store.dispatch(RESET_STORE)
      this.closeDialog()
    },
    createAudience(data) {
      var postIds = Object.keys(this.posts).map(i => this.posts[i].postId)
      var postUrls = Object.keys(this.posts).map(i => this.posts[i].url)
      var name = data.name
      var payload = {
        name: name,
        post_ids: postIds,
        post_urls: postUrls,
        count: this.total
      }
      this.audience.name = data.name
      this.audience.count = this.total
      // this.audience.name = data.name
      if (this.mode === 'create') {
        audienceService
          .CreateAudienceFromPost(payload)
          .then(({
                   data
                 }) => {
            this.loading = false
            switch (data.status) {
              case 200:
                this.closeNewDialog()
                this.submitConfirm()
                // this.audience = data.data
                break
              case 400:
                if (data.statusCode === 16) {
                  this.error = true
                  this.message = i18n.t('audience.error.existed')
                  setTimeout(() => {
                    this.error = false
                  }, 2000)
                }
                break
              default:
                this.error = true
                this.message = data.message
                setTimeout(() => {
                  this.error = false
                }, 2000)
            }
          })
          .catch(e => {
            this.error = true
            this.message = e.response.data.message
            this.loading = false
            setTimeout(() => {
              this.error = false
            }, 2000)
          })
      }
    },
    countAudience(postIds) {
      this.countLoading = true
      var result = Object.keys(postIds).map(i => postIds[i])
      var payload = {
        post_ids: result
      }
      audienceService.GetSummaryMultiPostFb(payload)
        .then(response => {
          var data = response.data.data
          this.$store.dispatch(SET_TOTAL_COUNT, data)
          this.countLoading = false
          this.buttonSave = true
        })
        .catch(e => {
          this.$store.dispatch(SET_TOTAL_COUNT, 0)
          this.countLoading = false
        })
    },
    getFbPostId(url) {
      var t = ''
      var s = url.match(/[^](fbid=[0-9]{9})\d+/);
      if (s !== null) {
        t = (t = s[0].replace('?fbid=', '')).replace('_fbid=', '');
      } else {
        var o = url.match(/[^/|.!=][0-9]{7,}(?!.*[0-9]{7,})\d+/);
        if (o !== null) {
          t = o[0]
        }
      }
      return t
    }
  },
  name: 'AudiencePostpost'
}
</script>
