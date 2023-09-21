import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

export const ProtectedRoute = ({
  required_rights,
  optional_rights,
  parent_path,
  children,
  ...rest
}) => {
  // Constants
  const token = localStorage.getItem("accessToken");
  console.log({ ...rest });

  return <Route {...rest} render={({ location }) => (token ? children : <Redirect to="/" />)} />;
};
