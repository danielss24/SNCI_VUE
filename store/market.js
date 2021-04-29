import Vue from 'vue'
import Vuex from 'vuex'
import { itemsDB } from "../services/firebase"

Vue.use(Vuex)

 /*

    ITEMS ( PELICULAS ):

    - Titulo
    - Stock
    - Valoracion
    - contadoraValoracion

    */
export const storeMarket = new Vuex.Store({
    state :{
        market : [],
        marketKV : {},
        item: {
            name :  '', 
            quantity :  0, 
            rating : 0, 
            description :''
        }
    },
    getters:{
        get: (state) => {
            return state.market
        }
    },
    //Mutaciones son sincronas
    mutations: {
        modify (state,marketUpdated) {
            state.push(marketUpdated)
            //marketKV[i] = {marketUpdated.id, marketUpdated.data().name}
        }
    },
    // generalmente son asincronas
    actions: {
        addItem (item)  {
            itemsDB.add().set({
                name: item.name,
                quantity: item.quantity,
                rating: item.rating,
                description: item.description,
                contVal: item.contVal+1
            }).then(function(docRef){
                console.log(docRef.id)
            })
        },
        subscribe ({state,commit}) {
            const observer = itemsDB.onSnapShot(querySnapshot => {
                console.log("Recieved change, ${querySnapshot}")
                console.log(querySnapshot)
                commit("modify",marketUpdated)
            }, error => {
                console.log("Error: ${error}")
            })

        }
    }
})