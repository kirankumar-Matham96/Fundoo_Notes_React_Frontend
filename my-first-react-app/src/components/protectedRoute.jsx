/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render the dashboard with authorization
 *
 * @description
 *
 * @file        : components/protectedRoute.jsx
 * @overview    : provides protection to the routing function
 * @module      : this is necessary to check the authentication the user
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
import React from "react";
import { Route } from "react-router-dom";
import auth from "../services/auth";

/**
 * functional component for the protected router
 * @param {Object} param
 * @returns dashboard component
 */
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

//exporting protected router
export default ProtectedRoute;
