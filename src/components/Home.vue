<template>
  <v-container>
    <v-app>
      <div>
        <h3 v-if="user">Hi, {{ user.fname }} {{ user.lname }}</h3>
        <h3 v-if="!user">You login</h3>
      </div>
    </v-app>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Home",
  computed: {
    ...mapGetters(['user'])
  }
};
</script>

<style></style>
