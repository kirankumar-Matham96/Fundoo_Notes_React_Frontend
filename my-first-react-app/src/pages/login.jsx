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

  let userEmail;
  let userPassword;

  getEmail = (event) => {
    setEmail(event.target.value);
    userEmail = email;
    console.log(`email: ${userEmail}`);
  }
  getPassword = (event) => {
    setPassword(event.target.value);
    userPassword = password;
    console.log(userPassword);
  }

  storeUserData = () => {
    let mail;
    let password;

    storeMail ? mail = userEmail : mail = 'Not stored!';
    console.log(`email stored: ${mail}`);

    storePassword ? password = userPassword : password = 'Not stored!';
    console.log(`password stored: ${password}`);
  }

  return (
    <div className='login-container' >
      <header>
        <h1>Login here</h1>
      </header>
      <div className='text'>
        <input type='text' id='email' placeholder='Email' onChange={ getEmail }/>
        <input type='password' id='pwd' placeholder='Password' onChange={ getPassword }/>
      </div>
      <div className='show-pwd'>
        <input type='checkbox'></input>
        <label>Show password</label>
      </div>
      <div className='button'>
        <button id='login-button' onClick={ () => { storeEmail(true), storePWD(true) }, storeUserData }>Login</button>
      </div>
    </div>
    )
  }

export default Login;