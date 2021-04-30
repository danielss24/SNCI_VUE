import { mapActions } from "vuex"
import { itemsDB } from "../services/firebase"
 /*

ITEMS ( PELICULAS ):

- Titulo
- Stock
- Valoracion
- contadoraValoracion

*/

export const state = () =>({
    marketDic : {},
    observer: null,
    error: ''
})
export const getters = {

}
//Mutaciones son sincronas
export const mutations = {
    modify (state,{querySnapshot,observer}) {
        querySnapshot.forEach((doc) => {
            var aux = doc.data()
            aux["id"] = doc.id
            state.marketDic[doc.id] = aux
        });   
        state.observer = observer
    }
}
// generalmente son asincronas
export const actions = {
    addFilm ({commit}, data)  {
        itemsDB.add(data)
    },
    subscribeMarket ({commit}) {
        var observer = itemsDB.onSnapshot((querySnapshot) => {
            //console.log("si o q", querySnapshot.data()) 
            commit("modify",{querySnapshot,observer})
        }, error => {
            console.log("Error: ${error}")
        })        
    }
}
