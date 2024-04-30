// Intermediate.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import NavBar from "../Nav/NavBar";
import './Intermediate.css'; // Import the CSS file for styling

const Intermediate = () => {
  const fields = [
    {
      name: 'Engineering',
      description: 'Engineering is the application of scientific principles to design and build structures, machines, systems, and processes.',
      careers: ['Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Software Engineer'],
      color: '#3498db',
    },
    {
      name: 'Medicine',
      description: 'Medicine is the science and practice of the diagnosis, treatment, and prevention of disease.',
      careers: ['Doctor', 'Nurse', 'Surgeon', 'Pharmacist'],
      color: '#e74c3c',
    },
    {
      name: 'Arts',
      description: 'Arts encompass a wide range of creative endeavors, including visual arts, performing arts, and literary arts.',
      careers: ['Artist', 'Actor', 'Writer', 'Musician'],
      color: '#9b59b6',
    },
    {
      name: 'Science',
      description: 'Science is the systematic study of the structure and behavior of the physical and natural world through observation and experiment.',
      careers: ['Biologist', 'Chemist', 'Physicist', 'Environmental Scientist'],
      color: '#2ecc71',
    },
    {
      name: 'Business',
      description: 'Business involves the organization and management of commercial activities to achieve specific objectives.',
      careers: ['Entrepreneur', 'Accountant', 'Marketing Manager', 'Financial Analyst'],
      color: '#f39c12',
    },
  ];

  const [selectedField, setSelectedField] = useState(null);

  const handleSelectField = (field) => {
    setSelectedField(field);
  };

  return (
    <div className="intermediate-container">
      <NavBar />
      <h1 className="heading">Explore Career Paths after Intermediate</h1>
      <div className="content">
        <div className="field-list">
          <h2 className="sub-heading">Fields of Study</h2>
          <ul className="field-list-ul">
            {fields.map((field, index) => (
              <li key={index} className="field-list-item" onClick={() => handleSelectField(field)} style={{ backgroundColor: field.color }}>
                {field.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="field-details">
          {selectedField && (
            <div>
              <h2 className="sub-heading">{selectedField.name}</h2>
              <p className="description">{selectedField.description}</p>
              <h3 className="sub-heading">Potential Careers</h3>
              <ul className="career-list">
                {selectedField.careers.map((career, index) => (
                  <li key={index} className="career-list-item">{career}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Add navigation button to questionnaire page */}
      <div className="questionnaire-link">
        <Link to="/questionnaire" className="questionnaire-button">Take the Questionnaire</Link>
      </div>
    </div>
  );
};

export default Intermediate;
