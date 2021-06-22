import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../screens/login";
import GlobalStyle from '../globalStyles';
const Routes: React.FC = () => {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Routes;
