import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAPqXFatmgGU97YtvdruoWbj5yB2ho1Z6k",
    authDomain: "save-hearts-team-xcode.firebaseapp.com",
    projectId: "save-hearts-team-xcode",
    storageBucket: "save-hearts-team-xcode.appspot.com",
    messagingSenderId: "476504342331",
    appId: "1:476504342331:web:7c85b956562ca70f22811e"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp


export {projectAuth, projectFirestore, timestamp, projectStorage}
