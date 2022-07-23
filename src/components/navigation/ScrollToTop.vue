<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      aria-label="Scroll To Top"
      :style="{
        marginBottom: `${$vuetify.application.snackbar}px`,
      }"
      title="Scroll To Top"
      bottom
      class="transition-swing"
      color="primary"
      fab
      fixed
      right
      style="z-index: 6"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({ fab: false }),

  methods: {
    onScroll () {
      const top = (
        window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
      )

      this.fab = top > 300
    },
    toTop () {
      if (this.$route.hash) {
        this.$router.push({ hash: '' })
      }

      this.$vuetify.goTo(0)
    }
  }
}
</script>
