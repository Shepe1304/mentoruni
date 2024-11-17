import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
    profilePictureUrl: '', // Added profilePictureUrl to state
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
          setEditedData(userDoc.data()); 
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleUpdate = async () => {
    try {
      await db.collection('users').doc(user.uid).update(editedData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (event) => {
    setEditedData({
      ...editedData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle changes in the skills array
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...editedData.skills];
    updatedSkills[index] = value;
    setEditedData({ ...editedData, skills: updatedSkills });
  };

  if (loading) {
    return <p>Loading user profile...</p>; 
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          {userData?.profilePictureUrl && ( // Conditionally render profile picture
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
          <p>Last Login: {userData?.lastLogin?.toDate().toLocaleString()}</p> 
          <p>Role: {userData?.role}</p>

          {isEditing ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={editedData.name}
                onChange={handleChange}
              />
              <textarea
                name="bio"
                placeholder="Bio"
                value={editedData.bio}
                onChange={handleChange}
              />

              <label htmlFor="skills">Skills:</label>
              {editedData.skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  name="skills"
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                />
              ))}
              {/* Add button to add more skill input fields if needed */}

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={editedData.location}
                onChange={handleChange}
              />

              {/* Input field for profile picture URL */}
              <input
                type="text"
                name="profilePictureUrl"
                placeholder="Profile Picture URL"
                value={editedData.profilePictureUrl}
                onChange={handleChange}
              /> 

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