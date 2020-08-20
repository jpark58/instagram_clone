import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCC1alhc68liWnbIn8r55a40bnn4Riwhoo",
  authDomain: "instagram-clone-react-37844.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-37844.firebaseio.com",
  projectId: "instagram-clone-react-37844",
  storageBucket: "instagram-clone-react-37844.appspot.com",
  messagingSenderId: "561965130814",
  appId: "1:561965130814:web:cee2dac9e740aa36935d6f",
  measurementId: "G-KVFC5MNXP4",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
