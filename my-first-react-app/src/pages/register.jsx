import React, { Component } from "react";
// import '../scss/register.scss';
import '../scss/register.scss';
import googleLogo from '../assets/googlelogo.png'
import sideLogo from '../assets/sideimage.png'

//using class component
class Register extends Component {

  constructor() {
    super();
    this.state = {
      string: 'Welcome to react google form 🙏🏼'
    }
  }

  render() {
    return (
      <div className='Register'>
        <form className='form' action="#">
          <div>
            <div id='logo1'>
              <img src={googleLogo} id='googleLogo' alt='logo'/>
              <p id='head-statement'>Create your Google Account</p>
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
              <input type='text' id='user-name' placeholder='User Name'/>
              <p>You can use letters, numbers & periods</p>
            </div>

            <div className='button' id='userName-button'>
              <a href='https://www.youtube.com'>Use my current email address instead</a>
            </div>

            <div className='name' id='password'>
              <div id='pwd'>
                <input type='text' placeholder='Password' />
              </div>

              <div id='confirm-pwd'>
                <input type='text' placeholder='Confirm' />
              </div>
            </div>
            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            <div className='show-password'>
              <div>
                <input type='checkbox' />
                <label className='label' id='Show-password'>Show password</label>
              </div>

              <div className='end-options'>
                <a href='https://www.google.com'>Sign in instead</a>
                <button>Next</button>
              </div>
            </div>
          </div>
          <logo id='logo2'>
            <img src={ sideLogo } alt='logo'/>
          </logo>
        </form>

      </div>)
  }
}
export default Register;