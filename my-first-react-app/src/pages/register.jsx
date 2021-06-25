import React, { Component } from "react";
import Title from '../components/title';
import '../scss/register.scss';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

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
      isSubmitting: false
    }
  }

  getData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(this.state.formValues);
  }

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[ target.name ] = target.value;
    this.setState({ formValues });
    this.handleValidation(target);
  }

  handleValidation = (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isFirstName = name === 'firstName';
    const isLastName = name === 'lastName';
    const isEmail = name === 'email';
    const isPassword = name === 'password';
    const isConfirmPassword = name === 'confirmPassword'
    const nameTest = /^[A-Z]{1}[A-Za-z]{2,25}$/;
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
      if (isEmail) {
        validity[name] = emailTest.test(value);
      }
      if (isPassword) {
        var pwd = value;
        validity[name] = value.length >= 8;
        fieldValidationErrors[name] = validity[name] ? '' : `${name} should at least be 8 chars!`;
      }
      // if (isConfirmPassword) {
      //   validity[name] = (value === pwd);
      //   fieldValidationErrors[name] = validity[name] ? '' : `${name} should match!`;
      // }
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
      this.getData(event);
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
    const { formValues, formErrors, isSubmitting } = this.state
    return (
      <div className='register-page'>
        <Formik>
          <Form onSubmit={this.handleSubmit} >
            <div className='title'>{<Title />}</div>
              <div className='text name'>
                <div className='parallel-fields left-field' >
                  <label className='custom-field'>
                    <input className='firstName' name='firstName' type='text' onChange={this.handleChange} value={ formValues.firstName} required/>
                    <span className='placeHolder'>First Name</span>
                  </label>
                  <div className='error-message'>{ formErrors.firstName}</div>
                </div>
              <div className='parallel-fields right-field' >
              <label className='custom-field'>
                  <input className='lastName' name='lastName' type='text' onChange={ this.handleChange } required />
                  <span className='placeHolder'>Last Name</span>
              </label>
                  <div className='error-message'>{ formErrors.lastName}</div>
                </div>
              </div>
            <div className='email-div'>
              <label className='custom-field'>
                <input className='email text' name='email' type='email' onChange={ this.handleChange } required />
                <span className='placeHolder'>Email</span>
              </label>
            </div>
              <div className='error-message'>{formErrors.email}</div>
              <p>You can use letters, numbers & periods</p>
              <div className='text pwd-section'>
              <div className='parallel-fields left-field' >
              <label className='custom-field'>
                  <input className='password' id='password' name='password' type='password' onChange={ this.handleChange } required />
                  <span className='placeHolder'>Password</span>
              </label>
                  <div className='error-message'>{ formErrors.password}</div>
                </div>
              <div className='parallel-fields right-field' >
              <label className='custom-field'>
                  <input className='password' id='password' name='confirmPassword' type='password' onChange={ this.handleChange } required />
                  <span className='placeHolder'>Confirm Password</span>
              </label>
                  <div className='error-message'>{ formErrors.confirmPassword}</div>
                </div>
              </div>
              <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
              <div className='checkbox-content'>
                <input type='checkbox' ></input>
                <label>show password</label>
              </div>
            <footer className='foot'>
              <div className='signin-link'>
                <Link to='/login'>
                  <a>signin instead</a>
                </Link>
              </div>
              <div className='button'>
                <button className='register-btn' type='submit' disabled={isSubmitting} >Register</button>
                <Link to='/'>
                  <button className='home-btn'>Home</button>
                </Link>
              </div>
            </footer>
          </Form>
        </Formik>
      </div>
    )
  }
}

export default Register;