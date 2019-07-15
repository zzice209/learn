<template>
  <div class="cbt-big-select">
    <v-menu :disabled="disabled" class="full-width" v-model="menu" @click="check()" content-class="cbt-select cbt-big-select" offset-y nudge-bottom="5" :close-on-content-click="false">
      <v-btn class="cbt-select-btn full-width" slot="activator">
        <v-layout row wrap>
          <span class="cbt-select-value">{{result.length !== 0 ?$t('select.selected'):''}} {{result.length === 0?"- " +$t('select.oneType', {type: $t(title)})+" -":result.length + ' ' + $t(title)}}</span>
        </v-layout>
      </v-btn>
      <div class="cbt-select-container">
        <div class="cbt-select-content">
          <div class="cbt-select-top-content">
            <div class="cbt-select-title">{{$t(title)}}</div>
            <div class="cbt-select-detail" v-if="selected.length !== 0">{{$t('select.selected')}} {{selected.length == list.length?$t('select.all'):selected.length}} {{$t(title).toLowerCase()}}</div>
            <div class="cbt-select-detail" v-if="selected.length === 0">{{$t('select.oneType', {type: $t(title)})}}</div>
          </div>
          <v-divider></v-divider>
          <div class="cbt-select-search cbt-search">
            <v-text-field class="cbt-textfield" solo append-icon="icon-search3" @change="appendFilter" v-model="search" :placeholder="$t('select.search')"></v-text-field>
          </div>
          <div class="cbt-select-list-content" @scroll="scrollNe" ref="aaa">
            <div class="cbt-select-list-item">
              <div v-if="!search" class="cbt-select-list-item-container">
                <div class="cbt-checkbox-container">
                  <input type="checkbox" v-model="isSelectAll" @change="selectAll" color="success" height="15px" class="cbt-checkbox cbt-expansion-checkbox">
                  <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
                  <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
                </div>
                <label class="v-label pl-2" :title="$t('select.all')">{{$t('select.all')}}</label>
              </div>
            </div>
            <v-layout row wrap>
              <div class="cbt-select-list-item width50" v-for="(item, index) in filter" :key="index.id" :label="item.name" :value="item">
                <div class="cbt-select-list-item-container">
                  <div class="cbt-checkbox-container">
                    <input type="checkbox" v-model="selected" @change="select" :value="item" color="success" height="15px" class="cbt-checkbox cbt-expansion-checkbox">
                    <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
                    <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
                  </div>
                  <label class="v-label pl-2" :title="item.name">{{item.name}} ({{item.count | numberic}} {{$t('type.human')}})</label>
                </div>
              </div>
            </v-layout>
          </div>
          <div class="cbt-select-footer">
            <div class="cbt-button-group">
              <v-btn class="ml-2 cbt-btn accent-semi" @click="cancelSelect">{{$t('select.cancel')}}</v-btn>
              <v-btn class="ml-2 cbt-btn accent-main" :disabled="selected.length === 0" @click="acceptSelect">{{$t('select.accept')}}</v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-menu>
    <div class="cbt-big-selected-data">
      <v-chip :disabled="disabled" class="cbt-chip" color="white" v-for="(item, index) in result" :key="index" close @input="remove(item)">{{item.name}}</v-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'title', 'type', 'result', 'searchAble', 'searchServer', 'scrollAble', 'total', 'disabled'],
  data() {
    return {
      menu: false,
      selected: [],
      returnResult: [],
      isSelectAll: false,
      search: '',
      filterList: [],
      timeout: false,
      selectedMapData: []
    };
  },
  created() {
    this.selected = []
    this.returnResult = []
  },
  mounted() {
    this.selected = this.result
    this.returnResult = this.result
  },
  watch: {
    list: function(newVal, oldVal) {
      if (this.isSelectAll) {
        this.selected = this.list
        this.returnResult = this.list
      }
    },
    result: function (newVal, oldVal) {
      if (newVal.length !== 0 && oldVal.length === 0) {
        this.selected = newVal
      }
      if (this.result.length === this.list.length) {
        this.isSelectAll = true
        this.returnResult = this.list
      } else {
        this.isSelectAll = false
        this.returnResult = this.result
      }
    },
    menu: function(newVal, oldVal) {
      if (this.menu === false) {
        this.search = '';
      }
    }
  },
  computed: {
    filter() {
      if (!this.searchServer) {
        if (this.search.trim()) {
          this.filterList = []
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name.toLowerCase().indexOf(this.search.toLowerCase().trim()) >= 0) {
              this.filterList.push(this.list[i])
            }
          }
          return this.filterList
        } else {
          return this.list
        }
      } else {
        return this.list
      }
    }
  },
  methods: {
    scrollNe(e) {
      if (this.searchServer) {
        if (this.scrollAble) {
          if (!this.timeout) {
            if (this.list.length < this.total) {
              if (e.target.scrollTop >= (e.target.scrollHeight - e.target.offsetHeight) - 100) {
                this.appendFilter();
                this.timeout = false;
                setTimeout(() => {
                  this.timeout = false;
                }, 200)
              }
            }
          }
        }
      }
    },
    appendFilter() {
      this.$emit('appendFilter', { type: this.type, search: this.search.replace(/([.*+?=^!:${}()|[\]\\/\\])/g, '\\$1').trim() })
    },
    select() {
      if (this.selected.length === this.list.length) {
        this.isSelectAll = true;
      } else {
        this.isSelectAll = false;
      }
    },
    selectAll() {
      if (this.isSelectAll) {
        this.selected = this.list.slice();
      } else {
        this.selected = [];
      }
    },
    cancelSelect() {
      this.selected = this.result;
      this.returnResult = this.result;
      this.menu = false;
      this.search = '';
      this.updateFilter();
    },
    acceptSelect() {
      this.returnResult = this.selected;
      this.menu = false;
      this.search = '';
      this.updateFilter();
    },
    updateFilter() {
      this.$emit('updateFilter', this.returnResult, this.type);
    },
    remove(item) {
      this.returnResult.splice(this.returnResult.indexOf(item), 1);
      this.returnResult = [...this.returnResult];
      this.selected = this.returnResult;
      this.isSelectAll = false;
      this.updateFilter();
    }
  },
  name: 'CBTBigSelect'
};
</script>
