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
        console.log(`Error: ${err}`);
        alert("Something bad happened!😥");
      });
  };

  //to set toggle property for show password
  const togglePasswordVisibility = () => {
    setPasswordVisibility(isPasswordShown ? false : true);
  };

  return (
    <div>
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
              <header>
                <div className="fundooNotes">{<Title />}</div>
                <h1>Login here</h1>
              </header>
              <Form className="form-fields">
                <div className="block-errorMessage">
                  <label className="LoginField">
                    <Field
                      className="email-login"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                    />
                    <span className="placeholder email-ph">Email</span>
                    <ErrorMessage name="email" />
                  </label>
                  <label className="LoginField">
                    <Field
                      className="password-login"
                      name="password"
                      type={isPasswordShown ? "text" : "password"}
                      autoComplete="off"
                      required
                    />
                    <span className="placeholder password-ph">Password</span>
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                  </label>
                </div>
                <div className="show-pwd">
                  <label>
                    <Field
                      className="check-box"
                      type="checkbox"
                      name="checked"
                      onClick={togglePasswordVisibility}
                    />
                  </label>
                  <label className="show" onClick={togglePasswordVisibility}>
                    Show password
                  </label>
                </div>
                <button className="login-button" type="submit">
                  Login
                </button>
                <Link to="/">
                  <a>Create account</a>
                </Link>
                <Link to="/dashboard">
                  <a>Dash Board</a>
                </Link>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

//default exporting of the component
export default Login;
