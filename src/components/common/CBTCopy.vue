<template>
<div class="cbt-link-group">
  <v-layout row wrap>
    <div class="cbt-link-detail-group" v-if="label !== null">
      <div class="cbt-link-label">
        <span>{{$t(label)}}</span>
      </div>
      <a ref="link" class="cbt-link" target="_blank" href="javascript:void(0)" :title="link" @click="openLink">{{link}}</a>
    </div>
    <div class="cbt-link-detail-group" v-if="label === null">
      <a ref="link" class="cbt-link" target="_blank" href="javascript:void(0)" :title="link" @click="openLink">{{link}}</a>
    </div>
    <v-tooltip :content-class="copyIt?'cbt-tooltip show':'cbt-tooltip hide'" bottom>
      <button slot="activator" class="cbt-btn accent-outline cbt-link-btn" @mouseout="copyDone" @click="copyLink">
        <v-icon class="cbt-icon icon-copy"></v-icon>  
        {{$t('action.copy')}}
      </button>
      <span>{{$t('common.copied')}}</span>
    </v-tooltip>
  </v-layout>
</div>
</template>

<script>
export default {
  props: ['link', 'label'],
  data() {
    return {
      copyIt: false
    };
  },
  methods: {
    copyDone() {
      this.copyIt = false;
    },
    copyLink() {
      this.copyIt = true;
      // navigator.clipboard.writeText(this.$refs.link.getAttribute('title'));
      this.$copyText(this.$refs.link.getAttribute('title'), this.$refs.link);
    },
    openLink() {
      window.open(this.link, '_blank');
    }
  },
  name: 'CBTCopy'
};
</script>
