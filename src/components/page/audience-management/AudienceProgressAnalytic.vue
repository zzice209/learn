<template>
  <v-card class="cbt-dialog-container analytic-progress" style="max-height: 478px;">
    <v-card-title class="cbt-dialog-header">
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-confirm-dialog-content">
      <div class="success-container">
        <div class="success-content">
          <div class="success-logo">
            <v-icon class="cbt-icon icon-bar-chart-2"></v-icon>
          </div>
          <v-layout align-center>
            <v-flex>
              <div class="big-title">{{$t('audience.analytic.progress')}}</div>
              <div class="semi-title">
                {{$t('audience.success.info')}}
                <span class="color-main">CBNV_CongSo_MienNam</span>
                {{$t('audience.success.info2')}}
              </div>
              <div class="button-container">
                <v-btn type="submit" class="cbt-btn accent-main" @click="closeDialog">{{$t('audience.analytic.accept')}}</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ['audience'],
    created() { },
    methods: {
      closeDialog() {
        this.$emit('closeDialog', true);
      }
    },
    name: 'SuccessForm'
  };
</script>
