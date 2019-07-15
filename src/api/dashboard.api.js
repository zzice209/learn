import ApiService from '@/common/api.service'
import API_URL from '@/api/api.url'
const DashboardService = {
  GetSummary(payload) {
    let URL = API_URL.DASHBOARD_SUMMARY_DAY
    let object = {}
    object.from = payload.from;
    object.to = payload.to;
    object.typeReport = payload.type;
    object.campaignId = payload.campaign;
    object.adSetId = payload.adGroup;
    object.adId = payload.adId;
    return ApiService.post(URL, object)
  },
  GetDetail(payload) {
    let URL = API_URL.DASHBOARD_DETAIL
    let object = {}
    object.from = payload.from;
    object.to = payload.to;
    object.typeReport = payload.type;
    object.campaignId = payload.campaign;
    object.adSetId = payload.adGroup;
    object.adId = payload.adId;
    object.page = payload.page;
    object.limit = payload.limit;
    return ApiService.post(URL, object)
  },
  GetFilterCampaign(payload) {
    let URL = API_URL.DASHBOARD_FILTER_LIST.CAMPAIGN
    return ApiService.post(URL, payload)
  },
  GetFilterAdGroup(payload) {
    let URL = API_URL.DASHBOARD_FILTER_LIST.AD_GROUP
    let object = {};
    object.id_campaign = payload.campaign;
    object.page = payload.page;
    object.limit = payload.limit;
    object.name = payload.name;
    return ApiService.post(URL, object)
  },
  GetFilterAdId(payload) {
    let URL = API_URL.DASHBOARD_FILTER_LIST.AD_ID
    let object = {};
    object.id_campaign = payload.campaign;
    object.id_ad_set = payload.adGroup;
    object.page = payload.page;
    object.limit = payload.limit;
    object.name = payload.name;
    return ApiService.post(URL, object)
  }
}

export default DashboardService
