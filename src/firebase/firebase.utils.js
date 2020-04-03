import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2UQSi0H8-wds1WErGZ7pTXZ3ZcEEGYr0",
  authDomain: "react-crown-db-707ac.firebaseapp.com",
  databaseURL: "https://react-crown-db-707ac.firebaseio.com",
  projectId: "react-crown-db-707ac",
  storageBucket: "react-crown-db-707ac.appspot.com",
  messagingSenderId: "566329579700",
  appId: "1:566329579700:web:d87c42b37dd95b3305dfe1",
  measurementId: "G-200DGW9G43"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
