/**
 * email and password text input boxes.
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../scss/login2.scss'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Required'),
  password: yup.string().required('Required').min(8).max(20)
})

function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const submitForm = (data) => {
    console.log(data)
  }

  return (
    <div className='Form'>
     <div className='title'>Login form</div>
     <div className='inputs'>
        <form onSubmit={handleSubmit(submitForm)}>
          <input type="email" name='email' placeholder='Email' />
          <p>{ errors.email.message}</p>
          <input type="password" name='password' placeholder='Password' />
          <input type="submit" />
       </form>
     </div>
    </div>
  )
}

export default Login;