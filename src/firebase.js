import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCDyBorwD1oNX9SGrVsXS4bNZ5ftR1a9XI",
  authDomain: "coke-1cf00.firebaseapp.com",
  projectId: "coke-1cf00",
  storageBucket: "coke-1cf00.appspot.com",
  messagingSenderId: "452216718934",
  appId: "1:452216718934:web:f585bff1bec6f5df089df7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };