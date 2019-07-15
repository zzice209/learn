<template>
<v-card class="cbt-dialog-container">
  <v-card-title class="cbt-dialog-header">
    <div class="cbt-dialog-title" v-if="title">{{$t(title)}}</div>
    <div class="cbt-dialog-title" v-else>{{$t('dialog.confirmTitle')}}</div>
    <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
  </v-card-title>
  <div class="cbt-confirm-dialog-content">
    {{$t('dialog.confirmContent', {'action':  title ? $t(action) : $t(action).toLowerCase()})}}
    <span v-if="typeof(value) === 'string'" class="color-main">{{$t(type) + '  ' +value}}</span>
    <span v-if="typeof(value) === 'number'" class="color-main">{{value + '  ' + $t(type)}}</span>
  </div>
  <v-card-actions class="cbt-dialog-footer text-xs-right">
    <div class="cbt-btn-group">
      <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
      <v-btn v-if="title" :class="{'cbt-btn accent-warning': action === 'delete', 'cbt-btn accent-3': action !== 'delete'}" style="color: white" @click="confirmAction">{{$t('audience.button.back')}}</v-btn>
      <v-btn v-else :class="{'cbt-btn accent-warning': action === 'delete', 'cbt-btn accent-main': action !== 'delete'}" @click="confirmAction">{{$t(action)}}</v-btn>
    </div>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  props: ['type', 'value', 'doThis', 'action', 'object', 'title'],
  created() {},
  methods: {
    closeDialog() {
      this.$emit('closeDialog', true);
    },
    confirmAction() {
      this.$emit('confirmAction', {
        doThis: this.doThis,
        value: this.value,
        object: this.object
      });
    }
  }
};
</script>
