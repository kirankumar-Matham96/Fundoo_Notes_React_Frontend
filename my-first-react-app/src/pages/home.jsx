import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/home.scss'
import Title from '../components/title';

const Home = () => (
  <div className='container'>
    <div>{ <Title /> }</div>
    <h2>Home</h2>
    <div className='buttons'>
      <Link to='/register'>
        <button id='register'>Register</button>
      </Link>
      <Link to='/login'>
        <button id='login'>Login</button>
      </Link>
    </div>
    <div className='image'>
      {/* <img src={logo} alt="Notes Image" /> */}
    </div>
  </div>
)

export default Home;