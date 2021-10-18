import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyDrCRyIk3_aPOpcuMGmmD7vPT4oHwdVi70",
    authDomain: "chatty-2079f.firebaseapp.com",
    projectId: "chatty-2079f",
    storageBucket: "chatty-2079f.appspot.com",
    messagingSenderId: "480142557674",
    appId: "1:480142557674:web:654a1c0a675ffbef193293"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();

