<template>
  <v-sheet color="transparent">
    <Toolbar2 is-fluid />
    <Hero5 />
  </v-sheet>
</template>

<script>
import Hero5 from '@/components/ui/landing/hero/Hero5.vue'
import Toolbar2 from '@/components/ui/landing/toolbar/Toolbar2.vue'

export default {
  components: {
    Hero5,
    Toolbar2
  }
}
</script>
