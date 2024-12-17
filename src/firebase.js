import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHSiDk4qMYPIFkM2GUKZ48PZU8FmR_FR4",
  authDomain: "kba2010-ae130.firebaseapp.com",
  databaseURL: "https://kba2010-ae130-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kba2010-ae130",
  storageBucket: "kba2010-ae130.firebasestorage.app",
  messagingSenderId: "46066102303",
  appId: "1:46066102303:web:e1ea3ba868694b7d44e52a",
  measurementId: "G-7QB5JYQQ5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore and Auth instances
const db = getFirestore(app); // Firestore initialization
const auth = getAuth(app); // Authentication instance

export { db, auth }; // Export the Firestore and Auth instances