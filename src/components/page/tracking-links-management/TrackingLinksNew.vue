<template>
  <div>
    <v-card class="cbt-dialog-container">
      <v-card-title class="cbt-dialog-header">
        <div class="cbt-dialog-title">{{$t('trackingLinks.dialog.createTitle')}}</div>
        <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
      </v-card-title>
      <div class="cbt-dialog-content" style="height: 335px">
        <v-container class="full-width">
          <v-layout row wrap>
            <v-flex class="cbt-label-group" xs3>
              <v-subheader class="cbt-label pull-right">{{$t('trackingLinks.dialog.channel')}}</v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-menu class="cbt-menu cbt-dialog-select" offset-y>
                <v-btn class="cbt-select-btn cbt-dialog-select-button" slot="activator">
                  <span class="cbt-dialog-select-label">{{trackingLink.channel.name}}</span>
                </v-btn>
                <v-list class="users-action-menu">
                  <v-list-tile @click="trackingLink.channel = item; trackingLink.source = item.id_channel" class="users-action-item" v-for="(item, index) in channelList" :key="index">
                    <v-list-tile-title class="users-action-menu-title">{{item.name}}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="cbt-label-group" xs3>
              <v-subheader class="cbt-label pull-right">
                {{$t('trackingLinks.dialog.campaign')}}
                <span class="require-icon">*</span>
              </v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-input solo class="cbt-input">
                <input
                  minlength="5"
                  maxlength="30"
                  autocomplete="off"
                  type="text"
                  v-model="trackingLink.campaign"
                  :placeholder="$t('trackingLinks.dialog.campaign') + $t('common.minimumLength', {value: 5})"
                >
              </v-input>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="cbt-label-group" xs3>
              <v-subheader class="cbt-label pull-right">
                {{$t('trackingLinks.dialog.groupAds')}}
                <span class="require-icon">*</span>
              </v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-input solo class="cbt-input">
                <input
                  minlength="5"
                  maxlength="30"
                  autocomplete="off"
                  type="text"
                  v-model="trackingLink.adGroup"
                  :placeholder="$t('trackingLinks.dialog.groupAds') + $t('common.minimumLength', {value: 5})"
                >
              </v-input>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="cbt-label-group" xs3>
              <v-subheader class="cbt-label pull-right">
                {{$t('trackingLinks.dialog.idAds')}}
                <span class="require-icon">*</span>
              </v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-input solo class="cbt-input">
                <input minlength="5" maxlength="30" autocomplete="off" type="text" v-model="trackingLink.adID" :placeholder="$t('trackingLinks.dialog.idAds') + $t('common.minimumLength', {value: 5})">
              </v-input>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="cbt-label-group" xs3>
              <v-subheader class="cbt-label pull-right">
                {{$t('trackingLinks.dialog.rootLink')}}
                <span class="require-icon">*</span>
              </v-subheader>
            </v-flex>
            <v-flex xs9>
              <v-tooltip :content-class="'cbt-tooltip right ' + ($v.trackingLink.url.$invalid && checking?'show':'hide')" right>
                <v-input slot="activator" :error="$v.trackingLink.url.$invalid && checking" :class="{'has-error': $v.trackingLink.url.$invalid && checking}" solo class="cbt-input">
                  <input autocomplete="off" type="text" maxlength="250" v-model="trackingLink.url" :placeholder="$t('trackingLinks.dialog.rootLink')">
                </v-input>
                <span v-if="!$v.trackingLink.url.required">{{$t('trackingLinks.error.require.url')}}</span>
                <span v-if="!$v.trackingLink.url.link">{{$t('trackingLinks.error.invalid.url')}}</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <v-card-actions class="cbt-dialog-footer text-xs-right">
        <div class="cbt-btn-group">
          <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('trackingLinks.dialog.actions.cancel')}}</v-btn>
          <v-btn :loading="loading" :disabled="!isRequired" class="cbt-btn accent-main" @click="checkCreateLink">{{$t('trackingLinks.dialog.actions.createLink')}}</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {
  required,
  helpers
} from 'vuelidate/lib/validators';
import trackingService from '@/api/tracking.api'
import USER_STATUS from '@/const/userstatus'

const link = helpers.regex('link', /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);

export default {
  data() {
    return {
      permission: {},
      error: true,
      message: '',
      loading: false,
      trackingLink: {
        channel: {},
        source: '',
        campaign: '',
        adGroup: '',
        adID: '',
        url: ''
      },
      checking: false,
      channelList: []
    }
  },
  validations: {
    trackingLink: {
      source: {
        required
      },
      campaign: {
        required
      },
      adGroup: {
        required
      },
      adID: {
        required
      },
      url: {
        required,
        link
      }
    }
  },
  computed: {
    isRequired() {
      if (
        this.trackingLink.campaign &&
        this.trackingLink.campaign.length >= 5 &&
        this.trackingLink.campaign.length <= 30 &&
        this.trackingLink.adGroup &&
        this.trackingLink.adGroup.length >= 5 &&
        this.trackingLink.adGroup.length <= 30 &&
        this.trackingLink.adID &&
        this.trackingLink.adID.length >= 5 &&
        this.trackingLink.adID.length <= 30 &&
        this.trackingLink.url
      ) {
        return true
      } else {
        return false
      }
    },
    isPending() {
      return this.$store.state.auth.user.status === USER_STATUS.PENDING
    }
  },
  mounted() {
    this.permission = this.$store.state.auth.permission
    if (this.permission.TRACKING_CREATE === '1') {
      this.getChannel()
    } else {
      this.$router.push({ name: '403' })
    }
  },
  methods: {
    getChannel() {
      trackingService
        .ListChannel()
        .then(({ data }) => {
          this.loading = false
          this.channelList = data.data
          this.trackingLink.channel = this.channelList[0]
          this.trackingLink.source = this.channelList[0].id_channel
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    closeDialog() {
      this.$emit('closeDialog', true)
      this.clearDialog()
    },
    clearDialog() {
      this.trackingLink = {
        channel: {},
        source: '',
        campaign: '',
        groupAds: '',
        idAds: '',
        rootLink: ''
      }
    },
    checkCreateLink() {
      this.checking = true;
      this.trackingLink.campaign = this.trackingLink.campaign.trim();
      this.trackingLink.adGroup = this.trackingLink.adGroup.trim();
      this.trackingLink.adID = this.trackingLink.adID.trim();
      this.trackingLink.url = this.trackingLink.url.trim();
      if (!this.$v.$invalid) {
        if (this.isPending) {
          this.$emit('forBidden', true)
        } else {
          this.createLink()
        }
      }
    },
    createLink() {
      this.loading = true
      trackingService
        .CreateTracking(this.trackingLink)
        .then(({ data }) => {
          this.loading = false
          switch (data.status) {
            case 200:
              this.$emit('closeDialog', true)
              this.$emit('addSuccess', data.data)
              break
            default:
              this.$emit('createError', true)
              break
          }
        })
        .catch(e => {
          this.error = true
          this.loading = false
          setTimeout(() => {
            this.error = false
          }, 2000)
        })
    },
    forBidden() {
      this.forbiddenDialog = true
      this.closeDialog()
    }
  }
}
</script>
