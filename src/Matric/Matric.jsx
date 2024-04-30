import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../Nav/NavBar";
import './Matric.css'; // Import the CSS file for styling

const Matric = () => {
  const fields = [
    {
      name: 'Pre-Engineering',
      description: 'Pre-Engineering focuses on subjects like Mathematics, Physics, and Chemistry. Students who choose Pre-Engineering typically pursue careers in Engineering and related fields.',
      careers: ['Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Software Engineer'],
      color: '#3498db',
    },
    {
      name: 'Pre-Medical',
      description: 'Pre-Medical includes subjects such as Biology, Chemistry, and Physics. Students who opt for Pre-Medical usually aspire to become Doctors, Nurses, or other healthcare professionals.',
      careers: ['Doctor', 'Nurse', 'Surgeon', 'Pharmacist'],
      color: '#e74c3c',
    },
    {
      name: 'ICS (Computer Science)',
      description: 'ICS (Computer Science) covers topics related to computer programming, software development, and computer hardware. Students interested in IT and Computer Science choose this field.',
      careers: ['Software Developer', 'Web Developer', 'Database Administrator', 'Network Engineer'],
      color: '#9b59b6',
    },
    {
      name: 'Arts & Humanities',
      description: 'Arts & Humanities encompass subjects such as Literature, History, and Sociology. Students interested in arts, literature, and social sciences choose this field.',
      careers: ['Writer', 'Teacher', 'Historian', 'Social Worker'],
      color: '#e67e22',
    },
    {
      name: 'Commerce',
      description: 'Commerce includes subjects like Accounting, Economics, and Business Studies. Students interested in business, finance, and commerce-related fields choose this path.',
      careers: ['Accountant', 'Financial Analyst', 'Business Manager', 'Entrepreneur'],
      color: '#27ae60',
    },
    // Add more fields as needed
  ];

  const [selectedField, setSelectedField] = useState(null);

  const handleSelectField = (field) => {
    setSelectedField(field);
  };

  return (
    <div className="intermediate-container"> {/* Use the same CSS class as Intermediate */}
      <NavBar />
      <h1 className="heading">Explore Career Paths after Matriculation</h1>
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
      <div className="questionnaire-link">
        <Link to="/Questionaire10" className="questionnaire-button">Take the Questionnaire</Link>
      </div>
    </div>
  );
};

export default Matric;
