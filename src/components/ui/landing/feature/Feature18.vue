<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div>
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Bootstrap your business</div>
        <h2 class="text-h3 text-lg-h2">Get your startup ready for business</h2>
        <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
        <v-btn large min-width="280" color="secondary" class="mt-6">Explore our solutions</v-btn>
      </div>
      <div class="mt-6">
        <div
          v-for="(item, i) in features"
          :key="i"
          class="mt-4"
        >
          <v-card class="py-4 px-2" color="surface">
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet
                  color="blue-grey"
                  rounded
                  class="pa-2"
                  style="margin-top: 3px"
                  dark
                >
                  <v-icon>{{ item.icon }}</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5 font-weight-bold">{{ item.title }}</div>
                <div class="font-weight-regular mt-1">{{ item.description }}</div>
              </div>
            </div>
          </v-card>
        </div>
      </div>
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
