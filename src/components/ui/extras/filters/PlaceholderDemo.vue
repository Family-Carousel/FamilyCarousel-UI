<template>
  <v-container fluid>
    <div class="text-h1">
      <div>{{ data | placeholder('Loading...') }}</div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  }
}
</script>
