import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRouteAuth = ({ children, ...rest }) => {
  // Constants
  const token = localStorage.getItem("accessToken");

  return <Route {...rest} render={({ location }) => (!token ? children : <Redirect to="/" />)} />;
};
