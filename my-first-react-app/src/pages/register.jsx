/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to register new user through registration UI page
 *
 * @description
 *
 * @file        : pages/register.jsx
 * @overview    : controls registration for frontend
 * @module      : this is necessary to register new user.
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries, functions and components
import React, { Component } from "react";
import Title from "../components/title";
import "../scss/register.scss";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import ServiceClass from "../services/user.js";

//creating instance for the Service class
const service = new ServiceClass();

//object to stote initial state of the page
const initialState = {
  isPasswordShown: false,
  formValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  formValidity: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
  isSubmitting: false,
};

//using class component
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  /**
   * to toggle the password visibility
   */
  passwordVisibilityHandler = () => {
    const isPasswordShown = this.state.isPasswordShown;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  /**
   * to get the data from the field
   * @param {Object} target
   */
  getData = (target) => {
    const modifiedData = {
      firstName: this.state.formValues.firstName,
      lastName: this.state.formValues.lastName,
      email: this.state.formValues.email,
      password: this.state.formValues.password,
      service: "advance",
    };

    //to call the method to send the data to backend
    service
      .registerUser(modifiedData)
      .then((data) => {
        if (data.status === 200) {
          alert(
            "Registration successful. 👍\nNow you will be redirected to login page."
          );
          this.props.history.push("./login");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((err) => {
        alert("Something went wrong!😥");
      });
  };

  /**
   * to handle changes in the input fields
   * @param {Object} param
   */
  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
    this.handleValidation(target);
  };

  /**
   * to validate the data
   * @param {Object} target
   */
  handleValidation = (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isFirstName = name === "firstName";
    const isLastName = name === "lastName";
    const isEmail = name === "email";
    const isPassword = name === "password";
    const isConfirmPassword = name === "confirmPassword";
    const nameTest = /^[A-Za-z]{3,25}$/;
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name] ? "" : `${name} is required!`;

    if (validity[name]) {
      if (isFirstName) {
        validity[name] = nameTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} is invalid!`;
      }
      if (isLastName) {
        validity[name] = nameTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} is invalid!`;
      }
      if (isEmail) {
        validity[name] = emailTest.test(value);
      }
      if (isPassword) {
        validity[name] = value.length >= 8;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should at least be 8 chars!`;
      }
      if (isConfirmPassword) {
        fieldValidationErrors[name] =
          target.value !== this.state.formValues.password
            ? `${name} should match!`
            : "";
      }
    }

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
  };

  /**
   * to handle the data when the form submitted
   * @param {Object} event
   */
  handleSubmit = (event) => {
    //to prevent reloading the page
    event.preventDefault();

    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      alert("Form is validated, submitting the form...");
      this.getData(event.target);
      this.setState({ isSubmitting: false });
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key],
        };
        this.handleValidation(target);
      }
      this.setState({ isSubmitting: false });
    }
  };

  /**
   * to render the components in the web page
   * @returns jsx elements
   */
  render() {
    const { isPasswordShown, formValues, formErrors, isSubmitting } =
      this.state;
    return (
      <div className="register-page">
        <div className="form-content">
          <Formik>
            <Form onSubmit={this.handleSubmit}>
              <div className="title">{<Title />}</div>
              <div className="sub-title">
                <p>Register now and keep your notes safe.</p>{" "}
              </div>
              <div className="text">
                <div className="parallel-fields left-field">
                  <label className="custom-field">
                    <input
                      className="firstName"
                      name="firstName"
                      type="text"
                      onChange={this.handleChange}
                      value={formValues.firstName}
                      required
                      autoComplete="off"
                    />
                    <span className="placeHolder">First Name</span>
                  </label>
                  <div className="error-message">{formErrors.firstName}</div>
                </div>
                <div className="parallel-fields right-field">
                  <label className="custom-field">
                    <input
                      className="lastName"
                      name="lastName"
                      type="text"
                      onChange={this.handleChange}
                      value={formValues.lastName}
                      required
                      autoComplete="off"
                    />
                    <span className="placeHolder">Last Name</span>
                  </label>
                  <div className="error-message">{formErrors.lastName}</div>
                </div>
              </div>
              <div className="email-div text">
                <label className="custom-field-email">
                  <input
                    className="email"
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    autoComplete="off"
                    value={formValues.email}
                    required
                  />
                  <span className="placeHolder">Email</span>
                  <span className="ph">@gmail.com</span>
                </label>
                <div className="error-message email-error">
                  {formErrors.email}
                </div>
              </div>
              <p className="email-para">
                You can use letters, numbers & periods
              </p>
              <div className="text">
                <div className="parallel-fields left-field">
                  <label className="custom-field">
                    <input
                      className="password1"
                      name="password"
                      type={isPasswordShown ? "text" : "password"}
                      onChange={this.handleChange}
                      value={formValues.password}
                      required
                      autoComplete="off"
                    />
                    <span className="placeHolder">Password</span>
                  </label>
                  <div className="error-message">{formErrors.password}</div>
                </div>
                <div className="parallel-fields right-field">
                  <label className="custom-field">
                    <input
                      className="password2"
                      name="confirmPassword"
                      type={isPasswordShown ? "text" : "password"}
                      onChange={this.handleChange}
                      required
                      autoComplete="off"
                    />
                    <span className="placeHolder">Confirm Password</span>
                  </label>
                  <div className="error-message">
                    {formErrors.confirmPassword}
                  </div>
                </div>
              </div>
              <p>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
              <div className="checkbox-content">
                <input
                  className="showMe"
                  type="checkbox"
                  onClick={this.passwordVisibilityHandler}
                ></input>
                <label
                  className="showMe"
                  onClick={this.passwordVisibilityHandler}
                >
                  show password
                </label>
              </div>
              <footer className="foot">
                <div>
                  {/* <Link to="/login" className="signin-link">
                    sign-in instead
                  </Link> */}
                </div>
                <div className="button">
                  <button
                    className="register-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </button>
                </div>
              </footer>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

//exporting the class
export default Register;
