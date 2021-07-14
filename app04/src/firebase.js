
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyC1ZNmtJ4pC4VeVV8n30TYvkm3CENIjuuk",
    authDomain: "react-crud-21d8a.firebaseapp.com",
    databaseUrl: "https://react-crud-21d8a.firebaseio.com",
    projectId: "react-crud-21d8a",
    storageBucket: "react-crud-21d8a.appspot.com",
    messagingSenderId: "422823765396",
    appId: "1:422823765396:web:2c90a76ba6fed46ade5b81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 //export default fireDb.database().ref();

 export default firebase;