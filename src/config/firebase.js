// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAtMBkqH7COZLQOBCWLba-_gQs9T8sSiA",
  authDomain: "mentor-uni.firebaseapp.com",
  projectId: "mentor-uni",
  storageBucket: "mentor-uni.firebasestorage.app",
  messagingSenderId: "558616481791",
  appId: "1:558616481791:web:2150b5866322e2126961ca",
  measurementId: "G-3NPKYB1TKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);