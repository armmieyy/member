<template>
  <div>
    <v-app>
      <Nav/>
      <div class="auth-wrapper">
        <div class="auth-inner">
          <router-view/>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Nav,
  },

  data() {
    return {
      user: null
    }
  },
  async creates() {
    const respone = await axios.get('user')

    this.$store.dispatch('user', respone.data)
  }
};
</script>