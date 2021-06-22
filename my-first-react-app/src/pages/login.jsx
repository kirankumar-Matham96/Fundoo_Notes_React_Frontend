/**
 * Use card to create.
 * email and password text input boxes.
 * A button with name login.
 * When button clicked, the data should be gathered from the body.
 */

import React, { Component } from 'react';
import '../scss/login.scss';

class Login extends Component {
  render() {
    // clickedLogin = () => {
    //   console.log('You logged in successfully 🎊');
    // }
    return (
      <div className='login' >
        <header>
          <h1>Login here</h1>
        </header>
      <div className='text'>
        <input type='text' id='email' placeholder='Email' />
        <input type='password' id='pwd' placeholder='Password' />
        </div>
        <div className='show-pwd'>
          <input type='checkbox'></input>
          <label>Show password</label>
        </div>
        <div className='button'>
          <button id='login-button'>Login</button>
        </div>
    </div>
    )
  }
}

export default Login;