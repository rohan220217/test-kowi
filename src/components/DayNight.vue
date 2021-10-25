<template>
  <v-btn
    @click="darkButton"
    absolute
    dark
    fixed
    fab
    bottom
    small
    right
    color="primary"
    style="bottom: 15px"
  >
    <v-icon>{{
      $vuetify.theme.dark ? "mdi-white-balance-sunny" : "mdi-brightness-2"
    }}</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["toggleDark"]),
    darkButton() {
      this.toggleDark();
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    ...mapGetters(["getIsDark"]),
  },
  created() {
    if (this.getIsDark == "dark") this.$vuetify.theme.dark = true;
    else if (this.getIsDark == "light") this.$vuetify.theme.dark = false;
  },
};
</script>