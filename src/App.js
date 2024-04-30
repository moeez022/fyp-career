import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
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
      <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignupForm />} />
      </Routes>
    </Router>
    </div>
  );


};

export default App;
