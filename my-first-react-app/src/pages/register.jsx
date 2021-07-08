import React, { Component } from "react";
import Title from '../components/title';
import '../scss/register.scss';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import ServiceClass from '../services/user.js';

const service = new ServiceClass();
const initialState = {
      isPasswordShown: false,
      formValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      formValidity: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
      },
      isSubmitting: false,
    }

//using class component
class Register extends Component
{
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // reset = (target) =>
  // {
  //   this.state = initialState;
  //   target = null;
  // }

  passwordVisibilityHandler = () => {
    const isPasswordShown = this.state.isPasswordShown;
    this.setState({ isPasswordShown: !isPasswordShown })
  }

  getData = (target) => {
    const modifiedData = {
      firstName: this.state.formValues.firstName,
      lastName: this.state.formValues.lastName,
      email: this.state.formValues.email,
      password: this.state.formValues.password,
      service: 'advance'
    }
    service.registerUser(modifiedData).then(data =>
      {
      // this.reset(target);
      if (data.status === 200)
      {
        alert('Registration successful. 👍\nNow you will be redirected to login page.');
        this.props.history.push('./login');
      } else
      {
        alert('Something went wrong!');
      }
    }).catch((err) =>
    {
      console.log(`Error: ${err}`);
      alert('Something went wrong!😥')
    })
  }

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
    this.handleValidation(target);
  }

  handleValidation = (target) =>
  {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isFirstName = name === 'firstName';
    const isLastName = name === 'lastName';
    const isEmail = name === 'email';
    const isPassword = name === 'password';
    const isConfirmPassword = name === 'confirmPassword'
    const nameTest = /^[A-Za-z]{3,25}$/;
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name] ? '' : `${name} is required!`;

    if (validity[name]) {
      if (isFirstName) {
        validity[name] = nameTest.test(value);
        fieldValidationErrors[name] = validity[name] ? '' : `${name} is invalid!`;
      }
      if (isLastName) {
        validity[name] = nameTest.test(value);
        fieldValidationErrors[name] = validity[name] ? '' : `${name} is invalid!`;
      }
      if (isEmail)
      {
        validity[name] = emailTest.test(value);
      }
      if (isPassword)
      {
        validity[name] = value.length >= 8;
        fieldValidationErrors[name] = validity[name] ? '' : `${name} should at least be 8 chars!`;
      }
      if (isConfirmPassword){
        fieldValidationErrors[name] = target.value !== this.state.formValues.password ? `${ name } should match!` : '';
      }
    }

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      alert('Form is validated, submitting the form...');
      this.getData(event.target);
      this.setState({ isSubmitting: false });
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key]
        };
        this.handleValidation(target);
      }
      this.setState({ isSubmitting: false });
    }
   }

  render() {
    const { isPasswordShown, formValues, formErrors, isSubmitting } = this.state
    return (
      <div className='register-page'>
        <div className='form-content'>
        <Formik>
          <Form onSubmit={this.handleSubmit} >
            <div className='title'>
              {<Title />}
            </div>
              <div className='sub-title'><p>Register now and keep your notes safe.</p> </div>
              <div className='text name'>
                <div className='parallel-fields left-field' >
                  <label className='custom-field'>
                    <input className='firstName' name='firstName' type='text' onChange={this.handleChange} value={ formValues.firstName} required autoComplete='off'/>
                    <span className='placeHolder'>First Name</span>
                  </label>
                  <div className='error-message'>{ formErrors.firstName}</div>
                </div>
              <div className='parallel-fields right-field' >
              <label className='custom-field'>
                  <input className='lastName' name='lastName' type='text' onChange={ this.handleChange } value={ formValues.lastName}required autoComplete='off' />
                  <span className='placeHolder'>Last Name</span>
              </label>
                  <div className='error-message'>{ formErrors.lastName}</div>
                </div>
              </div>
            <div className='email-div text'>
              <label className='custom-field-email'>
                <input className='email' name='email' type='email' onChange={ this.handleChange } autoComplete='off' value={ formValues.email} required/>
                <span className='placeHolder'>Email</span>
                <span className='ph'>@gmail.com</span>
              </label>
              <div className='error-message email-error'>{formErrors.email}</div>
            </div>
              <p className='email-para'>You can use letters, numbers & periods</p>
              <div className='text pwd-section'>
              <div className='parallel-fields left-field' >
              <label className='custom-field'>
                  <input className='password' name='password' type={isPasswordShown ? 'text' : 'password'} onChange={ this.handleChange } value={ formValues.password} required autoComplete='off' />
                  <span className='placeHolder'>Password</span>
              </label>
                  <div className='error-message'>{ formErrors.password}</div>
                </div>
              <div className='parallel-fields right-field' >
              <label className='custom-field'>
                  <input className='password' name='confirmPassword' type={isPasswordShown ? 'text' : 'password'} onChange={ this.handleChange } required autoComplete='off' />
                  <span className='placeHolder'>Confirm Password</span>
              </label>
                  <div className='error-message'>{ formErrors.confirmPassword}</div>
                </div>
              </div>
              <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
              <div className='checkbox-content'>
              <input className='showMe' type='checkbox' onClick={ this.passwordVisibilityHandler}></input>
                <label className='showMe'  onClick={ this.passwordVisibilityHandler}>show password</label>
              </div>
            <footer className='foot'>
              <div className='signin-link'>
                <Link to='/login'>
                  <a>signin instead</a>
                </Link>
              </div>
              <div className='button'>
                <button className='register-btn' type='submit' disabled={isSubmitting} >Register</button>
              </div>
            </footer>
          </Form>
          </Formik>
          </div>
      </div>
    )
  }
}

export default Register;