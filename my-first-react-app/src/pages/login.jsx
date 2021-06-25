// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
// import Yup from 'yup';
// import { Link } from 'react-router-dom';
import  Title  from '../components/title';
import TextField from '../components/textField';
import '../scss/login.scss';

// const validate = Yup.object().shape({
//   email: Yup.email('Email is invalid!').required('Email required!'),
//   password: Yup.min(8, 'Password should be 8 chars minimum!').max(20, 'Maximum length is 20 chars').required('Password required!')
// })

export const Login = () => {
  const validate = Yup.object().shape({
    email: Yup.string().email('Email is invalid!').required('Email required!'),
    password: Yup.string().min(8, 'Password should be 8 chars minimum!').max(20, 'Maximum length is 20 chars').required('Password required!')
  })

  return (
    <Formik
      initialValues={{
        email: '',
        password:''
      }}
      validationSchema={ validate }
      onSubmit={values => { console.log(values) } }
    >
      {formik => (
        <div className='login-container'>
          <header>
            <div id='fundooNotes'>{<Title />}</div>
            <h1>Login here</h1>
          </header>
          <Form className='text'>
            <TextField label='Email' name='email' type='email' placeholder='email     @gmail.com' />
            <TextField label='Password' name='password' type='password' placeholder='password' />
            <div className='show-pwd'>
              <label>
                <Field id='check-box' type='checkbox' name='checked' />
              </label>
              <label id='show'>Show password</label>
            </div>
              <button id='login-button' type='submit'>Login</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

// const validationSchema = yup.object().shape({
//   email: yup.string().email('Invalid email format').required('Required'),
//   password: yup.string().required('Required').min(8).max(20)
// })

// function Login() {
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [storeMail, storeEmail] = useState(false);
//   const [storePassword, storePWD] = useState(false);

//   // const { register, handleSubmit, errors } = useForm({
//   //   resolver: yupResolver(validationSchema),
//   // })

//   const getEmail = (event) => {
//     setEmail(event.target.value);
//     console.log(email);
//   }

//   const getPassword = (event) => {
//     setPassword(event.target.value);
//     console.log(password);
//   }

//   const storeUserData = async (event) => {
//     event.preventDefault();//stops reloading
//     storeEmail(value => value = true);
//     storePWD(value => value = true);

//     const data = {
//       email: email,
//       password: password
//     }
//     const isValid = await validationSchema.isValid(data);
//     let dataArr = [];

//     // (storeMail && storePassword) ? dataArr.push(Object.values(data)) : console.log('Not stored!');
//     isValid ? dataArr.push(Object.values(data)) : console.log(isValid);
//     console.log(dataArr);
//   }

//   return (
//     <div className='login-container' >
//       <header>
//         <h1>Login here</h1>
//       </header>
//       <form>
//       <div className='text'>
//         <input type='text' id='email' placeholder='Email' onChange={ getEmail } />
//         <input type='password' id='pwd' placeholder='Password' onChange={ getPassword } />
//       </div>
//       <div className='show-pwd'>
//         <input type='checkbox'></input>
//         <label>Show password</label>
//         </div>

//       <div className='button'>
//         <button id='login-button' onClick={ storeUserData }>Login</button>
//         </div>
//         <div id='sign-up-link'>
//           <p>Don't have an account? </p>
//           <Link to='/register'><a>Sign-up here</a></Link>
//           </div>
//       </form>
//     </div>
//     )
//   }

// export default Login;