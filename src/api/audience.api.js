import ApiService from '@/common/api.service'
import API_URL from '@/api/api.url'
const AudienceService = {
  ListAudience(payload) {
    let URL = API_URL.LIST_AUDIENCE + `?limit=${payload.page.size}&page=${payload.page.number}`
    if (payload.search) {
      URL += `&name=${payload.search}`
    }
    return ApiService.get(URL)
  },
  ListAddress(payload) {
    return ApiService.get(API_URL.LIST_ADDRESS)
  },
  ListJob(payload) {
    return ApiService.get(API_URL.LIST_JOB)
  },
  ListIncome(payload) {
    return ApiService.get(API_URL.LIST_INCOME)
  },
  ListCollege(payload) {
    let URL = API_URL.LIST_COLLEGE + `?name=${payload.name}&limit=${payload.limit}&page=${payload.page}`
    return ApiService.get(URL)
  },
  ListCompany(payload) {
    let URL = API_URL.LIST_COMPANY + `?name=${payload.name}&limit=${payload.limit}&page=${payload.page}`
    return ApiService.get(URL)
  },
  ListHobby(payload) {
    let URL = API_URL.LIST_HOBBY
    if (payload.pid) {
      URL += `?pid=${payload.pid}`
    }
    return ApiService.get(URL)
  },
  SearchHobby(payload) {
    let URL = API_URL.SEARCH_HOBBY
    if (payload.name) {
      URL += `?name=${payload.name.trim()}`
    }
    return ApiService.get(URL)
  },
  CreateAudience(payload) {
    return ApiService.post(API_URL.CREATE_AUDIENCE, payload);
  },
  CreateAudienceFromPost(payload) {
    return ApiService.post(API_URL.CREATE_AUDIENCE_FROM_POST, payload);
  },
  UpdateAudience(payload) {
    return ApiService.put(API_URL.CREATE_AUDIENCE, payload);
  },
  SubmitAudience(payload) {
    let URL = API_URL.SUBMIT_AUDIENCE.replace(':id', payload.id);
    return ApiService.put(URL, {data: payload.list, count: payload.count});
  },
  CloneAudience(payload) {
    let URL = API_URL.CLONE_AUDIENCE.replace(':id', payload.id);
    return ApiService.put(URL, payload);
  },
  ViewAudience(payload) {
    let URL = API_URL.DETAIL_AUDIENCE + `?id_audience=${payload.id}`
    return ApiService.get(URL);
  },
  CountAudience(payload) {
    return ApiService.post(API_URL.COUNT_AUDIENCE, payload);
  },
  ListAdAccount(payload) {
    return ApiService.get(API_URL.LIST_AD_ACCOUNT)
  },
  GetSummaryPostFb(payload) {
    let URL = API_URL.FB_POST_SUMMARY + `?post_id=${payload.post_id}`
    return ApiService.get(URL);
  },
  GetSummaryMultiPostFb(payload) {
    return ApiService.post(API_URL.COUNT_AUDIENCE_FROM_MULTI_POSTFB, payload);
  },
  UploadAudience(payload, reference) {
    return ApiService.upload(API_URL.UPLOAD_FILE_AUDIENCE, payload, reference)
  },
  VerifyFileStep3(payload, reference, start) {
    return ApiService.postWithProgressbar(API_URL.VERIFY_FILE_STEP3, payload, reference, start);
  },
  SaveAudienceFile(payload, reference) {
    return ApiService.saveAudienceFile(API_URL.SAVE_AUDIENCE_FILE, payload, reference);
  },
  AnalyticAudienceFile(payload) {
    return ApiService.post(API_URL.ANALYTIC_AUDIENCE_FILE, payload)
  }
}

export default AudienceService
