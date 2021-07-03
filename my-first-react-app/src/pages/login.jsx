import React, { useState }from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import  Title  from '../components/title';
import '../scss/login.scss';
import Service from '../services/user.jsx';

const serviceClass = new Service();
let token = '';

const validate = Yup.object().shape({
  email: Yup.string().email('invalid email!').required('Email is required!'),
  password: Yup.string().min(8, 'Password should be 8 chars minimum!').max(20, 'Maximum length is 20 chars').required('Password required!')
})

const Login = () =>
{
  let history = useHistory();
  const [isPasswordShown, setPasswordVisibility] = useState();
  const [token, setToken] = useState(null);

  const userCredentials = (data) =>
  {
    resetForm();

    console.log(`data from UI: ${ JSON.stringify(data) }`)

    serviceClass.loginUser(data).then(data =>
    {
      if (data.status === 200)
      {
        setToken(data.data.id);
        if (token)
        {
          alert('Login successful!\nRedirecting to dashboard...');
          history.push('./dashboard');
        } else {
          alert('Something went wrong!');
        }
      } else {
        alert('Something went wrong!');
      }
    }).catch((err) =>
    {
      console.log(`Error: ${err}`);
      alert('Something bad happened!😥')
    })
  }

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
                  {/* <Link to='/dashboard'> */}
                    <button className='login-button' type='submit'>Login</button>
                  {/* </Link> */}
            <Link to='/'>
              <a>Create account</a>
                </Link>

            <Link to='/dashboard'>
              <a>Dash Board</a>
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

/**
 *    props.resetForm()
            props.setSubmitting(false)
 */