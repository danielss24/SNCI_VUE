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
          :v-if="item.if"
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
          v-if="logged"
          >
            Logout
          </v-btn>
          <login v-else> </login>
        </div>

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
      <v-toolbar-title v-text="title" />
      <v-spacer />
     
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth';
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Bienvenid@',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Perfil',
          to: '/profile',
          if: 'logged'
        },
        {
          icon: 'mdi-movie-plus-outline',
          title: 'Nueva película',
          to: '/addItem'
        },
        {
          icon: 'mdi-store',
          title: 'Videoclub',
          to: '/dashboard'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      user: ''

    }
  },

  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
      console.log(user);
    })
  },
  computed:{
    ...mapGetters('users',['logged'])
  },
  methods: {
    logOut(){
      firebase.auth().signOut()
    }

  }
}

</script>
