<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-lg-h2">Get your startup ready for business</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <div class="mt-4">
            <router-link to="#" class="text-decoration-none font-weight-bold text-h6">Learn More</router-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <Logos5 :logos="logos" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import Logos5 from '@/components/ui/landing/logos/Logos5.vue'

export default {
  components: {
    Logos5
  },
  data() {
    return {
      logos: [{
        image: require('@/assets/images/logos/logo-1.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-2.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-3.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-4.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-5.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-7.svg'),
        link: '#'
      }]
    }
  }
}
</script>
