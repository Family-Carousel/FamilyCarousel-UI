<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div style="width: 80px; height: 4px" class="mb-3 secondary" />
      <h2 class="text-h4 mb-3">Our customers</h2>
      <v-row>
        <v-col
          v-for="(item, i) in testimonials"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-card class="pa-3 text-body-1" color="surface" flat>
            {{ item.testimonial }}
          </v-card>
          <div class="d-flex align-center mt-3">
            <div class="mr-2">
              <v-avatar size="60">
                <v-img :src="item.image"></v-img>
              </v-avatar>
            </div>
            <div>
              <div class="text-h5">{{ item.name }}</div>
              <div class="text-h6 secondary--text">{{ item.title }}</div>
            </div>
          </div>
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
