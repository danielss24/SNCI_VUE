import Vue from 'vue'
import Vuex from 'vuex'
import { usersDB } from "../services/firebase"
import 'firebase/auth';

/*

USER 

- Id
- Nombre
- Foto ?
- Fecha alta
- Fecha nacimiento ?

*/

export const state = () => ({
    return : {
        user: null,
        error: null 
    }
})

export const getters =  {
        getUser: (state) => {
            return state.user;
        },
        isUserAuth(state) {
            return !!state.user;
        },
        getError(state) {
            return state.error;
        }
    }
//Mutaciones son sincronas
export const mutations = {
    setUser(state, payload) {
        state.user = payload
    },
    setError(state, payload) {
        state.error = payload
    }/*,
    modify (state,usersDBUpdated) {
        console.log(usersDBUpdated)
        state = usersDBUpdated
    }*/
}
// generalmente son asincronas
export const actions = {
    signUpAction({ commit }, payload) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
            commit("setUser", response.user);
            })
            .catch(error => {
            commit("setError", error.message);
            });
    },
    signInAction({ commit }, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email,this.password).then(user => {
            console.log(user);
            commit("setUser", response.user);

            usersDB.add().set({
                name: data.name,
                email: data.email,
                dateUp: data.dateUp
            })
            this.$router.push('/profile')

        })
        .catch((error) => {
            alert(error.message)
            commit("setError", error.message);
        })
    },
    subscribe ({state,commit}) {

        const observer = itemsDB.onSnapShot(querySnapshot => {
            console.log("Recieved change, ${querySnapshot}")
            commit("modify",usersDBUpdated)
        }, error => {
            console.log("Error: ${error}")
        })

    }
}
