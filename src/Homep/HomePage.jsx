// HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importing the CSS file
import NavBar from "../Nav/NavBar";
const HomePage = () => {
  return (
    <div className="container-fluid home-page">
      <NavBar/>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Degree Recommendation</h1>
            <p className="lead">Empowering your educational journey with personalized recommendations</p>
            <hr className="my-4" />
            <p>Our platform helps you discover suitable educational paths after matriculation and intermediate levels.</p>
            <Link to="/about" className="btn btn-primary btn-lg" role="button">Learn more</Link>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Explore Our Features</h2>
          <div className="row feature-row">
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-lightbulb fa-3x"></i>
                <h3>Personalized Recommendations</h3>
                <p>Receive tailored recommendations based on your skills, interests, and aspirations.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-chart-line fa-3x"></i>
                <h3>Educational Insights</h3>
                <p>Gain insights into educational trends, career paths, and industry developments.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <i className="fas fa-comments fa-3x"></i>
                <h3>Community Support</h3>
                <p>Connect with peers, mentors, and educators to enhance your educational journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="event-card">
                <h3>Webinar: Career Exploration</h3>
                <p>Date: March 15, 2024</p>
                <p>Join us for a webinar on exploring various career options and pathways.</p>
                <Link to="/events" className="btn btn-primary">Register Now</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card">
                <h3>Workshop: Study Skills</h3>
                <p>Date: March 20, 2024</p>
                <p>Attend our workshop to learn effective study skills and techniques for academic success.</p>
                <Link to="/events" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card">
                <h3>Panel Discussion: Future Trends</h3>
                <p>Date: March 25, 2024</p>
                <p>Join industry experts for a panel discussion on future trends in education and careers.</p>
                <Link to="/events" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <p>&copy; 2024 Degree Recommendation. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
