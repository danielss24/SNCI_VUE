<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
  <v-img
      :aspect-ratio="16/9"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title v-if="!hover">Name</v-card-title>
    </v-img>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle>description</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
          <v-rating
          v-model="rating"
          background-color="indigo lighten-3"
          color="indigo"
          value="3"
          ></v-rating>
    </v-card-actions>
    <v-card-actions>
        <v-list-item-subtitle>
            quantity
        </v-list-item-subtitle>    
    </v-card-actions>
  </v-card>

</template>


<script>
  import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

  export default {
    created (){
      //console.log(this.marketDic)
    },
    computed:{
      ... mapState('market',['marketDic']),
    }

  }
</script>