<template>

</template>

<script>
import router from '@/router';
import { LOG_OUT } from '@/store/action.type';
export default {
  created() {
    this.$store.dispatch(LOG_OUT);
    router.push('/');
  }
};
</script>
