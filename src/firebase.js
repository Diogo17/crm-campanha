import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSq9jGhTR6GdIse-dz0KzNIWAMROhnPI8",
  authDomain: "crm-hudson-tesura.firebaseapp.com",
  projectId: "crm-hudson-tesura",
  storageBucket: "crm-hudson-tesura.firebasestorage.app",
  messagingSenderId: "838099450881",
  appId: "1:838099450881:web:3e722015cf7bf340e1d400",
  measurementId: "G-3VHK77BYW1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Instâncias dos serviços que vamos usar
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
