<template>
<v-card class="cbt-dialog-container">
  <v-card-title class="cbt-dialog-header">
    <div class="cbt-dialog-title">{{$t('trackingLinks.dialog.successTitle')}}</div>
    <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
  </v-card-title>
  <div class="cbt-confirm-dialog-content">
    <div class="cbt-dialog-subtitle">
      <span>{{$t('trackingLinks.dialog.subTitle')}}</span>
    </div>
    <div class="cbt-dialog-table">
      <div class="cbt-dialog-table-row">
        <cbt-copy class="cbt-dialog-copy" :label="'trackingLinks.dialog.fullLink'" :link="trackingLink.middleURL"></cbt-copy>
      </div>
      <div class="cbt-dialog-table-row">
        <cbt-copy class="cbt-dialog-copy" :label="'trackingLinks.dialog.shortLink'" :link="trackingLink.bitlyURL"></cbt-copy>
      </div>
    </div>
  </div>
  <v-card-actions class="cbt-dialog-footer text-xs-right">
    <div class="cbt-btn-group">
      <v-btn class="cbt-btn accent-main" @click="closeDialog">{{$t('trackingLinks.dialog.actions.successClose')}}</v-btn>
    </div>
  </v-card-actions>
</v-card>
</template>

<script>
import CBTCopy from '@/components/common/CBTCopy';
export default {
  components: {
    'cbt-copy': CBTCopy
  },
  props: ['trackingLink'],
  mounted() {
    this.trackingLinkView.middleURL = this.trackingLink.middleURL;
    this.trackingLinkView.bitlyURL = this.trackingLink.bitlyURL;
  },
  data() {
    return {
      trackingLinkView: {
        middleURL: '',
        bitlyURL: ''
      }
    };
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog', true);
      this.clearDialog();
    },
    clearDialog() {
      this.trackingLinkView = {
        middleURL: '',
        bitlyURL: ''
      };
    },
    createLink() {
      this.$emit('closeDialog', true);
      this.$emit('addSuccess', true);
    }
  }
};
</script>
