<template>
  <v-container>
    <v-carousel
      v-model="carousel"
      cycle
      height="auto"
      hide-delimiters
      :light="!$vuetify.theme.isDark"
    >
      <v-carousel-item v-for="(item, i) in testimonials" :key="i">
        <v-responsive class="px-8 px-md-10 mx-auto h-full" max-width="1200">
          <div class="d-flex flex-column flex-md-row align-center h-full">
            <div class="mr-md-8 mb-4">
              <v-avatar size="140">
                <v-img :src="item.image"></v-img>
              </v-avatar>
            </div>
            <div>
              <div class="text-h5 text-lg-h4 font-weight-regular">"{{ item.testimonial }}"</div>
              <div class="text-h5 mt-3">{{ item.name }}</div>
              <div class="text-h6 secondary--text">{{ item.title }}</div>
            </div>
          </div>
        </v-responsive>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carousel: 0,
      testimonials: [{
        name: 'Ross Tremathack',
        image: '/images/team/7.jpeg',
        title: 'CEO LeBusinesses',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa quasi quae itaque soluta sapiente.'
      }, {
        name: 'Karyn Barszczewski',
        title: 'Founder & CEO Company',
        image: '/images/team/3.jpeg',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa quasi quae itaque soluta sapiente.'
      }]
    }
  }
}
</script>
