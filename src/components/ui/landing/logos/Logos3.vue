<template>
  <v-sheet>
    <v-container class="text-center">
      <div class="text-body-1 text-uppercase font-weight-bold">{{ title }}</div>
      <div class="logos3 my-4">
        <v-row dense>
          <v-col
            v-for="(logo, index) in logos"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <a :href="logo.link">
              <v-sheet color="surface">
                <img :src="logo.image" />
              </v-sheet>
            </a>
          </v-col>
        </v-row>
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

<style lang="scss" scoped>
.logos3 {
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
