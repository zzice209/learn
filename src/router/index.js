import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/Login';
import Logout from '@/components/login/Logout';
import MainRouter from './main-router';
import Page404 from '@/components/error/404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '*',
      name: '404',
      component: Page404
    },
    MainRouter
  ]
});
