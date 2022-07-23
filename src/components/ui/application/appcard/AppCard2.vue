<template>
  <v-card class="h-full d-flex flex-column">
    <div class="pa-3 flex-grow-1">
      <div class="d-flex align-center flex-column">
        <v-avatar small size="120">
          <v-img :src="image" :alt="name" />
        </v-avatar>
        <div class="text-center mt-2">
          <span class="font-weight-bold text-body-2">{{ name }}</span>
          <div class="secondary--text text--lighten-1 text-caption">
            {{ title }}
          </div>
        </div>
        <v-chip v-if="role" small color="accent" class="font-weight-bold mt-2">{{ role }}</v-chip>
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

      <v-divider v-if="email && phone" vertical></v-divider>

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
