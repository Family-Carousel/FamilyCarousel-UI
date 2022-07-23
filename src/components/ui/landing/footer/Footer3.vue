<template>
  <v-footer>
    <v-container class="py-5">
      <v-row>
        <v-col cols="12" md="2" lg="3" xl="4">
          <div class="mb-2">
            <router-link to="#" class="d-flex align-center text-decoration-none mr-2">
              <span class="font-weight-black text-uppercase text-h5 text-truncate">
                Carbon UI
              </span>
            </router-link>
          </div>
          <div class="text-body-1 secondary--text text--lighten-2">
            <div>W Shoreline Dr, Long Beach, Los Angeles, CA 90802 USA</div>
            <div class="font-weight-bold mt-2">Email</div>
            <div><a href="#" class="text-decoration-none caption">hello@loremcompany.com</a></div>
          </div>
        </v-col>
        <v-col
          v-for="(item, i) in footer"
          :key="i"
          cols="12"
          md="2"
        >
          <div class="mb-3 body-1 font-weight-bold">{{ item.title }}</div>

          <div v-for="(link, j) in item.links" :key="j" class="my-1 body-1">
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
        <v-col cols="12" md="4" lg="3" xl="2">
          <div class="font-weight-bold mb-3">Download Apps</div>

          <v-btn
            x-large
            outlined
            block
            color="secondary"
            class="justify-md-start"
          >
            <v-icon large left>mdi-google-play</v-icon>
            <div class="d-flex flex-column text-left pl-2">
              <div class="textbase--text">Google Play</div>
              <div class="caption">Get it Now</div>
            </div>
          </v-btn>

          <v-btn
            x-large
            outlined
            block
            color="secondary"
            class="justify-md-start mt-2"
          >
            <v-icon large left>mdi-apple</v-icon>
            <div class="d-flex flex-column text-left pl-2">
              <div class="textbase--text">App Store</div>
              <div class="caption">Get it Now</div>
            </div>
          </v-btn>

        </v-col>
      </v-row>
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
        }, {
          label: 'Packages',
          to: '#'
        }, {
          label: 'Components',
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
      }]
    }
  }
}
</script>
