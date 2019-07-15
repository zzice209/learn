<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header">
      <div class="cbt-dialog-title">{{$t('audience.status.title', {name: audience.name})}}</div>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-confirm-dialog-content">
      <v-layout class="cbt-dialog-row" row wrap>
        <v-flex sm12>
          <div class="cbt-dialog-table">
            <v-data-table item-key="id" class="cbt-table" select-all v-model="selected" :items="listChannel" hide-headers hide-actions>
              <template slot="items" slot-scope="props">
                <tr class="cbt-table-row" :active="props.selected">
                  <td class="width57 pl-0">
                    <span class="font-semi font-size-12">{{props.item.name}}</span>
                  </td>
                  <td class="width40 text-right">
                     <span class="font-semi font-size-12 pull-right color-error pointer-handle" v-if="props.item.statusUpload === 4" @click="backToAdaccount">
                      <u>{{viewFix(props.item.statusUpload)}}</u>
                    </span>
                    <v-tooltip content-class="cbt-tooltip top show" class="pull-right" top v-if="props.item.statusUpload === 4">
                        <span slot="activator" class="font-regular font-size-12 pr-1 pl-1">
                          (<u>{{viewError(props.item.statusUpload)}}</u>)
                        </span>
                        <span>{{props.item.messageError}}</span>
                    </v-tooltip>
                    <span class="font-regular font-size-12 pull-right">
                      {{viewDetailStatus(props.item.statusUpload)}}
                    </span>
                    <div :class="viewColor(props.item.statusUpload) + ' cbt-status-icon-group pull-right'">
                      <span :class="viewIcon(props.item.statusUpload) + ' cbt-status-icon'"></span>
                    </div>
                  </td>
                </tr>
              </template>
              <template slot="no-data">
                <tr>
                  <td class="cbt-table-no-data text-xs-left pl-0 pt-3">{{$t('common.emptyTable')}}</td>
                </tr>
              </template>
            </v-data-table>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <v-card-actions class="cbt-dialog-footer text-xs-right">
      <div class="cbt-btn-group">
        <v-btn class="cbt-btn accent-main" @click="closeDialog">Ok</v-btn>
      </div>
    </v-card-actions>
    <v-alert v-model="error" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-x">
      <span>{{message}}</span>
    </v-alert>
  </v-card>
</template>

<script>
import CBTCopy from '@/components/common/CBTCopy'
import adAcountService from '@/api/adacount.api'
// import audienceService from '@/api/audience.api'
import i18n from '@/lang';

export default {
  components: {
    'cbt-copy': CBTCopy
  },
  props: ['audience', 'result'],
  data() {
    return {
      id: '',
      pending: false,
      fbAccount: '',
      listChannel: [
      ],
      selected: [],
      listResult: [],
      selectDialog: false,
      error: false,
      message: ''
    };
  },
  mounted() {
    this.pending = this.$store.state.auth.pending;
    if (this.audience && this.audience.id) {
      this.id = this.audience.id;
      this.getListAdAccount();
    }
  },
  methods: {
    backToAdaccount() {
      this.$router.push('/adaccount');
    },
    getListAdAccount() {
      adAcountService.ListAccountById({
        id: this.id
      }).then((res) => {
        if (res.status === 200) {
          this.listChannel = res.data.data;
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    viewColor(status) {
      switch (status) {
        case 1:
          return 'white';
        case 2:
          return 'alert';
        case 3:
          return 'success';
        case 4:
          return 'error';
      }
    },
    viewIcon(status) {
      switch (status) {
        case 1:
          return 'icon-clock';
        case 2:
          return 'icon-hourglass';
        case 3:
          return 'icon-check3';
        case 4:
          return 'icon-alert-triangle';
      }
    },
    viewDetailStatus(status) {
      switch (status) {
        case 1:
          return i18n.t('audience.status.notSubmit');
        case 2:
          return i18n.t('audience.status.onSubmiting');
        case 3:
          return i18n.t('audience.status.onSubmited');
        case 4:
          return i18n.t('audience.status.onError');
      }
    },
    viewError() {
      return i18n.t('audience.status.detailError')
    },
    viewFix() {
      return i18n.t('audience.status.fix')
    },
    closeDialog() {
      this.$emit('closeDialog', true);
    },
    confirmAction() {
      this.$emit('selectAudienceDone', this.selected);
    }
  }
};
</script>
