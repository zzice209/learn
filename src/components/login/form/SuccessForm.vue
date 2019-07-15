<template>
<div class="success-container">
    <div class="top-container">
        <button class="back-button icon-arrow-left" @click="backLogin"></button>
    </div>
    <div class="success-content">
        <div class="success-logo">
            <i class="icon-check3"></i>
        </div>
        <v-layout align-center>
            <v-flex v-if="type==='resetPass'">
                <div class="big-title">{{$t('reset.resetSuccessTitle')}}</div>
                <div class="semi-title">{{$t('reset.resetTitlePart1')}} <b class="color-success">{{email}}</b> {{$t('reset.resetTitlePart2')}}</div>
                <div class="button-container">
                    <v-btn type="submit" @click.native="backLogin" class="cbt-btn accent-main">{{$t('login.button.back')}}</v-btn>
                </div>
            </v-flex>
            <v-flex v-if="type==='newPass'">
                <div class="big-title">{{$t('reset.newSuccessTitle')}}</div>
                <div class="semi-title">{{$t('reset.newTitle')}}</div>
                <div class="button-container">
                    <v-btn type="submit" @click.native="backLogin" class="cbt-btn accent-main">{{$t('login.button.back')}}</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['email', 'type'],
  created() {},
  methods: {
    backLogin() {
      this.$emit('backLogin', true);
    }
  },
  name: 'SuccessForm'
};
</script>
