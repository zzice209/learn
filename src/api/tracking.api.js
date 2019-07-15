import ApiService from '@/common/api.service'
import API_URL from '@/api/api.url'
const TrackingService = {
  ListTracking(payload) {
    let URL = API_URL.LIST_TRACKING + `?limit=${payload.page.size}&page=${payload.page.number}`
    let object = {};
    object.page = payload.page.number;
    object.limit = payload.page.size;
    object.campaign = payload.campaign;
    object.adGroup = payload.adGroup;
    object.adId = payload.adId;
    object.url = payload.url;
    return ApiService.post(URL, object)
  },
  ListChannel(payload) {
    return ApiService.get(API_URL.LIST_CHANNEL)
  },
  CreateTracking(payload) {
    return ApiService.post(API_URL.TRACKING_LINK, payload)
  }
}

export default TrackingService
