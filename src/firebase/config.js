import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

  var firebaseConfig = {
    apiKey: "AIzaSyB7Oe45pVtxQIAmicJ2u9UU5_ZQBXygpJ4",
    authDomain: "where-s-waldo-99745.firebaseapp.com",
    projectId: "where-s-waldo-99745",
    databaseURL: "https://where-s-waldo-99745-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "where-s-waldo-99745.appspot.com",
    messagingSenderId: "814018642206",
    appId: "1:814018642206:web:cd30ce63dc88334048490f",
    measurementId: "G-FEXF3P1CPC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase is initialized.');
  const firestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const database = firebase.database();

export { firestore,timestamp,database };

