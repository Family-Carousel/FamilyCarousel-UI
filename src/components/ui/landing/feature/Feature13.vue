<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="4">
          <h2 class="text-h3 text-lg-h2">Get your startup ready for business</h2>
        </v-col>
        <v-col cols="12" md="8" class="pa-md-0">
          <v-row>
            <v-col v-for="(item, i) in features" :key="i" cols="12" md="6">
              <div class="d-flex">
                <div class="mr-2">
                  <v-sheet color="surface" rounded class="pa-2">
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-sheet>
                </div>
                <div>
                  <div class="text-h5">{{ item.title }}</div>
                  <div class="text-h6 mt-1">{{ item.description }}</div>
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
      }]
    }
  }
}
</script>
