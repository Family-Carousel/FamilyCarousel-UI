<template>
  <v-container class="pt-4 pt-md-8 pb-10">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2">Meet the team</h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
      <div class="text-h6 text-lg-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit.</div>
    </v-responsive>

    <v-row class="mt-6">
      <v-col
        v-for="(item, i) in team"
        :key="i"
        cols="12"
        md="6"
        xl="3"
        class="text-center"
      >
        <v-card dark>
          <v-img
            :src="item.image"
            height="400"
            position="center 30%"
            gradient="to right bottom, rgb(96 107 206 / 33%), rgb(8 13 41)"
            class="d-flex align-end justify-end"
          >
            <div class="pa-3">
              <div class="text-h4 text-uppercase">{{ item.name }}</div>
              <div class="text-h6 grey--text text--lighten-2">{{ item.title }}</div>
              <v-btn v-if="item.github" icon color="grey lighten-2">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn v-if="item.linkedin" icon color="grey lighten-2">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn v-if="item.twitter" icon color="grey lighten-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      team: [{
        name: 'Mary Blench',
        title: 'Co-Founder & CEO',
        image: '/images/team/1.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }, {
        name: 'John Sothcott',
        title: 'Co-Founder & CTO',
        image: '/images/team/2.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }, {
        name: 'Nadia Meigh',
        title: 'Director of Operations',
        image: '/images/team/4.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }, {
        name: 'Karyn Barszczewski',
        title: 'Senior Designer',
        image: '/images/team/3.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }, {
        name: 'Kate McCuffie',
        title: 'Product Manager',
        image: '/images/team/5.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }, {
        name: 'Nate Janosevic',
        title: 'Senior Back-end Developer',
        image: '/images/team/6.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }, {
        name: 'Ross Tremathack',
        title: 'Senior Front-end Developer',
        image: '/images/team/7.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }, {
        name: 'Sybille Durant',
        title: 'Front-end Developer',
        image: '/images/team/8.jpeg',
        twitter: '#',
        github: '#',
        linkedin: '#'
      }]
    }
  }
}
</script>
