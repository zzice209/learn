import ApiService from '@/common/api.service'
import API_URL from '@/api/api.url'
const CommonService = {
  ListCampaignFilter(payload) {
    let URL = API_URL.GET_FILTER_LIST.CAMPAIGN
    return ApiService.get(URL)
  },
  ListAdGroupFilter(payload) {
    let URL = API_URL.GET_FILTER_LIST.AD_GROUP
    let object = {
      campaign: []
    };
    object.campaign = payload.campaign;
    return ApiService.post(URL, object)
  },
  ListAdIdFilter(payload) {
    let URL = API_URL.GET_FILTER_LIST.AD_ID
    let object = {
      campaign: [],
      adGroup: []
    };
    object.campaign = payload.campaign;
    object.adGroup = payload.adGroup;
    return ApiService.post(URL, object)
  }
}

export default CommonService
