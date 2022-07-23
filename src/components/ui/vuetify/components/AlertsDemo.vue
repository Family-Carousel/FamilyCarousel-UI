<template>
  <v-container fluid>
    <v-alert type="success">
      I'm a success alert.
    </v-alert>

    <v-alert type="info">
      I'm an info alert.
    </v-alert>

    <v-alert type="warning">
      I'm a warning alert.
    </v-alert>

    <v-alert type="error">
      I'm an error alert.
    </v-alert>

    <v-alert
      color="#2A3B4D"
      dark
      icon="mdi-firework"
      dense
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.

    </v-alert>

    <v-alert
      color="#C51162"
      dark
      icon="mdi-material-design"
      border="right"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio lacinia tincidunt.
    </v-alert>

    <v-alert
      color="primary"
      dark
      icon="mdi-vuetify"
      border="left"
      prominent
    >
      Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur at lacus ac velit ornare lobortis.
    </v-alert>

    <v-alert
      border="left"
      colored-border
      color="deep-purple accent-4"
      elevation="2"
    >
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

      Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </v-alert>

    <v-alert
      border="top"
      colored-border
      type="info"
      elevation="2"
    >
      Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
    </v-alert>

    <v-alert
      border="bottom"
      colored-border
      type="warning"
      elevation="2"
    >
      Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
    </v-alert>

    <v-alert
      border="right"
      colored-border
      type="error"
      elevation="2"
    >
      Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.
    </v-alert>
  </v-container>
</template>
