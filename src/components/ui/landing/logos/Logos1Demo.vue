<template>
  <Logos1 :logos="logos" />
</template>

<script>
import Logos1 from '@/components/ui/landing/logos/Logos1.vue'

export default {
  components: {
    Logos1
  },
  data() {
    return {
      logos: [{
        image: require('@/assets/images/logos/logo-1.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-2.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-3.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-4.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-5.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-7.svg'),
        link: '#'
      }]
    }
  }
}
</script>
