import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCuLZ5_UQCi1jUxr9tf51WD-Zydo5GOdwo",
  authDomain: "whatsapp-644bd.firebaseapp.com",
  projectId: "whatsapp-644bd",
  storageBucket: "whatsapp-644bd.appspot.com",
  messagingSenderId: "987191925932",
  appId: "1:987191925932:web:256672ecee2cb290f45309",
  measurementId: "G-9ND5J237HS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
