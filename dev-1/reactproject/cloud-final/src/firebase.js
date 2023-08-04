import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1dM1pibb9bnpGDH-r9y0jXuWNc6L119k",
  authDomain: "cloud-final-a7dc0.firebaseapp.com",
  projectId: "cloud-final-a7dc0",
  storageBucket: "cloud-final-a7dc0.appspot.com",
  messagingSenderId: "377858231754",
  appId: "1:377858231754:web:106df44adfdf9d83149333",
  measurementId: "G-TVCGTGJ7EC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
