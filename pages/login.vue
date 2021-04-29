<template>
  
  <div id="firebaseui-auth-container" />
</template>


<script>
import firebase, { auth } from '~/services/firebase'
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";


export default {
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
      /*login () {
        console.log(this.password)
        this.signInAction({ email: this.email, password: this.password });
      },*/
      showLogin(firebaseui) {
        const uiConfig = {
          // signInSuccessUrl: '<url-to-redirect-to-on-success>', //En Nuxt esto sería un problema, ya que firebase-ui no usa vue-route
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
          // tosUrl and privacyPolicyUrl accept either url string or a callback
          // function.
          // Terms of service url/callback.
          // tosUrl: '<your-tos-url>',
          // Privacy policy url/callback.
          // privacyPolicyUrl: function() {
          //  window.location.assign('<your-privacy-policy-url>')
          // }
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