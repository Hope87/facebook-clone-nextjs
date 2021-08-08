import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBD_k7hxn_pnnyjgiz1jNhZOvybUoF0wTo",
    authDomain: "facebook-clone-9f3c8.firebaseapp.com",
    projectId: "facebook-clone-9f3c8",
    storageBucket: "facebook-clone-9f3c8.appspot.com",
    messagingSenderId: "994093907807",
    appId: "1:994093907807:web:fc7b87909e761a3d3400ea"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };