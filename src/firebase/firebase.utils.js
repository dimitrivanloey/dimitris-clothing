import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpKXN6V3fQqeALTvyNOpgxt0-WeXlN5EI",
    authDomain: "crwn-db-23964.firebaseapp.com",
    databaseURL: "https://crwn-db-23964.firebaseio.com",
    projectId: "crwn-db-23964",
    storageBucket: "crwn-db-23964.appspot.com",
    messagingSenderId: "409791724888",
    appId: "1:409791724888:web:6af41d9078db6add43f92d",
    measurementId: "G-BDX8RNQ0GD"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



