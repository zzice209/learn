<template>
  <v-toolbar class="toolbar" :clipped-left="clipped" app height="50">
    <div class="toolbar-title">{{$t(title)}}</div>
    <div class="toolbar-control-group">
      <v-menu content-class="toolbar-control-list" class="toolbar-control" offset-y nudge-bottom="5">
        <button slot="activator" class="toolbar-control-button">
          <img v-if="avatar" class="toolbar-avatar" src="@/assets/image/kuon ava.jpg">
          <img v-if="!avatar" class="toolbar-avatar" src="@/assets/image/empty ava.png">
        </button>
        <v-list class="toolbar-list">
          <v-list-tile class="toolbar-list-item" v-for="(item, index) in items" :key="index" @click="to(item.link)">
            <v-list-tile-title class="toolbar-list-title">{{$t(item.title)}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>
  import router from '@/router'
  import store from '@/store'
  import {LOG_OUT} from '../../store/action.type'

  export default {
    props: ['title'],
    data () {
      return {
        clipped: false,
        avatar: false,
        items: [
          {
            title: 'toolbar.list.profile',
            link: '/profile'
          },
          // {
          //   title: 'toolbar.list.support',
          //   link: '/'
          // },
          {
            title: 'toolbar.list.logout',
            link: '/logout'
          }
        ]
      }
    },
    created () {
    },
    methods: {
      to (title) {
        if (title === '/logout') {
          store.dispatch(LOG_OUT)
          router.push('/')
        } else {
          router.push(title)
        }
      }
    },
    name: 'Toolbar'
  }
</script>
