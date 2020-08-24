

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBT3mtOYFo2KiC2gb9KQPaNW8w63FvQAg8",
    authDomain: "todo-app-5243a.firebaseapp.com",
    databaseURL: "https://todo-app-5243a.firebaseio.com",
    projectId: "todo-app-5243a",
    storageBucket: "todo-app-5243a.appspot.com",
    messagingSenderId: "50317366079",
    appId: "1:50317366079:web:d6f5195f7dbf915ed9798a",
    measurementId: "G-PS3MXM7PQN"

  });
  const db = firebase.firestore();


  export default db;