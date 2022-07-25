<template>
  <div>
    <LazyHydrate when-visible>
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list dense nav>
          <v-list-item
            v-for="(item, index) in menu"
            :key="index"
            :to="item.link"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block class="mb-2"> Sign In </v-btn>
            <v-btn block class="primary"> Sign Up </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <v-btn class="d-md-none drawer-button" v-if="menu && menu.length && menu.length > 0" rounded @click="drawer = !drawer">
        <v-icon right>mdi-menu</v-icon>
      </v-btn>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <v-app-bar app height="80">
        <v-container class="py-0 px-0 px-sm-2 fill-height" :fluid="isFluid">
          <router-link
            to="#"
            class="d-flex align-center text-decoration-none mr-2"
          >
            <nuxt-img src="/favicon.ico" alt="" height="48" class="mr-1" />
            <span class="font-weight-black text-uppercase">
              Family Carousel
            </span>
          </router-link>

          <div class="d-none d-md-block">
            <v-btn
              v-for="(item, index) in menu"
              :key="index"
              text
              :to="item.link"
              class="mx-1"
            >
              {{ item.title }}
            </v-btn>
          </div>

          <v-spacer></v-spacer>

          <v-btn v-if="!$auth.loggedIn" large text class="mx-1 d-none d-sm-inline-block" @click="login()">
            Sign In
          </v-btn>
          <v-btn v-if="!$auth.loggedIn" color="primary" large @click="login()"> Sign Up </v-btn>
          <v-btn v-if="$auth.loggedIn" color="primary" large @click="logout()"> Log Out </v-btn>
        </v-container>
      </v-app-bar>
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";

export default {
  props: {
    isFluid: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LazyHydrate,
  },
  data() {
    return {
      drawer: null,
      menu: [
        // {
        //   title: "Solutions",
        //   link: "#solutions",
        //   isAuthed: false,
        // },
        // {
        //   title: "Pricing",
        //   link: "#pricing",
        //   isAuthed: false,
        // },
        // {
        //   title: "Docs",
        //   link: "#docs",
        //   isAuthed: false,
        // },
        // {
        //   title: "More",
        //   link: "#more",
        //   isAuthed: false,
        // },
      ],
    };
  },
  methods: {
    login() {
      await this.$auth.loginWith('auth0');
    },
    logout() {
      await this.$auth.logout();
    }
  }
};
</script>

<style scoped>
.drawer-button {
  position: fixed;
  top: 60px;
  left: -22px;
  z-index: 6;
}
</style>
