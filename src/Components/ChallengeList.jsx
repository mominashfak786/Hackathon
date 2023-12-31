import React from "react";
import Navbar from "./Navbar";
import Upvote from "./Upvote";

const ChallengeList = ({
  challenges,
  handleUpvote,
  handleDislike,
  handleSortByLikes,
  handleSortByDislikes,
  handleSortByDate,
}) => {
  let content;

  if (challenges.length === 0) {
    content = (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh", backgroundColor: "white" }}>
      <p className="text-center fs-4 fw-bold">
        No challenges added yet. Be the first to contribute!
        </p>
        
    </div>
    );
  } else {
    content = (
      <div className="row row-cols-md-3 g-6" style={{ backgroundColor: "white" }}>
        {challenges.map((challenge) => (
          <div key={challenge.id} className="col">
            <div className="shadow p-3 m-4 rounded-4 bg-light bg-warning border border-dark">
              <div className="card-body">
                <h5 className="card-title">{challenge.title}</h5>
                <p className="card-text mt-1">{challenge.description}</p>
                <p className="card-text">
                  <small className="border border-dark text-black fs-6 badge bg-danger-subtle me-1 mb-1">
                    {challenge.tags.join(", ")}
                  </small>
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="user-info d-flex align-items-center">
                    <img
                      src={challenge.userPhoto}
                      className="card-img-top rounded-circle me-3"
                      alt={challenge.userName}
                      style={{
                        width: "50px",
                        height: "50px",
                        border: "1px solid black",
                        objectFit: "cover",
                      }}
                    />
                    <p className="mb-0 fw-medium">{challenge.userName}</p>
                  </div>
                  <div className="reaction-info d-flex align-items-center">
                    <Upvote
                      handleLike={() => handleUpvote(challenge.id)}
                      handleDislike={() => handleDislike(challenge.id)}
                      id={challenge.id}
                      likeCount={challenge.likeCount}
                      dislikeCount={challenge.dislikeCount}
                    />
                  </div>
                </div>
                <p className="card-text mt-3 fw-medium">
                  <small className="text-muted">{challenge.createdAt}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Navbar
        handleSortByLikes={handleSortByLikes}
        handleSortByDislikes={handleSortByDislikes}
        handleSortByDate={handleSortByDate}
      />
      <div style={{ height: "100vh", width: "100%", backgroundColor: "white", wordWrap: "break-word" }}>
        {content}
      </div>
    </>
  );
};

export default ChallengeList;
