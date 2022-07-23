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

    <v-app-bar
      app
      :extension-height="$vuetify.breakpoint.smAndDown ? 0 : 60"
    >
      <v-container class="d-flex pa-0 pa-md-3 align-center">
        <v-app-bar-nav-icon
          class="d-block d-md-none"
          @click="drawer = !drawer"
        />
        <router-link to="#" class="d-flex align-center text-decoration-none mr-2">
          <img src="/images/v-logo-small.png" alt="" height="40" class="mr-1">
          <span class="font-weight-black text-uppercase secondary--text">
            Carbon UI
          </span>
        </router-link>

        <v-spacer />

        <v-btn icon>
          <v-icon>
            mdi-account-outline
          </v-icon>
        </v-btn>
      </v-container>

      <template v-slot:extension>
        <v-container class="py-0 d-none d-md-block fill-height">
          <v-divider />

          <!-- menu -->
          <div class="d-flex fill-height justify-space-between py-2 text-body-2 text-lg-body-1 layout-menu">
            <router-link
              v-for="(item, index) in menu"
              :key="index"
              :to="item.link"
              class="d-flex align-center text-decoration-none"
            >
              <span class="font-weight-bold text-uppercase textbase--text">{{ item.title }}</span>
            </router-link>
          </div>
        </v-container>
      </template>
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
