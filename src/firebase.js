import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcIU6Nue-TxWslS0xilh_ZSnxuHn0UGiw",
  authDomain: "jewelry-5908f.firebaseapp.com",
  projectId: "jewelry-5908f",
  storageBucket: "jewelry-5908f.appspot.com",
  messagingSenderId: "992971016309",
  appId: "1:992971016309:web:bd9b2419f4bf3dd1f0503c",
  measurementId: "G-HY54EQGTDX"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signOutUser = () => signOut(auth);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
