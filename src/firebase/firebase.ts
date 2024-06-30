import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMpvE_HctHfxzzDSvVA5dUpSz623hn6ys",
  authDomain: "coders-ecdf7.firebaseapp.com",
  projectId: "coders-ecdf7",
  storageBucket: "coders-ecdf7.appspot.com",
  messagingSenderId: "342972876634",
  appId: "1:342972876634:web:e0263d28ab2058ab7e1563",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
