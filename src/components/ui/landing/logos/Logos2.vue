<template>
  <v-sheet color="transparent">
    <v-container>
      <div class="d-flex">
        <v-divider class="my-1"></v-divider>
        <div class="mx-3 overline">{{ title }}</div>
        <v-divider class="my-1"></v-divider>
      </div>
      <div class="text-center my-4">
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
