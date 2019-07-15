const MENU = [{
  name: 'Dashboard',
  icon: 'icon-layout',
  title: 'menu.dashboard',
  to: 'dashboard',
  permission: 'DASHBOARD_VIEW'
}, {
  name: 'Audience',
  icon: 'icon-users2',
  title: 'menu.audience',
  to: 'audience',
  permission: 'AUDIENCE_VIEW'
}, {
  name: 'Tracking',
  icon: 'icon-link',
  title: 'menu.tracking',
  to: 'tracking',
  permission: 'TRACKING_VIEW'
// }, {
//   name: 'Leads',
//   icon: 'icon-send',
//   title: 'menu.leads',
//   to: 'leads',
//   permission: 'LEAD_VIEW'
}, {
  name: 'Users',
  icon: 'icon-user3',
  title: 'menu.users',
  to: 'users',
  permission: 'USER_MANAGEMENT'
}, {
  name: 'AdAccount',
  icon: 'icon-sliders',
  title: 'menu.adAccount',
  to: 'adaccount',
  permission: 'AD_ACCOUNT_VIEW'
}]
export default MENU
