import React from "react";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ isAuthenticated, children, ...props }) => (
  <Route {...props}>
    {isAuthenticated ? children : <Redirect to="/SignInIndex" />}
  </Route>
);
export default PrivateRoute;
