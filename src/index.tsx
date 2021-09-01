import {ApolloProvider} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {graphqlService} from './config/client-graphql';
import GlobalStyle from './globalStyles';
import Routes from './routes';
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlService}>
      <Routes />
    </ApolloProvider>
    <GlobalStyle />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
