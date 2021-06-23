/**
 * Use card to create.
 * email and password text input boxes.
 * A button with name login.
 * When button clicked, the data should be gathered from the body.
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import '../scss/login.scss';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Required'),
  password: yup.string().required('Required').min(8).max(20)
})

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [storeMail, storeEmail] = useState(false);
  const [storePassword, storePWD] = useState(false);

  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(validationSchema),
  // })

  const getEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  }

  const getPassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  const storeUserData = async (event) => {
    event.preventDefault();//stops reloading
    storeEmail(value => value = true);
    storePWD(value => value = true);

    const data = {
      email: email,
      password: password
    }
    const isValid = await validationSchema.isValid(data);
    let dataArr = [];

    // (storeMail && storePassword) ? dataArr.push(Object.values(data)) : console.log('Not stored!');
    isValid ? dataArr.push(Object.values(data)) : console.log(isValid);
    console.log(dataArr);
  }

  return (
    <div className='login-container' >
      <header>
        <h1>Login here</h1>
      </header>
      <form>
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
      </form>
    </div>
    )
  }

export default Login;