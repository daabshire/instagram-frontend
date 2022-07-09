import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTgjGAKJPRs0wv3DV8MyE7JnV3tUxzV_0",
  authDomain: "instagram-clone-4e719.firebaseapp.com",
  databaseURL: "https://instagram-clone-4e719-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-4e719",
  storageBucket: "instagram-clone-4e719.appspot.com",
  messagingSenderId: "181897386354",
  appId: "1:181897386354:web:28250f70bb319e230aa5eb",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
