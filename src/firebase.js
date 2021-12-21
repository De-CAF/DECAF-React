
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDTGd003L4OevWnERsStTUzW--WVEXdZ9g",
    authDomain: "decaf-e84f2.firebaseapp.com",
    projectId: "decaf-e84f2",
    storageBucket: "decaf-e84f2.appspot.com",
    messagingSenderId: "871362539285",
    appId: "1:871362539285:web:e96323436836673dc6031c"
  };

// Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);  

  const auth = firebase.auth();
  const storage = firebase.storage();

  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider, storage}