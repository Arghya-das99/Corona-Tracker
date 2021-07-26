import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navabar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className ="container-fluid">
        <Link className="navbar-brand" to="/">Covid-19 Tracker</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className='nav-link active' to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/state">State</Link>
            </li>
        
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Navabar;
