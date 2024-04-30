import React, { useState } from "react";
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Login/SignupForm";
import "./App.css";
import NavBar from "./Nav/NavBar";
import HomePage from "./Homep/HomePage";
import ContactUs from "./Contact/ContactUs";
import AboutUs from "./About/AboutUs";
import EditProfile from './editProfile/EditProfile';
import Intermediate from './Intermediate/Intermediate';
import Matric from './Matric/Matric';
import Questionnaire from './questionnaire/questionnaire';
import Questionaire10 from './Questionaire10/Questionaire10';
import ForgotPasswordForm from "./Login/Forgotpassword";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  // const toggleForm = () => {
  //   setShowSignup(!showSignup);
  // };

  // const handleLoginSubmit = (data) => {
  //   console.log("Logging in with:", data);
  // };

  // const handleSignupSubmit = (data) => {
  //   console.log("Signing up with:", data);
  // };

  return (
    <div>
    <Router>
      <Routes>
       <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login/Homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/Nav" element={<NavBar />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/matriculation" element={<Matric />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/Questionaire10" element={<Questionaire10 />} />
      </Routes>
    </Router>
    </div>
  ); 


};

export default App;
