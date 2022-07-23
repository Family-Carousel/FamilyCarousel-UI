<template>
  <v-footer color="transparent">
    <v-container class="py-5">
      <v-row>
        <v-col
          v-for="(item, i) in footer"
          :key="i"
          cols="12"
          sm="3"
          lg="3"
        >
          <div class="mb-3 body-2 font-weight-bold text-uppercase">{{ item.title }}</div>

          <div v-for="(link, j) in item.links" :key="j" class="my-1 body-2">
            <router-link
              v-if="link.to"
              class="text-decoration-none secondary--text text--lighten-2"
              :to="link.to"
            >{{ link.label }}</router-link>
            <a
              v-else
              class="text-decoration-none secondary--text text--lighten-2"
              :href="link.href"
              :target="link.target || 'blank'"
            >{{ link.label }}</a>
          </div>
        </v-col>
      </v-row>
      <div class="d-flex flex-column flex-sm-row align-center justify-sm-space-between font-weight-bold text-uppercase caption my-4">
        <div class="d-flex flex-column flex-sm-row align-center">
          <div>© 2020 Indielayer</div>
          <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Privacy Policy</router-link>
          <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Terms of Service</router-link>
        </div>
        <div>
          <v-btn icon color="secondary lighten-2"><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn icon color="secondary lighten-2"><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn icon color="secondary lighten-2"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn icon color="secondary lighten-2"><v-icon>mdi-google-plus</v-icon></v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: [{
        title: 'Product',
        links: [{
          label: 'Overview',
          to: '#'
        }, {
          label: 'Features',
          to: '#'
        }, {
          label: 'Pricing',
          to: '#'
        }]
      }, {
        title: 'Resources',
        links: [{
          label: 'Documentation',
          to: '#'
        }, {
          label: 'News',
          to: '#'
        }, {
          label: 'FAQ',
          to: '#'
        }]
      }, {
        title: 'Company',
        links: [{
          label: 'About us',
          to: '#'
        }, {
          label: 'Carrers',
          to: '#'
        }, {
          label: 'Press',
          to: '#'
        }]
      }, {
        title: 'Contact',
        links: [{
          label: 'Contact us',
          to: '#'
        }, {
          label: 'Offices',
          to: '#'
        }, {
          label: 'Twitter',
          href: '#'
        }]
      }]
    }
  }
}
</script>
