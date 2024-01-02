import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_ZdJUW4FYDNZRE43QKpKaLDg4YJqFLPM",
  authDomain: "portfolio-himanshu-portfolio.firebaseapp.com",
  projectId: "portfolio-himanshu-portfolio",
  storageBucket: "portfolio-himanshu-portfolio.appspot.com",
  messagingSenderId: "692552701289",
  appId: "1:692552701289:web:ae1e95f026645a5e7f99f8",
  measurementId: "G-MXXRYQFXS6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
