<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Add new item to market</div>
        <v-form>
          <v-text-field
            v-model="nameArt"
            masked="true"
            label="Article"
            prepend-icon="mdi-basket-plus"
          />
          <v-text-field
            v-model="quantity"
            label="Quantity"
            prepend-icon="mdi-sale"
          />
        </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="addItem"
      >
        <v-icon dark>
        mdi-plus
        </v-icon>
      </v-btn>
    </v-card-actions>

    
  </v-card>
</template>

<script>

import firebase from "firebase/app";
import firestore from "firebase/firestore";
import 'firebase/auth';
import { db,itemsDB } from "../plugins/firebase";

export default {
  data: () => ({
    db,
    firebase,
    nameArt, 
    quantity
  }),
  methods: {
      addItem () {
        itemsDB.add({
          text: this.nameArt,
          completed: false,
          createdAt: new Date()
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
        this.newTodo = '';
        
      }
  }
}
</script>
