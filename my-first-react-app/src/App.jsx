import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import DashBoard from "./components/dashboard";
import ProtectedRoute from "./components/protectedRoute";

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
