<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Bootstrap your business</div>
        <h2 class="text-h3 text-lg-h2">Get your startup ready for business</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <v-card class="py-4 px-2">
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet color="secondary" rounded class="pa-2" dark>
                  <v-icon large>{{ item.icon }}</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5 font-weight-bold">{{ item.title }}</div>
                <div class="font-weight-regular mt-1">{{ item.description }}</div>
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
      features: [{
        icon: 'mdi-lifebuoy',
        title: 'Dedicated Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum blanditiis, veritatis, cumque eligendi aspernatur eveniet provident odit recusandae perspiciatis labore incidunt minus.'
      }, {
        icon: 'mdi-clock-outline',
        title: 'Save Time',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum blanditiis, veritatis, cumque eligendi aspernatur eveniet provident odit recusandae perspiciatis labore incidunt minus.'
      }, {
        icon: 'mdi-twitter',
        title: 'Social Media Marketing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum blanditiis, veritatis, cumque eligendi aspernatur eveniet provident odit recusandae perspiciatis labore incidunt minus.'
      }, {
        icon: 'mdi-chart-box-outline',
        title: 'Data Analysis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum blanditiis, veritatis, cumque eligendi aspernatur eveniet provident odit recusandae perspiciatis labore incidunt minus.'
      }]
    }
  }
}
</script>
