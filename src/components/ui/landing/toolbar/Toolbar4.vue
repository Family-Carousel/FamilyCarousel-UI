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
          <a href="#" class="text-decoration-none font-weight-bold">
            <v-icon small color="primary">mdi-email-outline</v-icon>
            example@domain.com
          </a>
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

    <v-app-bar app flat height="120" color="transparent">
      <div class="d-flex flex-column flex-grow-1 fill-height">
        <v-container class="px-0 py-0">
          <div class="px-sm-2 py-1 body-2 d-flex align-center justify-space-between">
            <div>
              <a href="#" class="text-decoration-none d-none d-sm-inline-block font-weight-bold">
                <v-icon small color="primary">mdi-email-outline</v-icon>
                example@domain.com
              </a>
            </div>
            <div>
              <a class="mr-1 font-weight-bold">
                <v-icon color="primary" small>mdi-phone-outline</v-icon>
                (800) 123-4567
              </a>
              <v-btn icon small>
                <v-icon small>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon small>
                <v-icon small>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon small>
                <v-icon small>mdi-instagram</v-icon>
              </v-btn>
            </div>
          </div>
          <v-divider></v-divider>
        </v-container>

        <v-container class="py-1 px-0 px-sm-2 d-flex flex-grow-1 align-center">
          <router-link to="#" class="d-flex align-center text-decoration-none mr-2">
            <v-icon class="mr-1" large color="primary">
              mdi-hexagon-multiple-outline
            </v-icon>
            <span class="font-weight-black text-uppercase">
              Carbon UI
            </span>
          </router-link>

          <v-spacer></v-spacer>

          <div class="d-none d-md-block">
            <v-btn
              v-for="(item, index) in menu"
              :key="index"
              :to="item.link"
              large
              text
              class="mx-1"
            >
              {{ item.title }}
            </v-btn>
          </div>
        </v-container>
      </div>
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

<style>
.drawer-button {
  position: fixed;
  top: 102px;
  left: -22px;
  z-index: 6;
}
</style>
