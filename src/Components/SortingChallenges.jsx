import React from 'react';

const SortingChallenges = ({ handleSortByVotes, handleSortByDate }) => {
  return (
    <div>
      <button onClick={handleSortByVotes}>Sort by Votes</button>
      <button onClick={handleSortByDate}>Sort by Date</button>
    </div>
  );
};

export default SortingChallenges;
