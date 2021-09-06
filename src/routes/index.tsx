import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyle from '../globalStyles';
import Main from '../screens/containers/main';
import Home from '../screens/home';
import Login from '../screens/login';
import CadasterRoutes from './cadasterRoutes';

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cadaster">
            <CadasterRoutes />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Routes;
