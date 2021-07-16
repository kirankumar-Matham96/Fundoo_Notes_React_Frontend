import React from "react";
import { Route } from "react-router-dom";
import auth from "../services/auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
