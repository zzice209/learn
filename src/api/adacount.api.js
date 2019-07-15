import ApiService from '@/common/api.service'
import API_URL from '@/api/api.url'
const AdAcountService = {
  AdBusiness(payload) {
    let URL = API_URL.AD_BUSINESS + `?access_token=${payload.token}`;
    return ApiService.get(URL)
  },
  AdAccount(payload) {
    return ApiService.get(API_URL.GET_AD_ACCOUNT);
  },

  ListBusiness(payload) {
    return ApiService.get(API_URL.LIST_ACCOUNT);
  },

  ListPagesBusiness(payload) {
    return ApiService.get(API_URL.ADD_PAGES);
  },

  ListAddAccount(payload) {
    return ApiService.get(API_URL.AD_BUSINESS);
  },
  AddAccount(payload) {
    return ApiService.post(API_URL.ADD_ACCOUNT, {data: payload});
  },
  UpdateAccountFb(payload) {
    return ApiService.put(API_URL.UPDATE_TOKEN_ACCOUNT_FB, payload);
  },
  ListAddPages(payload) {
    let URL = API_URL.AD_PAGES + `?access_token=${payload.token}`;
    return ApiService.get(URL)
  },
  AddPages(payload) {
    return ApiService.post(API_URL.ADD_PAGES, {data: payload});
  },
  ChangeActiveAccount(payload) {
    return ApiService.put(API_URL.CHANGE_ACTIVE_FB_ACCOUNT, payload);
  },
  ChangeActivePage(payload) {
    return ApiService.put(API_URL.CHANGE_ACTIVE_PAGE, payload);
  },
  UpdateTokenPage(payload) {
    return ApiService.put(API_URL.UPDATE_TOKEN_PAGE, payload);
  },
  ListAccountById(payload) {
    let URL = API_URL.LIST_AD_ACCOUNT_BY_ID + payload.id;
    return ApiService.get(URL);
  }
}

export default AdAcountService
