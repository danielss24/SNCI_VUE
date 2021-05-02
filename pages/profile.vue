<template>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Bienvenid@ {{user.displayName}}
        </div>
        <v-list-item-title class="headline mb-1">
          {{ user.email }}
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>


      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ><img
          alt="Avatar"
          :src="user.photoURL"
        ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        @click="testDB"
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth';
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
  // Con linea 44, carga y ejecuta middleware
  middleware: "autenticado",
  data: () => ({
      
  }),
  created() {
      this.subscribeMarket()
  },
  computed:{
    ...mapState('users',['user'])
  },
  methods:{
      ...mapActions('market',['subscribeMarket']),
    ...mapActions('users',['test']),
    testDB(){
      this.test()
    }
  }

}
</script>
