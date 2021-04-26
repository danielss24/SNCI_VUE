<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Add new item to market</div>
        <v-form>
          <v-text-field
            v-model="name"
            masked="true"
            label="Article"
            prepend-icon="mdi-basket-plus"
          />
          <v-text-field
            v-model="description"
            label="Description"
            prepend-icon="mdi-sale"
          />
          <v-text-field
            v-model="quantity"
            label="Quantity"
            prepend-icon="mdi-sale"
          />
          <v-rating
          v-model="rating"
          background-color="indigo lighten-3"
          color="indigo"
          ></v-rating>
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
import { itemMarket } from "../store/item";

export default {
  data: () => ({
    db,
    firebase,
    name: '', 
    quantity: '',
    rating: 0,
    description: ''
    //itemMarket
  }),
  methods: {
      addItem () {
        //itemsDB.doc(beerAux.id).collection('recipe').add(beerAux.recipe)
        
      /*  itemsDB.add({
          text: this.name
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });*/
        itemsDB.doc(this.name).set({
          name: this.name,
          quantity: this.quantity,
          rating: this.rating,
          description: this.description
        })
      },    
  }
}
</script>
