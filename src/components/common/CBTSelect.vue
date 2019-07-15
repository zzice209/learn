<template>
  <v-menu v-model="menu" content-class="cbt-select" offset-y nudge-bottom="5" :close-on-content-click="false">
    <v-btn :class="result.length === list.length || result.length === 0?'cbt-select-btn': 'cbt-select-btn active'" slot="activator" class="cbt-select-btn">
      <v-layout row wrap>
        <span class="cbt-select-label">{{$t(title)}}</span>
        <span class="cbt-select-value">{{result.length !== list.length && result.length !== 0?$t('select.selected'):''}} {{result.length === list.length || result.length === 0?$t('select.all'):result.length}}</span>
      </v-layout>
    </v-btn>
    <div class="cbt-select-container">
      <div class="cbt-select-content">
        <div class="cbt-select-top-content">
          <div class="cbt-select-title">{{$t(title)}}</div>
          <div class="cbt-select-detail">
            {{$t('select.selected')}} {{selected.length ==
            list.length?$t('select.all'):selected.length}} {{$t(title).toLowerCase()}}
          </div>
        </div>
        <v-divider></v-divider>
        <div v-if="searchAble" class="cbt-select-search cbt-search">
          <v-text-field class="cbt-textfield" solo append-icon="icon-search3" @change="appendFilter" v-model="search" :placeholder="$t('select.search')"></v-text-field>
        </div>
        <div class="cbt-select-list-content" @scroll="scrollNe" ref="aaa">
          <div class="cbt-select-list-item">
            <div class="cbt-select-list-item-container">
              <div class="cbt-checkbox-container">
                <input type="checkbox" v-model="isSelectAll" @change="selectAll" color="success" height="15px" class="cbt-checkbox cbt-expansion-checkbox">
                <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
                <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
              </div>
              <label class="v-label pl-2" :title="$t('select.all')">{{$t('select.all')}}</label>
            </div>
          </div>
          <div class="cbt-select-list-item" v-for="(item, index) in filter" :key="index">
            <div class="cbt-select-list-item-container">
              <div class="cbt-checkbox-container">
                <input type="checkbox" v-model="selected" :id="item.id" :value="item" color="success" height="15px" class="cbt-checkbox cbt-expansion-checkbox">
                <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
                <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
              </div>
              <label class="v-label pl-2" :title="item.name">{{item.name}}</label>
            </div>
          </div>
          <v-progress-linear :indeterminate="true" color="success" v-if="timeout"></v-progress-linear>
        </div>
        <div class="cbt-select-footer">
          <div class="cbt-button-group">
            <v-btn class="ml-2 cbt-btn accent-semi" @click="cancelSelect">{{$t('select.cancel')}}</v-btn>
            <v-btn class="ml-2 cbt-btn accent-main" @click="acceptSelect">{{$t('select.accept')}}</v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-menu>
</template>

<script>
export default {
  props: ['list', 'title', 'type', 'result', 'searchAble', 'searchServer', 'scrollAble', 'total'],
  data() {
    return {
      menu: false,
      selected: [],
      returnResult: [],
      isSelectAll: false,
      search: '',
      filterList: [],
      timeout: false
    }
  },
  created() {
    this.isSelectAll = true
    this.selected = this.list
    this.returnResult = this.list
  },
  mounted() {
    if (this.result.length === 0) {
      this.isSelectAll = true
      this.selected = this.list
      this.returnResult = this.list
    } else {
      this.selected = this.result
      this.returnResult = this.result
    }
  },
  watch: {
    list: function (newVal, oldVal) {
      if (this.isSelectAll) {
        this.selected = this.list
        this.returnResult = this.list
      }
    },
    selected: function (newVal, oldVal) {
      if (this.selected.length !== this.list.length) {
        this.isSelectAll = false
      } else {
        if (this.selected.length > 9) {
          this.isSelectAll = true
        }
      }
    },
    result: function (newVal, oldVal) {
      if (this.result.length === 0) {
        this.isSelectAll = true
        this.returnResult = this.list
      } else {
        if (this.result.length === this.list.length) {
          this.isSelectAll = true
          this.returnResult = this.list
        } else {
          this.isSelectAll = false
          this.returnResult = this.result
        }
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
              if (e.target.scrollTop >= (e.target.scrollHeight - e.target.offsetHeight) - 50) {
                this.appendFilter();
                this.timeout = true;
                setTimeout(() => {
                  this.timeout = false;
                }, 1000)
              }
            }
          }
        }
      }
    },
    appendFilter() {
      this.$emit('appendFilter', { type: this.type, search: this.search.replace(/([.*+?=^!:${}()|[\]\\/\\])/g, '\\$1').trim() })
    },
    selectAll() {
      if (this.isSelectAll) {
        this.selected = this.list.slice()
      } else {
        this.selected = []
      }
    },
    cancelSelect() {
      if (this.result.length !== 0) {
        this.selected = this.result
      } else {
        this.selected = this.list
      }
      this.menu = false
      // this.updateFilter()
    },
    acceptSelect() {
      if (this.isSelectAll) {
        this.returnResult = [];
      } else {
        if (this.selected.length === 0) {
          this.selected = this.list
          this.returnResult = this.list
        } else {
          this.returnResult = this.selected
        }
      }
      this.menu = false
      this.updateFilter()
    },
    updateFilter() {
      this.$emit('updateFilter', this.returnResult, this.type)
    }
  },
  name: 'CBTSelect'
}
</script>
