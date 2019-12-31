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
              <span v-if="mode === 'create'">{{$t('audience.form.createTitle')}}</span>
              <span v-if="mode === 'view'">{{$t('audience.form.viewTitle')}}</span>
              <span v-if="mode === 'edit'">{{$t('audience.form.editTitle')}}</span>
            </div>
            <div class="cbt-hidden-text">
              <span v-show="mode !== 'view'">{{$t('audience.form.hiddenTitle')}}</span>
            </div>
          </v-layout>
        </v-card-title>
        <v-layout class="cbt-dialog-content audience-content" row wrap>
          <v-flex class="cbt-dialog-column" md8>
            <v-layout class="cbt-dialog-row" row wrap>
              <v-layout row wrap>
                <v-flex class="cbt-label-group" xs3 sm3>
                  <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.age')}}</v-subheader>
                </v-flex>
                <v-flex sm3>
                  <v-layout row wrap class="range-group pull-right">
                    <v-flex sm6 pr-2>
                      <v-input solo class="cbt-input">
                        <input
                          :disabled="mode === 'view' || countLoading"
                          maxlength="5"
                          @change="displayButtonSave.showButtonCalc = true, displayButtonSave.showButtonSave = false"
                          autocomplete="off"
                          @keypress="preventNonNumericalInput"
                          v-model.number="audience.age.from"
                          max="audience.age.to"
                          type="text"
                          :placeholder="$t('range.form')"
                        >
                      </v-input>
                    </v-flex>
                    <span class="hyphen">-</span>
                    <v-flex sm6 pl-2>
                      <v-input solo class="cbt-input">
                        <input
                          :disabled="mode === 'view' || countLoading"
                          maxlength="5"
                          autocomplete="off"
                          @change="displayButtonSave.showButtonCalc = true, displayButtonSave.showButtonSave = false"
                          @keypress="preventNonNumericalInput"
                          v-model.number="audience.age.to"
                          min="audience.age.from"
                          type="text"
                          :placeholder="$t('range.to')"
                        >
                      </v-input>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex class="cbt-label-group" xs2 sm2>
                  <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.gender')}}</v-subheader>
                </v-flex>
                <v-flex class="cbt-dialog-input-group" xs4 sm4>
                  <v-radio-group :disabled="mode === 'view' || countLoading" class="cbt-radio-group pull-right" v-model="audience.sex" row>
                    <v-radio color="success" class="cbt-radio" v-for="(item, index) in genderList" :key="index" :label="$t(item.label)" :value="item.value"></v-radio>
                  </v-radio-group>
                </v-flex>
              </v-layout>
            </v-layout>
            <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.place')}}</v-subheader>
              </v-flex>
              <v-flex sm9>
                <cbt-big-select :disabled="mode === 'view' || countLoading" :list="listAddress" :type="'type.place'" :title="'type.place'" :result="audience.address" @updateFilter="updateFilter"></cbt-big-select>
              </v-flex>
            </v-layout>
            <!-- <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.income')}}</v-subheader>
              </v-flex>
              <v-flex sm9>
                <v-layout class="range-group" row wrap>
                  <v-flex sm6 pr-2>
                    <v-text-field
                      :disabled="mode === 'view'"
                      maxlength="15"
                      type="text"
                      class="cbt-input"
                      @keypress="preventNonNumericalInput"
                      v-model.number="audience.income.from"
                      solo
                      :suffix="$t('common.unitMoney')"
                      :placeholder="$t('range.form')"
                    ></v-text-field>
                  </v-flex>
                  <span class="hyphen">-</span>
                  <v-flex sm6 pl-2>
                    <v-text-field
                      :disabled="mode === 'view'"
                      maxlength="15"
                      type="text"
                      class="cbt-input"
                      @keypress="preventNonNumericalInput"
                      v-model.number="audience.income.to"
                      solo
                      :suffix="$t('common.unitMoney')"
                      :placeholder="$t('range.to')"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>-->
            <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.income')}}</v-subheader>
              </v-flex>
              <v-flex sm9>
                <cbt-big-select :disabled="mode === 'view' || countLoading" :list="listIncome" :type="'type.income'" :title="'type.income'" :result="audience.income" @updateFilter="updateFilter"></cbt-big-select>
              </v-flex>
            </v-layout>
            <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.college')}}</v-subheader>
              </v-flex>
              <v-flex sm9>
                <cbt-big-select
                  :disabled="mode === 'view' || countLoading"
                  :list="listCollege"
                  :type="'college'"
                  :title="'type.college'"
                  :result="audience.college"
                  :scrollAble="true"
                  :searchAble="true"
                  :searchServer="true"
                  @updateFilter="updateFilter"
                  @appendFilter="appendFilter"
                  :total="listFilterPage['college']"
                ></cbt-big-select>
              </v-flex>
            </v-layout>
            <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.company')}}</v-subheader>
              </v-flex>
              <v-flex sm9>
                <cbt-big-select
                  :disabled="mode === 'view' || countLoading"
                  :list="listCompany"
                  :type="'company'"
                  :title="'type.company'"
                  :result="audience.company"
                  :scrollAble="true"
                  :searchAble="true"
                  :searchServer="true"
                  @updateFilter="updateFilter"
                  @appendFilter="appendFilter"
                  :total="listFilterPage['company']"
                ></cbt-big-select>
              </v-flex>
            </v-layout>
            <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right">{{$t('audience.form.profile.job')}}</v-subheader>
              </v-flex>
              <v-flex sm9>
                <cbt-big-select :disabled="mode === 'view' || countLoading" :list="listJob" :type="'type.job'" :title="'type.job'" :result="audience.job" @updateFilter="updateFilter"></cbt-big-select>
              </v-flex>
            </v-layout>
            <v-layout class="cbt-dialog-row" row wrap>
              <v-flex class="cbt-label-group" xs3 sm3>
                <v-subheader class="cbt-label pull-right">
                  {{$t('audience.form.profile.hobby')}}
                  <span class="require-icon">*</span>
                </v-subheader>
              </v-flex>
              <v-flex sm9>
                <cbt-suggestions :disabled="mode === 'view' || countLoading" :listAll="listHobby" :type="'type.hobby'" :title="'type.hobby'" :result="audience.interest" :tooltip="$t('audience.message.tooltip')" @updateFilter="updateFilter"></cbt-suggestions>
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
              <div v-if="!loading" class="mt-5">
                <div v-if="errorMessage != 'audience.error.count' && !countLoading" class="font-medium font-size-24 text-color-main">{{result | numberic}}</div>
                <div v-if="errorMessage != 'audience.error.count' && !countLoading" class="font-medium font-size-12 text-color-2">{{$t('result', {type: $t('type.customer')})}}</div>
                <div v-if="errorMessage" class="font-medium font-size-12 color-error">{{$t(errorMessage)}}</div>
              </div>
              <loading :show="(countLoading || loading) && !checkCountDoing2"></loading>
            </div>
            <div class="cbt-hidden-text ma-4">{{$t('audience.form.hintTitle')}}</div>
          </v-flex>
        </v-layout>
        <v-card-actions class="cbt-dialog-footer text-sm-right">
          <div class="cbt-btn-group">
            <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
            <v-btn v-if="mode !== 'view' && displayButtonSave.showButtonCalc" class="cbt-btn accent-main" :disabled="!validate || countLoading" @click="countAudience" >{{$t('dialog.actions.checkCount')}}</v-btn>
            <v-btn v-if="mode !== 'view' && displayButtonSave.showButtonSave" class="cbt-btn accent-black" :disabled="!validate || countLoading" @click="addConfirm">{{$t('dialog.actions.save')}}</v-btn>
          </div>
        </v-card-actions>
        <v-dialog v-model="createDialog" persistent max-width="688px">
          <audience-create v-if="createDialog" name="create" :audience="audience" @closeDialog="closeNewDialog" @confirmAction="createAudience"></audience-create>
        </v-dialog>
        <v-dialog v-model="submitDialog" persistent max-width="688px">
          <audience-submit v-if="submitDialog" name="submit" :result="result" :audience="audience" @closeDialog="closeDialog" @confirmAction="submitAudience"></audience-submit>
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

  import audienceService from '@/api/audience.api'
  import i18n from '@/lang'

  export default {
    components: {
      'cbt-big-select': CBTBigSelect,
      'cbt-suggestions': CBTSuggestions,
      'audience-create': AudienceCreate,
      'audience-submit': AudienceSubmit
    },
    data() {
      return {
        permission: {},
        pending: false,
        mode: 1,
        result: null,
        loading: false,
        countLoading: false,
        checkCountDoing: true,
        checkCountDoing2: true,
        timeout: null,
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
          count: 0
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
      }
    },
    mounted() {
      this.permission = this.$store.state.auth.permission
      this.pending = this.$store.state.auth.pending
      if (this.true) {
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
          .catch(err => {
            this.errorMessage = 'audience.error.count'
            this.displayButtonSave.nonDisable = true
            this.countLoading = false
            this.loading = false
            console.log(err)
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
      closeSubmitDialog() {
        this.submitDialog = false
      },
      addConfirm() {
        this.createDialog = true
      },
      submitConfirm() {
        this.submitDialog = true
      },
      createAudience(data) {
        this.audience.name = data.name
        if (this.mode === 'create') {
          audienceService
            .CreateAudience(this.audience)
            .then(({
                     data
                   }) => {
              this.loading = false
              switch (data.status) {
                case 200:
                  this.closeNewDialog()
                  this.submitConfirm()
                  this.audience = data.data
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
        } else {
          audienceService
            .UpdateAudience(this.audience)
            .then(({
                     data
                   }) => {
              this.loading = false
              switch (data.status) {
                case 200:
                  this.closeNewDialog()
                  this.submitConfirm()
                  this.audience = data.data
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
      submitAudience() {
        this.closeDialog()
      }
    },
    name: 'AudienceForm'
  }
</script>
