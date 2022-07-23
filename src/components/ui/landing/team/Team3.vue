<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="4">
          <h2 class="text-h3 text-lg-h2">Meet the team</h2>
        </v-col>
        <v-col cols="12" md="8" class="pa-md-0">
          <v-row>
            <v-col v-for="(item, i) in team" :key="i" cols="12" md="6">
              <div class="d-flex align-center">
                <div class="mr-2">
                  <v-avatar size="100">
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
