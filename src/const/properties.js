/* Type
  text = Nomal
  money = 1.000
  precent = %
  avatar = with avatar
  link = link with copy
*/
const PROPERTIES = {
  dashboard: [{
    prop: 'spend',
    type: 'money'
  }, {
    prop: 'impression',
    type: 'text'
  }, {
    prop: 'cpm',
    type: 'money'
  }, {
    prop: 'click',
    type: 'text'
  }, {
    prop: 'cpc',
    type: 'money'
  }, {
    prop: 'ctr',
    type: 'percent'
  }, {
    prop: 'conversion',
    type: 'text'
  }, {
    prop: 'cpl',
    type: 'money'
  }, {
    prop: 'cr',
    type: 'percent'
  }, {
    prop: 'dailyBudget',
    type: 'money'
  }, {
    prop: 'trackingClick',
    type: 'text'
  }, {
    prop: 'trackingLead',
    type: 'text'
  }],
  users: [{
    prop: 'username',
    type: 'avatar'
  }, {
    prop: 'email',
    type: 'text'
  }, {
    prop: 'status',
    type: 'status'
  }, {
    prop: 'phone',
    type: 'text'
  }],
  trackingLinks: [{
    prop: 'url',
    type: 'text'
  }, {
    prop: 'source',
    type: 'text'
  }, {
    prop: 'campaign',
    type: 'text'
  }, {
    prop: 'adGroup',
    type: 'text'
  }, {
    prop: 'adID',
    type: 'text'
  }, {
    prop: 'middleURL',
    type: 'link'
  }, {
    prop: 'bitlyURL',
    type: 'link'
  }],
  leads: [{
    prop: 'url',
    type: 'text'
  }, {
    prop: 'channel',
    type: 'text'
  }, {
    prop: 'campaign',
    type: 'text'
  }, {
    prop: 'adGroup',
    type: 'text'
  }, {
    prop: 'adId',
    type: 'text'
  }, {
    prop: 'username',
    type: 'text'
  }, {
    prop: 'phone',
    type: 'text'
  }, {
    prop: 'email',
    type: 'text'
  }],
  audience: [{
    prop: 'name',
    type: 'text'
  }, {
    prop: 'count',
    type: 'number'
  }, {
    prop: 'nameOfUser',
    type: 'text'
  }, {
    prop: 'typeAudience',
    type: 'text'
  }],
  adAccount: [{
    prop: 'accountName',
    type: 'text'
  }, {
    prop: 'id',
    type: 'text'
  }, {
    prop: 'status',
    type: 'text'
  }, {
    prop: 'action',
    type: 'text'
  }],
  adAccountPages: [{
    prop: 'accountName',
    type: 'text'
  }, {
    prop: 'url',
    type: 'text'
  }, {
    prop: 'status',
    type: 'text'
  }, {
    prop: 'action',
    type: 'text'
  }]
}

export default PROPERTIES
