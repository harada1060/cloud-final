import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaRuJZH6a-xszJxon8RvVrAuQZrLb3Z7A",
  authDomain: "cloud-final-3a66c.firebaseapp.com",
  projectId: "cloud-final-3a66c",
  storageBucket: "cloud-final-3a66c.appspot.com",
  messagingSenderId: "891592092625",
  appId: "1:891592092625:web:608781c92d75d872a3cef0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
