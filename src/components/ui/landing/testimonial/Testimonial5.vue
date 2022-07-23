<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Working with us</div>
        <h2 class="text-h3 text-lg-h2">What our customers are saying</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in testimonials"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-sheet>
            <v-card-title>
              <v-sheet
                color="success"
                width="60"
                height="48"
                class="d-flex align-start justify-center mx-auto text-h1 white--text mt-n6 position-relative"
                style="border-radius: 100%"
              >
                <div class="position-absolute" style="top: 16px;">“</div>
              </v-sheet>
            </v-card-title>
            <div class="pa-3">
              <div class="text-h6 secondary--text">{{ item.testimonial }}</div>

              <div class="d-flex align-center mt-4">
                <div class="mr-2">
                  <v-avatar size="50">
                    <v-img :src="item.image"></v-img>
                  </v-avatar>
                </div>
                <div class="text-left">
                  <div class="text-h6">{{ item.name }}</div>
                  <div class="text-h7 secondary--text">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [{
        name: 'Ross Tremathack',
        image: '/images/team/7.jpeg',
        title: 'CEO LeBusinesses',
        testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam itaque ut recusandae delectus minima, magnam nostrum reiciendis provident similique quasi alias, eveniet modi eius eaque rerum placeat labore optio.'
      }, {
        name: 'Karyn Barszczewski',
        title: 'Founder & CEO Company',
        image: '/images/team/3.jpeg',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa quasi quae itaque soluta sapiente.'
      }, {
        name: 'Kate Upton',
        title: 'Product Manager @company',
        image: '/images/team/5.jpeg',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa quasi quae itaque soluta sapiente. Maiores numquam itaque ut recusandae. magnam nostrum reiciendis provident.'
      }, {
        name: 'Jake Le Fig',
        title: 'CEO Company',
        image: '/images/team/6.jpeg',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa quasi quae.'
      }]
    }
  }
}
</script>
