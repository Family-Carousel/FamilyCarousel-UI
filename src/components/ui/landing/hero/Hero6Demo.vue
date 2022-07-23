<template>
  <v-sheet class="bg-sheet pb-8">
    <Toolbar3 />
    <Hero6 />
  </v-sheet>
</template>

<script>
import Toolbar3 from '@/components/ui/landing/toolbar/Toolbar3.vue'
import Hero6 from '@/components/ui/landing/hero/Hero6.vue'

export default {
  components: {
    Toolbar3,
    Hero6
  }
}
</script>

<style scoped>
.bg-sheet {
  margin-bottom: 120px;
}

@media screen and (min-width: 700px) {
  .bg-sheet {
    margin-bottom: 220px;
  }
}
</style>
