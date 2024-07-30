import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzGgitO_tGmeAQ1vcqqdWEWw7fFtBgbcw",
  authDomain: "tinker-657f8.firebaseapp.com",
  projectId: "tinker-657f8",
  storageBucket: "tinker-657f8.appspot.com",
  messagingSenderId: "459383280764",
  appId: "1:459383280764:web:cde1a9b7272fa3be3fe5f9",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
