import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../Assets/istockphoto-1281066221-612x612.jpg";

const Login = ({ handleLogin }) => {
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId.trim() !== "") {
      handleLogin(employeeId);
    } else {
      // Handle validation or empty fields
      alert("Please enter Employee ID");
    }
  };

  return (
    <>
      <marquee
        style={{ fontSize: "20px", backgroundColor: "black", color: "white" }}
      >
        Join the community challenges for internal hackathons which are
        organized every month.
      </marquee>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          backgroundColor: "light",
          backgroundImage: `url(${Img})`,
        }}
      >
        <div
          className="card p-4"
          style={{
            backgroundColor: "orange",
            border: "2px solid black",
            width: "300px",
            height: "200px",
          }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <Link to="/ChallengeList" type="submit" className="btn btn-primary">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
