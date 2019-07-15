<template>
  <div v-if="show" class="cbt-loading">
    <div class="cbt-roll"></div>
  </div>
</template>
<script>
export default {
  props: ['show'],
  name: 'Loading'
}
</script>

