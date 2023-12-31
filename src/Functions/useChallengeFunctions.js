import { useState, useEffect } from "react";

const useChallengeFunctions = () => {
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

      const updatedChallenges = [...challenges, newChallenge];
      setChallenges(updatedChallenges);
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
  };

  const handleDislike = (id) => {
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === id
        ? { ...challenge, dislikeCount: challenge.dislikeCount + 1 }
        : challenge
    );
    setChallenges(updatedChallenges);
  };

  const handleSortByLikes = () => {
    const sortedChallenges = [...challenges].sort(
      (a, b) => b.likeCount - a.likeCount
    );
    setChallenges(sortedChallenges);
  };

  const handleSortByDislikes = () => {
    const sortedChallenges = [...challenges].sort(
      (a, b) => b.dislikeCount - a.dislikeCount
    );
    setChallenges(sortedChallenges);
  };

  const handleSortByDate = () => {
    const sortedChallenges = [...challenges].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setChallenges(sortedChallenges);
  };

  return {
    challenges,
    addChallenge,
    handleUpvote,
    handleDislike,
    handleSortByLikes,
    handleSortByDislikes,
    handleSortByDate,
  };
};

export default useChallengeFunctions;
