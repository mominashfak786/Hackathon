import React, { useState } from 'react';

const ChallengeForm = ({ addChallenge }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChallenge = {
      title,
      description,
      tags: tags.split(','),
      createdAt: new Date().toLocaleString(),
      likeCount: 0,
      dislikeCount: 0,
      userName: 'RandomUser',
      userPhoto: 'random_photo_url',
      id: Math.floor(Math.random() * 1000) + 1,
    };
    addChallenge(newChallenge);
    setTitle('');
    setDescription('');
    setTags('');
  };

  return (
    <div className="container mt-5">
      <div className="row">
  
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Challenge</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
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
                    {/* Add more options as needed */}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Challenge
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeForm;
