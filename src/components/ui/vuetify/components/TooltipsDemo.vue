<template>
  <div class="text-center ma-2 mt-6">
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="mx-1"
          dark
          v-bind="attrs"
          v-on="on"
        >Left</v-btn>
      </template>
      <span>Left tooltip</span>
    </v-tooltip>

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="mx-1"
          dark
          v-bind="attrs"
          v-on="on"
        >Top</v-btn>
      </template>
      <span>Top tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="mx-1"
          dark
          v-bind="attrs"
          v-on="on"
        >Bottom</v-btn>
      </template>
      <span>Bottom tooltip</span>
    </v-tooltip>

    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="mx-1"
          dark
          v-bind="attrs"
          v-on="on"
        >Right</v-btn>
      </template>
      <span>Right tooltip</span>
    </v-tooltip>
  </div>
</template>
