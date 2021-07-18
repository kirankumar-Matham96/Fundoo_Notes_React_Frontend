/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to provide authorization when the user successfully logged in
 *
 * @description
 *
 * @file        : services/auth.js
 * @overview    : gives the permission to render dashboard
 * @module      : this is necessary to render the dashboard and its components on successful login
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//statefull or class component of the auth guard
class Auth {
  constructor() {
    this.authenticated = false;
    // this.authenticated = true; //to work freely with dashboard.
  }

  /**
   * to set the login authorization to true
   * @param {function} callback from login page
   */
  login = (callback) => {
    this.authenticated = true;
    callback();
  };

  /**
   * to set the login authorization to false on logout
   * @param {function} callback from dashboard logout function
   */
  logout = (callback) => {
    this.authenticated = false;
    callback();
  };

  /**
   * to return the status of the authorization of the user
   * @returns boolean authorization status
   */
  isAuthenticated() {
    return this.authenticated;
  }
}

//exporting class
export default new Auth();
