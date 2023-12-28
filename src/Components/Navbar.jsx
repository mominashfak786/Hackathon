import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <div>
          <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link
                to="/ChallengeForm"
                className="btn btn-info btn-lg"
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
      </nav>
    </div>
  )
}

export default Navbar