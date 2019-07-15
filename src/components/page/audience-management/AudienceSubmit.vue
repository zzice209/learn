<template>
  <v-card class="cbt-dialog-container" id="hiddenDialog">
    <v-card-title class="cbt-dialog-header">
      <div class="cbt-dialog-title">{{$t('audience.dialog.submitTitle')}}</div>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-confirm-dialog-content">
      <div class="cbt-dialog-subtitle">
        <span>
          {{$t('audience.dialog.submitHintTitle')}}
          <span class="color-main">{{audience.name}}</span>
          {{$t('audience.dialog.submitHintTitle2')}}
        </span>
      </div>
      <div class="cbt-dialog-table">
        <div class="cbt-dialog-table-row">
          <div class="cbt-link-group">
            <v-layout row wrap>
              <div class="cbt-submit-detail-group">
                <div class="cbt-link-label">
                  <span class="font-medium">{{audience.name}}</span>
                </div>
                <span class="font-regular font-size-12 text-color-main">{{audience.count | numberic}} {{$t('audience.dialog.result')}}</span>
              </div>
              <v-btn slot="activator" class="cbt-btn accent-outline cbt-link-btn" @click="selectChannel">
                <v-icon class="cbt-icon icon-upload3"></v-icon>
                <span class="pl-1">{{$t('action.submit')}}</span>
              </v-btn>
            </v-layout>
          </div>
        </div>
      </div>
    </div>
    <v-card-actions class="cbt-dialog-footer text-xs-right">
      <div class="cbt-btn-group">
        <v-btn class="cbt-btn accent-main" :disabled="pending" @click="closeDialog">{{$t('audience.dialog.cancelSubmit')}}</v-btn>
      </div>
    </v-card-actions>
    <v-dialog v-model="selectDialog" persistent max-width="694px">
      <audience-select-channel v-if="selectDialog" name="select" :audience="audience" @closeSelectDialog="closeSelectDialog" @selectAudienceDone="selectAudienceDone"></audience-select-channel>
    </v-dialog>
    <v-dialog v-model="successDialog" persistent max-width="442px">
      <audience-success v-if="successDialog" name="select" :audience="audience" @closeDialog="closeDialog" @confirmAction="confirmAction"></audience-success>
    </v-dialog>
  </v-card>
</template>

<script>
import CBTCopy from '@/components/common/CBTCopy'
import AudienceSelectChannel from '@/components/page/audience-management/AudienceSelectChannel';
import AudienceSubmitSuccess from '@/components/page/audience-management/AudienceSubmitSuccess';

import audienceService from '@/api/audience.api'

export default {
  components: {
    'cbt-copy': CBTCopy,
    'audience-select-channel': AudienceSelectChannel,
    'audience-success': AudienceSubmitSuccess
  },
  props: ['audience', 'result'],
  data() {
    return {
      id: '',
      pending: false,
      fbAccount: '',
      listChannel: [],
      selectDialog: false,
      successDialog: false,
      error: false,
      message: ''
    };
  },
  mounted() {
    this.pending = this.$store.state.auth.pending;
    if (this.audience && this.audience.id) {
      this.id = this.audience.id;
    }
  },
  methods: {
    closeDialog() {
      this.successDialog = false;
      this.$emit('closeDialog', true);
    },
    closeSelectDialog() {
      this.selectDialog = false;
    },
    selectChannel() {
      this.selectDialog = true;
    },
    selectAudienceDone(selected, length) {
      this.selectDialog = false;
      const listId = [];
      selected.map(item => {
        listId.push({ id: item.id });
      })
      this.submitAudience(listId, length);
    },
    confirmAction() {
      this.$emit('closeDialog', true)
    },
    submitAudience(listId, length) {
      audienceService
        .SubmitAudience({
          id: this.audience.id,
          list: listId,
          count: length
        }).then(({ data }) => {
          if (data.status === 200) {
            document.getElementById('hiddenDialog').style.cssText = 'display:none !important'
            this.successDialog = true;
          }
          this.loading = false;
        }).catch(e => {
          this.error = true;
          this.loading = false;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        });
    }
  }
};
</script>
