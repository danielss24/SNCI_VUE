<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    >
    <!--<v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>-->
    </v-pagination>
  </div>
  
  
</template>

<script>
  import firebase from "firebase/app";
  import 'firebase/auth';
  import 'firebase/firestore'
  import { itemsDB } from '../services/firebase';
  export default {
    
    mounted() {
      let collectionItem = itemsDB.get()
      this.getDataFB(collectionItem)
    },
    methods: {
      async getDataFB (collectionItem) {
        const snapshot = await collectionItem.get();
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      }
    },

  }
</script>