import React, { Component } from "react";
import '../scss/register.scss';
import Title from '../components/title';
import Login from './login';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

//using class component
class Register extends Component {

  //method from Component
  render() {
    function clickedMe() {
      return (<Login />);
    }

    return (
      <div className='Register'>
        <form className='form' action="#">
          <div className='info'>
            <div id='logo1'>
              <div id='headerLogo'>{<Title />}</div>
              <p id='head-statement'>Create your Personal Notes</p>
            </div>
            <div className='name' id='name'>
              <div id='first'>
                <input type='text' placeholder='First Name' />
              </div>
              <div id='last'>
                <input type='text' placeholder='Last Name' />
              </div>
            </div>
            <div>
              <span>
                <input type='text' id='user-name' placeholder='User Name' />
                <label>@gmail.com</label>
              </span>
              <p>You can use letters, numbers & periods</p>
            </div>
            <div className='button' id='userName-button'>
              <a href='https://www.youtube.com'>Use my current email address instead</a>
            </div>
            <div className='name' id='password'>
              <div id='pwd'>
                <input type='password' placeholder='Password' />
              </div>
              <div id='confirm-pwd'>
                <input type='password' placeholder='Confirm' />
              </div>
            </div>
            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            <div className='show-password'>
              <div>
                <input type='checkbox' className='check-box' />
                <label className='label' id='show-password'>Show password</label>
              </div>
              <div className='end-options'>
                <a href='https://www.google.com'>Sign in instead</a>
                <button className='btn' id='next-btn' onClick={ clickedMe }>Next</button>
              </div>
            </div>
          </div>
          {/* <logo id='logo2'>
            <img src={ sideLogo } alt='logo'/>
          </logo> */}
        </form>
      </div>)
  }
}
export default Register;