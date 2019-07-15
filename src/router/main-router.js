import Main from '@/components/page/Main';
import Dashboard from '@/components/page/dashboard/Dashboard'
import Users from '@/components/page/users-management/Users'
import TrackingLinks from '@/components/page/tracking-links-management/TrackingLinks'
import Leads from '@/components/page/leads-management/Leads'
import Audience from '@/components/page/audience-management/Audience'
import AudienceForm from '@/components/page/audience-management/AudienceForm'
import AudienceUpload from '@/components/page/audience-management/AudienceUpload'
import AudiencePostForm from '@/components/page/audience-management/AudiencePostForm'
import UserProfile from '@/components/page/user-profile-management/UserProfile'
import AdAccount from '@/components/page/ad-account-management/AdAccount'
import Page403 from '@/components/error/403';
// import i18n from '@/lang'
const MainRouter = {
  path: '/main',
  name: 'Main',
  component: Main,
  children: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/audience',
      name: 'Audience',
      component: Audience
    },
    {
      path: '/audience/create',
      name: 'AudienceForm',
      component: AudienceForm
    },
    {
      path: '/audience/createupload',
      name: 'AudienceUpload',
      component: AudienceUpload
    },
    {
      path: '/audience/post',
      name: 'AudiencePostForm',
      component: AudiencePostForm
    },
    {
      path: '/audience/editpost/*',
      name: 'AudiencePostForm',
      component: AudiencePostForm
    },
    {
      path: '/audience/edit/*',
      name: 'AudienceForm',
      component: AudienceForm
    },
    {
      path: '/tracking',
      name: 'Tracking',
      component: TrackingLinks
    },
    {
      path: '/leads',
      name: 'Leads',
      component: Leads
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }, {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    }, {
      path: '/adaccount',
      name: 'AdAccount',
      component: AdAccount
    }, {
      path: '/403',
      name: '403',
      component: Page403
    }, {
      path: '/403',
      name: '403',
      component: Page403
    }
  ]
}
export default MainRouter
