import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';

function App() {
    return (
      <Router>
        <div className='route'>
          <Switch>
            <Route path='/' exact component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;