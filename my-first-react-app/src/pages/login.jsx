/**
 * Use card to create.
 * email and password text input boxes.
 * A button with name login.
 * When button clicked, the data should be gathered from the body.
 */

import React, {useState} from 'react';
import '../scss/login.scss';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [storeMail, storeEmail] = useState(false);
  const [storePassword, storePWD] = useState(false);

  const getEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  }

  const getPassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  const storeUserData = () => {
    storeEmail(value => value = true);
    storePWD(value => value = true);

    console.log(`storeMail: ${storeMail}`)
    console.log(`storePassword: ${storePassword}`)

    storeMail ? console.log(email) : console.log('Not stored!');
    storePassword ? console.log(password) : console.log('Not stored!');
  }

  return (
    <div className='login-container' >
      <header>
        <h1>Login here</h1>
      </header>
      <div className='text'>
        <input type='text' id='email' placeholder='Email' onChange={ getEmail } />
        <input type='password' id='pwd' placeholder='Password' onChange={ getPassword } />
      </div>
      <div className='show-pwd'>
        <input type='checkbox'></input>
        <label>Show password</label>
      </div>
      <div className='button'>
        <button id='login-button' onClick={ storeUserData }>Login</button>
      </div>
    </div>
    )
  }

export default Login;