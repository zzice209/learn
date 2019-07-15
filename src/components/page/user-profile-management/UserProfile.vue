<template>
  <div>
    <div class="title-group">
      <v-layout row wrap>
        <div class="page-title">
          <span>{{$t('userProfile.title')}}</span>
        </div>
      </v-layout>
    </div>
    <div class="user-profile">
      <v-card class="cbt-dialog-container user-profile-container">
        <v-layout row wrap class="cbt-dialog-content user-profile-content mt-4">
          <v-flex md7>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">{{$t('userProfile.profile.username')}}</v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-input disabled solo class="cbt-input" prepend-icon="cbt-icon color-main icon-user3">
                  <input v-model="user.username" maxlength="50" tabindex="-1" autocomplete="off" type="text" :placeholder="$t('userProfile.profile.username')">
                </v-input>
              </v-flex>
            </v-layout>
            <div v-if="!editPass">
              <v-layout row wrap>
                <v-flex class="cbt-label-group" xs3>
                  <v-subheader class="cbt-label pull-right">{{$t('userProfile.profile.password')}}</v-subheader>
                </v-flex>
                <v-flex xs9>
                  <v-input disabled solo class="cbt-input" prepend-icon="cbt-icon color-main icon-unlock">
                    <input :value="'.......................'" tabindex="-1" maxlength="250" autocomplete="off" type="password" :placeholder="$t('userProfile.profile.password')">
                  </v-input>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs9 offset-xs3 style="margin-bottom: 75px">
                  <a href="javascript:void(0)" class="font-medium font-size-12 cbt-link" @click="editPass = true, editDone = false, checking = false">{{$t('userProfile.profile.resetPass')}}</a>
                </v-flex>
              </v-layout>
            </div>
            <div v-if="editPass">
              <v-layout row wrap>
                <v-flex class="cbt-label-group" xs3>
                  <v-subheader class="cbt-label pull-right">
                    {{$t('userProfile.password.currentPass')}}
                    <span class="require-icon">*</span>
                  </v-subheader>
                </v-flex>
                <v-flex xs9>
                  <v-tooltip :content-class="'cbt-tooltip right ' + (oldPassError!='' || $v.oldPassword.$invalid && checking?'show':'hide')" right>
                    <v-input
                      slot="activator"
                      :error="oldPassError!='' || $v.oldPassword.$invalid && checking"
                      :class="{'has-error': oldPassError!='' || $v.oldPassword.$invalid && checking}"
                      solo
                      class="cbt-input"
                      prepend-icon="cbt-icon color-main icon-unlock"
                    >
                      <input autocomplete="off" type="password" maxlength="250" v-model="oldPassword" :placeholder="$t('register.input.password')">
                    </v-input>
                    <span v-if="!$v.oldPassword.required">{{$t('register.error.require.password')}}</span>
                    <span v-if="!$v.oldPassword.password">{{$t('register.error.type.password')}}</span>
                    <span v-if="oldPassError">{{$t(oldPassError)}}</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex class="cbt-label-group" xs3>
                  <v-subheader class="cbt-label pull-right">
                    {{$t('userProfile.password.newPass')}}
                    <span class="require-icon">*</span>
                  </v-subheader>
                </v-flex>
                <v-flex xs9>
                  <v-tooltip :content-class="'cbt-tooltip right ' + (errorMessage!='' || $v.newPassword.$invalid && checking?'show':'hide')" right>
                    <v-input
                      slot="activator"
                      :error="errorMessage!='' || $v.newPassword.$invalid && checking"
                      :class="{'has-error': errorMessage!='' || $v.newPassword.$invalid && checking}"
                      solo
                      class="cbt-input"
                      prepend-icon="cbt-icon color-main icon-unlock"
                    >
                      <input autocomplete="off" type="password" maxlength="250" v-model="newPassword" :placeholder="$t('register.input.password')">
                    </v-input>
                    <span v-if="!$v.newPassword.required">{{$t('register.error.require.password')}}</span>
                    <span v-if="!$v.newPassword.password">{{$t('register.error.type.password')}}</span>
                    <span v-if="errorMessage">{{$t(errorMessage)}}</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex class="cbt-label-group" xs3>
                  <v-subheader class="cbt-label pull-right">
                    {{$t('userProfile.password.checkpass')}}
                    <span class="require-icon">*</span>
                  </v-subheader>
                </v-flex>
                <v-flex xs9>
                  <v-tooltip :content-class="'cbt-tooltip right ' + (errorMessage!='' || $v.checkpass.$invalid?'show':'hide')" right>
                    <v-input
                      slot="activator"
                      :error="errorMessage!='' || $v.checkpass.$invalid"
                      :class="{'has-error': errorMessage!='' || $v.checkpass.$invalid}"
                      solo
                      class="cbt-input"
                      prepend-icon="cbt-icon color-main icon-unlock"
                    >
                      <input autocomplete="off" type="password" maxlength="250" v-model="checkpass" :placeholder="$t('register.input.checkpass')">
                    </v-input>
                    <!-- <span v-if="!$v.checkpass.required">{{$t('register.error.require.checkpass')}}</span> -->
                    <!-- <span v-if="!$v.checkpass.password">{{$t('register.error.type.password')}}</span> -->
                    <span v-if="errorMessage">{{$t(errorMessage)}}</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </div>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">
                  {{$t('userProfile.profile.fullname')}}
                  <span class="require-icon">*</span>
                </v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-tooltip :content-class="'cbt-tooltip right ' + (($v.userEdit.name.$invalid)?'show':'hide')" right>
                  <v-input slot="activator" :error="$v.userEdit.name.$invalid" :class="{'has-error': $v.userEdit.name.$invalid}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-edit-3">
                    <input autocomplete="off" type="text" maxlength="250" v-model="userEdit.name" :placeholder="$t('register.input.fullname')">
                  </v-input>
                  <span v-if="!$v.userEdit.name.required">{{$t('register.error.require.fullname')}}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">
                  {{$t('userProfile.profile.phone')}}
                  <span class="require-icon">*</span>
                </v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-tooltip :content-class="'cbt-tooltip right ' + ($v.userEdit.phone.$invalid ?'show':'hide')" right>
                  <v-input
                    slot="activator"
                    :error="$v.userEdit.phone.$invalid"
                    :class="{'has-error': $v.userEdit.phone.$invalid}"
                    solo
                    class="cbt-input"
                    prepend-icon="cbt-icon color-main icon-smartphone3"
                  >
                    <input autocomplete="off" type="text" maxlength="11" v-model="userEdit.phone" :placeholder="$t('register.input.phone')" @paste="preventNonNumericalInput" @keypress="preventNonNumericalInput">
                  </v-input>
                  <span v-if="!$v.userEdit.phone.required">{{$t('register.error.require.phone')}}</span>
                  <span v-if="!$v.userEdit.phone.numeric">{{$t('register.error.type.phone')}}</span>
                  <span v-if="!$v.userEdit.phone.phone">{{$t('register.error.type.phone')}}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">{{$t('userProfile.profile.email')}}</v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-input disabled solo class="cbt-input" prepend-icon="cbt-icon color-main icon-mail2">
                  <input v-model="user.email" tabindex="-1" maxlength="250" autocomplete="off" type="text" :placeholder="$t('userProfile.profile.email')">
                </v-input>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">{{$t('userProfile.profile.companyName')}}</v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-input disabled solo class="cbt-input" prepend-icon="cbt-icon color-main icon-building">
                  <input v-model="user.company" tabindex="-1" maxlength="250" autocomplete="off" type="text" :placeholder="$t('userProfile.profile.companyName')">
                </v-input>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">{{$t('userProfile.profile.companyStyle')}}</v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-input disabled solo class="cbt-input" prepend-icon="cbt-icon color-main icon-briefcase2">
                  <input v-model="user.bussinessArea" tabindex="-1" maxlength="250" autocomplete="off" type="text" :placeholder="$t('userProfile.profile.companyStyle')">
                </v-input>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="cbt-label-group" xs3>
                <v-subheader class="cbt-label pull-right">{{$t('userProfile.profile.address')}}</v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-input disabled solo class="cbt-input" prepend-icon="cbt-icon color-main icon-map-pin">
                  <input v-model="user.address" tabindex="-1" maxlength="250" autocomplete="off" type="text" :placeholder="$t('userProfile.profile.address')">
                </v-input>
              </v-flex>
            </v-layout>
          </v-flex>
          <!-- <v-flex md5>
            <div class="user-profile-avatar-group-container">
              <div class="user-profile-avatar-group mt-5">
                <img class="user-profile-avatar" v-if="avatar" src="@/assets/image/kuon ava.jpg">
                <img class="user-profile-avatar" v-if="!avatar" src="@/assets/image/empty ava.png">
                <a class="user-profile-avatar-icon-upload" @click="uploadImage">
                  <v-icon class="cbt-icon text-color-2 icon-camera"></v-icon>
                </a>
              </div>
              <div class="user-profile-avatar-button-group mt-4">
                <v-btn class="cbt-btn accent-outline font-semi font-size-10 text-color-2 ma-0">{{$t('userProfile.uploadAvatar.button')}}</v-btn>
                <div class="user-profile-avatar-button-hint mt-3">
                  <span :class="'font-regular font-size-10 text-color-3' + (errorImage?'':'')">{{$t('userProfile.uploadAvatar.hint')}}</span>
                </div>
              </div>
            </div>
          </v-flex>-->
        </v-layout>
        <v-card-actions class="cbt-dialog-footer text-sm-right">
          <div v-if="editDone" class="cbt-btn-group">
            <v-btn class="cbt-btn accent-semi color-main">
              <v-icon class="cbt-icon icon-check-circle"></v-icon>
              {{$t('dialog.actions.success')}}
            </v-btn>
          </div>
          <div v-if="isEdit || editPass" class="cbt-btn-group">
            <v-btn class="cbt-btn accent-semi" v-if="!loading" @click="cancelEdit">{{$t('dialog.actions.cancel')}}</v-btn>
            <v-btn class="cbt-btn accent-main" :loading="loading" @click="saveEdit" :disabled="!valid">{{$t('dialog.actions.save')}}</v-btn>
          </div>
        </v-card-actions>
      </v-card>
      <loading :show="loading"></loading>
    </div>
  </div>
</template>

<script>
  import userService from '@/api/user.api'
  import {
    required,
    numeric,
    helpers
  } from 'vuelidate/lib/validators';
  import REGEX_OPTIONS from '@/const/regex'

  const password = helpers.regex('password', REGEX_OPTIONS.regex_pass);
  const phone = helpers.regex('phone', /^0[0-9]{9,12}$/);
  export default {
    data() {
      return {
        user: {},
        userEdit: {},
        editDone: false,
        editPass: false,
        avatar: false,
        errorImage: false,
        oldPassword: '',
        newPassword: '',
        checkpass: '',
        errorMessage: '',
        oldPassError: '',
        checking: false,
        loading: false
      }
    },
    validations: {
      userEdit: {
        name: {
          required
        },
        phone: {
          required,
          numeric,
          phone
        }
      },
      oldPassword: {
        required,
        password
      },
      newPassword: {
        required,
        password
      },
      checkpass: {
        // required,
        // password
      }
    },
    mounted() {
      this.loading = true
      userService
        .Profile()
        .then(({
                 data
               }) => {
          this.user = data.data
          this.userEdit = Object.assign({}, data.data)
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    computed: {
      isEdit() {
        if (this.userEdit.name === this.user.name && this.userEdit.phone === this.user.phone) {
          return false
        } else {
          this.editDone = false
          return true
        }
      },
      valid() {
        if ((this.newPassword && this.oldPassword && this.checkpass) || (!this.newPassword && !this.oldPassword && !this.checkpass)) {
          return true;
        } else {
          return false;
        }
      }
    },
    methods: {
      cancelEdit() {
        this.userEdit = Object.assign({}, this.user)
        this.editPass = false;
        this.checking = false;
        this.newPassword = '';
        this.oldPassword = '';
        this.checkpass = '';
        this.oldPassError = '';
        this.errorMessage = '';
      },
      preventNonNumericalInput(event) {
        event = event || window.event
        let charCode = typeof event.which === 'undefined' ? event.keyCode : event.which
        let charStr = String.fromCharCode(charCode)
        if (event.keyCode !== 9 && event.keyCode !== 8 && !charStr.match(/^[0-9]+$/)) event.preventDefault()
      },
      saveEdit() {
        if (this.editPass) {
          this.checking = true;
          this.errorMessage = '';
          this.oldPassError = '';
          if (this.newPassword !== this.checkpass) {
            this.errorMessage = 'register.error.wrongPass';
          } else {
            if (!this.$v.$invalid) {
              this.loading = true
              userService.ResetPass({
                oldpass: this.oldPassword,
                newpass: this.newPassword
              }).then(({
                         data
                       }) => {
                if (data.status === 400) {
                  if (data.statusCode === 6) {
                    this.oldPassError = 'userProfile.password.oldPassWrong'
                  }
                } else {
                  this.editDone = true
                  setTimeout(() => {
                    this.editDone = false
                  }, 2000)
                  this.cancelEdit()
                }
                this.loading = false
              })
                .catch(e => {
                  this.loading = false
                })
            }
          }
        } else {
          this.checking = true;
          this.userEdit.name = this.userEdit.name.trim();
          this.userEdit.phone = this.userEdit.phone.trim();
          if (!this.$v.userEdit.name.$invalid && !this.$v.userEdit.phone.$invalid) {
            this.loading = true
            userService
              .UpdateProfile(this.userEdit)
              .then(({
                       data
                     }) => {
                this.user = data.data
                this.userEdit = Object.assign({}, data.data)
                this.editDone = true
                this.cancelEdit()
                this.loading = false
              })
              .catch(e => {
                this.loading = false
              })
          }
        }
      },
      uploadImage() { }
    },
    name: 'UserProfile'
  }
</script>
