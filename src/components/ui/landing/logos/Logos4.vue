<template>
  <v-sheet>
    <v-container class="text-center">
      <div class="text-body-2 font-weight-bold text-uppercase">{{ title }}</div>
      <div class="my-4">
        <a
          v-for="(logo, index) in logos"
          :key="index"
          :href="logo.link"
        >
          <img :src="logo.image" />
        </a>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    logos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
img {
  filter: grayscale(100%) brightness(2);
  width: 180px;
}

.theme--dark img {
  filter: grayscale(100%) invert(1);
}

img:hover {
  filter: none;
}
</style>
