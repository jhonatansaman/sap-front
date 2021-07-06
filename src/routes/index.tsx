import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../screens/login';
import Home from '../screens/home';
import GlobalStyle from '../globalStyles';
const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Routes;
