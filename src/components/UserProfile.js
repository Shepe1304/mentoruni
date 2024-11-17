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
    email: "", 
    userId: "", 
    bio: "",
    skills: "",
    location: "",
    country: "", 
    current_school: "",
    gpa: 4.0, //gpa as a number
    role: "mentee", //Default role is "mentee"

  });

  // State for showing success/error messages
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        // Store email and userId in userProfile state
        setUserProfile((prevUserProfile) => ({
          ...prevUserProfile,
          email: user.email,
          userId: user.uid,
        }));

        await getDocument(user.uid);
      }
    };

    fetchUserProfile();
  }, [user]);

  // Function to get a document
  const getDocument = async (userId) => {
    try {
      const userDocRef = doc(db, "User Collection", userId);
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
      const userDocRef = doc(db, "User Collection", userId);
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
      const userDocRef = doc(db, "User Collection", userId);
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
    const { name, value, type } = event.target;
    setUserProfile((prevUserProfile) => ({
      ...prevUserProfile,
      [name]: type === "number" ? Number(value) : value, // Parse GPA as Number
    }));
  };

  const handleRoleChange = (event) => {
    setUserProfile((prevUserProfile) => ({
      ...prevUserProfile,
      role: event.target.value,
    }));
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
            <input

              type="text"
              name="country"
              placeholder="Country"
              value={userProfile.country}
              onChange={handleChange}
              />
            <input
              type="text"
              name="current_school"
              placeholder="Current School"
              value={userProfile.current_school}
              onChange={handleChange}
            />
            <input
              type="number"
              name="gpa"
              placeholder="Gpa"
              value={userProfile.gpa}
              onChange={handleChange}
              />
            <div>
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" value={userProfile.role} onChange={handleRoleChange}>
              <option value="mentee">Mentee</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          {/* Conditional Fields for Mentors */}
          {userProfile.role === "mentor" && (
              <div>
                <input
                  type="text"
                  name="time_availability"
                  placeholder="Time Availability"
                  value={userProfile.time_availability}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={userProfile.price}
                  onChange={handleChange}
                />
              </div>
            )}

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
          <p>Email: {userProfile.email}</p> {/*Display email*/}
          <p>User ID: {userProfile.userId}</p> {/*Display userId */}
          <p>Bio: {userProfile.bio}</p>
          <p>Skills: {userProfile.skills}</p>
          <p>Location: {userProfile.location}</p>
          <p>Country: {userProfile.country}</p>
          <p>Current School: {userProfile.current_school}</p>
          <p>Gpa: {userProfile.gpa}</p>
          <p>Role: {userProfile.role}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;