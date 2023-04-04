import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sourse/fonts/stylesheet.css';
import './sourse/style/reset.css';
import './sourse/style/aboutMe.css';
import './sourse/style/aboveAll.css';
import './sourse/style/myWorks.css';
import './sourse/style/price.css';
import './sourse/style/contacts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
