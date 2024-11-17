import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from './firebase';   


function UserProfile() {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({   

    name: '',
    bio: '',
    skills: [],
    location: '',
    profilePictureUrl: '',
  });

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, 'User Collection', user.uid); // Use correct collection name
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());
            setEditedData(userDocSnap.data());
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUserData();
    }
  }, [user]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await updateDoc(doc(db, 'User Collection', user.uid), editedData); // Use correct collection name
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (event) => {
    setEditedData({ ...editedData, [event.target.name]: event.target.value });
  };

  const handleSkillChange = (index, value) => {
    setEditedData(prevData => ({
      ...prevData,
      skills: prevData.skills.map((skill, i) => (i === index ? value : skill)),
    }));
  };

  if (loading) return <p>Loading user profile...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          {userData?.profilePictureUrl && (
            <img
              src={userData.profilePictureUrl}
              alt="Profile"
              style={{ width: '100px', height: '100px' }}
            />
          )}
          <p>Name: {userData?.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {userData?.bio}</p>
          <p>Skills: {userData?.skills?.join(', ')}</p>
          <p>Location: {userData?.location}</p>
          {userData?.lastLogin && (
            <p>Last Login: {userData.lastLogin.toDate().toLocaleString()}</p>
          )}
          <p>Role: {userData?.role}</p>

          {isEditing ? (
            <form onSubmit={handleUpdate}>
              {/* ... form inputs ... */}
              <button type="submit">Save</button>
            </form>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>
      ) : (
        <p>You need to log in to see your profile.</p>
      )}
    </div>
  );
}

export default UserProfile;