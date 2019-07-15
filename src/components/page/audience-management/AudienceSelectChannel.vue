<template>
  <v-card class="cbt-dialog-container">
    <v-card-title class="cbt-dialog-header">
      <div class="cbt-dialog-title">{{$t('audience.selectChannel.title')}}</div>
      <v-icon class="cbt-dialog-cancel icon-x" @click="closeDialog"></v-icon>
    </v-card-title>
    <div class="cbt-confirm-dialog-content">
      <v-layout class="cbt-dialog-row" row wrap>
        <v-flex class="cbt-label-group" xs3 sm3>
          <v-subheader class="cbt-label pull-right">
            {{$t('audience.selectChannel.label')}}
            <span class="require-icon">*</span>
          </v-subheader>
        </v-flex>
        <v-flex sm9>
          <div class="cbt-label cbt-hidden-text cbt-hint-content">
            <span>{{$t('audience.selectChannel.hint')}}</span>
          </div>
        </v-flex>
      </v-layout>
      <v-layout class="cbt-dialog-row" row wrap>
        <v-flex class="cbt-label-group" xs3 sm3>
          <v-subheader class="cbt-label pull-right"></v-subheader>
        </v-flex>
        <v-flex sm9>
          <div class="cbt-dialog-table">
            <v-data-table item-key="id" class="cbt-table" select-all v-model="selected" :items="listChannel" hide-headers hide-actions>
              <template slot="items" slot-scope="props">
                <tr class="cbt-table-row" :active="props.selected" v-if="props.item.statusUpload === 1">
                  <td class="width3 pt-0 pb-0 pl-0 pr-0 text-left">
                    <section class="cbt-checkbox-container">
                      <input type="checkbox" @click="props.selected = !props.selected" v-model="props.selected" color="success" height="15px" class="cbt-checkbox">
                      <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
                      <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
                    </section>
                  </td>
                  <td class="width57">
                    <span class="font-medium font-size-12">{{props.item.name}}</span>
                  </td>
                  <td class="width40">
                    <span class="font-regular font-size-12">ID: {{props.item.id}}</span>
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
        <v-btn class="cbt-btn accent-semi" @click="closeDialog">{{$t('dialog.actions.cancel')}}</v-btn>
        <v-btn class="cbt-btn accent-main" @click="confirmAction">{{$t('action.continue')}}</v-btn>
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
      listChannel: [],
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
    closeDialog() {
      this.$emit('closeSelectDialog', true);
    },
    confirmAction() {
      this.$emit('selectAudienceDone', this.selected, this.listChannel.length);
    }
  }
};
</script>
