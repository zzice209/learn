<template>
<v-app>
  <sidebar @changeTitle="changeTitle"></sidebar>
  <toolbar :title="title"></toolbar>
  <v-content class="content">
    <router-view></router-view>
    <loading :show='loading'></loading>
  </v-content>
</v-app>
</template>

<script>
import MENU from '@/const/menu.js';
import Sidebar from './Sidebar.vue';
import Toolbar from './Toolbar.vue';
export default {
  components: {
    sidebar: Sidebar,
    toolbar: Toolbar
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: MENU,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '',
      loading: false
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle;
    }
  },
  name: 'Main'
};
</script>
