<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Test</v-toolbar-title>

      <v-spacer></v-spacer>
      <ul class="navbar-nav ml-auto" v-if="!user">
        <v-btn class="mr-5" text to="/">Login</v-btn>
        <v-btn class="mr-5" text to="/register">Sign up</v-btn>
      </ul>
      <!-- <ul class="navbar-nav ml-auto" v-if="user">
        <v-btn class="mr-5" href="javascript:void(0)" text @click="handleClick">Log out</v-btn>
      </ul> -->
      <v-btn icon>
        <v-icon>mdi-account-cog</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  name: "Nav",
  // methods: {
  //   handleClick() {
  //     localStorage.removeItem('token')
  //     this.$store.dispatch('user', null)
  //     this.$router.push('/')
  //   }
  // },
  // computed: {
  //   ...mapGetters(['user'])
  // }
};
</script>
