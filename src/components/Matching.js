import { useState, useEffect } from "react";
import { collection, query, where,getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

function MentorFilter({ filters }) {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const mentorsRef = collection(db, "User Collection");
      const mentorsQuery = query(mentorsRef, where("role", "==", "mentor"));
      
      try {
        const querySnapshot = await getDocs(mentorsQuery);
        const mentorData = [];
        
        querySnapshot.forEach((doc) => {
          const mentor = doc.data();
          mentorData.push({ ...mentor, id: doc.userId });
        });
        
        // Now calculate the score based on filters
        const scoredMentors = mentorData.map((mentor) => {
          let score = 0;
          
          // Check if each mentor matches the filter criteria and calculate the score
          if (filters.country && mentor.country === filters.country) score++;
          if (filters.current_school && mentor.current_school === filters.current_school) score++;
          if (filters.gpa && mentor.gpa >= filters.gpa) score++;
          if (filters.time_availability && mentor.time_availability === filters.time_availability) score++;
          if (filters.price && mentor.price <= filters.price) score++;
          
          // Return the mentor data with the score
          return { ...mentor, score };
        });
        
        // Sort mentors by score in descending order
        scoredMentors.sort((a, b) => b.score - a.score);
        
        setMentors(scoredMentors);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, [filters]);

  return (
    <div>
      <h2>Mentor List</h2>
      {mentors.length === 0 ? (
        <p>No mentors found based on your filters.</p>
      ) : (
        <ul>
          {mentors.map((mentor) => (
            <li key={mentor.id}>
              <h3>{mentor.name}</h3>
              <p>{mentor.bio}</p>
              <p>Country: {mentor.country}</p>
              <p>Current School: {mentor.current_school}</p>
              <p>GPA: {mentor.gpa}</p>
              <p>Price: ${mentor.price}</p>
              <p>Time Availability: {mentor.time_availability}</p>
              <p>Score: {mentor.score}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MentorFilter;