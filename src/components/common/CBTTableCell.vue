<template>
<div>
  <span v-if="item.type==='text'" :title="data.item[item.prop]?data.item[item.prop]:''">{{data.item[item.prop]?data.item[item.prop]:''}}</span>
  <span v-if="item.type==='number'" :title="data.item[item.prop]?data.item[item.prop]:'' | numberic">{{data.item[item.prop]?data.item[item.prop]:'' | numberic}}</span>
  <span v-if="item.type==='money'" :title="data.item[item.prop]?data.item[item.prop]:'' | money">{{data.item[item.prop]?data.item[item.prop]:'' | money}}</span>
  <div v-if="item.type==='avatar'" class="cbt-table-avatar-group">
    <img class="cbt-avatar cbt-table-avatar" v-if="avatar" src="@/assets/image/kuon ava.jpg">
    <img class="cbt-avatar cbt-table-avatar" v-if="!avatar" src="@/assets/image/empty ava.png">
    <span class="cbt-table-avatar-text">{{(data.item[item.prop]?data.item[item.prop]:'')}}</span>
  </div>
  <span v-if="item.type==='date'" :title="viewTime(data.item[item.prop])">{{viewTime(data.item[item.prop])}}</span>
  <cbt-copy v-if="item.type==='link'" :link="data.item[item.prop]?data.item[item.prop]:''"></cbt-copy>
  <span v-if="item.type==='status'">
    <v-icon :class="{'dot color-alert': data.item[item.prop]=== 1, 'dot color-success': data.item[item.prop]=== 2,'dot color-warning': data.item[item.prop]=== 3, 'dot text-color-4': data.item[item.prop]=== 4}">fiber_manual_record</v-icon>
    <span class="cbt-status-label">{{data.item[item.prop] | status('user')}}</span>
  </span>
</div>
</template>

<script>
import CBTCopy from '@/components/common/CBTCopy';
export default {
  components: {
    'cbt-copy': CBTCopy
  },
  props: ['item', 'data', 'isChild', 'index'],
  data() {
    return {};
  },
  methods: {
    viewTime(time) {
      return moment(time).format('DD/MM/YYYY HH:mm:ss');
    }
  },
  name: 'CBTTableCell'
};
</script>
