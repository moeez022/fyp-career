// NavBar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        {/* Navbar toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto">
            <Link className={`nav-link ${location.pathname === '/login/HomePage' ? 'active' : ''}`} aria-current="page" to="/login/HomePage">Home</Link>
            <Link className={`nav-link ${location.pathname === '/matriculation' ? 'active' : ''}`} to="/matriculation">Recommendations After Matriculation</Link>
            <Link className={`nav-link ${location.pathname === '/intermediate' ? 'active' : ''}`} to="/intermediate">Recommendations After Intermediate</Link>
            <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact Us</Link>
            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About Us</Link> {/* Added "About Us" link */}
          </div>
          {/* Account section */}
          <div className="navbar-nav">
            <Link className={`nav-link ${location.pathname === '/profile/edit' ? 'active' : ''}`} to="/profile/edit">Edit Profile</Link>
            <Link className={`nav-link ${location.pathname === '/signout' ? 'active' : ''}`} to="/login">Sign Out</Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
