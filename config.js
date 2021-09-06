   import firebase from 'firebase'
 
 var firebaseConfig = {
    apiKey: "AIzaSyDynCW-qHukfoCZDttIaFk7RS8VhXOjdWE",
    authDomain: "project60-6377a.firebaseapp.com",
    projectId: "project60-6377a",
    databaseURL: 'https://project60-6377a-default-rtdb.firebaseio.com/',
    storageBucket: "project60-6377a.appspot.com",
    messagingSenderId: "1056767232045",
    appId: "1:1056767232045:web:e9768d5b40a3c3924050a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()