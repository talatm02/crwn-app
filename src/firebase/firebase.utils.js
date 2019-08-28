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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createDate,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const  signInGoogleWithPopup = () => auth.signInWithPopup(provider);

export default firebase;