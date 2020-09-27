import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9G95AVG_CtBebFzIGRmKLvO_NBckIjiM",
  authDomain: "challenge-66d55.firebaseapp.com",
  databaseURL: "https://challenge-66d55.firebaseio.com",
  projectId: "challenge-66d55",
  storageBucket: "challenge-66d55.appspot.com",
  messagingSenderId: "169217051419",
  appId: "1:169217051419:web:5d808df93bda68e3a2e1be",
  measurementId: "G-N9ELN6B0HE",
};

//initlize firebase with our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initilize firebase Db
const db = firebaseApp.firestore();

//get a var for hansling sign in
const auth = firebase.auth();
export { db, auth };
