import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import ChallengeForm from "./Components/ChallengeForm";
import ChallengeList from "./Components/ChallengeList";
import "./App.css";
import useChallengeFunctions from "./Functions/useChallengeFunctions";

const App = () => {
  const {
    challenges,
    addChallenge,
    handleUpvote,
    handleDislike,
    handleSortByLikes,
    handleSortByDislikes,
    handleSortByDate,
  } = useChallengeFunctions();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/ChallengeForm"
            element={
              <ChallengeForm addChallenge={addChallenge} challenges={challenges} />
            }
          />
          <Route
            path="/ChallengeList"
            element={
              <ChallengeList
                challenges={challenges}
                handleUpvote={handleUpvote}
                handleDislike={handleDislike}
                handleSortByLikes={handleSortByLikes}
                handleSortByDislikes={handleSortByDislikes}
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
