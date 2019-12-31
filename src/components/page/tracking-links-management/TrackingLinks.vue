<template>
  <div>
    <div class="cbt-filter-container">
      <v-layout class="cbt-filter-group" row wrap>
        <cbt-select
          v-for="(item, index) in filter"
          :searchAble="false"
          :key="index"
          :list="listFilter[item.type]"
          :type="item.type"
          :title="item.title"
          :result="item.result"
          @updateFilter="updateFilter"
        ></cbt-select>
      </v-layout>
    </div>
    <div class="title-group">
      <v-layout row wrap>
        <div class="page-title">
          <span>{{$t('trackingLinks.title')}}</span>
        </div>
      </v-layout>
    </div>
    <div v-if="pending" class="cbt-alert alert-error mt-3 ml-3 mr-3">
      <v-layout row wrap>
        <v-icon class="cbt-icon font-size-14 color-warning icon-alert-triangle mr-2"></v-icon>
        <span class="text-line font-regular font-size-12 color-warning">{{$t('account.noPermission')}}</span>
      </v-layout>
    </div>
    <div class="tracking-links">
      <v-container class="tracking-links-container full-width" v-if="!loading && typing || search">
        <v-layout row class="mb-4">
          <div class="cbt-search">
            <v-text-field class="cbt-textfield" solo append-icon="icon-search3" @click:append="loadList" @keydown.enter="loadList" @change="loadList" v-model="search" :placeholder="$t('trackingLinks.search')"></v-text-field>
          </div>
          <div class="spacer"></div>
          <div class="cbt-btn-group pull-right">
            <v-btn class="cbt-btn ml-2 accent-main" @click="addTrackingLinks">
              <v-icon class="cbt-icon icon-plus2"></v-icon>
              {{$t('trackingLinks.add')}}
            </v-btn>
          </div>
        </v-layout>
        <div class="cbt-table-container">
          <v-data-table item-key="id" class="cbt-table" :headers="headers" :items="list" hide-actions>
            <template class="cbt-table-header" slot="headers" slot-scope="props">
              <tr class="cbt-table-header simple-table">
                <th v-for="(item,index) in props.headers" :key="index" :class="item.style?item.style:''">{{$t(item.text)}}</th>
              </tr>
            </template>
            <template slot="items" slot-scope="props">
              <tr class="cbt-table-row simple-table">
                <td v-for="(item, index) in properties" :key="index" :class="headers[index].style?headers[index].style:''">
                  <cbt-table-cell :item="item" :data="props"></cbt-table-cell>
                </td>
              </tr>
            </template>
            <template slot="no-data">
              <tr>
                <td class="cbt-table-no-data text-xs-center pa-3">{{$t('common.emptyTable')}}</td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </v-container>
      <loading :show="loading"></loading>
      <v-container class="tracking-links-container-new full-width" v-if="!loading && !typing && !search && list.length == 0">
        <div class="cbt-table-null-group">
          <div class="text-xs-center cbt-table-null-text">
            {{$t('trackingLinks.table.null')}}
            <span>{{$t('trackingLinks.table.null2')}}</span>
          </div>
          <div class="cbt-btn-group text-center cbt-table-null-btn">
            <v-btn class="cbt-btn accent-main ml-0" @click="addTrackingLinks">
              <v-icon class="cbt-icon icon-plus2"></v-icon>
              {{$t('trackingLinks.addSecond')}}
            </v-btn>
          </div>
        </div>
      </v-container>
      <div class="cbt-pagination pull-right">
        <v-layout row wrap>
          <div class="cbt-size-select-group">
            <v-layout row wrap>
              <span class="cbt-pagination-text">{{$t('pagination.display')}}</span>
              <v-menu class="cbt-menu cbt-pagination-size-select" offset-y>
                <v-btn class="cbt-select-btn" slot="activator">
                  <span class="cbt-select-label">{{page.size}}</span>
                </v-btn>
                <v-list class="users-action-menu">
                  <v-list-tile @click="changePageSize(item)" class="users-action-item" v-for="(item, index) in size" :key="index">
                    <v-list-tile-title class="users-action-menu-title">{{item}}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <span class="cbt-pagination-text">{{$t('pagination.on')}} {{page.total}} {{$t('pagination.results')}}</span>
            </v-layout>
          </div>
          <div class="cbt-navigation-group">
            <div class="cbt-navigation-detail">
              <v-layout row wrap>
                <span class="cbt-pagination-text">{{$t('pagination.moveTo')}}</span>
                <v-text-field class="cbt-pagination-input cbt-textfield" solo min="1" :max="page.totalPage" @change="changePage(page.number)" v-model="page.number"></v-text-field>
                <span class="cbt-pagination-text">/ {{page.totalPage}}</span>
                <div class="cbt-btn-group cbt-navigation-button-group">
                  <v-btn @click="changePage(--page.number)" :disabled="page.number == 1" class="cbt-btn cbt-navigation-button accent-outline">
                    <v-icon class="cbt-icon icon-chevron-left"></v-icon>
                  </v-btn>
                  <v-btn @click="changePage(++page.number)" :disabled="page.number == page.totalPage" class="cbt-btn cbt-navigation-button accent-outline">
                    <v-icon class="cbt-icon icon-chevron-right"></v-icon>
                  </v-btn>
                </div>
              </v-layout>
            </div>
          </div>
        </v-layout>
      </div>
    </div>
    <v-dialog v-model="createDialog" persistent max-width="688px">
      <tracking-links-new v-if="createDialog" name="create" @closeDialog="closeNewDialog" @addSuccess="addSuccess" @forBidden="forBidden" @createError="createError"></tracking-links-new>
    </v-dialog>
    <v-dialog v-model="successDialog" persistent max-width="608px">
      <tracking-links-success v-if="successDialog" :trackingLink="trackingLink" name="success" @closeDialog="closeSuccessDialog"></tracking-links-success>
    </v-dialog>
    <v-alert v-model="forbiddenDialog" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-x">
      <span>{{$t('alert.forbidden')}}</span>
    </v-alert>
    <v-alert v-model="createdError" dismissible class="cbt-alert fixed-popup" icon="cbt-icon font-size-12 icon-x">
      <span>{{$t('trackingLinks.error.existed')}}</span>
    </v-alert>
  </div>
</template>

<script>
import HEADERS from '@/const/headers.js'
import PROPERTIES from '@/const/properties.js'
import FILTER from '@/const/filter.js'
import CBTSelect from '@/components/common/CBTSelect'
import CBTTableCell from '@/components/common/CBTTableCell'
import TrackingLinksNew from '@/components/page/tracking-links-management/TrackingLinksNew'
import TrackingLinksSuccess from '@/components/page/tracking-links-management/TrackingLinksSuccess'

import trackingService from '@/api/tracking.api'
import commonService from '@/api/common.api'

export default {
  components: {
    'cbt-table-cell': CBTTableCell,
    'cbt-select': CBTSelect,
    'tracking-links-new': TrackingLinksNew,
    'tracking-links-success': TrackingLinksSuccess
  },
  data() {
    return {
      permission: {},
      pending: false,
      page: {
        size: 10,
        number: 1,
        total: 1,
        totalPage: 1,
        sortType: '',
        sortBy: ''
      },
      size: [10, 20, 50, 100],
      filter: FILTER.trackingLinks,
      headers: HEADERS.trackingLinks,
      properties: PROPERTIES.trackingLinks,
      typing: false,
      loading: false,
      search: '',
      createDialog: false,
      successDialog: false,
      forbiddenDialog: false,
      createdError: false,
      trackingLink: {},
      listFilter: {
        customer: [],
        channel: [],
        campaign: [],
        groupAds: [],
        idAds: []
      },
      list: []
    }
  },
  watch: {
    search(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.typing = true
      }
    }
  },
  mounted() {
    this.permission = this.$store.state.auth.permission
    this.pending = this.$store.state.auth.pending
    if (this.permission.TRACKING_VIEW === '1') {
      this.loadList()
      this.getListCampaignFilter()
      this.getListAdGroupFilter()
      this.getListAdIdFilter()
    } else {
    }
  },
  methods: {
    getListCampaignFilter() {
      this.loading = true
      commonService
        .ListCampaignFilter({
          campaign: this.listObjectToListString(this.filter[0].result),
          adGroup: this.listObjectToListString(this.filter[1].result),
          adId: this.listObjectToListString(this.filter[2].result)
        })
        .then(({ data }) => {
          this.listFilter.campaign = this.toFilterList(data.data)
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    getListAdGroupFilter() {
      this.loading = true
      commonService
        .ListAdGroupFilter({
          campaign: this.listObjectToListString(this.filter[0].result),
          adGroup: this.listObjectToListString(this.filter[1].result),
          adId: this.listObjectToListString(this.filter[2].result)
        })
        .then(({ data }) => {
          this.listFilter.groupAds = this.toFilterList(data.data)
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    getListAdIdFilter() {
      this.loading = true
      commonService
        .ListAdIdFilter({
          campaign: this.listObjectToListString(this.filter[0].result),
          adGroup: this.listObjectToListString(this.filter[1].result),
          adId: this.listObjectToListString(this.filter[2].result)
        })
        .then(({ data }) => {
          this.listFilter.idAds = this.toFilterList(data.data)
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    updateFilter(result, type) {
      for (let i = 0; i < this.filter.length; i++) {
        if (this.filter[i].type === type) {
          this.filter[i].result = result
          if (i === 0) {
            this.getListAdGroupFilter()
            this.filter[1].result = []
            this.getListAdIdFilter()
            this.filter[2].result = []
          } else {
            if (i === 1) {
              this.getListAdIdFilter()
              this.filter[2].result = []
            }
          }
          this.loadList()
        }
      }
    },
    changePage(number) {
      this.page.number = number
      if (this.page.number > 0 && this.page.number <= this.page.totalPage) {
        this.loadList()
      }
    },
    changePageSize(number) {
      this.page.size = number
      this.page.number = 1
      this.loadList()
    },
    toFilterList(array) {
      let newArray = []
      let i = 0
      if (array && array.length > 0) {
        array.map(item => {
          newArray.push({
            id: i++,
            name: item
          })
        })
      }
      return newArray
    },
    listObjectToListString(array) {
      let newArray = []
      if (array && array.length > 0) {
        array.map(item => {
          newArray.push(item.name)
        })
      }
      return newArray
    },
    loadList() {
      this.loading = true
      trackingService
        .ListTracking({
          page: this.page,
          url: this.search.replace(/([.*+?=^!:${}()|[\]\\/\\])/g, '\\$1').trim(),
          campaign: this.listObjectToListString(this.filter[0].result),
          adGroup: this.listObjectToListString(this.filter[1].result),
          adId: this.listObjectToListString(this.filter[2].result)
        })
        .then(({ data }) => {
          if (data.data.list_link) {
            this.list = data.data.list_link
            this.page.total = data.data.total
            this.page.totalPage = Math.ceil(this.page.total / this.page.size)
            this.userEdit = Object.assign({}, data.data)
            this.selected = []
          } else {
            this.list = []
          }
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    addTrackingLinks() {
      this.createDialog = true
    },
    addSuccess(data) {
      this.trackingLink = data
      this.successDialog = true
      this.loadList()
      this.getListCampaignFilter()
      this.getListAdGroupFilter()
      this.getListAdIdFilter()
    },
    forBidden() {
      this.closeNewDialog()
      this.forbiddenDialog = true
    },
    closeNewDialog() {
      this.createDialog = false
    },
    closeSuccessDialog() {
      this.successDialog = false
    },
    createError() {
      this.createdError = true
      setTimeout(() => {
        this.createdError = false
      }, 2000)
    }
  },
  name: 'TrackingLinks'
}
</script>
