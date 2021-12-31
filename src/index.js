import React from 'react';
import ReactDOM from 'react-dom';
import A from './Components/A';
import './index.css';
import reportWebVitals from './reportWebVitals';

function News(){
  return  <>
            <h1>NEWS:-</h1>
            <h1>NEWS1:-</h1>
            <A />
          </>
}

ReactDOM.render(
  <React.StrictMode>
    <News />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
