<template>
  <v-container fluid>
    <div class="text-h1 mb-2">
      <div class="mb-2">{{ '2021-03-02T16:00:48.915Z' | formatDate('hh:mm b, MMM dd, yyyy') }}</div>
      <div class="mb-2">{{ '2020-10-10' | formatDate }}</div>
    </div>
    <a href="https://date-fns.org/v2.18.0/docs/format" target="_blank">See date-fns for more formats</a>
  </v-container>
</template>
