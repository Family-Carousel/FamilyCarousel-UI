<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" lg="6" xl="4">
          <v-sheet elevation="6" class="pa-2" rounded>
            <v-carousel
              v-model="model"
              :show-arrows="false"
              cycle
              height="400"
              hide-delimiter-background
              :light="!$vuetify.theme.isDark"
            >
              <v-carousel-item v-for="(item, i) in carousel" :key="i">
                <v-sheet>
                  <v-responsive max-width="360" class="mx-auto text-center">
                    <div class="text-h5 mt-8">{{ item.title }}</div>
                    <div class="text-body-1 mt-5">{{ item.text }}</div>
                    <div class="mt-4">
                      <router-link :to="item.link.to" class="text-decoration-none font-weight-bold text-h6">{{ item.link.title }}</router-link>
                    </div>
                  </v-responsive>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-sheet>
        </v-col>
        <v-col cols="12" lg="6" offset-xl="2" xl="6">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-lg-3 mt-xl-10">Quality design and lifetime updates.</h2>
          <div class="text-h6 text-lg-h5 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vitae illo! Dolorum repudiandae impedit facilis, aperiam debitis quisquam excepturi reiciendis enim perspiciatis asperiores quibusdam et adipisci, delectus deserunt distinctio aliquam.</div>
          <v-btn color="primary" large class="mt-6">Explore demo</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    carousel: [{
      title: 'New Design',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi corrupti maiores ex sunt dolorum inventore facilis reprehenderit ullam minima quaerat sit!',
      link: {
        title: 'Learn More',
        to: '#'
      }
    }, {
      title: 'Responsive Websites',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi corrupti maiores ex sunt dolorum inventore facilis reprehenderit ullam minima quaerat sit!',
      link: {
        title: 'Learn More',
        to: '#'
      }
    }]
  })
}
</script>
