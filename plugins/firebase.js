import firebase from "firebase/app";
import 'firebase/auth';

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

if (!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase;