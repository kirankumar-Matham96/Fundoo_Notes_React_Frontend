import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import DashBoard from './pages/dashboard';

function App() {
    return (
      <Router>
        <div className='route'>
          <Switch>
            <Route path='/' exact component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={DashBoard} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;