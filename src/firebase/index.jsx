import * as firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsWGSMK66XfHR4vUmAx_icZXskysxhFcA",
  authDomain: "bike-tour-f0941.firebaseapp.com",
  projectId: "bike-tour-f0941",
  storageBucket: "bike-tour-f0941.appspot.com",
  messagingSenderId: "522665344357",
  appId: "1:522665344357:web:86043e36e883200e9ab58c",
  measurementId: "${config.measurementId}"
};
  
// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// export const getFirestore = () => app;

// export {getFirestore}; 

const app = firebase.initializeApp(firebaseConfig);

export const firestoreNFT = firebase.firestore(app)

