import { useState, useEffect } from "react";
import { collection, query, where, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./config/firebase";
import { useAuth } from "./authContext"; // Assuming you're using context for authentication

function MentorFilter({ filters }) {
  const [mentors, setMentors] = useState([]);
  const { user } = useAuth(); // Assuming useAuth hook gives the current authenticated user
  const [menteeId, setMenteeId] = useState(user?.uid || null); // mentee's UID from user authentication state
  const [matchingMentor, setMatchingMentor] = useState(null); // To store the selected mentor

  // Fetch mentors based on filters and menteeId
  useEffect(() => {
    const fetchMentors = async () => {
      const mentorsRef = collection(db, "User Collection");
      const matchingRef = collection(db, "Matching Collection");

      try {
        // Fetch all mentors based on the filter criteria
        const mentorsQuery = query(mentorsRef, where("role", "==", "mentor"));
        const querySnapshot = await getDocs(mentorsQuery);
        const mentorData = [];

        querySnapshot.forEach((doc) => {
          const mentor = doc.data();
          mentorData.push({ ...mentor, id: doc.id });
        });

        // Fetch active matchings to avoid already matched mentors
        const activeMatchingQuery = query(
          matchingRef,
          where("status", "in", ["pending", "active"])
        );

        const matchingSnapShot = await getDocs(activeMatchingQuery);

        const matchedMentorsIds = new Set();
        matchingSnapShot.forEach((doc) => {
          const match = doc.data();
          matchedMentorsIds.add(match.mentorId);
        });

        // Filter out mentors that are already matched
        const availableMentors = mentorData.filter(
          (mentor) => !matchedMentorsIds.has(mentor.id)
        );

        // Now calculate the score based on filters
        const scoredMentors = availableMentors.map((mentor) => {
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

        // Set the filtered and scored mentors
        setMentors(scoredMentors);

        // You can implement logic to auto-match the first available mentor for the mentee (optional)
        if (scoredMentors.length > 0) {
          setMatchingMentor(scoredMentors[0]); // example: match with the highest scoring mentor
        }
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    // Run fetchMentors only if filters or menteeId change
    fetchMentors();
  }, [filters]);

  // Function to initiate a matching between mentee and mentor
  const handleMatch = async (mentorId) => {
    try {
      // Add new match to Matching Collection
      const matchData = {
        menteeId,
        mentorId,
        status: "pending", // or "active"
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, "Matching Collection"), matchData);
      console.log("Match created!");
    } catch (error) {
      console.error("Error creating match:", error);
    }
  };

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
              <button onClick={() => handleMatch(mentor.id)}>Match with Mentor</button>
            </li>
          ))}
        </ul>
      )}

      {matchingMentor && (
        <div>
          <h3>Suggested Mentor for You</h3>
          <p>{matchingMentor.name}</p>
        </div>
      )}
    </div>
  );
}

export default MentorFilter;