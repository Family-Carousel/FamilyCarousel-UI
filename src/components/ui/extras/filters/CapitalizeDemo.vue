<template>
  <v-container fluid>
    <div class="text-h1">
      <div>{{ 'capitalize just the first word' | capitalize }}</div>
      <div>{{ 'capitalize all words' | capitalize(true) }}</div>
    </div>
  </v-container>
</template>
