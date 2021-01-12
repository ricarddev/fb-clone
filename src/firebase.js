import firebase from "firebase";




const firebaseConfig = {
    apiKey: "AIzaSyBSgGvZKeD_DuXT071cHkpb48JHUrHlvQo",
    authDomain: "facebook-clone-ffdac.firebaseapp.com",
    projectId: "facebook-clone-ffdac",
    storageBucket: "facebook-clone-ffdac.appspot.com",
    messagingSenderId: "785220534497",
    appId: "1:785220534497:web:e9bbff52c06b3c0c6db7a0",
    measurementId: "G-CK42HQR7JT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;