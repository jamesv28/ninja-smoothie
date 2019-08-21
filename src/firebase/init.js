import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBIXO_n8qRp9TPdgKF81Fh1SKnS6FuYrtg",
    authDomain: "ninja-smoothie-249a7.firebaseapp.com",
    databaseURL: "https://ninja-smoothie-249a7.firebaseio.com",
    projectId: "ninja-smoothie-249a7",
    storageBucket: "ninja-smoothie-249a7.appspot.com",
    messagingSenderId: "254862530895",
    appId: "1:254862530895:web:3ccda786a06300d4"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // export firestore
  export default firebaseApp.firestore();