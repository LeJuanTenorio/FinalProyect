import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBM7MOyoSUmSkRCHOFqk5tVGCGtHjKHPqk",
  authDomain: "sphere-3b8a9.firebaseapp.com",
  projectId: "sphere-3b8a9",
  storageBucket: "sphere-3b8a9.appspot.com",
  messagingSenderId: "1063773883036",
  appId: "1:1063773883036:web:432e3837d153391335fb59"
};

const app = initializeApp(firebaseConfig);
