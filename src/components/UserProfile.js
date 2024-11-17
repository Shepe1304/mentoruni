import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
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

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        await getDocument(user.uid);
      }
    };

    fetchUserProfile();
  }, [user]);

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
      await updateDocument(user.uid, userProfile);
    }
  };

  return (
    <div className="user-profile">
      {/* Conditionally render loading or error messages */}
      {loading && <p>Loading user profile...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Render the form if user is logged in */}
      {user && (
        <div>
          <h2>User Profile</h2>

          {/* Form for updating the current user's profile */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userProfile.name}
              onChange={handleChange}
            />
            <textarea
              name="bio"
              placeholder="Bio"
              value={userProfile.bio}
              onChange={handleChange}
            />
            <input
              type="text"
              name="skills"
              placeholder="Skills"
              value={userProfile.skills}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={userProfile.location}
              onChange={handleChange}
            />
            <button onClick={handleSave}>Update Profile</button>
          </div>

          {/* Button to delete the current user's document */}
          <button onClick={() => deleteDocument(user.uid)}>
            Delete Profile
          </button>

          {/* Display success/error messages */}
          {showSuccessMessage && (
            <div className="success-message">Operation successful!</div>
          )}
          {showErrorMessage && (
            <div className="error-message">
              An error occurred. Please try again.
            </div>
          )}

          {/* Display user profile information */}
          <h3>Your Profile Information:</h3>
          <p>Name: {userProfile.name}</p>
          <p>Bio: {userProfile.bio}</p>
          <p>Skills: {userProfile.skills}</p>
          <p>Location: {userProfile.location}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;