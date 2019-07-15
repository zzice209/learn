<template>
<div class="cbt-date-picker-container">
  <v-input solo class="cbt-input cbt-date-picker" prepend-icon="cbt-icon color-main icon-calendar2">
    <span class="cbt-date-picker-label mr-1">{{$t('datepicker.time')}}</span>
    <input name="daterangepicker" class="cbt-date-picker-input">
  </v-input>
</div>
</template>

<script>
import i18n from '@/lang';
export default {
  data() {
    return {
      ranges: {}
    };
  },
  created() {
    this.ranges[i18n.t('datepicker.ranges.today')] = [moment().startOf('date'), moment().endOf('date')];
    this.ranges[i18n.t('datepicker.ranges.yesterday')] = [
      moment()
        .subtract(1, 'days')
        .startOf('date'),
      moment()
        .subtract(1, 'days')
        .endOf('date')
    ];
    this.ranges[i18n.t('datepicker.ranges.last7days')] = [
      moment()
        .subtract(6, 'days')
        .startOf('date'),
      moment().endOf('date')
    ];
    this.ranges[i18n.t('datepicker.ranges.last30days')] = [
      moment()
        .subtract(29, 'days')
        .startOf('date'),
      moment().endOf('date')
    ];
    //     '30 ngày gần nhất': [
    //       moment()
    //         .subtract(29, 'days')
    //         .startOf('date'),
    //       moment().endOf('date')
    //     ]
    //     // 'Tháng này': [
    //     //   moment()
    //     //     .startOf('month')
    //     //     .startOf('date'),
    //     //   moment()
    //     //     .endOf('month')
    //     //     .endOf('date')
    //     // ],
    //     // 'Tháng trước': [
    //     //   moment()
    //     //     .subtract(1, 'month')
    //     //     .startOf('month')
    //     //     .startOf('date'),
    //     //   moment()
    //     //     .subtract(1, 'month')
    //     //     .endOf('month')
    //     //     .endOf('date')
    //     // ]
    //   }
  },
  mounted() {
    this.daterangepicker = $('[name="daterangepicker"]');
    this.daterangepicker.daterangepicker({
      startDate: moment()
        .subtract(6, 'days')
        .startOf('date'),
      endDate: moment().endOf('date'),
      ranges: this.ranges,
      locale: {
        format: 'DD/MM/YYYY',
        applyLabel: i18n.t('datepicker.accept'),
        cancelLabel: i18n.t('datepicker.cancel'),
        fromLabel: i18n.t('datepicker.fromdate'),
        toLabel: i18n.t('datepicker.toDate'),
        weekLabel: i18n.t('datepicker.week'),
        customRangeLabel: i18n.t('datepicker.custom'),
        daysOfWeek: [
          i18n.t('datepicker.shortDayOfWeek.sunday'),
          i18n.t('datepicker.shortDayOfWeek.monday'),
          i18n.t('datepicker.shortDayOfWeek.tuesday'),
          i18n.t('datepicker.shortDayOfWeek.wednesday'),
          i18n.t('datepicker.shortDayOfWeek.thursday'),
          i18n.t('datepicker.shortDayOfWeek.friday'),
          i18n.t('datepicker.shortDayOfWeek.saturday')
        ],
        monthNames: [
          i18n.t('datepicker.monthOfYear.january') + ',',
          i18n.t('datepicker.monthOfYear.february') + ',',
          i18n.t('datepicker.monthOfYear.march') + ',',
          i18n.t('datepicker.monthOfYear.april') + ',',
          i18n.t('datepicker.monthOfYear.may') + ',',
          i18n.t('datepicker.monthOfYear.june') + ',',
          i18n.t('datepicker.monthOfYear.july') + ',',
          i18n.t('datepicker.monthOfYear.august') + ',',
          i18n.t('datepicker.monthOfYear.september') + ',',
          i18n.t('datepicker.monthOfYear.october') + ',',
          i18n.t('datepicker.monthOfYear.november') + ',',
          i18n.t('datepicker.monthOfYear.december') + ','
        ]
      },
      applyButtonClasses: 'cbt-btn accent-main',
      cancelButtonClasses: 'cbt-btn accent-semi',
      opens: 'center'
    });
    this.daterangepicker.on('apply.daterangepicker', (ev, picker) => {
      this.setDateRange(picker);
    });
  },
  methods: {
    setDateRange(picker) {
      this.$emit('setDateRange', picker);
    }
  },
  name: 'DatePicker'
};
</script>
