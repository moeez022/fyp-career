// AboutUs.jsx

import React from 'react';
import './AboutUs.css'; 
import NavBar from "../Nav/NavBar";

const AboutUs = () => {

  



  return (
    <div className="about-us-container">
      <NavBar/>
      <div className="about-us-content">
        <h1 className="about-us-title">Welcome to Our Career Counseling Platform</h1>
        <p className="about-us-description">At Career Insight, we are dedicated to helping students make informed decisions about their future careers. Our mission is to provide personalized recommendations based on individual interests, skills, and aspirations.</p>
        <div className="about-us-highlights">
          <div className="about-us-highlight">
            <h2>Advanced Assessment Tools</h2>
            <p>Utilizing state-of-the-art assessment tools and AI algorithms, we provide accurate and insightful career recommendations tailored to each student.</p>
          </div>
          <div className="about-us-highlight">
            <h2>Expert Guidance</h2>
            <p>Our team of experienced educators and industry professionals is committed to guiding students through the maze of educational and career options.</p>
          </div>
          <div className="about-us-highlight">
            <h2>Continuous Support</h2>
            <p>Whether you're a high school student exploring your options or a college graduate seeking career guidance, we're here to support you every step of the way.</p>
          </div>
        </div>
        <p className="about-us-thank-you">Thank you for choosing Career Insight to kickstart your journey towards a bright and rewarding future!</p>
      </div>
    </div>
  );
};

export default AboutUs;
