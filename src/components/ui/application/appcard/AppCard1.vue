<template>
  <v-card>
    <div class="pa-3">
      <div class="d-flex align-center">
        <v-avatar small class="mr-1" size="38">
          <v-img :src="image" :alt="name"></v-img>
        </v-avatar>
        <div>
          <span class="font-weight-bold text-body-2">{{ name }}</span>
          <v-chip v-if="role" x-small color="accent" class="font-weight-bold ml-1">{{ role }}</v-chip>
          <v-spacer></v-spacer>
          <div class="secondary--text text--lighten-1 text-caption">
            {{ title }}
          </div>
        </div>
      </div>
    </div>

    <v-divider></v-divider>

    <div class="d-flex">
      <v-btn
        v-if="phone"
        class="flex-grow-1"
        tile
        height="48"
        text
        :href="phone"
      >
        <v-icon left>mdi-phone-outline</v-icon>
        Call
      </v-btn>
      <v-divider v-if="phone && email" vertical></v-divider>
      <v-btn
        v-if="email"
        class="flex-grow-1"
        tile
        height="48"
        text
        :href="email"
      >
        <v-icon left>mdi-email-outline</v-icon>
        Email
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    }
  }
}
</script>
