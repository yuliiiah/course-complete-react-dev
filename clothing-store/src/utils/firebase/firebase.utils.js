import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhtNAi91FVKL-VQLBX-VhAjlRePu3DRt4',
  authDomain: 'clothes-store-db-d7e0a.firebaseapp.com',
  projectId: 'clothes-store-db-d7e0a',
  storageBucket: 'clothes-store-db-d7e0a.appspot.com',
  messagingSenderId: '144149421567',
  appId: '1:144149421567:web:a875e407e349e4132c5bca',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
