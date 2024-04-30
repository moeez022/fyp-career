import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

const Questionnaire = () => {
  const [percentage, setPercentage] = useState('');
  const [interests, setInterests] = useState('');
  const [experiences, setExperiences] = useState('');
  const [careerGoal, setCareerGoal] = useState('');
  const navigate = useNavigate();

  const handlePercentageChange = (e) => {
    // Ensure only numbers and up to one decimal point are allowed
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setPercentage(value);
  };

  const handleInterestsChange = (e) => {
    setInterests(e.target.value);
  };

  const handleExperiencesChange = (e) => {
    setExperiences(e.target.value);
  };

  const handleCareerGoalChange = (e) => {
    setCareerGoal(e.target.value);
  };

  const handleSubmit = () => {
    // Check if all required fields are filled
    const requiredFields = [
      { value: percentage, fieldName: 'Overall Percentage' },
      { value: interests, fieldName: 'Interests' },
      { value: experiences, fieldName: 'Experiences' },
      { value: careerGoal, fieldName: 'Career Goal' }
    ];

    const emptyFields = requiredFields.filter((field) => !field.value);

    if (emptyFields.length > 0) {
      // Construct error message for missing fields
      const errorMessage = `Please fill out the following fields: ${emptyFields.map((field) => field.fieldName).join(', ')}`;
      
      // Show popup alert for incomplete fields
      window.alert(errorMessage);

      // Prevent form submission
      return;
    }

    // Check if the entered percentage is below 50%
    if (parseFloat(percentage) < 50) {
      // Show popup alert for percentage error
      window.alert('Error: Percentage must be 50% or higher.');

      // Prevent form submission
      return;
    }

    // Proceed with submission if all fields are valid
    console.log('Entered Percentage:', percentage);
    console.log('Interests:', interests);
    console.log('Experiences:', experiences);
    console.log('Career Goal:', careerGoal);

    // Redirect the user to another page after successful submission
    navigate('/result');
  };

  // Dummy data for dropdown options
  const passionOptions = ['Technology', 'Art', 'Finance', 'Healthcare', 'Education', 'Marketing'];
  const experienceOptions = ['Yes', 'No'];
  const careerGoalOptions = [
    'Full-time Employment',
    'Higher Education (e.g., Master\'s Degree)',
    'Entrepreneurship',
    'Freelancing',
    'Non-profit Sector',
    'Government/Public Service'
  ];

  return (
    <div className="questionnaire-container">
      <h1 className="questionnaire-heading">Questionnaire</h1>

      <div className="question">
        <h3>1. What was your overall percentage in your last academic year?</h3>
        <div className="input-container">
          <input
            type="text"
            value={percentage}
            onChange={handlePercentageChange}
            placeholder="Enter your percentage"
          />
          <span className="percentage-sign">%</span>
        </div>
      </div>

      <div className="question">
        <h3>2. What are the areas in which you are most passionate about or interested in?</h3>
        <select value={interests} onChange={handleInterestsChange}>
          <option value="">Select an interest</option>
          {passionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="question">
        <h3>3. Do you have any professional or academic experiences that have enhanced your skills?</h3>
        <select value={experiences} onChange={handleExperiencesChange}>
          <option value="">Select an option</option>
          {experienceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

    

      <div className="submit-button">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Questionnaire;
