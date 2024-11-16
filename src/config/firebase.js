// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg6Tunzx61i16acQI55QW1zJ9GNZ8aT4U",
  authDomain: "mentoruni-2b092.firebaseapp.com",
  projectId: "mentoruni-2b092",
  storageBucket: "mentoruni-2b092.firebasestorage.app",
  messagingSenderId: "1054204380685",
  appId: "1:1054204380685:web:8ce7acb839058b03e73744",
  measurementId: "G-6HNT0VSLZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);