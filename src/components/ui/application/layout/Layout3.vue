<template>
  <v-layout class="fill-height">
    <!-- Navigation -->
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      class="elevation-1"
      :right="$vuetify.rtl"
      width="260"
    >
      <!-- Navigation menu info -->
      <template v-slot:prepend>
        <div class="d-flex pa-2 align-center">
          <img src="/images/v-logo-small.png" height="48" alt="logo" class="mr-1">
          <div>
            <div class="title font-weight-bold text-uppercase primary--text">{{ config.product.name }}</div>
            <div class="overline grey--text">{{ config.product.version }}</div>
          </div>

        </div>
        <v-divider class="mb-1"></v-divider>
      </template>

      <!-- Navigation menu -->
      <main-menu :menu="menu" />

      <!-- Navigation menu footer -->
      <template v-slot:append>
        <div class="pa-2 text-center">
          <v-btn
            to="#"
            block
            color="secondary"
          >
            Documentation
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Toolbar -->
    <v-app-bar
      app
      flat
      color="surface"
    >
      <v-card
        class="flex-grow-1 d-flex mt-3"
        color="surface"
        flat
      >
        <div class="d-flex flex-grow-1 align-center">

          <!-- search input mobile -->
          <v-text-field
            v-if="showSearch"
            append-icon="mdi-close"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            hide-details
            outlined
            solo
            flat
            autofocus
            @click:append="showSearch = false"
          ></v-text-field>

          <div v-else class="d-flex flex-grow-1 align-center">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

            <!-- search input desktop -->
            <v-text-field
              ref="search"
              class="hidden-xs-only mx-2"
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              hide-details
              filled
              dense
              style="max-width: 600px"
              rounded
            ></v-text-field>

            <v-spacer class="d-block d-sm-none"></v-spacer>

            <v-btn class="d-block d-sm-none" icon @click="showSearch = true">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <div :class="[$vuetify.rtl ? 'ml-1' : 'mr-1']">
              <toolbar-notifications />
            </div>

            <toolbar-user />
          </div>
        </div>
      </v-card>
    </v-app-bar>

    <v-container :fluid="!isContentBoxed" class="pt-3">
      <router-view class="py-2 fill-height"></router-view>

      <!-- DEMO PURPOSES DEFAULT ROUTER VIEW -->
      <div v-if="isDemo" class="py-2 fill-height">
        <slot></slot>
      </div>
    </v-container>

    <v-footer app inset>
      <div class="overline">
        Copyright © 2020 <a href="https://indielayer.com" target="_blank">Indielayer</a>, All rights Reserved
      </div>
      <v-spacer></v-spacer>
      <div class="overline">
        Made with <v-icon small color="pink">mdi-heart</v-icon> by <a href="https://indielayer.com" target="_blank">Indielayer</a>
      </div>
    </v-footer>
  </v-layout>
</template>

<script>
import config from '@/configs'
import MainMenu from '@/components/navigation/MainMenu'
import ToolbarUser from '@/components/toolbar/ToolbarUser'
import ToolbarNotifications from '@/components/toolbar/ToolbarNotifications'
import menu from './menu'

export default {
  components: {
    MainMenu,
    ToolbarUser,
    ToolbarNotifications
  },
  props: {
    isDemo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menu,
      config,
      drawer: null,
      showSearch: false,
      isContentBoxed: false
    }
  }
}
</script>

<style lang="scss">
.app-bar-full {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0;
  }
}
</style>
