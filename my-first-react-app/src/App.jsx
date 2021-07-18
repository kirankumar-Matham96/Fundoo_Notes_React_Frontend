/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render all the components of the application
 *
 * @description
 *
 * @file        : pages/register.jsx
 * @overview    : controls routing and renders all components
 * @module      : this is necessary to render all the components and pages based on routing conditions
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import DashBoard from "./components/dashboard";
import ProtectedRoute from "./components/protectedRoute";

/**
 * functional component to manage routes for all pages and components
 * @returns jsx components
 */
function App() {
  return (
    <Router>
      <div className="route">
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={DashBoard} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
