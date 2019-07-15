<template>
<v-card class="cbt-dialog-container">
  <v-card-title class="cbt-dialog-header">
    <div class="cbt-dialog-title">{{$t('dialog.deleteTitle')}}</div>
    <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
  </v-card-title>
  <div class="cbt-confirm-dialog-content">
    {{$t('dialog.deleteContent') + ' ' + $t(type) + ' '}} <span class="color-main">{{value}}</span>
  </div>
  <v-card-actions class="cbt-dialog-footer text-xs-right">
    <div class="cbt-btn-group">
      <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
      <v-btn class="cbt-btn accent-warning" @click="confirmDelete">{{$t('dialog.actions.delete')}}</v-btn>
    </div>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  props: ['type', 'value'],
  created() {},
  methods: {
    closeDialog() {
      this.$emit('closeDialog', true);
    },
    confirmDelete() {
      this.$emit('confirmDelete', true);
    }
  }
};
</script>
