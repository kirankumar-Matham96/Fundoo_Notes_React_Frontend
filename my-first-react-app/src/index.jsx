import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App';
import Router from './components/router';
// import Register from './pages/register.jsx';
// import Login from './pages/login';
// import Login2 from './pages/login2';
// import reportWebVitals from './reportWebVitals';

  ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
