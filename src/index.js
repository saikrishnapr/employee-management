import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Add global CSS styles here
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Measure app performance (e.g., for analytics or debugging)
reportWebVitals();
