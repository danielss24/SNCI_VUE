import { itemsDB, firebase } from "../services/firebase"

 /*

    ITEMS ( PELICULAS ):

    - Titulo
    - Stock
    - Valoracion
    - contadoraValoracion

    */

export const state = () =>({
    market : [],
    marketKV : {},
    item: {
        name :  '', 
        quantity :  0, 
        rating : 0, 
        description :''
    }
})
export const getters = {
    get: (state) => {
        return state.market
    }
}
//Mutaciones son sincronas
export const mutations = {
    modify (state,marketUpdated) {
        state.push(marketUpdated)
        //marketKV[i] = {marketUpdated.id, marketUpdated.data().name}
    }
}
// generalmente son asincronas
export const actions = {
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
