<template>
  <v-container>
    <v-card class="mx-auto mt-10 pt-5 pb-5 ml-17 mr-17" max-width="700">
      <v-form ref="form" @submit.prevent="handleSubmit">
        <h3 class="namepage">Sign Up</h3>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="fname"
                :rules="[rules.name, rules.required]"
                color="purple darken-2"
                label="First Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="lname"
                :rules="[rules.name, rules.required]"
                color="purple darken-2"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                color="purple darken-2"
                label="Email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="password"
                :rules="rules.password"
                color="purple darken-2"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="confirm_password"
                :rules="rules.confirmPassword"
                color="purple darken-2"
                label="Confirm Password"
                type="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions class="mt-5">
            <v-btn color="error" @click="reset"> Reset </v-btn>
            <v-btn depressed to="/">Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit"> Register </v-btn>
          </v-card-actions>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: "Register",
  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirm_password: '',
      rules: {
        required: (value) => !!value || "Required.",
        name: [(val) => (val || "").length > 0 || "This field is required"],
        confirm_password: [
          (val) => (val || "").length > 0 || "This field is required",
        ],
        min: (v) => v.length >= 8 || "Min 8 characters",
        email: (value) => {
          if (value.length > 0) {
            const pattern =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
          }
        },
        password: [
          (value) => !!value || "Required password.",
          (value) => (value && value.length >= 8) || "minimum 8 characters",
        ],
        confirmPassword: [
          (value) => !!value || "Required confirm password",
          (value) =>
            value === this.password ||
            "The password confirmation does not match.",
        ],
      },
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      this.resetForm();
    },
    async handleSubmit() {
      const response = await axios.post('register', {
        email: this.email,
        password: this.password,
        fname: this.fname,
        lname: this.lname,
        // confirm_password: this.form.confirm_password
      });
      console.log(response);
    },
  },
};
</script>

<style>
.btn11 {
  margin-left: auto;
}
.namepage {
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
}
</style>
