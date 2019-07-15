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
      <v-card class="cbt-dialog-container audience-container-new">
        <v-card-title class="cbt-dialog-header">
          <v-layout column>
            <div class="cbt-dialog-title">
              <span v-if="mode === 'create'">{{$t('audience.form.createTitleUpload')}}</span>
            </div>
            <div class="cbt-hidden-text">
              <span v-show="mode !== 'view'">{{$t('audience.form.hiddenTitleUpload')}}</span>
            </div>
          </v-layout>
        </v-card-title>
        <v-layout class="cbt-dialog-content" row wrap>
          <v-stepper  class="bs-none" v-model="e6" vertical>
            <v-stepper-step  color="accent-main" :complete="e6 > 1" step="1" >
              <div class="cbt-dialog-title">
                <span><b>{{$t('audience.form.step1')}}</b>
                  {{$t('audience.form.downloadexamplefile')}}
                </span>
              </div>
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-5 border cbt-dialog-wrapper">
                <v-layout class="cbt-diaglog-step" row wrap>
                  <div class="csv-logo">
                    <img src="@/assets/image/CSVStep1.png">
                  </div>
                  <div class="cbt-download-content">
                    <div class="cbt-dialog-title mb-1">
                      <span v-if="mode === 'create'">{{$t('audience.form.fileName')}}</span>
                    </div>
                      <div class="cbt-hidden-text" style="width: 300px">
                        <span v-show="mode !== 'view'">{{$t('audience.form.guideStep1')}}</span>
                      </div>
                  </div>
                  <div class="cbt-btn-group mt-3">
                    <v-btn class="cbt-btn" :href="link_template_download" color="accent-2" @click="e6 = 2, checked = true">
                      <v-icon class="cbt-icon icon-download3"></v-icon>
                      {{$t('audience.button.download')}}</v-btn>
                    <v-btn class="cbt-btn btn-1" @click="e6 = 2, checked = true">
                      <v-icon class="cbt-icon icon-skip-forward"></v-icon>
                      {{$t('audience.button.skipForward')}}</v-btn>
                  </div>
                </v-layout>
              </v-card>
            </v-stepper-content>

            <v-stepper-step  color="accent-main" :complete="e6 > 2" step="2"  >
              <div class="cbt-dialog-title">
                <span><b>{{$t('audience.form.step2')}}</b>
                  {{$t('audience.form.uploadFile')}}
                </span>
              </div>
            </v-stepper-step>

            <v-stepper-content step="2">
              <div class="cbt-hidden-text" style="width: 550px">
                <span v-show="mode !== 'view'">{{$t('audience.form.guideTitleUpload2')}}</span>
              </div>
              <v-card class="mb-5 dashed" height="150px" v-if="checked">
                <v-layout class="cbt-diaglog-step cbt-table-null-group" row wrap>
                  <div class="cbt-download-content text-xs-center ">
                      <div class=" cbt-dialog-title">
                        {{$t('audience.form.guideTitleUpload')}}
                      </div>
                      <div class="cbt-btn-group">
                        <v-btn color="accent-3" class="cbt-btn btn-upload" @click="$refs.inputUpload.click()">
                          <v-icon class="cbt-icon icon-upload3"></v-icon>
                          {{$t('audience.button.upload')}}
                        </v-btn>
                        <input v-show="false" ref="inputUpload" type="file" accept=".csv" @change="uploadFile">
                      </div>
                  </div>
                </v-layout>
              </v-card>
              <v-card class="mb-5 dashed cbt-dialog-wrapper" v-if="!checked">
                <v-layout class="cbt-diaglog-step" row wrap>
                  <div class="csv-logo">
                    <img src="@/assets/image/CSVStep3.png">
                  </div>
                  <div class="cbt-download-content mr-5" style="width: 357px">
                    <div class="cbt-dialog-title mb-1">
                      <span v-if="mode === 'create'">{{$t('audience.form.fileName')}} ({{file.size}}KB)</span>
                      <span class="pull-right">{{uploadPercentage}}%</span>
                    </div>
                    <div class="cbt-progress-bar" >
                      <v-progress-linear color="accent-2" v-model="uploadPercentage"></v-progress-linear>
                    </div>
                  </div>
                  <div class="cbt-btn-group mt-3">
                    <v-btn class="cbt-btn btn-1" @click="e6 = 2; checked= !checked; cancelUpload = true">
                      <v-icon class="cbt-icon icon-x"></v-icon>
                      {{$t('audience.button.stopupload')}}</v-btn>
                  </div>
                </v-layout>
              </v-card>
            </v-stepper-content>
            <v-stepper-step  v-if="fileError" :rules="[() => false]" step="3">
              Ad templates
              <small>{{errorContent}}</small>
            </v-stepper-step>

            <v-stepper-step color="accent-main" :complete="e6 > 3" step="3" >
              <div class="cbt-dialog-title">
                <span><b>{{$t('audience.form.step3')}}</b>
                  {{$t('audience.form.verifydata')}}
                </span>
              </div>
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card class="mb-5 border" height="200px">
                <v-layout class="cbt-diaglog-step" row wrap>
                  <div class="csv-logo">
                    <img src="@/assets/image/CSVStep3.png">
                  </div>
                  <div class="cbt-download-content">
                    <div class="cbt-dialog-title">
                      <span v-if="mode === 'create'">{{fileName}}</span>
                    </div>
                    <v-layout class="cbt-dialog-content audience-content" row wrap>
                      <v-flex class="cbt-dialog-column" md6>
                        <div class="cbt-dialog-title-1">
                          <span v-show="mode !== 'view'">{{$t('audience.form.emailColumn')}}</span>
                        </div>
                        <div class="cbt-dialog-title-2">
                          <span v-show="mode !== 'view'">{{dataInvalid.email_valid}} {{$t('audience.form.acceptdata')}}</span>
                          <v-icon class="cbt-icon icon-check3"></v-icon>
                        </div>
                        <div class="cbt-hidden-text">
                          <span v-show="mode !== 'view'">{{dataInvalid.email_invalid}} {{$t('audience.form.unacceptdata')}}</span>
                          <v-icon class="cbt-icon icon-x"></v-icon>
                        </div>
                      </v-flex>
                      <v-flex class="cbt-dialog-column" md6>
                        <div class="cbt-dialog-title-1">
                          <span v-show="mode !== 'view'">{{$t('audience.form.phoneColumn')}}</span>
                        </div>
                        <div class="cbt-dialog-title-2">
                          <span v-show="mode !== 'view'">{{dataInvalid.phone_valid}} {{$t('audience.form.acceptdata')}}</span>
                          <v-icon class="cbt-icon icon-check3"></v-icon>
                        </div>
                        <div class="cbt-hidden-text">
                          <span v-show="mode !== 'view'">{{dataInvalid.phone_invalid}} {{$t('audience.form.unacceptdata')}}</span>
                          <v-icon class="cbt-icon icon-x"></v-icon>
                        </div>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-layout>
                <div class="cbt-btn-group pull-right">
                  <v-btn v-if="dataInvalid.csv_export_link" :href="dataInvalid.csv_export_link" class="cbt-btn btn-1">
                    <v-icon class="cbt-icon icon-clipboard"></v-icon>
                    {{$t('audience.button.exportfile')}}</v-btn>
                  <v-btn class="cbt-btn btn-1" @click="backtostep2">
                    <v-icon class="cbt-icon icon-corner-up-left" ></v-icon>
                    {{$t('audience.button.back')}}</v-btn>
                  <v-btn class="cbt-btn mr-4" color="accent-3" :disabled="dataInvalid.total === 0" @click="e6 = 4">
                    <v-icon class="cbt-icon icon-skip-forward"></v-icon>
                    {{$t('audience.button.continue')}}</v-btn>
                </div>
              </v-card>

            </v-stepper-content>

            <v-stepper-step color="accent-main" step="4"  >
              <div class="cbt-dialog-title">
                <span><b>{{$t('audience.form.step4')}}</b>
                  {{$t('audience.form.saveAudience')}}
                </span>
              </div>
            </v-stepper-step>
            <v-stepper-content step="4">
              <div class="cbt-hidden-text" style="width: 550px">
                <span v-show="mode !== 'view'">{{$t('audience.form.guideTitleUpload4')}}</span>
              </div>
              <v-card class="mb-5 border" height="200px">
                <div class="cbt-success-return bg-white">
                  <v-layout row wrap>
                    <div class="cbt-success-return-title">{{$t('return.result')}}</div>
                    <v-spacer></v-spacer>
                    <i class="cbt-icon color-main font-size-18 icon-users2"></i>
                  </v-layout>
                  <div v-if="!loading" class="mt-5">
                    <div v-if="errorMessage != 'audience.error.count' && !countLoading" class="font-medium font-size-24 text-color-main">{{(dataInvalid.total - dataInvalid.total_invalid) | numberic}}</div>
                    <div v-if="errorMessage != 'audience.error.count' && !countLoading" class="font-medium font-size-12 text-color-2">{{$t('result', {type: $t('type.customer')})}}</div>
                    <div v-if="errorMessage" class="font-medium font-size-12 color-error">{{$t(errorMessage)}}</div>
                  </div>
                  <loading :show="(countLoading || loading) && !checkCountDoing2"></loading>
                </div>
                <div class="cbt-btn-group">
                  <!-- <v-btn color="accent-3" class="cbt-btn btn-upload" @click="e6 = 1">
                    <v-icon class="cbt-icon icon-upload3"></v-icon>
                    {{$t('audience.button.upload')}}
                  </v-btn> -->
                </div>
              </v-card>
            </v-stepper-content>
          </v-stepper>
        </v-layout>
        <v-card-actions class="cbt-dialog-footer text-sm-right">
          <div class="cbt-btn-group">
            <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
            <!--<v-btn v-if="mode !== 'view' && displayButtonSave.showButtonCalc" class="cbt-btn accent-main" :disabled="!validate" @click="countAudience" >{{$t('dialog.actions.checkCount')}}</v-btn>-->
            <v-btn :disabled="!(e6==4)" class="cbt-btn accent-main" @click="addConfirm">{{$t('dialog.actions.saveBtn')}}</v-btn>
            <!--<v-btn v-if="mode !== 'view' && displayButtonSave.showButtonCalc" class="cbt-btn accent-main" :disabled="!validate" @click="countAudience" >{{$t('dialog.actions.checkCount')}}</v-btn>-->
            <!--<v-btn v-if="mode !== 'view' && displayButtonSave.showButtonSave" class="cbt-btn accent-black" :disabled="!validate" @click="addConfirm">{{$t('dialog.actions.save')}}</v-btn>-->
          </div>
        </v-card-actions>
        <v-dialog v-model="backfromstep3" persistent="" max-width="442px">
          <confirm-dialog :title="'audience.dialog.backtostep2upload'" :action="'audience.dialog.backtostep2uploadmessage'" @confirmAction="actionBacktoStep2" @closeDialog="closeConfirmbacktoStep2"></confirm-dialog>
        </v-dialog>
        <v-dialog v-model="createDialog" persistent max-width="688px">
          <audience-create v-if="createDialog" name="create" :audience="audience" @closeDialog="closeNewDialog" @confirmAction="createAudience"></audience-create>
        </v-dialog>
        <v-dialog v-model="submitDialog" persistent max-width="688px">
          <audience-submit v-if="submitDialog" name="submit" :result="result" :audience="audience" @closeDialog="closeDialog" @confirmAction="submitAudience"></audience-submit>
        </v-dialog>
        <v-dialog v-model="successDialog" persistent max-width="442px">
          <audience-sumbit-name-success v-if="successDialog" name="select" :audience="audience" @closeDialog="closeDialog"></audience-sumbit-name-success>
        </v-dialog>
        <v-alert v-model="error" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-x">
          <span>{{message}}</span>
        </v-alert>
      </v-card>
    </div>
  </div>
</template>

<script>
  import CBTBigSelect from '@/components/common/CBTBigSelect'
  import CBTSuggestions from '@/components/common/CBTSuggestions'
  import AudienceCreate from '@/components/page/audience-management/AudienceCreate'
  import AudienceSubmit from '@/components/page/audience-management/AudienceSubmit'
  import AudienceSubmitNameSuccess from '@/components/page/audience-management/AudienceSubmitNameSuccess'
  import ConfirmDialog from '@/components/page/dialog/ConfirmDialog'
  import audienceService from '@/api/audience.api'
  import i18n from '@/lang'
  export default {
    components: {
      'cbt-big-select': CBTBigSelect,
      'cbt-suggestions': CBTSuggestions,
      'audience-create': AudienceCreate,
      'audience-submit': AudienceSubmit,
      'audience-sumbit-name-success': AudienceSubmitNameSuccess,
      'confirm-dialog': ConfirmDialog
    },
    data() {
      return {
        backfromstep3: false,
        cancelUpload: false,
        link_template_download: process.env.TEMPLATE_AUDIENCE_FILE_URL,
        checked: false,
        valueDeterminate: 50,
        e6: 1,
        permission: {},
        pending: false,
        mode: 1,
        result: null,
        loading: false,
        countLoading: false,
        checkCountDoing: true,
        checkCountDoing2: true,
        successDialog: false,
        timeout: null,
        file: '',
        fileError: false,
        errorContent: '',
        uploadPercentage: 0,
        idFile: '',
        fileName: '',
        dataInvalid: {
          csv_export_link: '',
          email_invalid: '',
          email_valid: '',
          phone_invalid: '',
          phone_valid: '',
          csv_filesize: 0,
          total: 0
        },
        list: [],
        listAddress: [],
        listJob: [],
        listHobby: [],
        listCompany: [],
        listCollege: [],
        listIncome: [],
        listFilterPage: {
          college: 1,
          collegePage: 1,
          searchCollegePage: '',
          totalCollege: 0,
          company: 1,
          companyPage: 1,
          searchCompanyPage: '',
          totalCompany: 0
        },
        displayButtonSave: {
          showButtonSave: false,
          showButtonCalc: false,
          nonDisable: true
        },
        placeSelected: [],
        createDialog: false,
        submitDialog: false,
        audience: {
          name: '',
          age: {
            from: 10,
            to: 80
          },
          address: [],
          job: [],
          income: [],
          college: [],
          company: [],
          interest: [],
          sex: 1,
          count: 0,
          file_size: 0
        },
        genderList: [{
          value: 1,
          label: 'gender.all'
        },
        {
          value: 2,
          label: 'gender.male'
        },
        {
          value: 3,
          label: 'gender.female'
        }
        ],
        message: '',
        error: false,
        errorMessage: ''
      }
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
      },
      listHobby: function (val) {
        if (val.length === 0) {
          this.displayButtonSave.nonDisable = false
        } else {
          this.displayButtonSave.nonDisable = true
        }
      },
      e6: function (val) {
        return val
      }
    },
    mounted() {
      this.permission = this.$store.state.auth.permission
      this.pending = this.$store.state.auth.pending
      if (this.permission.AUDIENCE_CREATE === '1') {
        if (this.$route.params[0]) {
          let id = this.$route.params[0]
          this.loading = true
          audienceService
            .ViewAudience({
              id: id
            })
            .then(({
                     data
                   }) => {
              this.loading = false
              this.audience = data.data
              if (this.audience.status === 1) {
                this.mode = 'edit'
              } else {
                this.mode = 'view'
              }
              this.countAudience();
            })
            .catch(e => {
              this.error = true
              this.message = e.response.data.message
              this.loading = false
              setTimeout(() => {
                this.error = false
              }, 2000)
            })
        } else {
          this.mode = 'create'
        }
        this.getAddress()
        this.getJob()
        this.getIncome()
        this.getCollege()
        this.getCompany()
        this.getHobby(1)
      } else {
        this.$router.push({
          name: '403'
        })
      }
    },
    computed: {
      validate() {
        if (
          !this.pending &&
          this.checkRange(this.audience.age) &&
          this.audience.age.from <= 200 &&
          this.audience.age.to <= 200 &&
          this.audience.interest.length > 0 &&
          this.displayButtonSave.nonDisable
        ) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      backtostep2() {
        this.backfromstep3 = true
      },
      uploadFile() {
        this.file = this.$refs.inputUpload.files[0];
        if (this.file.size >= 3.5 * 1024 * 1024) {
          this.errorContent = i18n.t('audience.error.fileExceed');
          this.fileError = true
          return
        }
        if (this.file.size === 0) {
          this.errorContent = i18n.t('audience.error.emptySize');
          this.fileError = true
          return
        }
        if (this.file.name.split('.').pop() !== 'csv') {
          this.errorContent = i18n.t('audience.error.invalidFile');
          this.fileError = true
          return
        }
        this.fileName = this.file.name
        this.fileError = false
        this.errorContent = ''
        let formData = new FormData()
        formData.append('upload', this.file)
        this.checked = false
        this.cancelUpload = false
        audienceService
          .UploadAudience(formData, this).then(({ data }) => {
            if (data.status === 200) {
              this.idFile = data.data
              audienceService.VerifyFileStep3({audience_file_id: this.idFile}, this, this.uploadPercentage).then(({data}) => {
                if (data.status === 200) {
                  Object.assign(this.dataInvalid, data.data)
                  if (!this.cancelUpload) {
                    this.uploadPercentage = 100
                    this.e6 = 3
                  }
                } else {
                  this.fileError = true
                  this.errorContent = i18n.t('audience.error.unknowErrorUpload');
                  this.checked = true
                }
              })
            } else {
              this.fileError = true
              this.errorContent = i18n.t('audience.error.unknowErrorUpload');
              this.checked = true
            }
          })
          .catch(() => {
            this.fileError = true
            this.errorContent = i18n.t('audience.error.unknowErrorUpload');
            this.checked = true
          })
      },
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
      showButtonSave() {
        this.displayButtonSave.showButtonSave = true
        this.displayButtonSave.showButtonCalc = false
      },
      showButtonCalc() {
        this.displayButtonSave.showButtonSave = false
        this.displayButtonSave.showButtonCalc = true
      },
      countAudience() {
        if (this.audience.age.from === '' && this.audience.age.to === '') {
          this.audience.age.from = 10
          this.audience.age.to = 80
        }
        this.countLoading = true
        this.loading = true;
        this.checkCountDoing2 = false
        this.errorMessage = ''
        this.displayButtonSave.nonDisable = false
        audienceService
          .CountAudience(this.audience)
          .then(({ data }) => {
            if (data.statusCode === 0) {
              this.displayButtonSave.nonDisable = true
              this.showButtonSave()
              this.result = data.data
              this.checkCountDoing = false
              this.countLoading = false
              this.audience.count = data.data
            } else {
              this.errorMessage = 'audience.error.count'
            }
            this.loading = false
          })
          .catch(() => {
            this.errorMessage = 'audience.error.count'
            this.displayButtonSave.nonDisable = true
            this.countLoading = false
            this.loading = false
          })
      },
      preventNonNumericalInput(event) {
        event = event || window.event
        let charCode = typeof event.which === 'undefined' ? event.keyCode : event.which
        let charStr = String.fromCharCode(charCode)
        if (event.keyCode !== 9 && event.keyCode !== 8 && !charStr.match(/^[0-9]+$/)) event.preventDefault()
      },
      checkRange(range) {
        if (!range.from && !range.to) {
          return true
        } else {
          if (range.from) {
            range.from = parseInt(range.from);
          }
          if (range.to) {
            range.to = parseInt(range.to);
          }
          if (range.from > range.to) {
            return false
          } else if (range.from < 0 || range.to < 0) {
            return false
          } else {
            return true
          }
        }
      },
      getHobby(pid) {
        this.loading = true
        audienceService
          .ListHobby({
            pid: pid
          })
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listHobby = data.data.result
          })
          .catch(e => {
            this.error = true
            this.message = e.response.data.message
            this.loading = false
            setTimeout(() => {
              this.error = false
            }, 2000)
          })
      },
      getAddress() {
        this.loading = true
        audienceService
          .ListAddress()
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listAddress = data.data
          })
          .catch(e => {
            this.error = true
            this.message = e.response.data.message
            this.loading = false
            setTimeout(() => {
              this.error = false
            }, 2000)
          })
      },
      getJob() {
        this.loading = true
        audienceService
          .ListJob()
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listJob = data.data
          })
          .catch(e => {
            this.error = true
            this.message = e.response.data.message
            this.loading = false
            setTimeout(() => {
              this.error = false
            }, 2000)
          })
      },
      getCollege() {
        audienceService
          .ListCollege({
            limit: 30,
            page: 1,
            name: ''
          })
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listFilterPage.college = data.data.total
            this.listCollege = data.data.list_college
          })
          .catch(e => {
            this.error = true
            this.message = e.response.data.message
            this.loading = false
            setTimeout(() => {
              this.error = false
            }, 2000)
          })
      },
      appendListCollege(page, search) {
        audienceService
          .ListCollege({
            limit: 30,
            page: page,
            name: search
          })
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listFilterPage.college = data.data.total
            if (this.listFilterPage.searchCollege !== search) {
              this.listCollege = data.data.list_college
              this.listFilterPage.searchCollege = search
            } else {
              this.listCollege = this.listCollege.concat(data.data.list_college)
            }
          })
          .catch(e => {
            this.error = true
            this.loading = false
          })
      },
      getCompany() {
        audienceService
          .ListCompany({
            limit: 30,
            page: 1,
            name: ''
          })
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listFilterPage.company = data.data.total
            this.listCompany = data.data.list_company
          })
          .catch(e => {
            this.error = true
            this.message = e.response.data.message
            this.loading = false
            setTimeout(() => {
              this.error = false
            }, 2000)
          })
      },
      appendListCompany(page, search) {
        audienceService
          .ListCompany({
            limit: 30,
            page: page,
            name: search
          })
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listFilterPage.company = data.data.total
            if (this.listFilterPage.searchCompany !== search) {
              this.listCompany = data.data.list_company
              this.listFilterPage.searchCompany = search
            } else {
              this.listCompany = this.listCompany.concat(data.data.list_company)
            }
          })
          .catch(e => {
            this.error = true
            this.loading = false
          })
      },
      getIncome() {
        this.loading = true
        audienceService
          .ListIncome()
          .then(({
                   data
                 }) => {
            this.loading = false
            this.listIncome = data.data
          })
          .catch(e => {
            this.error = true
            this.message = e.response.data.message
            this.loading = false
            setTimeout(() => {
              this.error = false
            }, 2000)
          })
      },
      appendFilter(data) {
        switch (data.type) {
          case 'college':
            if (this.listFilterPage.searchCollege !== data.search) {
              this.listFilterPage.collegePage = 0
              this.appendListCollege(++this.listFilterPage.collegePage, data.search)
            } else {
              if (this.listCollege.length < this.listFilterPage.college) {
                this.appendListCollege(++this.listFilterPage.collegePage, data.search)
              }
            }
            break
          case 'company':
            if (this.listFilterPage.searchCompany !== data.search) {
              this.listFilterPage.companyPage = 0
              this.appendListCompany(++this.listFilterPage.companyPage, data.search)
            } else {
              if (this.listCompany.length < this.listFilterPage.company) {
                this.appendListCompany(++this.listFilterPage.companyPage, data.search)
              }
            }
            break
        }
      },
      updateFilter(result, type) {
        switch (type) {
          case 'type.place':
            this.showButtonCalc()
            this.audience.address = result
            break
          case 'type.job':
            this.showButtonCalc()
            this.audience.job = result
            break
          case 'type.hobby':
            this.showButtonCalc()
            this.audience.interest = result
            break
          case 'type.income':
            this.showButtonCalc()
            this.audience.income = result
            break
          case 'college':
            this.showButtonCalc()
            this.audience.college = result
            break
          case 'company':
            this.showButtonCalc()
            this.audience.company = result
            break
        }
      },
      closeDialog() {
        // this.$emit('closeDialog', true);
        this.$router.push('/audience')
      },
      closeNewDialog() {
        this.createDialog = false
      },
      closeConfirmbacktoStep2() {
        this.backfromstep3 = false
      },
      closeSubmitDialog() {
        this.submitDialog = false
      },
      addConfirm() {
        this.createDialog = true
      },
      submitConfirm() {
        this.submitDialog = true
      },
      actionBacktoStep2() {
        this.e6 = 2;
        this.checked = !this.checked
        this.backfromstep3 = false
      },
      createAudience(data) {
        audienceService.SaveAudienceFile({audience_file_id: this.idFile, file_name: data.name}).then(({ data }) => {
          switch (data.status) {
            case 200:
              this.audience.name = data.data.name
              this.createDialog = false
              this.successDialog = true;
              break;
            case 400:
              if (data.statusCode === 16) {
                this.message = i18n.t('audience.error.existed');
                this.error = true;
                setTimeout(() => {
                  this.error = false;
                }, 2000);
                return false
              }
              break;
            default:
              this.error = true;
              this.message = data.message;
              setTimeout(() => {
                this.error = false;
              }, 2000);
          }
        });
      },
      submitCSVAudience(data) {
        console.log(this.audience.name);
      },
      submitAudience() {
        this.closeDialog()
      }
    },
    name: 'AudienceUpload'
  }
</script>
