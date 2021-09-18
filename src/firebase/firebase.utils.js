import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCMmf-S4zbrkt1pOMnqgvRNQhylr6HRjkc",
    authDomain: "crwn-db-3a173.firebaseapp.com",
    projectId: "crwn-db-3a173",
    storageBucket: "crwn-db-3a173.appspot.com",
    messagingSenderId: "211543091645",
    appId: "1:211543091645:web:02c74445c3b0caa9b5cad4",
    measurementId: "G-BFBNZTCZ2S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle  = () => auth.signInWithPopup(provider);

  export default firebase;
