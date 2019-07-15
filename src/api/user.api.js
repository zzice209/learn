import ApiService from '@/common/api.service'
import API_URL from '@/api/api.url'
const UserService = {
  Register(payload) {
    return ApiService.postWithoutLogout(API_URL.REGISTER, payload)
  },
  Login(payload) {
    return ApiService.postWithoutLogout(API_URL.LOGIN, payload)
  },
  ForgotPassword(payload) {
    return ApiService.postWithoutLogout(API_URL.FORGOT_PASS, payload)
  },
  Profile() {
    return ApiService.get(API_URL.GET_PROFILE)
  },
  UpdateProfile(payload) {
    return ApiService.put(API_URL.USER_PROFILE, payload)
  },
  ListUser(payload) {
    let URL = API_URL.LIST_USER + `?limit=${payload.page.size}&page=${payload.page.number}`
    if (payload.search) {
      URL += `&username=${payload.search}`
    }
    return ApiService.get(URL)
  },
  ChangePass(payload) {
    return ApiService.post(API_URL.CHANGE_PASS, payload)
  },
  ResetPass(payload) {
    return ApiService.put(API_URL.RESET_PASS, payload)
  },
  SaveUser(payload) {
    return ApiService.post(API_URL.USER, payload)
  },
  EditUser(payload) {
    return ApiService.put(API_URL.USER_TENANT, payload)
  },
  ViewUser(payload) {
    let URL = API_URL.USER + `/detail?userdetail=${payload.userdetail}`
    return ApiService.get(URL)
  },
  UpdateStatus(payload) {
    return ApiService.put(API_URL.UPDATE_STATUS, payload)
  }
}

export default UserService
