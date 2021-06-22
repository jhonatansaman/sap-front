import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import GlobalStyle from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
