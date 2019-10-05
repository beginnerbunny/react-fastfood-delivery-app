import * as firebase from 'firebase';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyAPH-nCfRoUch-V5QqbynyIRwskHrcZW2Y",
    authDomain: "food-delivery-e905e.firebaseapp.com",
    databaseURL: "https://food-delivery-e905e.firebaseio.com",
    projectId: "food-delivery-e905e",
    storageBucket: "",
    messagingSenderId: "1058339705818",
    appId: "1:1058339705818:web:f33cba01cc9ea06b2966e3"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

//  const configType = 'dev';
 // export const configType = 'live';
 const db = firebaseApp.firestore(),
       auth = firebaseApp.auth();

  export {db, auth}