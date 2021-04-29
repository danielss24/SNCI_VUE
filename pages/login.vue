<template>
  <v-container class="fill-height container" fluid>
    <video style="position:fixed; left: 0px;" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="/login.mp4" type="video/mp4">
    </video>
    <v-card width="400" class="mx-auto mt-5" tile>
      <v-card-title>
        <h1 class="display-1">
          Login
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="email"
            masked="true"
            label="Email"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn
          color="success"
          to="/create"
        >
          Register
        </v-btn>
        <v-spacer />
        <v-btn
          color="info"
          :disabled="!valid"
          @click="login"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
import firebase from "firebase/app";

import { mapActions, mapMutations, mapGetters, mapState } from "vuex";


export default {
  data: () => ({
      email: '',
      password: '',
      showPassword: false,
      errors: '',
      valid: null
  }),
  methods: {
      ...mapActions(["signInAction"]),
      login () {
        this.signInAction({ email: this.email, password: this.password });     
      }
}
}
</script>

<style>
* {
  color: white;
}
</style>
