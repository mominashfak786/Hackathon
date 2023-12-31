import React, { useState } from "react";
import Imgs from "../Assets/a9f01a3a83-Microsoft_Image_Pack2_FB_Ad_FB_Ad-PhotoRoom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBahai } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ChallengeForm = ({ addChallenge }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [tagsError, setTagsError] = useState("");

  const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length < 5 || title.length > 100) {
      setTitleError("Title should be between 5 and 100 characters");
      return;
    } else {
      setTitleError("");
    }

    if (description.length < 5 || description.length > 500) {
      setDescriptionError("Description should be between 5 and 500 characters");

      return;
    } else {
      setDescriptionError("");
    }

    if (!tags) {
      setTagsError("Please select a tag");
      return;
    } else {
      setTagsError("");
    }
    alert("New Hackathon Challenge has been Added , Go to homepage");
    const newChallenge = {
      title,
      description,
      tags: tags.split(","),
      createdAt: new Date().toLocaleString(),
      likeCount: 0,
      dislikeCount: 0,
      userName: "RandomUser",
      userPhoto: "random_photo_url",
      id: Math.floor(Math.random() * 1000) + 1,
    };
    addChallenge(newChallenge);
    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <div className="containers">
      <nav
        className="navbar navbar-expand-lg bg-dark p-2 border border-black border-opacity-75"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-2" to="/">
            <FontAwesomeIcon icon={faBahai} />
            CodeCrunch
            <FontAwesomeIcon icon={faBahai} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <Link
                  to="/ChallengeList"
                  className="btn btn-info btn-lg ml-3"
                  style={{
                    border: "1px solid white",
                    color: "black",
                    boxShadow: "0px 4px 6px rgba(1, 3, 0, 0.1)",
                  }}
                >
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className=" d-flex  align-items-center  "
        style={{
          height: "90vh",
          backgroundImage: `url(${Imgs})`,
          backgroundSize: "100% 120% ",
          backgroundPosition: "center top -100px",
        }}
      >
        <div className="container p-1 m-4">
          <div className="">
            <div className="col-md-8 col-lg-6">
              <div className="card border border-dark rounded-4 mb-4">
                <div className="card-body">
                  <div className="card-title text-center fs-2 m-3">
                    Add Challenge
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title (5-100 characters)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      {titleError && (
                        <p className="text-danger">{titleError}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Description (5-500 characters)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      {descriptionError && (
                        <p className="text-danger">{descriptionError}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={tags}
                        onChange={handleTagChange}
                      >
                        <option value="">Tags</option>
                        <option value="Features">Features</option>
                        <option value="Tech">Tech</option>
                        <option value="Design">Design</option>
                        <option value="Artificial Intelligence">
                          Artificial Intelligence
                        </option>
                        <option value="Machine Learning">
                          Machine Learning
                        </option>
                      </select>
                      {tagsError && <p className="text-danger">{tagsError}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit Idea <FontAwesomeIcon icon={faLightbulb} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeForm;
