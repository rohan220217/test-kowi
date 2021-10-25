<template>
  <v-app class="main-app">
    <kowi-app-bar></kowi-app-bar>
    <v-main>
      <!-- <v-slide-x-transition mode="in-out"> -->
      <router-view />
      <!-- </v-slide-x-transition> -->
    </v-main>
    <kowi-day-night></kowi-day-night>
  </v-app>
</template>

<script>
import KowiAppBar from "./components/NavigationDrawer.vue";
import KowiDayNight from "./components/DayNight.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    KowiDayNight,
    KowiAppBar,
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

.main-app {
  font-family: "Quicksand", sans-serif;
}
</style>
