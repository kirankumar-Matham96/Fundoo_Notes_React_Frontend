import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Title from '../components/title';
import Login from './login';
import '../scss/register.scss';

//using class component
class Register extends Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword:''
    }
  }

  getData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  buttonClicked = (event) => {
    event.preventDefault();//stop reloading
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`confirmPassword: ${confirmPassword}`);
  }

  //method from Component
  render() {
    console.log(`state: ${this.state.value}`)
    return (
      <div className='Register'>
        <form className='form' action='#'>
          <div className='info'>
            <div id='logo1'>
              <div id='headerLogo'>{<Title />}</div>
              <p id='head-statement'>Create your Personal Notes</p>
            </div>
            <div className='name' id='name'>
              <div id='first'>
                <input type='text' onChange={ this.getData } name='firstName' placeholder='First Name' />
              </div>
              <div id='last'>
                <input type='text' onChange={ this.getData } name='lastName' placeholder='Last Name' />
              </div>
            </div>
            <div>
              <span>
                <input type='email' id='user-name' onChange={ this.getData } name='email' placeholder='User Name' />
                <label>@gmail.com</label>
              </span>
              <p>You can use letters, numbers & periods</p>
            </div>
            <div className='button' id='userName-button'>
              <a href='https://www.youtube.com'>Use my current email address instead</a>
            </div>
            <div className='name' id='password'>
              <div id='pwd'>
                <input type='password' onChange={ this.getData } name='password' placeholder='Password' />
              </div>
              <div id='confirm-pwd'>
                <input type='confirmPassword' onChange={ this.getData } name='confirmPassword' placeholder='Confirm' />
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
                <button className='btn' id='next-btn' onClick={ this.buttonClicked }>Next</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default Register;