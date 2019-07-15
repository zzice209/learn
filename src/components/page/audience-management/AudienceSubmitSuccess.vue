<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header">
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-confirm-dialog-content">
      <div class="success-container">
        <div class="success-content">
          <div class="success-logo">
            <i class="icon-check3"></i>
          </div>
          <v-layout align-center>
            <v-flex>
              <div class="big-title">{{$t('audience.success.title')}}</div>
              <div class="semi-title">
                {{$t('audience.success.info')}}
                <span class="color-main">{{audience.name}}</span>
                {{$t('audience.success.info2')}}
              </div>
              <div class="button-container">
                <v-btn type="submit" class="cbt-btn accent-main" @click="closeDialog">{{$t('dialog.actions.close')}}</v-btn>
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
