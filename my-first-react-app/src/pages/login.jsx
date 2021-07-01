import React, { useState }from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import  Title  from '../components/title';
import '../scss/login.scss';
import Service from '../services/user.jsx';

const serviceClass = new Service();

const userCredentials = (data) =>
{
  console.log(`data from UI: ${ JSON.stringify(data) }`)

  serviceClass.loginUser(data).then(data =>
  {
    if (data.status === 200)
    {
      alert('Login successful!\nRedirecting to dashboard...');
      window.location = './dashboard';
    } else {
      alert('Something went wrong!');
    }
    
    /**
     * trying to alert with appropriate message.<===
     */
      // switch (data.status)
      //   {
      //   case 200:
      //     alert('Login successful!\nRedirecting to dashboard...');
      //     break;
      //   case 401:
      //     alert('Email or password is wrong!');
      //     break;
      //   case 500:
      //     alert('Internal server error!');
      //     break;
      //   default:
      //     alert('Something went wrong!');
      //    }
  }).catch((err) =>
  {
    console.log(`Error: ${err}`);
    alert('Something bad happened!😥')
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
            <Link to='/'>
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