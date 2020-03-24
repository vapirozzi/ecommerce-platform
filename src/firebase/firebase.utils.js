import firebase from "firebase/app";

import "firebase/auth";

import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCt9W2ENNFzHczQpgtx8D-YvTbcdtnzWwU",
  authDomain: "ecommerce-db-9de7f.firebaseapp.com",
  databaseURL: "https://ecommerce-db-9de7f.firebaseio.com",
  projectId: "ecommerce-db-9de7f",
  storageBucket: "ecommerce-db-9de7f.appspot.com",
  messagingSenderId: "287565705815",
  appId: "1:287565705815:web:ae03a41c6f324e654a2912",
  measurementId: "G-FBXK1VBMV4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
