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
    const nameTest = /^[A-Z]{1}[A-Za-z]{2,25}$/i;
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name] ? '' : `${name} is required and cannot be empty!`;

    if (validity[name]) {
      if (isFirstName) {
        validity[name] = nameTest.test(value);
        fieldValidationErrors[name] = validity[name] ? '' : `${name} should be a valid one!`;
      }
      if (isLastName) {
        validity[name] = nameTest.test(value);
        fieldValidationErrors[name] = validity[name] ? '' : `${name} should be a valid one!`;
      }
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name] ? '' : `${name} should be a valid one!`;
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
    return(
      <Formik>
        <Form onSubmit={this.handleSubmit} >
          <div>{ <Title />}</div>
          <div>
            <input name='firstName' type='text' placeholder='first name' onChange={this.handleChange} value={ formValues.firstName}/>
            <div className='error-message'>{ formErrors.firstName}</div>
            <input name='lastName' type='text' placeholder='last name' onChange={ this.handleChange } />
            <div className='error-message'>{ formErrors.lastName}</div>
          </div>
          <input name='email' type='email' placeholder='email' onChange={ this.handleChange } />
            <div className='error-message'>{ formErrors.email}</div>
            <p>You can use letters, numbers & periods</p>
          <div>
            <input name='password' type='password' placeholder='password' onChange={ this.handleChange } />
            <div className='error-message'>{ formErrors.password}</div>
            <input name='confirmPassword' type='password' placeholder='confirm password' onChange={ this.handleChange } />
            <div className='error-message'>{ formErrors.confirmPassword}</div>
          </div>
          <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
          <div>
            <input type='checkbox' ></input>
            <label htmlFor="">show password</label>
          </div>
          <div>
          <Link to='/'>
            <button className='button'>Home</button>
          </Link>
            <button className='button' type='submit' disabled={isSubmitting} >Register</button>
          </div>
        </Form>
      </Formik>
    )
  }
}

export default Register;