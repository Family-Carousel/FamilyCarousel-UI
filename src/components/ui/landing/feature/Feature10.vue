<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col
          v-for="(item, i) in features"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card class="py-4 px-2">
            <v-responsive max-width="300" class="mx-auto text-center">
              <div class="mb-2">
                <v-icon class="text-h2" color="secondary">{{ item.icon }}</v-icon>
              </div>
              <div class="text-h6 mt-3">{{ item.title }}</div>
              <div class="font-weight-regular mt-2">{{ item.description }}</div>
            </v-responsive>
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
        icon: 'mdi-account-check-outline',
        title: 'Account Verification',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-lifebuoy',
        title: 'Dedicated Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-email-open-multiple-outline',
        title: 'Email Integration',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-clock-outline',
        title: 'Save Time',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-twitter',
        title: 'Social Media Marketing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-chart-box-outline',
        title: 'Data Analysis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }]
    }
  }
}
</script>
