<template>
  <div id="firebaseui-auth-container" />
</template>


<script>
import firebase, { auth } from '~/services/firebase'
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";


export default {
  name: "login",
  data: () => ({
      errors: ''
  }),
  created() {
    // Intenta autenticar si aun guarda el token de acceso
    this.initAuth()
  },
  watch: {
    logged: {
      immediate: true,
      handler(logged) {
        if (logged){
          this.$router.push('/profile')
        }
      }
    }
  },
  computed: {
    ...mapGetters('users',["logged"])
  },
  mounted() {
    const firebaseui = require('firebaseui')
    this.showLogin(firebaseui)
  },
  methods: {
      ...mapActions('users',["signInAction","initAuth"]),
      showLogin(firebaseui) {
        const uiConfig = {
          signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
          ],
          callbacks: {
            signInSuccessWithAuthResult() {
              return 0
            }
          }
        }
        const ui =
          firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig)
      }
  }
}
</script>

<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>