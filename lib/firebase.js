import { initializeApp, getApps } from "firebase/app"
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// import 'firebase/messaging';
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider  } from "firebase/auth"
import { getStorage } from "firebase/storage"
//import { getMessaging } from "firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyBZiZD4Oj9Jd-GWxpcI6YkPkEn3hXoIkiY",
    authDomain: "social-bloging.firebaseapp.com",
    projectId: "social-bloging",
    storageBucket: "social-bloging.appspot.com",
    messagingSenderId: "528325991272",
    appId: "1:528325991272:web:4b87a1abe3c389a71554dd"
};

//old
// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }

if (!getApps().length) {
    initializeApp(firebaseConfig)
  }
const app = initializeApp(firebaseConfig)
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();
// export const messaging = firebase.messaging();

const db = getFirestore(app)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider();
const firestore = getFirestore(app)
const storage = getStorage(app)
//const messaging = getMessaging(app)

export {db, auth, googleAuthProvider, firestore, storage} //, messaging}
