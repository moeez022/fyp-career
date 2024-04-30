import React from 'react';
import NavBar from "../Nav/NavBar";
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-options">
          <div className="option">
            <div className="option-content">
              <h3>Email</h3>
              <p>Email us at: contact@example.com</p>
            </div>
          </div>
          <div className="option">
            <div className="option-content">
              <h3>Phone Number</h3>
              <p>Call us at: +1234567890</p>
            </div>
          </div>
          <div className="option">
            <div className="option-content">
              <h3>Contact Form</h3>
              <p>Fill out the form below to send us a message:</p>
              {/* Include your contact form component here */}
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="1"></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div className="option">
            <div className="option-content">
              <h3>Social Media</h3>
              <p>Connect with us on:</p>
              {/* Include your social media links here */}
              <div className="social-media-links">
                <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="option-content">
              <h3>FAQ Section</h3>
              <p>Visit our <a href="/faq">FAQ page</a> for answers to common questions.</p>
            </div>
          </div>
          <div className="option">
            <div className="option-content">
              <h3>Support Center</h3>
              <p>Access our <a href="/support">support center</a> for detailed information and troubleshooting guides.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
