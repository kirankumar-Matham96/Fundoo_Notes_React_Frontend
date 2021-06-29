import React, { useState }from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import  Title  from '../components/title';
import '../scss/login.scss';
import axios from 'axios';

let userData;

const userCredentials = (data) => {
  userData = data;
  console.log('data: ',data)
  console.log(`userData from UI: \n email: ${ userData.email } \n password: ${ userData.password }`);
  const modifiedDataObject = {
    email: data.email,
    password: data.password
  };
  console.log(`modified user data object: ${modifiedDataObject.email}\n${modifiedDataObject.password}`)
  // loginUser(userData);
  loginUser(data);
  // loginUser(modifiedDataObject);
}

const loginUser = (data) =>
{
  axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data)
    .then((res) =>
    {
        console.log(`response data:\nprop1: ${res.data.id}`);
        console.log(`prop2: ${res.data.price}`);
    }).catch((err) =>
    {
      console.log(`Error: ${err}`)
    })
}

const validate = Yup.object().shape({
  email: Yup.string().email('invalid email!').required('Email is required!'),
  password: Yup.string().min(8, 'Password should be 8 chars minimum!').max(20, 'Maximum length is 20 chars').required('Password required!')
})

const Login = () => {
  const [isPasswordShown, setPasswordVisibility] = useState();

  const togglePasswordVisibility = () =>
  {
    setPasswordVisibility(isPasswordShown ? false : true );
  }

  return (
    <div>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={values => userCredentials(values) }
    >
        {({errors, touched}) => (
        <div className='login-container'>
          <div className='content'>
          <header>
            <div className='fundooNotes'>{<Title />}</div>
            <h1>Login here</h1>
          </header>
              <Form className='form-fields'>
                <div className='block-errorMessage'>
              <label className='LoginField'>
                <Field className='email-login' name='email' type="email" autoComplete='off' required/>
                <span className='placeholder email-ph'>Email</span>
                <ErrorMessage name='email'/>
              </label>
              <label className='LoginField'>
                <Field className='password-login' name='password' type={isPasswordShown ? 'text' : 'password'} autoComplete='off' required />
                <span className='placeholder password-ph' >Password</span>
                  {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
                  </label>
                  </div>
            <div className='show-pwd'>
              <label>
                <Field className='check-box' type='checkbox' name='checked'  onClick={ togglePasswordVisibility }/>
              </label>
                <label className='show' onClick={ togglePasswordVisibility }>Show password</label>
            </div>
            <button className='login-button' type='submit'>Login</button>
            <Link to='/register'>
              <a>Create account</a>
            </Link>
            </Form>
            </div>
        </div>
      )}
      </Formik>
      </div>
  );
}

export default Login;