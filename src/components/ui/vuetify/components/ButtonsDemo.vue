<template>
  <v-container fluid>
    <div class="ma-2 text-center">
      <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
      <v-btn class="ma-2" outlined fab color="teal">
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        large
        fab
        color="indigo"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <div class="ma-2 text-center">
      <v-btn class="ma-2" tile color="indigo" dark>Tile Button</v-btn>
      <v-btn class="ma-2" tile outlined color="success">
        <v-icon left>mdi-pencil</v-icon> Edit
      </v-btn>
      <v-btn
        class="ma-2"
        tile
        large
        color="teal"
        icon
      >
        <v-icon>mdi-vuetify</v-icon>
      </v-btn>
    </div>
    <div class="ma-2">
      <v-row align="center">
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn depressed small>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed small color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed small color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed small disabled>Disabled</v-btn>
          </div>
        </v-col>

        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn depressed>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed disabled>Disabled</v-btn>
          </div>
        </v-col>

        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn depressed large>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed large color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed large color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed large disabled>Disabled</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="ma-2 text-center">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="pink"
      >
        <v-icon dark>mdi-heart</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="teal">
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="cyan"
      >
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="purple"
      >
        <v-icon dark>mdi-android</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
