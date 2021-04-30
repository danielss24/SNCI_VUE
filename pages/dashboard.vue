<template>
  <div class="text-center">

    <v-container>
        <v-row>
          <v-col
            v-for="n in this.marketDic"
            :key="n.id"
            cols="4"
          >
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
          <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title >{{n.name}}</v-card-title>
              
            </v-img>

            <v-fab-transition>
                <v-btn
                  v-show="!hidden"
                  color="pink"
                  fab
                  dark
                  small
                  absolute
                  right
                >
                  <v-icon>mdi-basket-plus</v-icon>
                </v-btn>
              </v-fab-transition>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle>{{n.description}}</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

              
            <v-card-actions>
                  <span class="pl-2 grey--text text--darken-2 font-weight-light caption">{{n.contVal}} reviews</span>
                  <v-rating
                  background-color="indigo lighten-3"
                  color="indigo"
                  :value="n.rating/n.contVal"
                  hover
                  ></v-rating>
            </v-card-actions>
            <v-card-actions>
                <span class="pl-2 grey--text text--darken-2 font-weight-light caption">Stock: </span>
                <v-list-item-subtitle>
                    {{n.quantity}}
                </v-list-item-subtitle>
            
            </v-card-actions>
          </v-card>

          </v-col>
        </v-row>
      </v-container>
  </div>
  
  
</template>

<script>
  import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

  export default {
    created (){
      console.log("susb")
      this.subscribeMarket()
    },
    mounted() {
//      this.getDataFB(collectionItem)
    },
    computed:{
      ... mapState('market',['marketDic'])
    },
    methods: {
      ...mapActions('market',['subscribeMarket']),
      async getDataFB (collectionItem) {
        const snapshot = await collectionItem.get();
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      }
    },

  }
</script>