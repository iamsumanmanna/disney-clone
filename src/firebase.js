import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCSFhrLcCzKFNwrdUD-6wJRmjJEKWklfvg",
    authDomain: "disneyplus-clone-3c1c2.firebaseapp.com",
    projectId: "disneyplus-clone-3c1c2",
    storageBucket: "disneyplus-clone-3c1c2.appspot.com",
    messagingSenderId: "322918085386",
    appId: "1:322918085386:web:a50b1f34e36e81140e80f3",
    measurementId: "G-L11E5M00DB"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;