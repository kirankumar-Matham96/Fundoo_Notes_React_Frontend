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
    this.validateData(name, value) ? this.setState({ [name]: value }) : console.log('Check your input again!');
    console.log(this.state);
  }

  buttonClicked = (event) => {
    event.preventDefault();//stops reloading
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    const data = Object.values(userData);
    console.log(data)
  }

  validateData = (name, value) => {
    //need to use validator here (example validator: yup <- from Manu)
    return true;
  }

  //method from Component
  render() {
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
                <input type='text' onChange={ this.getData } name='firstName' placeholder='First Name' required='required' />
              </div>
              <div id='last'>
                <input type='text' onChange={ this.getData } name='lastName' placeholder='Last Name' required/>
              </div>
            </div>
            <div>
              <span>
                <input type='email' id='user-name' onChange={ this.getData } name='email' placeholder='User Name' required/>
                <label>@gmail.com</label>
              </span>
              <p>You can use letters, numbers & periods</p>
            </div>
            <div className='button' id='userName-button'>
              <a href='https://www.youtube.com'>Use my current email address instead</a>
            </div>
            <div className='name' id='password'>
              <div id='pwd'>
                <input type='password' onChange={ this.getData } name='password' placeholder='Password' required/>
              </div>
              <div id='confirm-pwd'>
                <input type='confirmPassword' onChange={ this.getData } name='confirmPassword' placeholder='Confirm' required/>
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