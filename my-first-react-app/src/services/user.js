/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to provide connection between frontend and backend apis
 *                for registration and login
 *
 * @description
 *
 * @file        : services/user.js
 * @overview    : handles data transfer between frontend and backend for the registration and login functions
 * @module      : this is necessary to connect with backend apis for registering and login operations of the user
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
import axios from "axios";
require("dotenv").config();

//class component
class Services {
  /**
   * to register a new user
   * @param {Object} data user data from register page
   * @returns response from the backend api
   */
  registerUser = (data) => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}userSignUp`, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * to login the user
   * @param {Object} data user data to login from login page
   * @returns response from backend api
   */
  loginUser = (data) => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}login`, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
}

//exporting class
export default Services;
