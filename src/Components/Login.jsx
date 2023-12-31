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
          className="card p-4 rounded-3"
          style={{
            backgroundColor: "orange",
            border: "2px solid black",
            width: "300px",
            height: "220px",
          }}
        >
          <h2 className="text-center mb-4 fs-1">Login</h2>
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
              <Link
                to="/HomePage"
                type="submit"
                className="btn btn-primary"
              >
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
