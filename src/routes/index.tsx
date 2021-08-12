import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../screens/login';
import Home from '../screens/home';
import Main from '../screens/containers/main';
import GlobalStyle from '../globalStyles';
import CadasterContainer from '../screens/containers/cadaster';
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
            <CadasterContainer />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Routes;
