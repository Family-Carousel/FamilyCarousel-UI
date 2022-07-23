<template>
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
              <div class="font-weight-regular mt-2">{{ item.description }}</div>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "mdi-account-check-outline",
          title: "Calendars",
          description:
            "Individual Member and Family calendars available to scheduling and planning events for yourself and your family",
        },
        {
          icon: "mdi-lifebuoy",
          title: "Lists",
          description:
            "Create lists to help you remember, prioritize, arrange and provide a simple structure to you and your families day",
        },
        {
          icon: "mdi-email-open-multiple-outline",
          title: "Alerts",
          description:
            "Receive alerts for a scheduled event. Alerts for individuals and families to keep things organized",
        },
        {
          icon: "mdi-clock-outline",
          title: "Birthdays",
          description:
            "As members are added to your family birthdays are added to the calender. We will remind you and help celebrate",
        },
        {
          icon: "mdi-twitter",
          title: "Meal and Grocery Planning",
          description:
            "Unique features for meal planning available to your family. Grocery shopping made easy with meal planner integration",
        },
        {
          icon: "mdi-chart-box-outline",
          title: "Perscription Tracker",
          description:
            "Input perscriptions for individual members. receive alerts to take your medicine and when they should be refilled",
        },
      ],
    };
  },
};
</script>
