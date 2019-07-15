const HEARDERS = {
  dashboard: [{
    text: 'dashboard.table.channel',
    value: 'channel',
    align: 'left',
    sortable: false,
    style: 'width17 text-left'
  }, {
    text: 'dashboard.table.budget',
    value: 'budget',
    align: 'left',
    sortable: false,
    style: 'width9 text-left'
  }, {
    text: 'dashboard.table.views',
    value: 'views',
    align: 'left',
    sortable: false,
    style: 'width5 text-left'
  }, {
    text: 'dashboard.table.cpm',
    value: 'cpm',
    align: 'left',
    sortable: false,
    style: 'width8 text-left'
  }, {
    text: 'dashboard.table.click',
    value: 'click',
    align: 'left',
    sortable: false,
    style: 'width5 text-left'
  }, {
    text: 'dashboard.table.cpc',
    value: 'cpc',
    align: 'left',
    sortable: false,
    style: 'width7 text-left'
  }, {
    text: 'dashboard.table.ctr',
    value: 'ctr',
    align: 'left',
    sortable: false,
    style: 'width7 text-left'
  }, {
    text: 'dashboard.table.transform',
    value: 'transform',
    align: 'left',
    sortable: false,
    style: 'width5 text-left'
  }, {
    text: 'dashboard.table.cpl',
    value: 'cpl',
    align: 'left',
    sortable: false,
    style: 'width7 text-left'
  }, {
    text: 'dashboard.table.cr',
    value: 'cr',
    align: 'left',
    sortable: false,
    style: 'width7 text-left'
  }, {
    text: 'dashboard.table.dailyBudget',
    value: 'dailyBudget',
    align: 'left',
    sortable: false,
    style: 'width10 text-left'
  }, {
    text: 'dashboard.table.tracking_click',
    value: 'trackingClick',
    align: 'left',
    sortable: false,
    style: 'width7 text-left'
  }, {
    text: 'dashboard.table.tracking_lead',
    value: 'trackingLead',
    align: 'left',
    sortable: false,
    style: 'width6 text-left'
  }],
  users: [{
    text: 'users.table.username',
    value: 'username',
    align: 'left',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'users.table.email',
    value: 'email',
    align: 'left',
    sortable: false,
    style: 'width17 text-left'
  }, {
    text: 'users.table.status',
    value: 'status',
    align: 'left',
    sortable: false,
    style: 'width17 text-left'
  }, {
    text: 'users.table.phone',
    value: 'phone',
    align: 'left',
    sortable: false,
    style: 'width15 text-left'
  }, {
    text: 'users.table.action',
    value: 'action',
    align: 'right',
    sortable: false,
    style: 'width28 text-right'
  }],
  trackingLinks: [{
    text: 'trackingLinks.table.rootLink',
    value: 'url',
    align: 'left',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'trackingLinks.table.channel',
    value: 'source',
    align: 'left',
    sortable: false,
    style: 'width10 text-left'
  }, {
    text: 'trackingLinks.table.campaign',
    value: 'campaign',
    align: 'left',
    sortable: false,
    style: 'width10 text-left'
  }, {
    text: 'trackingLinks.table.groupAds',
    value: 'adGroup',
    align: 'left',
    sortable: false,
    style: 'width12 text-left'
  }, {
    text: 'trackingLinks.table.idAds',
    value: 'adID',
    align: 'right',
    sortable: false,
    style: 'width12 text-left'
  }, {
    text: 'trackingLinks.table.fullLink',
    value: 'middleURL',
    align: 'right',
    sortable: false,
    style: 'width18 text-left'
  }, {
    text: 'trackingLinks.table.shortLink',
    value: 'bitlyURL',
    align: 'right',
    sortable: false,
    style: 'width18 text-left'
  }],
  leads: [{
    text: 'leads.table.url',
    value: 'url',
    align: 'left',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'leads.table.channel',
    value: 'email',
    align: 'left',
    sortable: false,
    style: 'width10 text-left'
  }, {
    text: 'leads.table.campaign',
    value: 'status',
    align: 'left',
    sortable: false,
    style: 'width10 text-left'
  }, {
    text: 'leads.table.groupAds',
    value: 'adGroup',
    align: 'left',
    sortable: false,
    style: 'width12 text-left'
  }, {
    text: 'leads.table.idAds',
    value: 'adId',
    align: 'right',
    sortable: false,
    style: 'width12 text-left'
  }, {
    text: 'leads.table.user',
    value: 'username',
    align: 'right',
    sortable: false,
    style: 'width8 text-left'
  }, {
    text: 'leads.table.phone',
    value: 'phone',
    align: 'right',
    sortable: false,
    style: 'width10 text-left'
  }, {
    text: 'leads.table.email',
    value: 'email',
    align: 'right',
    sortable: false,
    style: 'width18 text-left'
  }],
  audience: [{
    text: 'audience.table.audience',
    value: 'name',
    align: 'left',
    sortable: false,
    style: 'width20 text-left',
    color: 'color: #2C4B6C !important'
  }, {
    text: 'audience.table.result',
    value: 'count',
    align: 'left',
    sortable: false,
    style: 'width10 text-left'
  }, {
    text: 'audience.table.creator',
    value: 'user_id',
    align: 'left',
    sortable: false,
    style: 'width15 text-left'
  }, {
    text: 'audience.table.typeAudience',
    value: 'text',
    align: 'right',
    sortable: false,
    style: 'width15 text-left'
  }, {
    text: 'audience.table.status',
    value: 'status',
    align: 'right',
    sortable: false,
    style: 'width15 text-left'
  }, {
    text: 'audience.table.action',
    value: 'action',
    align: 'right',
    sortable: false,
    style: 'width20 text-right'
  }],
  adAccount: [{
    text: 'adAccount.table.accountName',
    value: 'accountName',
    align: 'right',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'adAccount.table.id',
    value: 'id',
    align: 'right',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'adAccount.table.status',
    value: 'status',
    align: 'right',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'adAccount.table.action',
    value: 'action',
    align: 'right',
    sortable: false,
    style: 'width40 text-right'
  }],
  adAccountPages: [{
    text: 'adAccount.table.accountName',
    value: 'accountName',
    align: 'right',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'adAccount.table.url',
    value: 'id',
    align: 'right',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'adAccount.table.status',
    value: 'status',
    align: 'right',
    sortable: false,
    style: 'width20 text-left'
  }, {
    text: 'adAccount.table.action',
    value: 'action',
    align: 'right',
    sortable: false,
    style: 'width40 text-right'
  }]
}

export default HEARDERS
