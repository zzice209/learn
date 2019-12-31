<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header">
      <div class="cbt-dialog-title">{{$t(!username?'users.dialog.createTitle':'users.dialog.updateTitle')}}</div>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-dialog-content">
      <v-tabs slider-color="accent-main" v-model="tab">
        <v-tab :key="1">
          <div class="cbt-dialog-tab">{{$t('users.dialog.profile.label')}}</div>
        </v-tab>
        <v-tab-item :key="1">
          <v-container class="full-width">
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">
                  {{$t('users.dialog.profile.username')}}}
                  <span v-if="!username" class="require-icon">*</span>
                </v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-tooltip :content-class="'cbt-tooltip right ' + (($v.user.username.$invalid || existedUser) && checking ?'show':'hide')" right>
                  <v-input
                    :disabled="!!username"
                    slot="activator"
                    :error="($v.user.username.$invalid || existedUser) && checking"
                    :class="{'has-error': ($v.user.username.$invalid || existedUser) && checking}"
                    solo
                    class="cbt-input"
                    prepend-icon="cbt-icon color-main icon-user3"
                  >
                    <input autocomplete="off" type="text" maxlength="50" v-model="user.username" :placeholder="$t('register.input.username')">
                  </v-input>
                  <span v-if="!$v.user.username.required">{{$t('register.error.require.username')}}</span>
                  <span v-if="!$v.user.username.username">{{$t('register.error.type.username')}}</span>
                  <span v-if="existedUser">{{$t('register.error.existedUser')}}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">
                  {{$t('users.dialog.profile.fullname')}}
                  <span class="require-icon">*</span>
                </v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-tooltip :content-class="'cbt-tooltip right ' + (($v.user.name.$invalid || existedEmail) && checking?'show':'hide')" right>
                  <v-input
                    slot="activator"
                    :error="$v.user.name.$invalid && checking"
                    :class="{'has-error': $v.user.name.$invalid && checking}"
                    solo
                    class="cbt-input"
                    prepend-icon="cbt-icon color-main icon-edit-3"
                  >
                    <input autocomplete="off" type="text" maxlength="250" v-model="user.name" :placeholder="$t('register.input.fullname')">
                  </v-input>
                  <span v-if="!$v.user.name.required">{{$t('register.error.require.fullname')}}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">
                  {{$t('users.dialog.profile.email')}}
                  <span v-if="!username" class="require-icon">*</span>
                </v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-tooltip :content-class="'cbt-tooltip right ' + (($v.user.email.$invalid || existedEmail) && checking?'show':'hide')" right>
                  <v-input
                    slot="activator"
                    :disabled="!!username"
                    :error="($v.user.email.$invalid || existedEmail) && checking"
                    :class="{'has-error': ($v.user.email.$invalid || existedEmail) && checking}"
                    solo
                    class="cbt-input"
                    prepend-icon="cbt-icon color-main icon-mail2"
                  >
                    <input autocomplete="off" type="text" maxlength="250" v-model="user.email" :placeholder="$t('register.input.email')">
                  </v-input>
                  <span v-if="!$v.user.email.required">{{$t('register.error.require.email')}}</span>
                  <span v-if="!$v.user.email.email">{{$t('register.error.type.email')}}</span>
                  <span v-if="existedEmail">{{$t('register.error.existedEmail')}}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">
                  {{$t('users.dialog.profile.phone')}}
                  <span class="require-icon">*</span>
                </v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-tooltip :content-class="'cbt-tooltip right ' + ($v.user.phone.$invalid && checking?'show':'hide')" right>
                  <v-input
                    slot="activator"
                    :error="$v.user.phone.$invalid && checking"
                    :class="{'has-error': $v.user.phone.$invalid && checking}"
                    solo
                    class="cbt-input"
                    prepend-icon="cbt-icon color-main icon-smartphone3"
                  >
                    <input autocomplete="off" type="text" maxlength="11" v-model="user.phone" :placeholder="$t('register.input.phone')" @paste="preventNonNumericalInput" @keypress="preventNonNumericalInput">
                  </v-input>
                  <span v-if="!$v.user.phone.required">{{$t('register.error.require.phone')}}</span>
                  <span v-if="!$v.user.phone.numeric">{{$t('register.error.type.phone')}}</span>
                  <span v-if="!$v.user.phone.phone">{{$t('register.error.type.phone')}}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>
        <v-tab v-if="username_host !== username && finishApiUser" :key="2">
          <div class="cbt-dialog-tab">{{$t('users.dialog.permission.label')}}</div>
        </v-tab>
        <v-tab-item :key="2">
          <v-container class="full-width">
            <table class="cbt-table width100">
              <tr class="cbt-table-row">
                <td class="highlight width33">{{$t(pages[1])}}</td>
                <td class="width67">
                  <v-layout class="cbt-row" row wrap>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[3]" :label="$t('action.view')" v-bind:value="storedData[3]"></v-checkbox>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[4]" :label="$t('action.down')" v-bind:value="storedData[4]"></v-checkbox>
                  </v-layout>
                </td>
              </tr>
              <tr class="cbt-table-row">
                <td class="highlight width33">{{$t(pages[0])}}</td>
                <td class="width67">
                  <v-layout class="cbt-row" row wrap>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[0]" :label="$t('action.view')" v-bind:value="storedData[0]"></v-checkbox>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[1]" :label="$t('action.input')" v-bind:value="storedData[1]"></v-checkbox>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[2]" :label="$t('action.upload')" v-bind:value="storedData[2]"></v-checkbox>
                  </v-layout>
                </td>
              </tr>
              <tr class="cbt-table-row">
                <td class="highlight width33">{{$t(pages[2])}}</td>
                <td class="width67">
                  <v-layout class="cbt-row" row wrap>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[5]" :label="$t('action.view')" v-bind:value="storedData[5]"></v-checkbox>
                    <v-checkbox
                      color="success"
                      height="15px"
                      class="cbt-checkbox"
                      v-model="storedData[6]"
                      :label="$t('users.dialog.permission.createTrackingLinks')"
                      v-bind:value="storedData[6]"
                    ></v-checkbox>
                  </v-layout>
                </td>
              </tr>
              <tr class="cbt-table-row">
                <td class="highlight width33">{{$t(pages[3])}}</td>
                <td class="width67">
                  <v-layout class="cbt-row" row wrap>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[7]" :label="$t('action.management')" v-bind:value="storedData[7]"></v-checkbox>
                  </v-layout>
                </td>
              </tr>
              <tr class="cbt-table-row">
                <td class="highlight width33">{{$t(pages[4])}}</td>
                <td class="width67">
                  <v-layout class="cbt-row" row wrap>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[8]" :label="$t('action.view')" v-bind:value="storedData[8]"></v-checkbox>
                    <v-checkbox color="success" height="15px" class="cbt-checkbox" v-model="storedData[9]" :label="$t('action.down')" v-bind:value="storedData[9]"></v-checkbox>
                  </v-layout>
                </td>
              </tr>
            </table>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </div>

    <v-card-actions class="cbt-dialog-footer text-xs-right">
      <div class="cbt-btn-group">
        <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('users.dialog.actions.cancel')}}</v-btn>
        <v-btn :loading="loading" v-if="tab === 0" :disabled="!isRequired" class="cbt-btn accent-main" @click="tab = 1">{{$t('users.dialog.actions.continues')}}</v-btn>
        <v-btn :loading="loading" v-if="tab === 1" :disabled="!isRequired" class="cbt-btn accent-main" @click="checkSaveUser">{{$t('users.dialog.actions.continues')}}</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import userService from '@/api/user.api'
import {
  required,
  numeric,
  helpers,
  email
} from 'vuelidate/lib/validators'
import USER_STATUS from '@/const/userstatus'

const username = helpers.regex('username', /^(?=.{6,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?![_.])$/);
const phone = helpers.regex('phone', /^0[0-9]{9,12}$/);
export default {
  props: ['username'],
  data() {
    return {
      changeCheckbox: false,
      tab: 0,
      permission: {},
      checkChangeBox: false,
      initCheckbox: [],
      pending: false,
      loading: false,
      input: false,
      checking: false,
      failed: false,
      success: false,
      existedUser: false,
      existedEmail: false,
      storedData: [],
      pages: ['users.dialog.permission.audience', 'users.dialog.permission.dashboard', 'users.dialog.permission.trackingLinks', 'users.dialog.permission.profile', 'users.dialog.permission.leads'],
      user: {
        username: '',
        name: '',
        email: '',
        phone: '',
        role: 4,
        permission: '1111111111',
        permissionSelect: [
          true, // 0: Audience view
          true, // 1: Audience input
          true, // 2: Audience edit
          true, // 3: Dashboard view
          true, // 4: Dashboard down
          true, // 5: Tracking links view
          true, // 6: Tracking links create
          true, // 7: User management
          true, // 8: Leads view
          true // 9: Leads down
        ]
      },
      username_host: '',
      finishApiUser: false,
      nameUserOld: '',
      phoneUserOld: '',
      permissionOld: ''
    }
  },
  watch: {
    storedData: function(newVal, oldVal) {
      if (oldVal.length !== 0 && JSON.stringify(newVal) !== JSON.stringify(this.initCheckbox)) {
        this.checkChangeBox = true
      } else {
        this.checkChangeBox = false
      }
    }
  },
  validations: {
    user: {
      username: {
        required,
        username
      },
      name: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        numeric,
        phone
      }
    }
  },
  mounted() {
    this.permission = this.$store.state.auth.permission
    this.pending = this.$store.state.auth.pending
    if (this.permission.USER_MANAGEMENT === '1') {
      if (this.username) {
        userService
          .ViewUser({
            userdetail: this.username
          })
          .then(({
            data
          }) => {
            this.loading = false
            this.user = data.data
            this.stringToPermission(this.user)
            this.nameUserOld = this.user.name
            this.phoneUserOld = this.user.phone
          })
          .catch(e => {
            this.error = true
            this.loading = false
          })
      }
    } else {
    }
    userService
      .Profile()
      .then(({
               data
             }) => {
        this.finishApiUser = true
        this.username_host = data.data.username
        this.loading = false
      })
      .catch(e => {
        this.error = true
        this.loading = false
      })
  },
  computed: {
    isRequired() {
      if (this.checkChangeBox === true) {
        return true
      }
      if (this.nameUserOld !== '') {
        // case update
        if (this.nameUserOld !== this.user.name) {
          return true
        }
        if (this.phoneUserOld !== this.user.phone) {
          return true
        }
        return false
      }
      if (!this.pending && this.user.username && this.user.name && this.user.email && this.user.phone) {
        return true
      } else {
        return false
      }
    },
    isPending() {
      return this.$store.state.auth.user.status === USER_STATUS.PENDING
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog', true)
      this.clearDialog()
    },
    preventNonNumericalInput(event) {
      event = event || window.event
      let charCode = typeof event.which === 'undefined' ? event.keyCode : event.which
      let charStr = String.fromCharCode(charCode)
      if (event.keyCode !== 9 && event.keyCode !== 8 && !charStr.match(/^[0-9]+$/)) event.preventDefault()
    },
    closeSuccess(type) {
      this.$emit('closeSuccess', type)
      this.clearDialog()
    },
    clearDialog() {
      this.user = {
        username: '',
        name: '',
        email: '',
        phone: '',
        role: 4,
        permission: '1111111111',
        permissionSelect: [
          true, // 0: Audience view
          true, // 1: Audience input
          true, // 2: Audience edit
          true, // 3: Dashboard view
          true, // 4: Dashboard down
          true, // 5: Tracking links view
          true, // 6: Tracking links create
          true, // 7: User management
          true, // 8: Leads view
          true // 9: Leads down
        ]
      }
    },
    permissionToString(storedData) {
      let string = ''
      for (let i = 0; i < storedData.length; i++) {
        if (storedData[i]) {
          string += '1'
        } else {
          string += '0'
        }
      }
      return string
    },
    stringToPermission(user) {
      user.permissionSelect = []
      let array = user.permission.split('')
      for (let i = 0; i < array.length; i++) {
        if (array[i] === '1') {
          user.permissionSelect.push(true)
        } else {
          user.permissionSelect.push(false)
        }
      }
      this.storedData = user.permissionSelect
      Object.assign(this.initCheckbox, user.permissionSelect)
    },
    checkSaveUser() {
      this.checking = true;
      this.tab = 0;
      this.user.username = this.user.username.trim();
      this.user.name = this.user.name.trim();
      this.user.email = this.user.email.trim();
      this.user.phone = this.user.phone.trim();
      if (this.isPending) {
        this.$emit('forBidden', true)
      } else {
        this.saveUser()
      }
    },
    saveUser() {
      this.input = true
      this.user.permission = this.permissionToString(this.storedData)
      if (!this.$v.$invalid) {
        this.loading = true
        if (!this.username) {
          userService
            .SaveUser(this.user)
            .then(({
              data
            }) => {
              this.loading = false
              if (data.status === 409) {
                this.tab = 0;
                this.error = true;
                if (data.statusCode === 2) {
                  this.existedUser = true;
                } else {
                  this.existedEmail = true;
                }
                this.failed = true;
              } else {
                this.user = data.data
                this.userEdit = Object.assign({}, data.data)
                this.closeSuccess({
                  type: 'create'
                })
              }
            })
            .catch(e => {
              this.error = true
              this.loading = false
            })
        } else {
          userService
            .EditUser(this.user)
            .then(({
              data
            }) => {
              this.loading = false
              if (data.status === 409) {
                this.tab = 0;
                this.error = true;
                if (data.statusCode === 2) {
                  this.existedUser = true;
                } else {
                  this.existedEmail = true;
                }
                this.failed = true;
              } else {
                if (data.status === 400) {
                } else {
                  this.user = data.data
                  this.userEdit = Object.assign({}, data.data)
                  this.closeSuccess({
                    type: 'update'
                  })
                }
              }
            })
            .catch(e => {
              this.error = true
              this.loading = false
            })
        }
      }
    }
  }
}
</script>
