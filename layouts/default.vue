<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :v-if='item.if'
          router
          exact

        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logOut" 
          v-if="logged==true"
          >
            Logout
          </v-btn>
        </div>
      <!--<div v-if="logged==false" id="firebaseui-auth-container_bar" />-->
      </template>

    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase, { auth } from '~/services/firebase'
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";


export default {
  data () {
    return {
      
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Login',
          to: '/login',
          if:'user=null'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'profile',
          to: '/profile'
        },
        {
          icon: 'mdi-store',
          title: 'Add Item',
          to: '/addItem'
        },
        {
          icon: 'mdi-store',
          title: 'Supermercado',
          to: '/dashboard'
        },
        {
          icon: 'mdi-store',
          title: 'Item Card',
          to: '/fbItemCard'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      user: ''

    }
  },
  created() {
    this.initAuth()
  },
  computed: {
    ...mapGetters('users',["logged"])
  },
  mounted(){
    //const firebaseui = require('firebaseui')    
    //this.showLogin(firebaseui)
  },

  methods: {
    ...mapActions('users',["signOutAction","initAuth"]),
    logOut(){
      this.signOutAction()  
    },
    /*showLogin(firebaseui) {
        const uiConfig = {
          signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            //firebase.auth.EmailAuthProvider.PROVIDER_ID
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
        ui.start('#firebaseui-auth-container_bar', uiConfig)
      }*/
  }

  
}

</script>

<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
