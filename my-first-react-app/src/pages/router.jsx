import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Register from './register';
import Login from './pages';

class RouterClass {
  render() {
    return (
      <Router>
        <Route path='/' Component={ Register } />
        <Route path='/login' Component={ Login } />
      </Router>
    );
  }
}

export default RouterClass;