// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore from the modular SDK
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import Auth and GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAtMBkqH7COZLQOBCWLba-_gQs9T8sSiA",
  authDomain: "mentor-uni.firebaseapp.com",
  projectId: "mentor-uni",
  storageBucket: "mentor-uni.firebasestorage.app",
  messagingSenderId: "558616481791",
  appId: "1:558616481791:web:2150b5866322e2126961ca",
  measurementId: "G-3NPKYB1TKE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); // Initialize Firestore
export const auth = getAuth(app); // Initialize Auth
export const googleProvider = new GoogleAuthProvider(); // Initialize Google Auth Provider