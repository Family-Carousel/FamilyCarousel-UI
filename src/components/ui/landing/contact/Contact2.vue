<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="4">
        <h3 class="text-h3">Contacts</h3>
      </v-col>
      <v-col cols="12" md="8" class="pt-0">
        <v-row>
          <v-col
            v-for="(item, i) in contacts"
            :key="i"
            cols="12"
            md="6"
          >
            <v-card>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <div class="mt-1">{{ item.email }}</div>
                <div class="mt-1">{{ item.phone }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <v-row>
      <v-col cols="12" md="4">
        <h3 class="text-h3">Offices</h3>
      </v-col>
      <v-col cols="12" md="8" class="pt-0">
        <v-row>
          <v-col
            v-for="(item, i) in offices"
            :key="i"
            cols="12"
            md="6"
          >
            <v-card>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <div class="mt-1">{{ item.address }}</div>
                <div class="mt-1">{{ item.email }}</div>
                <div class="mt-1">{{ item.phone }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contacts: [{
        title: 'Team',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }, {
        title: 'Corporation',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }, {
        title: 'Sales',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }, {
        title: 'Developers',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }],
      offices: [{
        title: 'London',
        address: '323 Flash Gordon Street',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }, {
        title: 'Paris',
        address: '323 Flash Gordon Street',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }, {
        title: 'San Francisco',
        address: '323 Flash Gordon Street',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }, {
        title: 'Tokyo',
        address: '323 Flash Gordon Street',
        email: 'hello@loremcompany.com',
        phone: '+03 000 000 000 555 55'
      }]
    }
  }
}
</script>
