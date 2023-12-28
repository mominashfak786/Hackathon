import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import ChallengeForm from "./Components/ChallengeForm";
import ChallengeList from "./Components/ChallengeList";
import Choose from "./Components/Choose";
import "./App.css";

const App = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const storedChallenges = JSON.parse(localStorage.getItem("challenges"));
    if (storedChallenges) {
      setChallenges(storedChallenges);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  const addChallenge = async (newChallenge) => {
    try {
      const userResponse = await fetch("https://randomuser.me/api/");
      const userData = await userResponse.json();
      const user = userData.results[0];
      const { name, picture } = user;
  
      newChallenge.userName = `${name.first} ${name.last}`;
      newChallenge.userPhoto = picture.large;
      newChallenge.createdAt = new Date().toLocaleString();
      newChallenge.id = Math.floor(Math.random() * 1000) + 1;
  
      // Retain the previous challenges' counts
      const updatedChallenges = challenges.map(challenge => ({ ...challenge }));
  
      setChallenges([...updatedChallenges, newChallenge]);
    } catch (error) {
      console.error("Error adding challenge:", error);
    }
  };
  

  const handleUpvote = (id) => {
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === id
        ? { ...challenge, likeCount: challenge.likeCount + 1 }
        : challenge
    );
    setChallenges(updatedChallenges);
    localStorage.setItem("challenges", JSON.stringify(updatedChallenges));
  };

  const handleDislike = (id) => {
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === id
        ? { ...challenge, dislikeCount: challenge.dislikeCount + 1 }
        : challenge
    );
    setChallenges(updatedChallenges);
    localStorage.setItem("challenges", JSON.stringify(updatedChallenges));
  };
  const handleSortByVotes = () => {
    const sortedChallenges = [...challenges].sort(
      (a, b) => b.likeCount - a.likeCount
    );
    setChallenges(sortedChallenges);
  };

  const handleSortByDate = () => {
    const sortedChallenges = [...challenges].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setChallenges(sortedChallenges);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/ChallengeForm"
            element={
              <ChallengeForm
                addChallenge={addChallenge}
                challenges={challenges}
              />
            }
          />
          <Route path="/Choose" element={<Choose />} />
          <Route
            path="/ChallengeList"
            element={
              <ChallengeList
                challenges={challenges}
                handleUpvote={handleUpvote} // Ensure this prop is correctly named
                handleDislike={handleDislike}
                handleSortByVotes={handleSortByVotes}
                handleSortByDate={handleSortByDate}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
