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
import { db,itemsDB } from "../services/firebase";
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
  data: () => ({
    db,
    firebase,
    
    return: {
      name: '', 
      quantity: '',
      rating: 0,
      description: '',
      data: {}
    }
    //itemMarket
  }),
  methods: {
      addItem () {
        
      /*  itemsDB.add({
          text: this.name
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });

        itemsDB.doc(this.name).set({
          name: this.name,
          quantity: this.quantity,
          rating: this.rating,
          description: this.description
        })*/
        console.log(this.name)
        console.log(this.quantity)
        console.log(this.description)
        console.log(this.rating)
        //console.log([this.name, this.quantity, this.rating, this.description])
        //this.$storeMarket.state.item = {name =  this.name, quantity =  this.quantity, rating = this.rating, description= this.description}
        console.log(this.$storeMarket.state.item)
        this.$storeMarket.commit('add',data)
      },    
  }
}
</script>
