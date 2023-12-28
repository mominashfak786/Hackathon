import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

const Upvote = ({ handleLike, handleDislike, id, likeCount, dislikeCount }) => {
  const handleLikeClick = () => {
    handleLike(id);
  };

  const handleDislikeClick = () => {
    handleDislike(id);
  };

  return (
    <div className="reaction-info d-flex align-items-center">
      <p className="mb-0 me-3">
        <FontAwesomeIcon
          icon={faThumbsUp}
          onClick={handleLikeClick}
          style={{ cursor: 'pointer' }}
        />
        <small className="text-muted mr-2">{likeCount}</small>
      </p>
      <p className="mb-0">
        <FontAwesomeIcon
          icon={faThumbsDown}
          onClick={handleDislikeClick}
          style={{ cursor: 'pointer' }}
        />
        <small className="text-muted mr-2">{dislikeCount}</small>
      </p>
    </div>
  );
};

export default Upvote;
