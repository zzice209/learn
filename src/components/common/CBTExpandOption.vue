<template>
  <div class="cbt-expansion-container">
    <div class="cbt-expansion-option" v-if="parentId >= 1">
      <div class="cbt-expansion-option-header cbt-expansion-header-parent">
        <span @click="backThis()" class="cbt-expansion-label click-able">Quay lai</span>
        <v-spacer></v-spacer>
      </div>
    </div>
    <div :class="{'cbt-expansion-option': true, 'ml-3': parentId >= 1}" v-for="(item, i) in viewList" :key="i">
      <div class="cbt-expansion-option-header" :class="{'cbt-expansion-option-child': item.count_child > 0}">
        <span @click="viewThis(item)" :class="{'click-able': item.count_child > 0}" class="cbt-expansion-label">{{item.name}} ( {{item.count | numberic}} {{$t('type.human')}})</span>
        <v-spacer></v-spacer>
        <div class="cbt-checkbox-container cbt-checkbox cbt-expansion-checkbox">
          <input type="checkbox" v-model="selected" :id="item.id" :value="item" color="success" height="15px" class="cbt-checkbox cbt-expansion-checkbox">
          <v-icon class="cbt-checkbox-icon material-icons check" color="success">check_box</v-icon>
          <v-icon class="cbt-checkbox-icon material-icons uncheck">check_box_outline_blank</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import audienceService from '@/api/audience.api'

export default {
  props: ['data', 'selectedData'],
  data() {
    return {
      viewList: [],
      selected: [],
      parentId: 0
    }
  },
  watch: {
    selected: function (newVal, oldVal) {
      this.$store.state.auth.selectedHobby = newVal
    }
  },
  mounted() {
    this.breadcrumb = []
    this.viewList = this.data
    this.selected = this.selectedData
    this.$store.state.auth.selectedHobby = this.selectedData
  },
  methods: {
    viewThis(item) {
      for (let i = 0; i < this.selected.length; i++) {
        if (item.id === this.selected[i].id) {
          return
        }
      }
      if (item.count_child > 0) {
        this.getHobby(item.id)
      }
    },
    backThis() {
      this.getHobby(this.parentId)
    },
    getHobby(pid) {
      audienceService
        .ListHobby({
          pid: pid
        })
        .then(({
          data
        }) => {
          this.loading = false
          this.viewList = data.data.result
          this.parentId = data.data.parent
        })
        .catch(e => {
          this.error = true
          this.loading = false
        })
    }
  }
}
</script>
