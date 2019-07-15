<template>
  <div class="cbt-suggestions">
    <div class="cbt-suggestions-input-group">
      <v-input solo class="cbt-input" prepend-icon="cbt-icon icon-search3">
        <v-layout row wrap>
          <input
            slot="activator"
            :disabled="disabled || menu"
            class="cbt-suggestions-input"
            @keyup="holdSearch"
            @keydown="typingSearch"
            style="font-weight:bold;"
            v-model="search"
            @focus="typing = true"
            @blur="typing=false"
            maxlength="50"
            autocomplete="off"
            type="text"
            :placeholder="$t('suggestion.text')"
          >
          <div v-if="search" class="clear-button">
            <v-icon class="cbt-icon icon-x" @click="clearSearch"></v-icon>
          </div>
          <v-spacer></v-spacer>
          <div class="cbt-btn-group">
            <v-tooltip bottom>
              <v-btn class="cbt-suggestions-button cbt-btn accent-outline" @click="menu = !menu" :disabled="disabled || search !== ''" slot="activator">{{$t('suggestion.button')}}</v-btn>
              <span v-if="tooltip">{{tooltip}}</span>
              <span v-if="!tooltip">$t('suggestion.button')</span>
            </v-tooltip>
          </div>
        </v-layout>
      </v-input>
      <div v-if="menu" class="cbt-suggestions-select cbt-select" offset-y nudge-bottom="5" :close-on-content-click="false">
        <div class="cbt-select-container">
          <div class="cbt-select-content">
            <div class="cbt-select-top-content">
              <div class="cbt-select-title">{{$t(title)}}</div>
              <div class="cbt-select-detail">{{$t('select.oneType', {type: $t(type)})}}</div>
            </div>
            <v-divider></v-divider>
            <div class="cbt-select-list-content">
              <!-- <div v-for="(item, i) in listAll" :key="i"> -->
              <cbt-expand-option v-if="menu" :selectedData="result" :data="viewList" class="cbt-select-list-item"></cbt-expand-option>
              <!-- </div> -->
            </div>
            <div class="cbt-select-footer">
              <div class="cbt-button-group">
                <v-btn class="ml-2 cbt-btn accent-semi" @click="cancelSelect">{{$t('select.cancel')}}</v-btn>
                <v-btn class="ml-2 cbt-btn accent-main" @click="acceptSelect">{{$t('select.accept')}}</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cbt-suggestions-list" v-if="search">
        <v-list class="cbt-suggestions-container">
          <v-list-tile class="cbt-suggestions-item" ripple v-for="(item, index) in viewFilter" :key="index" @click="selectFilter(item)">
            <v-tooltip content-class="cbt-tooltip right show pa-3" right>
              <div class="full-width" slot="activator">
                <v-icon class="font-size-14 color-success cbt-suggestions-icon" v-if="isSelected(item)" left>check_box</v-icon>
                <v-list-tile-title class="cbt-suggestions-label">
                  <span>{{ item.name }}</span>
                </v-list-tile-title>
              </div>
              <div class="font-regular font-size-12 pb-4">{{item.display_name}}</div>
              <div class="font-medium font-size-12">{{$t('common.customers')}}:</div>
              <div class="font-medium font-size-12 pb-4">{{item.count | numberic}}</div>
            </v-tooltip>
          </v-list-tile>
          <v-list-tile class="cbt-suggestions-item" ripple v-if="!viewFilter || viewFilter.length === 0" @click="clearSearch()">
            <v-list-tile-title class="cbt-suggestions-label">
              <span>{{$t('common.emptyData')}}</span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </div>
    </div>
    <div class="cbt-big-selected-data">
      <v-chip :disabled="disabled" class="cbt-chip" color="white" v-for="(item, index) in result" :key="index" close @input="remove(item)">{{item.name}}</v-chip>
    </div>
  </div>
</template>

<script>
import audienceService from '@/api/audience.api'

export default {
  props: ['listAll', 'title', 'type', 'result', 'disabled', 'tooltip'],
  created() {
    this.returnResult = this.result
    this.viewList = this.listAll
    this.viewFilter = []
    this.updateFilter()
  },
  watch: {
    listAll: function (newVal, oldVal) {
      this.viewList = this.listAll
    },
    result: function (newVal, oldVal) {
      this.selected = this.result
      this.returnResult = this.result
    }
  },
  data() {
    return {
      menu: false,
      selected: [],
      returnResult: [],
      viewList: [],
      viewFilter: [],
      search: '',
      loading: false,
      typing: false,
      filterList: [],
      parent: {},
      timeout: null
    }
  },
  methods: {
    clearSearch() {
      this.search = ''
    },
    cancelSelect() {
      this.selected = this.result
      this.menu = false
      this.updateFilter()
    },
    acceptSelect() {
      this.returnResult = []
      this.returnResult.push(...this.$store.state.auth.selectedHobby)
      this.selected = this.returnResult
      this.menu = false
      this.updateFilter()
    },
    updateFilter() {
      this.$emit('updateFilter', this.returnResult, this.type)
    },
    selectFilter(item) {
      if (!this.isSelected(item)) {
        this.search = ''
        this.returnResult.push(item)
        this.selected = this.returnResult
        this.updateFilter()
      }
    },
    holdSearch() {
      if (this.search.trim() && this.search.trim().length >= 3) {
        this.timeout = setTimeout(() => {
          this.getHobbies()
        }, 200)
      }
    },
    typingSearch() {
      clearTimeout(this.timeout)
    },
    getHobbies() {
      if (this.search.trim()) {
        audienceService
          .SearchHobby({
            name: this.search.replace(/([.*+?=^!:${}()|[\]\\/\\])/g, '\\$1').trim()
          })
          .then(({
            data
          }) => {
            this.loading = false
            this.viewFilter = data.data
            this.loading = false
          })
          .catch(e => {
            this.error = true
            this.loading = false
          })
      }
    },
    remove(item) {
      this.selected.splice(this.selected.indexOf(item), 1)
      this.selected = [...this.selected]
      this.returnResult = this.selected
      this.updateFilter()
    },
    isSelected(item) {
      return this.selected.filter(data => {
        return data.id === item.id
      }).length > 0
    }
  },
  name: 'CBTSuggestions'
}
</script>
