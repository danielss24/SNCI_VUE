import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCewh7noLtr7FZcK2ItActwmwS678YLtBk",
    authDomain: "sncimarket.firebaseapp.com",
    projectId: "sncimarket",
    storageBucket: "sncimarket.appspot.com",
    messagingSenderId: "819807306406",
    appId: "1:819807306406:web:17c76c182110b858002a67",
    measurementId: "G-YYMX1B1CN7"
};

let app = null;
let db = null;
let usersDB = null;
let itemsDB = null;

if (!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    usersDB = db.collection('users');
    itemsDB = db.collection('market');

}

export {
    firebase,
    db,
    usersDB,
    itemsDB   
}