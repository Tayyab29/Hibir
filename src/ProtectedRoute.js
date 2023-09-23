import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }) => {
  // Constants
  const token = localStorage.getItem("accessToken");

  return <Route {...rest} render={({ location }) => (token ? children : <Redirect to="/" />)} />;
};
