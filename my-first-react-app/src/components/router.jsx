import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from '../pages/register';//for default export
import Login from '../pages/login';//for default export
// import { Login } from '../pages/login';//for named export
import Home from '../pages/home';//for default export

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