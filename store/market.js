import { mapActions } from "vuex"
import { itemsDB, usersDB } from "../services/firebase"
 /*

ITEMS ( PELICULAS ):

- Titulo
- Stock
- Valoracion
- contadoraValoracion

*/

/*
Film(
    name
    quantity
    rating
    description
    contVal
})*/


export const state = () =>({
    marketDic : {},
    observer: null,
    error: ''
})
//Mutaciones son sincronas
export const mutations = {
    modify (state,querySnapshot) {
        const marketDic = {}
        querySnapshot.forEach((doc) => {
            var aux = doc.data()
            aux["id"] = doc.id
            marketDic[doc.id] = aux
        }); 
        state.marketDic = marketDic
    },
    setObserver(state,observer){
        state.observer = observer
    }
}
// generalmente son asincronas
export const actions = {
    addFilm ({commit}, data)  {
        return itemsDB.add(data)
    },
    deleteFilm ({commit}, id)  {
        return itemsDB.doc(id).delete()
    },
    subscribeMarket ({commit}) {
        if (state.observer == null){
            const observer = itemsDB.onSnapshot((querySnapshot) => {
                commit("modify",querySnapshot)
            }, error => {
                console.log("Error: ${error}")
            })
            commit("setObserver",observer)
        }
    },
    rateFilm({state},{id,value}){
        itemsDB.doc(id).update({
            contVal: state.marketDic[id].contVal+1,
            rating: value+state.marketDic[id].rating
        }).then(() => {
            console.log("Document successfully updated!");
            console.log(state.marketDic[id])
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }/*,
    rentFilm(state,{id}){
        usersDB.
    }*/
}
