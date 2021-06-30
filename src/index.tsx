import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './globalStyles';
import Routes from './routes';
ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
