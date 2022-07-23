<template>
  <div class="ma-2">
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="4"
        circle
      ></v-pagination>
    </div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  }
}
</script>
