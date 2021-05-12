<template>
  <div class="text-center">

    <v-container>
        <v-row>
          <v-col
            v-for="n in this.marketDic"
            :key="n.id"
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

            
            <v-list-item three-line>
              <v-fab-transition >
                <v-btn
                  v-show="logged"
                  color="purple"
                  fab
                  dark
                  small
                  absolute
                  right
                  top
                >
                  <v-icon >mdi-basket-plus</v-icon>
                </v-btn>
              </v-fab-transition>
            <v-fab-transition >
                <v-btn
                  v-show="loggedAdmin"
                  color="red"
                  fab
                  dark
                  small
                  absolute
                  left
                  top
                  @click="deleteItem(n.id, n.name)"
                >
                  <v-icon >mdi-delete</v-icon>
                </v-btn>
              </v-fab-transition>
              <v-list-item-content>
                <v-card-text>{{n.description}}</v-card-text>
              </v-list-item-content>

            </v-list-item>
            <span class="pl-2 grey--text text--darken-2 font-weight-light caption">{{n.contVal}} reviews</span>
            <v-card-actions>
                  
                  <v-rating 
                  background-color="indigo lighten-3"
                  color="indigo"
                  :value="n.rating/n.contVal"
                  hover
                  half-increments
                  @input="rate($event, n.id)"
                  ></v-rating>


                  <span class="grey--text text--lighten-2 caption mr-2">
                    ({{ (n.rating/n.contVal).toFixed(2) }})
                  </span>
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
      <v-alert v-if="error" :dismissible="true" @click='error = ""' type="error">
        {{ error }}
      </v-alert>
      <v-snackbar
        v-model="snackbar"
      >
        {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  
  
</template>

<script>
  import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

  export default {
    data: () => ({
      snackbar: false,
      snackbarText: "",
      error: ""
    }),
    created (){
      this.subscribeMarket()
    },
    computed:{
      ... mapState('market',['marketDic']),
      ... mapState('users',['user']),
      ... mapGetters('users',['logged']),
      loggedAdmin(){
        if (this.logged){
          if (this.user.email == "daniel@daniel.com"){
            return true
          }
        }
      }
    },
    methods: {
      ...mapActions('market',['subscribeMarket','rateFilm','rentFilm','deleteFilm']),
      async getDataFB (collectionItem) {
        const snapshot = await collectionItem.get();
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      },
      async rate(value, id){
        if (id != NaN && value != NaN){
          await this.$nextTick()
          await this.rateFilm({id,value})
        }
        
      },
      rent(id){
        this.rentFilm({id})
      },
      async deleteItem(id, title){
        try{
          await this.deleteFilm(id)
          this.snackbar = true
          this.snackbarText = 'Película "' + title + '" borrada con éxito.'
        } catch (Error){
          this.error = "Error al borrar la película."
          this.snackbar = true
        }
      }
    },

  }
</script>