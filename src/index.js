import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Create a root instance using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component inside the root instance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
