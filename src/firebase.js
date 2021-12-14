import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHCOvohuZ9phXK-jijoJDldtlGFjpBFlA",
    authDomain: "clone-e3a0d.firebaseapp.com",
    projectId: "clone-e3a0d",
    storageBucket: "clone-e3a0d.appspot.com",
    messagingSenderId: "453691275026",
    appId: "1:453691275026:web:a8b2b3d72378a607ada5cb",
    measurementId: "G-NS1JHC2WDV"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  
  export { auth ,provider };
  export default db;