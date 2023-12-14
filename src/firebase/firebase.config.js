import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4DtWyY3t2cfcZZMssmAiiSam-fZLGbm0",
  authDomain: "ecommerce-93297.firebaseapp.com",
  projectId: "ecommerce-93297",
  storageBucket: "ecommerce-93297.appspot.com",
  messagingSenderId: "189609668569",
  appId: "1:189609668569:web:588eca7ffe8f6c683e33c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app