<template>
<div class="page-container">
  <v-carousel :value="position" hide-delimiters hide-controls :cycle="false">
    <v-carousel-item :key="1">
      <v-tabs v-model="isLogin" class="login-tab" centered slider-color="accent-main">
        <v-tab :key="1" style="text-transform: none">
          {{$t('login.login')}}</v-tab>
        <v-tab-item :key="1">
          <login-form @needReset="onReset"></login-form>
        </v-tab-item>
        <v-tab :key="2" style="text-transform: none">{{$t('login.register')}}</v-tab>
        <v-tab-item :key="2">
          <register-form @registerDone="onDone"></register-form>
        </v-tab-item>
      </v-tabs>
    </v-carousel-item>
    <v-carousel-item :key="2">
      <reset-form v-if="position == 1" :forgot="forgot" :email='email' @resetDone="onDone"></reset-form>
    </v-carousel-item>
    <v-carousel-item :key="3">
      <new-pass-form v-if="position == 2" :email='email' @backLogin="onDone"></new-pass-form>
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
import LoginForm from '@/components/login/form/LoginForm.vue';
import RegisterForm from '@/components/login/form/RegisterForm.vue';
import ResetForm from '@/components/login/form/ResetForm.vue';
import NewPassForm from '@/components/login/form/NewPassForm.vue';
export default {
  components: {
    'login-form': LoginForm,
    'register-form': RegisterForm,
    'reset-form': ResetForm,
    'new-pass-form': NewPassForm
  },
  data() {
    return {
      forgot: false,
      email: '',
      position: 0,
      isLogin: 0,
      reseting: false
    };
  },
  mounted() {
    history.pushState(null, null, 'login');
    window.addEventListener('popstate', function(event) {
      history.pushState(null, null, 'login');
    });
    if (this.$store.state.auth.forgetToken) {
      this.position = 2;
    }
  },
  created() {},
  methods: {
    onReset() {
      this.position = 1;
      this.forgot = true;
    },
    onDone() {
      this.forgot = false;
      this.email = '';
      this.position = 0;
      this.isLogin = 0;
      this.reseting = false;
    }
  },
  name: 'Login'
};
</script>
