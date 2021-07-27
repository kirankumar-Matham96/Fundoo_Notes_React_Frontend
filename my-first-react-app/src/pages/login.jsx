/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to login user through login UI page
 *
 * @description
 *
 * @file        : pages/login.jsx
 * @overview    : controls login for frontend and authorize the user
 * @module      : this is necessary to give the authorization to user.
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing necessary libraries, files and components
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router } from "react-router-dom";
import * as Yup from "yup";
import { ErrorMessage, Formik, Field, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import Title from "../components/title";
import "../scss/login.scss";
import Service from "../services/user.js";
import auth from "../services/auth";

//creating an instance for service class
const serviceClass = new Service();

//Yup object for the validation
const validate = Yup.object().shape({
  email: Yup.string().email("invalid email!").required("Email is required!"),
  password: Yup.string()
    .min(8, "Password should be 8 chars minimum!")
    .max(20, "Maximum length is 20 chars")
    .required("Password required!"),
});

/**
 * functional component for the login page
 * @returns login page jsx tags and components
 */
const Login = () => {
  //for redirecting the page
  const history = useHistory();
  //for toggling password visibility
  const [isPasswordShown, setPasswordVisibility] = useState();

  /**
   * to login and authenticate user based on credentials provided by the user
   * @param {Object for local storage} data
   */
  const userCredentials = (data) => {
    serviceClass
      .loginUser(data)
      .then((data) => {
        if (data.status === 200 && data.data.id) {
          localStorage.setItem("email", data.data.email);
          localStorage.setItem("token", data.data.id);
          localStorage.setItem("userId", data.data.userId);

          if (localStorage.getItem("token")) {
            //to authorize user if credentials are correct
            auth.login(() => {
              alert("Login successful.\n Redirecting to dashboard...");
              history.push("./dashboard");
            });
          }
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((err) => {
        alert("Something bad happened!😥");
      });
  };

  //to set toggle property for show password
  const togglePasswordVisibility = () => {
    setPasswordVisibility(isPasswordShown ? false : true);
  };

  return (
    // <Router>
      <div className="full-body">
        <Formik
          className="formik-form"
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            userCredentials(values);
            resetForm({ values: "" });
          }}
        >
          {({ errors, touched }) => (
            <div className="login-container" data-testid="loginTestContainer">
              <div className="content">
                <header data-testid="header">
                  <div className="fundooNotes" data-testid="title">
                    {<Title />}
                  </div>
                  <h4 data-testid="subTitle">Login here</h4>
                </header>
                <Form className="form-fields" data-testid="form">
                  <div className="block-errorMessage">
                    <label className="LoginField" data-testid="labelForEmail">
                      <Field
                        className="email-login"
                        data-testid="emailField"
                        name="email"
                        type="email"
                        autoComplete="off"
                        required
                      />
                      <span
                        className="placeholder email-ph"
                        data-testid="emailPlaceholder"
                      >
                        Email
                      </span>
                      <div id="errorMessage" type="text">
                        <div className="message-place">
                          {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                          ) : null}
                        </div>
                      </div>
                    </label>
                    <label className="LoginField">
                      <Field
                        className="password-login"
                        data-testid="passwordField"
                        name="password"
                        type={isPasswordShown ? "text" : "password"}
                        autoComplete="off"
                        required
                      />
                      <span
                        className="placeholder password-ph"
                        data-testid="passwordPlaceholder"
                      >
                        Password
                      </span>
                      <div id="errorMessage" type="text">
                        <div className="message-place">
                          {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                          ) : null}
                        </div>
                      </div>
                    </label>

                    <div className="show-pwd" data-testid="showPWD">
                      <label>
                        <Field
                          className="check-box"
                          data-testid="checkBox"
                          type="checkbox"
                          name="checked"
                          onClick={togglePasswordVisibility}
                        />
                      </label>
                      <label
                        className="show"
                        data-testid="labelForShowPWD"
                        onClick={togglePasswordVisibility}
                      >
                        Show password
                      </label>
                    </div>
                  </div>
                  <div className="footer">
                    <button
                      className="login-button"
                      data-testid="loginButton"
                      type="submit"
                    >
                      Login
                    </button>
                    <Link
                      to="/"
                      className="link"
                      data-testid="registerPageLink"
                    >
                      Create account
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    {/* </Router> */}
  );
};

//default exporting of the component
export default Login;
