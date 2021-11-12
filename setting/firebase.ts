import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB0vcTVYwr7adCTTgyWr06fjWuUVzNubJA",
    authDomain: "rnd-chat-6a41a.firebaseapp.com",
    projectId: "rnd-chat-6a41a",
    storageBucket: "rnd-chat-6a41a.appspot.com",
    messagingSenderId: "927178134201",
    appId: "1:927178134201:web:36a91c1e132003152a8168"
};



// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

export { db, auth }