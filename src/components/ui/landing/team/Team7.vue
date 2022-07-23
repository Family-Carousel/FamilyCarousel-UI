<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="4">
          <h2 class="text-h3 text-lg-h2">Meet the team</h2>
        </v-col>
        <v-col cols="12" md="8" class="pa-md-0">
          <div v-for="(item, i) in team" :key="i">
            <v-divider v-if="i !== 0"></v-divider>
            <div class="d-flex align-center py-3">
              <div class="mr-3">
                <v-img :src="item.image" height="300" width="200" class="elevation-6 rounded"></v-img>
              </div>
              <div>
                <div class="text-h5">{{ item.name }}</div>
                <div class="text-h6 secondary--text">{{ item.title }}</div>
                <div class="text-h6 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non quam doloribus aut dolorum itaque expedita quo corrupti similique magni.</div>
              </div>
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
