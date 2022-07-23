<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-overline secondary--text mb-3">Working with us</div>
        <h2 class="text-h3 text-lg-h2">Meet the team</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in team"
          :key="i"
          cols="12"
          lg="6"
        >
          <v-card class="overflow-hidden">
            <div class="d-flex flex-column flex-sm-row align-center">
              <div class="mr-sm-3 w-full w-sm-auto">
                <v-img :src="item.image" height="280" :width="$vuetify.breakpoint.smAndUp ? 200 : undefined" position="center 30%"></v-img>
              </div>
              <div class="pa-2">
                <div class="text-h5 mt-3">{{ item.name }}</div>
                <div class="text-h6 secondary--text">{{ item.title }}</div>
                <div class="text-body-1 secondary--text text--lighten-2 my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div class="ml-n1">
                  <v-btn v-if="item.github" icon color="secondary lighten-3">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                  <v-btn v-if="item.linkedin" icon color="secondary lighten-3">
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn v-if="item.twitter" icon color="secondary lighten-3">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
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
