import React, { Component } from "react";
import Title from '../components/title';
import '../scss/registerCssTrialToFix.scss';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';//TODO: use this and see.

const show = (event) =>
{
  // const pwd = document.querySelector('.pwd');
  const pwd = event.target.value;
  console.log(pwd);
  console.log(event.target);
  console.log(event)
  // pwd.type === 'password' ? pwd.type = 'text' : pwd.type = 'password';
}
//using class component
class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <header className='header'>
          {<Title />}
          <h2>Create your account</h2>
        </header>
        <form action="#">
        <div className='side-blocks'>
        <label className='firstName'>
          <input type='text' required/>
          <span className='placeholder'>First Name</span>
        </label>
        <label className='lastName'>
          <input type='text' required/>
          <span className='placeholder'>Last Name</span>
          </label>
          </div>
        <div className='center-block'>
        <label className='email'>
            <input type='text' required />
            <span className='placeholder'>Email</span>
          <span className='ph'>@gmail.com</span>
          </label>
        </div>
        <div className='side-blocks'>
        <label className='password'>
          <input type='password pwd' required/>
          <span className='placeholder'>Password</span>
        </label>
        <label className='confirm'>
          <input type='password' required/>
          <span className='placeholder'>Confirm</span>
          </label>
          </div>
          <div className='showPassword'>
            <input type="checkbox"  onClick={show}/>
            <span className='unHide'  onClick={show}>show password</span>
          </div>
        </form>
        <footer>
          <div className='link'>
          <Link to='/login'>
            <a className='link'>signin instead</a>
            </Link>
            </div>
          <button type='submit'>Register</button>
        </footer>
      </div>
    )
  }
}

export default Register;