// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMzW-6VA9CuK0eY2IH_hzd4zoL0-oIN6M",
  authDomain: "pantry-tracker-34659.firebaseapp.com",
  projectId: "pantry-tracker-34659",
  storageBucket: "pantry-tracker-34659.appspot.com",
  messagingSenderId: "431405523808",
  appId: "1:431405523808:web:6628f2f491827c7ed5f405",
  measurementId: "G-G6PRH6NRF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};