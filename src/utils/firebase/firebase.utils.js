import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVdYtigszlKYZdKJZkKbLJUtCMnCUjEMk",
  authDomain: "crwn-db-af96b.firebaseapp.com",
  projectId: "crwn-db-af96b",
  storageBucket: "crwn-db-af96b.appspot.com",
  messagingSenderId: "199384076972",
  appId: "1:199384076972:web:389a69b7fefb89dafe0509"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  
};