import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/home.scss'

const Home = () => (
  <div className='container'>
    <h1>Home</h1>
    <div className='buttons'>
      <Link to='/register'>
        <button>Register</button>
      </Link>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  </div>
)