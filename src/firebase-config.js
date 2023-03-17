// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNvNtqF5QiQ0cp7JrrdjjldUYIdqI6Ihs",
  authDomain: "rakornaspa-2023.firebaseapp.com",
  projectId: "rakornaspa-2023",
  storageBucket: "rakornaspa-2023.appspot.com",
  messagingSenderId: "61423114911",
  appId: "1:61423114911:web:793b957fb7a488eeaca0aa",
  measurementId: "G-CKJ5S1GZJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);