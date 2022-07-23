<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="4" xl="3">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">Get your startup ready for business</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <div class="mt-4">
            <v-btn large class="my-1 mr-sm-1 w-full w-sm-auto" color="secondary">Learn more</v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4" offset-xl="1">
          <v-img
            class="rounded-lg elevation-6"
            src="/images/features/13.jpg"
            :max-height="$vuetify.breakpoint.mdAndUp ? '700' : '300'"
            :min-height="$vuetify.breakpoint.mdAndUp ? '500' : '300'"
          ></v-img>
        </v-col>
        <v-col cols="12" md="4" xl="3" offset-xl="1">
          <div class="text-h6 text-lg-h5 mt-3 mt-xl-10">
            <div style="width: 80px; height: 4px" class="mb-5 secondary" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quas eum libero non, ipsa quis illo quisquam corporis tempore dolore vel magnam fugiat veniam amet est aliquid ipsam, accusamus itaque quaerat soluta cumque quia molestiae debitis. Earum praesentium placeat explicabo dicta, aliquam dolorem ut, pariatur velit quam nihil totam libero.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
