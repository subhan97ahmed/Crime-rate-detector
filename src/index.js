import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomData from './pages/CustomData'
import {BrowserRouter} from 'react-router-dom'
import Main from './pages/Main'
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
   ,
  document.getElementById('root')
);
 {/* <App /> */}
     {/* <CustomData/> */}
{/* <React.StrictMode> */}
{/* </React.StrictMode> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();