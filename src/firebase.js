import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBZCzzTjZSTjAnXgfpJgjSydoCBc6134TM",
  authDomain: "linkedin-clone-4b47f.firebaseapp.com",
  projectId: "linkedin-clone-4b47f",
  storageBucket: "linkedin-clone-4b47f.appspot.com",
  messagingSenderId: "192621191563",
  appId: "1:192621191563:web:bc52289a749930a7a68f8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };