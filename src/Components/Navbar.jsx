import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  handleSortByLikes,
  handleSortByDislikes,
  handleSortByDate,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortChange = (selectedOption) => {
    if (selectedOption === "Likes") {
      handleSortByLikes();
    } else if (selectedOption === "date") {
      handleSortByDate();
    } else {
      handleSortByDislikes();
    }
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary p-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${showDropdown ? "show" : ""}`}
            id="navbarColor02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-flex  align-items-center ">
              <div className="dropdown ">
                <button
                  className="btn btn-danger btn-lg dropdown-toggle me-5"
                  type="button"
                  id="sortButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="sortButton"
                  style={{ minWidth: "150px" }}
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSortChange("Likes")}
                    >
                      Likes
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSortChange("Dislikes")}
                    >
                      Dislikes
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSortChange("date")}
                    >
                      Date
                    </button>
                  </li>
                </ul>
                <Link
                  to="/ChallengeForm"
                  className="btn btn-info btn-lg ml-3"
                  style={{
                    border: "1px solid white",
                    color: "black",
                    boxShadow: "0px 4px 6px rgba(1, 3, 0, 0.1)",
                  }}
                >
                  New Hackathon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
