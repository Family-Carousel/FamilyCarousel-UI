<template>
  <div class="logos5 text-center">
    <v-row dense>
      <v-col
        v-for="(logo, index) in logos"
        :key="index"
        cols="12"
        sm="6"
      >
        <a :href="logo.link">
          <v-sheet color="surface">
            <img :src="logo.image">
          </v-sheet>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.logos5 {
  img {
    filter: grayscale(100%) brightness(2);
    width: 180px;
  }

  .theme--dark img {
    filter: grayscale(100%) invert(1);
  }

  a:hover {
    img {
      filter: none;
    }
  }
}
</style>
