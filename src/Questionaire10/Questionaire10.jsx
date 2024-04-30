import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questionaire10.css';

const Questionaire10 = () => {
  const [percentage, setPercentage] = useState('');
  const [careerField, setCareerField] = useState('');
  const [careerGoal, setCareerGoal] = useState('');
  const navigate = useNavigate();

  const handlePercentageChange = (e) => {
    // Ensure only numbers and up to one decimal point are allowed
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setPercentage(value);
  };

  const handleCareerFieldChange = (e) => {
    setCareerField(e.target.value);
  };

  const handleCareerGoalChange = (e) => {
    setCareerGoal(e.target.value);
  };

  const handleSubmit = () => {
    // Check if any field is empty
    if (!percentage || !careerField || !careerGoal) {
      const missingFields = [];
      if (!percentage) missingFields.push('Overall percentage');
      if (!careerField) missingFields.push('Career field');
      if (!careerGoal) missingFields.push('Career goal');

      // Show popup alert for missing fields
      window.alert(`Error: Please fill out the following fields - ${missingFields.join(', ')}`);
      return;
    }

    // Check if the entered percentage is below 33%
    if (parseFloat(percentage) < 33) {
      // Show popup alert for percentage error
      window.alert('Error: Percentage must be 33% or higher.');
      return;
    }

    // Proceed with submission if all fields are valid
    console.log('Entered Percentage:', percentage);
    console.log('Selected Career Field:', careerField);
    console.log('Selected Career Goal:', careerGoal);

    // Redirect the user to another page after successful submission
    navigate('/result');
  };

  // Dummy data for career field options
  const careerFields = [
    'Software Engineering',
    'Data Science',
    'Finance',
    'Marketing',
    'Healthcare',
    'Education',
    'Hospitality',
    'Art and Design'
  ];

  // Dummy data for career goal options
  const careerGoals = [
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
        <h3>2. Which career field or industry aligns with your interests?</h3>
        <select value={careerField} onChange={handleCareerFieldChange}>
          <option value="">Select a career field</option>
          {careerFields.map((field, index) => (
            <option key={index} value={field}>
              {field}
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

export default Questionaire10;
