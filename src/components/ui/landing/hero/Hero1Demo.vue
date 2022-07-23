<template>
  <v-sheet color="transparent">
    <Toolbar1 />
    <Hero1 />
  </v-sheet>
</template>

<script>
import Hero1 from '@/components/ui/landing/hero/Hero1.vue'
import Toolbar1 from '@/components/ui/landing/toolbar/Toolbar1.vue'

export default {
  components: {
    Hero1,
    Toolbar1
  }
}
</script>
