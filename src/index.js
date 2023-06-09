import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store'
import { Provider } from 'react-redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sourse/fonts/stylesheet.css';
import './sourse/style/reset.css';
import './sourse/style/aboutMe.scss';
import './sourse/style/aboveAll.scss';
import './sourse/style/myWorks.scss';
import './sourse/style/price.scss';
import './sourse/style/contacts.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
