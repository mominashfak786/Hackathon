import React from "react";
import Navbar from "./Navbar";
import Upvote from "./Upvote";

const ChallengeList = ({
  challenges,
  handleUpvote,
  handleDislike,
  handleSortByVotes,
  handleSortByDate,
}) => {
  return (
    <>
      <Navbar />
      <div style={{ height: "100vh", width: "100%", backgroundColor: "red" }}>
        <div className="row row-cols-md-3 g-6" style={{ backgroundColor: "red" }}>
          {challenges.map((challenge) => (
            <div key={challenge.id} className="col">
              <div className="card shadow p-2 m-4">
                <div className="card-body">
                  <h5 className="card-title">{challenge.title}</h5>
                  <p className="card-text">{challenge.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{challenge.tags.join(", ")}</small>
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
                          objectFit: "cover",
                        }}
                      />
                      <p className="mb-0">{challenge.userName}</p>
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
                  <p className="card-text mt-3">
                    <small className="text-muted">{challenge.createdAt}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChallengeList;
