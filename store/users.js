import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import {  auth, getCurrentUser } from "../services/firebase"
import firebase from "../services/firebase"

export const state = () => ({
    user: {
        displayName: '',
        uid: null, // no null si está logueado
        email: null,
        photoURL: ''
    },
    // 
    error : '',
    afterLogin: '/profile', // donde dirigirse una vez complete el login (si accedió y no tenía permiso)
    listeningAuth: false,
    usersRent: {}
})

export const getters =  {
    logged: (state, getters, rootState) => state.user.uid !== null
}
//Mutaciones son sincronas
export const mutations = {
    setUser(state, user) {
        if (user) {
            state.user.email = user.email
            state.user.displayName = user.displayName
            state.user.uid = user.uid
            state.user.photoURL = user.photoURL || ""
        } else {
            // clearUserState
            state.user.displayName = ''
            state.user.uid = null
            state.user.email = ''
            state.user.photoURL = ''
        }
    },
    setError(state, payload) {
        state.error = payload
    },
    setListeningAuth(state, listening) {
        state.listeningAuth = listening
    },
    setAfterLogin(state, payload) {
        state.afterLogin = payload
    }
}
// generalmente son asincronas
export const actions = {
    async initAuth({ state, commit, dispatch }) {
        if (!state.listeningAuth) {
          commit('setListeningAuth', true)
          auth.onAuthStateChanged(user => {
            commit('setUser', user)
          })
          const user = await getCurrentUser() // Obtiene el usuario si no se cerrá sesión
          const prevUid = state.user.uid
          const newUid = user ? user.uid : null
          if (prevUid !== newUid) commit('setUser', user)
        }
    },
    signOutAction({state,commit}){
        console.log(state.user),
        firebase.auth().signOut().then(user => {
            console.log(user),
            commit('setUser', user)
      })
    },
    test(store){
        console.log("TEST")
        console.log(store.state.marketDic)
    }
}
