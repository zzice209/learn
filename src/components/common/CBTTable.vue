<template>
<v-data-table content-class="cbt-table" expand item-key="id" :headers="headers" :items="list" :hide-headers="isChild > 0" hide-actions>
  <template slot="headers" slot-scope="props">
    <tr class="cbt-table-header">
      <th v-for="(item, index) in props.headers" :key="index" :class="item.style?item.style:''">
        {{$t(item.text)}}
      </th>
    </tr>
  </template>
  <template slot="items" slot-scope="props">
    <tr class="cbt-table-row" @click="props.item.children && props.item.children.length > 0?props.expanded = !props.expanded:''" :class="{'expand-row': props.item.children && props.item.children.length > 0 && !props.expanded, 'expanded-row': props.item.children && props.item.children.length > 0 && props.expanded}">
      <td :class="headers[0].style?headers[0].style:''">
        <span class="content-group" :class="isChild>0?'table-child-'+isChild:''">
          <span :title="props.item['name']">{{props.item['name']}}</span>
        </span>
      </td>
      <td v-for="(item, index) in properties" :key="index+1" :class="headers[index+1].style?headers[index+1].style:''">
        <span class="content-group" :class="isChild>0 && index==0?'table-child-'+isChild:''">
          <span v-if="item.type==='money'" :title="props.item.reportFb[item.prop]?props.item.reportFb[item.prop]:'' | money">{{props.item.reportFb[item.prop]?props.item.reportFb[item.prop]:'' | money}}</span>
        <span v-if="item.type==='percent'" :title="props.item.reportFb[item.prop] + ' ' + '%'">{{props.item.reportFb[item.prop]}} %</span>
        <span v-if="item.type==='text'" :title="props.item.reportFb[item.prop]">{{props.item.reportFb[item.prop]}}</span>
        </span>
      </td>
    </tr>
    <tr class="cbt-table-row" v-if="loading && props.index === list.length - 1">
      <td class="full-width">
        <v-progress-linear :indeterminate="true" color="success"></v-progress-linear>
      </td>
    </tr>
  </template>
  <template v-if="props.item.children && props.item.children.length > 0" slot="expand" slot-scope="props">
    <cbt-table :list="props.item.children" :headers="headers" :isChild="isChild + 1" :properties="properties"></cbt-table>
  </template>
  <template slot="no-data">
    <tr class="cbt-table-row">
      <td v-if="!loading" class="cbt-table-no-data text-xs-center pa-3">
        {{$t('common.emptyTable')}}
      </td>
      <td v-if="loading" class="cbt-table-no-data text-xs-center pa-3 full-width">
        <v-progress-linear :indeterminate="true" color="success"></v-progress-linear>
      </td>
    </tr>
  </template>
</v-data-table>
</template>

<script>
import CBTTableCell from '@/components/common/CBTTableCell';
export default {
  components: {
    'cbt-table-cell': CBTTableCell
  },
  props: ['list', 'headers', 'properties', 'isChild', 'loading'],
  data() {
    return {};
  },
  mounted() {},
  computed: {
    type(type) {
      switch (type) {
        case 'text':
          return '';
        case 'money':
          return 'money';
        case 'percent':
          return 'precent';
      }
    }
  },
  methods: {},
  name: 'CBTTable'
};
</script>
