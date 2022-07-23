<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">Menu</v-subheader>
        <v-list-item v-for="(item, index) in menu" :key="index" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="primary">
            Log In
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>mdi-menu</v-icon>
    </v-btn>

    <v-app-bar app flat height="80" color="transparent">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <router-link to="#" class="d-flex align-center text-decoration-none mr-2">
          <img src="/images/v-logo-small.png" alt="" height="48" class="mr-1">
          <span class="font-weight-black text-uppercase">
            Carbon UI
          </span>
        </router-link>

        <div class="d-none d-md-block">
          <v-btn
            v-for="(item, index) in menu"
            :key="index"
            :to="item.link"
            text
            class="mx-1"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-btn color="primary" large>
          Log In
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { menu2 as menu } from './menus.js'

export default {
  data() {
    return {
      drawer: null,
      menu
    }
  }
}
</script>

<style scoped>
.drawer-button {
  position: fixed;
  top: 64px;
  left: -22px;
  z-index: 6;
}
</style>
