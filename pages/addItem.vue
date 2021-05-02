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
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
  ... mapState('market',['market']),
  data: () => ({
    firebase,
    
    name: '', 
    quantity: '',
    rating: 0,
    description: '',
    data: {}
    //itemMarket
  }),

  methods: {
      ...mapActions('market',["addFilm"]),
      addItem () {
        this.addFilm({name: this.name, quantity: this.quantity, rating: this.rating, description: this.description, contVal: 1, rented: 0 })
      },    
  }
}
</script>
