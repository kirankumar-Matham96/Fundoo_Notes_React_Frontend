import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './register';
import Login from './login';
import Home from './home'

function RouterFunction() {
    return (
      <Router>
        <div className='route'>
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }

export default RouterFunction;