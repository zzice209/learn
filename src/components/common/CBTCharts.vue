<template>
  <highcharts v-if="!loading" :id="id" class="cbt-chart" :options="optionTable"></highcharts>
</template>
<script>
import i18n from '@/lang';
export default {
  props: ['id', 'options', 'type', 'data', 'color', 'title'],
  data() {
    return {
      loading: false,
      optionTable: {}
    };
  },
  created() {
    this.loading = true;
    this.updateData();
  },
  mounted() {
    this.loading = true;
    this.updateData();
  },
  watch: {
    data: function(newVal, oldVal) {
      this.loading = true;
      this.updateData();
    }
  },
  methods: {
    createCategories(array) {
      let newArray = [];
      array.map(item => {
        newArray.push(item._id);
      });
      return newArray;
    },
    updateData() {
      Object.assign(this.optionTable, this.options);
      this.optionTable.tooltip = {
        pointFormat: `{point.y} ${i18n.t(this.type)}`
      };
      this.optionTable.xAxis.categories = this.createCategories(this.data);
      this.optionTable.series = [
        {
          name: i18n.t(this.title),
          data: this.convertData(this.data),
          color: this.color
        }
      ];
      this.optionTable.margin = 0;
      this.optionTable.defaultSeriesType = 'areaspline';
      this.loading = false;
    },
    convertData(array) {
      let newArray = [];
      array.map(item => {
        newArray.push([item._id, item.value]);
      });
      return newArray;
    }
  },
  name: 'Charts'
};
</script>
