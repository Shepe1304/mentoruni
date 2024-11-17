import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, setDoc, addDoc, deleteDoc, updateDoc, collection } from "firebase/firestore";
import { db, auth } from "./config/firebase";

function UserProfile() {
  const [user, loading, error] = useAuthState(auth);

  // State for user profile data
  const [userProfile, setUserProfile] = useState({
    name: "",
    bio: "",
    skills: "",
    location: "",
  });

  // State for showing success/error messages
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // Get a reference to the "users" collection
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        await getDocument(user.uid); // Fetch user document on component load
      }
    };

    fetchUserProfile();
  }, [user]); // Re-run when the user changes (login/logout)

  // Function to get a document
  const getDocument = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        setUserProfile(userDocSnap.data());
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };

  // Function to add a document
  const addDocument = async (newUserData) => {
    try {
      await addDoc(usersCollectionRef, newUserData);
      console.log("New user added");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding user:", error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };

  // Function to delete a document
  const deleteDocument = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await deleteDoc(userDocRef);
      console.log("User deleted");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Error deleting user:", error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };

  // Function to update a document
  const updateDocument = async (userId, updatedData) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, updatedData);
      console.log("User updated");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Error updating user:", error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };

  const handleChange = (event) => {
    setUserProfile({
      ...userProfile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async () => {
    if (user) {
      await updateDocument(user.uid, userProfile); // Update existing user document
    }
  };

  return (
    // ... your JSX ...
  );
}

export default UserProfile;