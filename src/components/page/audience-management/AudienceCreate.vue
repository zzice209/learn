<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header">
      <div class="cbt-dialog-title">{{$t('audience.dialog.createTitle')}}</div>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-confirm-dialog-content">
      <div>
        {{$t('audience.dialog.createHintTitle')}}
      </div>
      <div class="mt-3">
        <v-layout row wrap>
          <v-flex class="cbt-label-group " xs3>
            <v-subheader class="cbt-label pull-right">
              {{$t('audience.dialog.createLabel')}}
              <span class="require-icon">*</span>
            </v-subheader>
          </v-flex>
          <v-flex xs9>
            <v-input solo class="cbt-input">
              <input maxlength="250" v-model="name" autocomplete="off" type="text" :placeholder="$t('audience.dialog.createPlaceholder')">
            </v-input>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <v-card-actions class="cbt-dialog-footer text-xs-right">
      <div class="cbt-btn-group">
        <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
        <v-btn class="cbt-btn accent-main" :disabled="!validate" @click="confirmAction">{{$t('action.continue')}}</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
  // import userService from '@/api/user.api';

  export default {
    props: ['audience'],
    data() {
      return {
        name: ''
      };
    },
    mounted() {
      this.name = this.audience.name;
    },
    computed: {
      validate() {
        if (this.name.trim().length > 0) {
          return true;
        } else {
          return false;
        }
      }
    },
    methods: {
      closeDialog() {
        this.$emit('closeDialog', true);
      },
      confirmAction() {
        this.$emit('confirmAction', {
          name: this.name.trim()
        });
      }
    }
  };
</script>
