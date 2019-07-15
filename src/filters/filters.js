import Vue from 'vue'
import i18n from '../lang';
// import i18n from '@/lang'

const PADDING = '000000';
const DECIMAL_SEPARATOR = '.';
const fractionSize = 0;
// const THOUSANDS_SEPARATOR = '\\.';
const DOT_SEPARATOR = ',';
Vue.filter('money', function (value, type) {
  let [integer, fraction = ''] = (value || '').toString().replace(/\s/g, '').split(DECIMAL_SEPARATOR);

  fraction = fractionSize > 0 ? DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : '';
  let result = '';
  let i = 0;
  if (integer.length > 1) {
    while (i < integer.length) {
      if (integer[i] === '0' && i < integer.length - 1) {
        i++;
      } else {
        break;
      }
    }
    for (; i < integer.length; i++) {
      result += integer[i];
    }
    integer = result;
  }
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, DOT_SEPARATOR);
  if (integer || fraction) {
    return integer + fraction + ' ' + i18n.t('common.unitMoney');
  } else {
    return '0' + ' ' + i18n.t('common.unitMoney');
  }
})
Vue.filter('numberic', function (value, type) {
  let [integer, fraction = ''] = (value || '').toString().replace(/\s/g, '').split(DECIMAL_SEPARATOR);

  fraction = fractionSize > 0 ? DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : '';
  let result = '';
  let i = 0;
  if (integer.length > 1) {
    while (i < integer.length) {
      if (integer[i] === '0' && i < integer.length - 1) {
        i++;
      } else {
        break;
      }
    }
    for (; i < integer.length; i++) {
      result += integer[i];
    }
    integer = result;
  }
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, DOT_SEPARATOR);
  if (integer || fraction) {
    return integer + fraction;
  } else {
    return '0';
  }
})
const PENDING = 1; // Pending: 'status.user.pending'
const ACTIVE = 2; // Active: 'status.user.active'
const REJECTED = 3; // Rejected: 'status.user.rejected'
const SUSPENDED = 4; // Suspended: 'status.user.suspended'

Vue.filter('status', function (value, type) {
  switch (type) {
    case 'user':
      {
        switch (value) {
          case PENDING:
            return i18n.t('status.user.pending');
          case ACTIVE:
            return i18n.t('status.user.active');
          case REJECTED:
            return i18n.t('status.user.rejected');
          case SUSPENDED:
            return i18n.t('status.user.suspended');
          default:
            return '';
        }
      }
  }
})

const MAXCHAR = 15;
Vue.filter('shortcut', function (value, maxlength) {
  if (maxlength) {
    if (value.toString().length > maxlength) {
      return value.toString().substring(0, maxlength) + '...';
    } else {
      return value.toString();
    }
  } else {
    if (value.toString().length > MAXCHAR) {
      return value.toString().substring(0, MAXCHAR) + '...';
    } else {
      return value.toString();
    }
  }
})
