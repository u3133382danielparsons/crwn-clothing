import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAR-9lPJsa8UjRFXxacoquaJfaSn3fziJY",
    authDomain: "crwn-db-2031f.firebaseapp.com",
    databaseURL: "https://crwn-db-2031f.firebaseio.com",
    projectId: "crwn-db-2031f",
    storageBucket: "",
    messagingSenderId: "606816840669",
    appId: "1:606816840669:web:098f395cf76476166f2434",
    measurementId: "G-BFNS9GXZL1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;