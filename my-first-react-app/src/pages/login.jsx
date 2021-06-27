import React, { useState }from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import  Title  from '../components/title';
import TextField from '../components/textField';
import '../scss/login.scss';

let userData;

const userCredentials = (data) => {
  userData = data;
  console.log(userData);
}

const Login = () => {


  const validate = Yup.object().shape({
    email: Yup.string().email('Email is invalid!').required('Email required!'),
    password: Yup.string().min(8, 'Password should be 8 chars minimum!').max(20, 'Maximum length is 20 chars').required('Password required!')
  })

  const [isPasswordShown, setPasswordVisibility] = useState();

  const togglePasswordVisibility = () =>
  {
    setPasswordVisibility(isPasswordShown ? false : true );
  }


  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={values => userCredentials(values) }
    >
      {formik => (
        <div className='login-container'>
          <div className='content'>
          <header>
            <div className='fundooNotes'>{<Title />}</div>
            <h1>Login here</h1>
          </header>
          <Form className='form-fields'>
              <TextField className='textField' name='email' type='email' required/>
              <TextField className='textField' name='password' type={isPasswordShown ? 'text' : 'password'} required/>
            <div className='show-pwd'>
              <label>
                <Field className='check-box' type='checkbox' name='checked'  onClick={ togglePasswordVisibility }/>
              </label>
                <label className='show' onClick={ togglePasswordVisibility }>Show password</label>
            </div>
            <button className='login-button' type='submit'>Login</button>
            <Link to='/'>
              <a>Create account</a>
            </Link>
            </Form>
            </div>
        </div>
      )}
    </Formik>
  );
}

export default Login;