import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9hybDfLjv-lqQEbCTjvLIDyRhZ0qbr0A",
    authDomain: "crown-clothing-74cbb.firebaseapp.com",
    databaseURL: "https://crown-clothing-74cbb.firebaseio.com",
    projectId: "crown-clothing-74cbb",
    storageBucket: "",
    messagingSenderId: "445471403675",
    appId: "1:445471403675:web:eb9725bf16c31eaa"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const  signInGoogleWithPopup = () => auth.signInWithPopup(provider);

export default firebase;