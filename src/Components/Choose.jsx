import React from "react";
import { Link } from "react-router-dom";
import List from '../Components/ChallengeList'
import Navbar from "./Navbar";
const Choose = () => {
  return (
    <>
      

      <div
        className="d-flex justify-content-center align-items-center"
        
      >



        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="d-flex m-5 justify-content-center align-items-center">
                <Link
                  to="/ChallengeList"
                  className="btn btn-danger btn-lg m-5"
                  style={{
                    border: "1px solid white",
                    color: "black",
                    boxShadow: "0px 4px 6px rgba(2, 2, 0, 0.1)",
                  }}
                >
                  Hackathons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
