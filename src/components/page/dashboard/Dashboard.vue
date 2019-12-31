<template>
  <div class="dashboard">
    <div class="title-group">
      <v-layout row wrap>
        <div class="page-title">
          <span>{{$t('dashboard.title')}}</span>
        </div>
        <cbt-datepicker @setDateRange="setDateRange"></cbt-datepicker>
      </v-layout>
    </div>
    <div class="cbt-filter-container">
      <v-layout class="cbt-filter-group" row wrap>
        <cbt-select
          v-for="(item, index) in filter"
          :key="index"
          :list="listFilter[item.type]"
          :type="item.type"
          :title="item.title"
          :result="item.result"
          :scrollAble="true"
          :searchAble="item.searchAble"
          :searchServer="item.searchServer"
          @updateFilter="updateFilter"
          @appendFilter="appendFilter"
          :total="listFilterPage[item.type]"
        ></cbt-select>
      </v-layout>
    </div>
    <div v-if="pending" class="cbt-alert alert-error mt-3 ml-3 mr-3">
      <v-layout row wrap>
        <v-icon class="cbt-icon font-size-14 color-warning icon-alert-triangle mr-2"></v-icon>
        <span class="text-line font-regular font-size-12 color-warning">{{$t('account.noPermission')}}</span>
      </v-layout>
    </div>
    <div v-if="firstTime === 'true' && !pending" class="cbt-alert alert-success mt-3 ml-3 mr-3">
      <v-layout row wrap>
        <v-icon class="cbt-icon font-size-14 color-main icon-check-square mr-2"></v-icon>
        <span class="text-line font-regular font-size-12 color-main mr-3">{{$t('account.permission')}}</span>
        <div class="cbt-btn-group">
          <v-btn flat class="cbt-btn accent-main" @click="createAudience">{{$t('audience.addSecond')}}</v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-icon @click="updateFirstTime" class="cbt-icon font-size-14 color-main icon-x mr-2"></v-icon>
      </v-layout>
    </div>
    <div class="dashboard-content-container">
      <v-tabs class="dashboard-content-tabs" mobile-break-point="1468" next-icon prev-icon slot="extension" v-model="tab" grow>
        <v-tabs-slider color="none"></v-tabs-slider>
        <v-tab class="dashboard-content-tab" active-class="dashboard-content-tab-active" @click="viewData(item.tab)" v-for="(item, index) in dashboard" :key="index" :ripple="false">
          <v-layout class="dashboard-tab-container" row wrap>
            <div :class="item.background + ' dashboard-tab-icon-group'">
              <span :class="item.color +' '+ item.icon + ' dashboard-tab-icon'"></span>
            </div>
            <div class="dashboard-tab-content">
              <div class="dashboard-tab-title">{{$t(item.title)}}</div>
              <div class="dashboard-tab-detail">
                <span v-if="!loading && item.display === 'numberic'">{{item.detail | numberic}}</span>
                <span v-if="!loading && item.display === 'percent'">{{item.detail}}%</span>
                <span v-if="loading" class="icon-more-horizontal"></span>
              </div>
            </div>
          </v-layout>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index) in dashboard" :key="index">
          <v-card>
            <div class="dashboard-content">
              <loading :show="loading"></loading>
              <div class="dashboard-chart-group">
                <v-tabs>
                  <v-tabs-slider color="none" :class="item.theme" style="width: 100%"></v-tabs-slider>
                  <v-layout row wrap>
                    <v-tab :key="item.title" :ripple="false">{{$t('chart.byDay')}}</v-tab>
                    <v-tab :key="item.type" :ripple="false" v-if="item.byTime">{{$t('chart.byTime')}}</v-tab>
                    <v-spacer></v-spacer>
                    <div class="cbt-export cbt-btn-group pull-right">
                      <v-btn class="cbt-btn accent-outline">
                        <v-icon class="cbt-icon text-color-4 icon-download3"></v-icon>
                        <span class="font-semi">{{$t('export.download')}}</span>
                      </v-btn>
                    </div>
                  </v-layout>
                  <v-tabs-items>
                    <v-tab-item class="mt-4" :key="item.title">
                      <cbt-charts :id="index + ' ' +item.title" :options="chartOptions.byDay" :title="item.title" :type="item.type" :data="dataByDay" :color="item.colorCode"></cbt-charts>
                    </v-tab-item>
                    <v-tab-item class="mt-4" :key="item.type" v-if="item.byTime">
                      <cbt-charts :id="index + ' ' +item.type" :options="chartOptions.byTime" :title="item.title" :type="item.type" :data="dataByTime" :color="item.colorCode"></cbt-charts>
                    </v-tab-item>
                  </v-tabs-items>
                </v-tabs>
              </div>
              <cbt-table class="cbt-table table-dashboard" :list="objects" :headers="headers.dashboard" :isChild="0" :properties="properties.dashboard" :loading="loadMore"></cbt-table>
            </div>
            <!-- <div class="cbt-pagination pull-right">
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
                      <v-text-field class="cbt-pagination-input cbt-textfield" solo type="number" min="1" :max="page.totalPage" @change="changePage(page.number)" v-model="page.number"></v-text-field>
                      <span class="cbt-pagination-text">/ {{page.totalPage}}</span>
                      <div class="cbt-btn-group cbt-navigation-button-group">
                        <v-btn @click="changePage(page.number-1)" :disabled="page.number == 1" class="cbt-btn cbt-navigation-button accent-outline">
                          <v-icon class="cbt-icon icon-chevron-left"></v-icon>
                        </v-btn>
                        <v-btn @click="changePage(page.number+1)" :disabled="page.number == page.totalPage" class="cbt-btn cbt-navigation-button accent-outline">
                          <v-icon class="cbt-icon icon-chevron-right"></v-icon>
                        </v-btn>
                      </div>
                    </v-layout>
                  </div>
                </div>
              </v-layout>
            </div>-->
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import FILTER from '@/const/filter.js'
import HEADERS from '@/const/headers.js'
import PROPERTIES from '@/const/properties.js'
import CHART_OPTIONS from '@/const/chartoptions.js'

import CBTSelect from '@/components/common/CBTSelect'
import CBTDatePicker from '@/components/common/CBTDatePicker'
import CBTCharts from '@/components/common/CBTCharts'

import dashboardService from '@/api/dashboard.api'
import Cookies from 'js-cookie'

export default {
  components: {
    'cbt-select': CBTSelect,
    'cbt-datepicker': CBTDatePicker,
    'cbt-charts': CBTCharts
  },
  data() {
    return {
      permission: {},
      firstTime: false,
      pending: false,
      loading: false,
      loadMore: false,
      tab: 0,
      title: 'ChiÃ¡ÂºÂ¿n dÃ¡Â»â€¹ch',
      daterangepicker: '',
      startDateFilter: moment()
        .subtract(6, 'days')
        .startOf('date')
        .format('YYYY-MM-DD'),
      endDateFilter: moment()
        .endOf('date')
        .format('YYYY-MM-DD'),
      listFilter: {
        customer: [],
        channel: [],
        campaign: [],
        groupAds: [],
        idAds: []
      },
      listFilterPage: {
        campaign: 1,
        campaignPage: 1,
        searchCampaign: '',
        totalCampaign: 0,
        groupAds: 1,
        groupAdsPage: 1,
        searchGroupAds: '',
        totalGroupAds: 0,
        idAds: 1,
        idAdsPage: 1,
        searchIdAds: '',
        totalIdAds: 0
      },
      dashboard: [{
        tab: 1,
        icon: 'icon-navigation',
        title: 'dashboard.tab.totalClick',
        type: 'type.click',
        byTime: true,
        detail: null,
        display: 'numberic',
        color: 'color-main',
        colorCode: '#3DAA62',
        theme: 'accent-main',
        background: 'opacity-main-background'
      }, {
        tab: 2,
        icon: 'icon-refresh-ccw',
        title: 'dashboard.tab.totaltransform',
        type: 'type.totaltransform',
        byTime: true,
        detail: null,
        display: 'numberic',
        color: 'color-2',
        colorCode: '#42B6F6',
        theme: 'accent-2',
        background: 'opacity-2-background'
      }, {
        tab: 3,
        icon: 'icon-trending-up',
        title: 'dashboard.tab.averageRate',
        type: 'type.averageRate',
        byTime: true,
        detail: null,
        display: 'percent',
        color: 'color-3',
        colorCode: '#3D62AA',
        theme: 'accent-3',
        background: 'opacity-3-background'
      }, {
        tab: 4,
        icon: 'icon-money-1',
        title: 'dashboard.tab.totalBudget',
        type: 'type.totalBudget',
        byTime: false,
        detail: null,
        display: 'numberic',
        color: 'color-4',
        colorCode: '#4BCACA',
        theme: 'accent-4',
        background: 'opacity-4-background'
      }
      ],
      objects: [],
      chartOptions: CHART_OPTIONS,
      headers: HEADERS,
      properties: PROPERTIES,
      result: [],
      dataByDay: [],
      dataByTime: [],
      page: {
        size: 10,
        number: 1,
        total: 1,
        totalPage: 1,
        sortType: '',
        sortBy: ''
      },
      size: [5, 10, 20, 50, 100],
      filter: FILTER.dashboard
    }
  },
  mounted() {
    history.pushState(null, null, 'dashboard');
    window.addEventListener('popstate', function(event) {
      history.pushState(null, null, 'dashboard');
    });
    this.firstTime = Cookies.get('firstTime')
    this.pending = this.$store.state.auth.pending
    this.permission = this.$store.state.auth.permission
    if (this.permission.DASHBOARD_VIEW === '1') {
      this.getSummary(1)
      this.getDetail()
      this.getListCampaignFilter()
      this.getListAdGroupFilter()
      this.getListAdIdFilter()
    } else {
    }
    let windowWitdh = window.innerWidth
    let chartWidth = parseInt(document.getElementsByClassName('highcharts-container')[0].style.width)
    if (chartWidth / windowWitdh > 0.9) {
      console.log('true')
      this.chartOptions.byDay.chart.width = parseInt(chartWidth) * 0.91
    } else {
      console.log('false')
    }
    // let width = document.getElementsByClassName('highcharts-container')[0].style.width
    // this.chartOptions.byDay.chart.width = parseInt(width) * 0.91
    // let element = document.getElementsByClassName('highcharts-container')
    // for (let i = 0; i < element.length; i++) {
    //   element[i].style.width = '100%'
    // }
    // let element2 = document.getElementsByClassName('highcharts-root')
    // for (let i = 0; i < element2.length; i++) {
    //   element2[i].style.width = '100%'
    // }
  },
  created() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    changePage(number) {
      this.page.number = number
      if (this.page.number > 0 && this.page.number <= this.page.totalPage) {
        this.getDetail()
      }
    },
    changePageSize(number) {
      this.page.size = number
      this.page.number = 1
      this.getDetail()
    },
    viewData(index) {
      this.getSummary(index)
    },
    updateFirstTime() {
      Cookies.set('firstTime', 'false')
      this.firstTime = 'false'
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
          this.page.number = 1
          this.loadList()
        }
      }
    },
    listIdOf(array, id) {
      let newArray = []
      if (array && array.length > 0) {
        array.map(item => {
          newArray.push(item[id])
        })
      }
      return newArray
    },
    loadList() {
      this.loadMore = true
      this.getDetail()
      this.getSummary(this.tab + 1)
    },
    createAudience() {
      Cookies.set('firstTime', 'false')
      this.firstTime = 'false'
      this.$router.push({
        name: 'AudienceForm'
      })
    },
    setDateRange(picker) {
      this.startDateFilter = moment(picker.startDate.startOf('date')).format('YYYY-MM-DD')
      this.endDateFilter = moment(picker.endDate.endOf('date')).format('YYYY-MM-DD')
      this.getSummary(1)
      this.getDetail()
    },
    getListCampaignFilter() {
      dashboardService
        .GetFilterCampaign({
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad'),
          limit: 10,
          page: 1
        })
        .then(({
          data
        }) => {
          this.loading = false
          this.listFilterPage.campaign = data.data.total
          this.listFilter.campaign = data.data.list_campaign
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    appendListCampaignFilter(page, search) {
      dashboardService
        .GetFilterCampaign({
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad'),
          limit: 10,
          page: page,
          name: search
        })
        .then(({
          data
        }) => {
          this.loading = false
          this.listFilterPage.campaign = data.data.total
          if (this.listFilterPage.searchCampaign !== search) {
            this.listFilter.campaign = data.data.list_campaign
            this.listFilterPage.searchCampaign = search
          } else {
            this.listFilter.campaign = this.listFilter.campaign.concat(data.data.list_campaign)
          }
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    getListAdGroupFilter() {
      dashboardService
        .GetFilterAdGroup({
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad'),
          limit: 10,
          page: 1
        })
        .then(({
          data
        }) => {
          this.loading = false
          this.listFilterPage.groupAds = data.data.total
          this.listFilter.groupAds = data.data.list_adset
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    appendListAdGroupFilter(page, search) {
      dashboardService
        .GetFilterAdGroup({
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad'),
          limit: 10,
          page: page,
          name: search
        })
        .then(({
          data
        }) => {
          this.loading = false
          this.listFilterPage.groupAds = data.data.total
          if (this.listFilterPage.searchGroupAds !== search) {
            this.listFilter.groupAds = data.data.list_adset
            this.listFilterPage.searchGroupAds = search
          } else {
            this.listFilter.groupAds = this.listFilter.groupAds.concat(data.data.list_adset)
          }
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    getListAdIdFilter() {
      dashboardService
        .GetFilterAdId({
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad'),
          limit: 10,
          page: 1
        })
        .then(({
          data
        }) => {
          this.loading = false
          this.listFilterPage.idAds = data.data.total
          this.listFilter.idAds = data.data.list_ad
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    appendListAdIdFilter(page, search) {
      dashboardService
        .GetFilterAdId({
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad'),
          limit: 10,
          page: page,
          name: search
        })
        .then(({
          data
        }) => {
          this.loading = false
          this.listFilterPage.idAds = data.data.total
          if (this.listFilterPage.searchIdAds !== search) {
            this.listFilter.idAds = data.data.list_ad
            this.listFilterPage.idAdsPage = search
          } else {
            this.listFilter.idAds = this.listFilter.idAds.concat(data.data.list_ad)
          }
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    getDetail() {
      this.loadMore = true
      dashboardService
        .GetDetail({
          from: this.startDateFilter,
          to: this.endDateFilter,
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad'),
          page: this.page.number,
          limit: this.page.size
        })
        .then(({
          data
        }) => {
          this.loadMore = false
          this.objects = data.data.listCampaign
          this.page.total = data.data.totalCampaign
          this.page.totalPage = Math.ceil(this.page.total / this.page.size)
        })
        .catch(e => {
          this.error = true
          this.loadMore = false
        })
    },
    getAppendDetail() {
      if (this.objects.length < this.page.total) {
        this.loadMore = true
        dashboardService
          .GetDetail({
            from: this.startDateFilter,
            to: this.endDateFilter,
            campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
            adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
            adId: this.listIdOf(this.filter[2].result, 'id_ad'),
            page: this.page.number,
            limit: this.page.size
          })
          .then(({
                   data
                 }) => {
            this.loadMore = false
            this.objects = this.objects.concat(data.data.listCampaign)
            this.page.total = data.data.totalCampaign
            this.page.totalPage = Math.ceil(this.page.total / this.page.size)
          })
          .catch(e => {
            this.error = true
            this.loadMore = false
          })
      } else {
        this.loadMore = false
      }
    },
    appendFilter(data) {
      switch (data.type) {
        case 'campaign':
          if (this.listFilterPage.searchCampaign !== data.search) {
            this.listFilterPage.campaignPage = 0
            this.appendListCampaignFilter(++this.listFilterPage.campaignPage, data.search)
          } else {
            this.appendListCampaignFilter(++this.listFilterPage.campaignPage, data.search)
          }
          break
        case 'groupAds':
          if (this.listFilterPage.searchGroupAds !== data.search) {
            this.listFilterPage.groupAdsPage = 0
            this.appendListAdGroupFilter(++this.listFilterPage.groupAdsPage, data.search)
          } else {
            this.appendListAdGroupFilter(++this.listFilterPage.groupAdsPage, data.search)
          }
          break
        case 'idAds':
          if (this.listFilterPage.searchIdAds !== data.search) {
            this.listFilterPage.idAdsPage = 0
            this.appendListAdIdFilter(++this.listFilterPage.idAdsPage, data.search)
          } else {
            this.appendListAdIdFilter(++this.listFilterPage.idAdsPage, data.search)
          }
          break
      }
    },
    getSummary(type) {
      this.loading = true
      dashboardService
        .GetSummary({
          from: this.startDateFilter,
          to: this.endDateFilter,
          type: type,
          campaign: this.listIdOf(this.filter[0].result, 'id_campaign'),
          adGroup: this.listIdOf(this.filter[1].result, 'id_ad_set'),
          adId: this.listIdOf(this.filter[2].result, 'id_ad')
        })
        .then(({
          data
        }) => {
          this.dataByDay = data.data.listDataDay
          this.dataByTime = data.data.listDataHour
          this.dashboard[0].detail = data.data.numberData.click
          this.dashboard[1].detail = data.data.numberData.change
          this.dashboard[2].detail = data.data.numberData.average
          this.dashboard[3].detail = data.data.numberData.spend
          this.loading = false
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    },
    handleScroll(e) {
      if ((window.oldScroll <= window.scrollY) && (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100) && this.loadMore === false) {
        this.loadMore = true
        this.page.number = this.page.number + 1
        this.getAppendDetail()
      }
      window.oldScroll = window.scrollY
    }
  },
  name: 'Dashboard'
}
</script>
