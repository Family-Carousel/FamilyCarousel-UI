<template>
  <LazyHydrate ssr-only>
    <v-sheet color="transparent">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col v-for="(item, i) in features" :key="i" cols="12" sm="6" lg="4">
            <v-card class="py-4 px-2">
              <v-responsive max-width="300" class="mx-auto text-center">
                <div class="mb-2">
                  <v-icon class="text-h2" color="secondary">{{
                    item.icon
                  }}</v-icon>
                </div>
                <div class="text-h6 mt-3">{{ item.title }}</div>
                <div class="font-weight-regular mt-2">
                  {{ item.description }}
                </div>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";

export default {
  components: {
    LazyHydrate,
  },
  data() {
    return {
      features: [
        {
          icon: "mdi-calendar-month",
          title: "Calendars",
          description:
            "Individual Member and Family calendars available to scheduling and planning events for yourself and your family",
        },
        {
          icon: "mdi-playlist-edit",
          title: "Lists",
          description:
            "Create lists to help you remember, prioritize, arrange and provide a simple structure to you and your families day",
        },
        {
          icon: "mdi-bell",
          title: "Notifications",
          description:
            "Receive Notifications for a scheduled event. Notifications for individuals and families to keep things organized",
        },
        {
          icon: "mdi-cake",
          title: "Birthdays",
          description:
            "As members are added to your family birthdays are added to the calender. We will remind you and help celebrate",
        },
        {
          icon: "mdi-cart",
          title: "Meal and Grocery Planning",
          description:
            "Unique features for meal planning available to your family. Grocery shopping made easy with meal planner integration",
        },
        {
          icon: "mdi-pill",
          title: "Perscription Tracker",
          description:
            "Input perscriptions for individual members. receive alerts to take your medicine and when they should be refilled",
        },
      ],
    };
  },
};
</script>
