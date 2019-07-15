<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header">
      <div class="cbt-dialog-title">{{$t('audience.selectDialog.title')}}</div>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-confirm-dialog-content">
      <div>{{$t('audience.selectDialog.hintTitle')}}</div>
      <div class="mt-3">
        <v-layout class="cbt-select-type-group" row wrap>
          <v-flex grow pa-1 xs3 v-for="(item, index) in typeList" :key="index" @click="selectType(item)">
            <div :class="selectedType.value === item.value?'cbt-select-type '+ item.status + ' active':'cbt-select-type '+ item.status + ' '">
              <v-radio-group :disabled="item.status === 'disable'" class="cbt-select-type-radio-group pull-right" v-model="selectedType" row>
                <v-radio v-if="item.status === 'enable'" color="success" class="cbt-radio cbt-select-type-radio" :value="item"></v-radio>
              </v-radio-group>
              <div class="cbt-select-type-container">
                <div class="cbt-select-type-icon-group">
                  <span :class="item.icon + ' cbt-select-type-icon'"></span>
                </div>
                <div class="cbt-select-title">{{$t(item.title)}}</div>
                <div class="cbt-select-hint">{{$t(item.hintTitle)}}</div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <v-card-actions class="cbt-dialog-footer text-xs-right">
      <div class="cbt-btn-group">
        <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
        <v-btn class="cbt-btn accent-main" @click="confirmAction">{{$t('action.continue')}}</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
// import userService from '@/api/user.api';
import TYPE_LIST from '@/const/typelist.js';

export default {
  props: ['audience'],
  data() {
    return {
      typeList: TYPE_LIST,
      selectedType: {}
    };
  },
  mounted() {
    this.selectedType = this.typeList[0];
  },
  computed: {
  },
  methods: {
    selectType(item) {
      if (item.status === 'enable') {
        this.selectedType = item;
      }
    },
    closeDialog() {
      this.$emit('closeDialog', true);
    },
    confirmAction() {
      this.$emit('confirmAction', {
        selectedType: this.selectedType
      });
    }
  }
};
</script>
