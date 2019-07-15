<template>
  <v-app class="cbt-application">
     <router-view></router-view>
  </v-app>
</template>

<script>
import AuthService from '@/common/auth.service';

export default {
  components: {
  },
  data() {
    return {};
  },
  created: () => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: process.env.APP_FB_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: process.env.APP_FB_VERSION
      });
      window.FB.AppEvents.logPageView();
    };
    AuthService.check();
  },
  name: 'App'
};
</script>

