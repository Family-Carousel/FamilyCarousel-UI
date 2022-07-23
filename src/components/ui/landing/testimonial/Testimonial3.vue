<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2">Our Customers</h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
      <div class="text-h6 text-lg-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit.</div>
    </v-responsive>

    <v-row class="mt-6">
      <v-col
        v-for="(item, i) in testimonials"
        :key="i"
        cols="12"
        sm="6"
        lg="3"
      >
        <v-card class="pa-3 d-flex">
          <div class="text-h1 mr-2">“</div>
          <div class="text-body-1">{{ item.testimonial }}</div>
        </v-card>
        <div class="d-flex align-center mt-3">
          <div class="mr-2">
            <v-avatar size="50">
              <v-img :src="item.image"></v-img>
            </v-avatar>
          </div>
          <div>
            <div class="text-h6">{{ item.name }}</div>
            <div class="text-h7 secondary--text">{{ item.title }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
