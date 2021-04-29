import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCewh7noLtr7FZcK2ItActwmwS678YLtBk",
    authDomain: "sncimarket.firebaseapp.com",
    projectId: "sncimarket",
    storageBucket: "sncimarket.appspot.com",
    messagingSenderId: "819807306406",
    appId: "1:819807306406:web:17c76c182110b858002a67",
    measurementId: "G-YYMX1B1CN7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app() // if already initialized, use that one
}

export const db = firebase.firestore()
export const storage = firebase.storage()

export const itemsDB = db.collection('market')

export const auth = firebase.auth()

function getCurrentUserPromise(auth) {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe()
        resolve(user)
        }, reject)
    })
}
  
export const getCurrentUser = async () => {
    if (auth.currentUser) return auth.currentUser
    const result = await getCurrentUserPromise(auth)
    return result
}

export default firebase