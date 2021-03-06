import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "artfunder.firebaseapp.com",
  databaseURL: "https://artfunder.firebaseio.com",
  projectId: "artfunder",
  storageBucket: "artfunder.appspot.com",
  messagingSenderId: "128794234534",
  appId: "1:128794234534:web:942a0396d593cd4c2f2e67",
  measurementId: "G-B01FWLH87V"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ });

const messaging = firebase.messaging();

messaging.usePublicVapidKey(process.env.REACT_APP_FIREBASE_PUBLIC_KEY)

export  {firebase, messaging};