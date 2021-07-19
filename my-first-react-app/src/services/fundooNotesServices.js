/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to provide connection between frontend and backend apis
 *
 * @description
 *
 * @file        : services/fundooNotesServices.js
 * @overview    : transfers the data between frontend and backend
 * @module      : this is necessary to connect with backend apis for CRUD operations
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
import axios from "axios";
require("dotenv").config();

// //getting token from local storage of the browser
// let token = localStorage.getItem("token");

// //configuring data inside header
// let headers = {
//   "Content-Type": "application/json",
//   Authorization: token,
// };

//class component
let token;
let id;
let headers;
class FundooNotesServices {
  constructor() {
    //getting token from local storage of the browser
    token = localStorage.getItem("token");

    //getting id from local storage of the browser
    id = localStorage.getItem("id");

    //configuring data inside header
    headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
  }
  /**
   * sends a request to the backend for creating a new note
   * @param {Object} data notes data from createNote function
   * @returns response from the backend api
   */
  createNote = (data) => {
    return axios
      .post(`${process.env.REACT_APP_BASE_CRUD_URL}addNotes`, data, {
        headers: headers,
      })
      .then((res) => res)
      .catch((err) => err);
  };

  /**
   * sends a request to the backend for fetching all the notes
   * @returns response from the backend api
   */
  getAllNotes = () => {
    console.log(`latest token: ${token}`);
    return axios
      .get(
        `${process.env.REACT_APP_BASE_CRUD_URL}getNotesList?access_token=${token}`
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * sends a request to the backend for updating a particular note
   * @param {Object} data updated data from the dashboard
   * @returns response from backend api
   */
  updateNote = (data) => {
    console.log(`latest token: ${token}`);
    //http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes
    /**
     * Updated request Data:
     *  {
     *    noteId: "60edaf48833be700222a9dba",
     *    title: "Hmmm...",
     *    description: "HHhhhhmmmmm..........mmmhhhHH"
     *  }
     */

    return axios
      .post(`${process.env.REACT_APP_BASE_CRUD_URL}updateNotes`, data, {
        headers: headers,
      })
      .then((res) => {
        console.log(`update res from axios: ${res}`);
        return res;
      })
      .catch((err) => {
        console.log(`update err from axios: ${err}`);
        return err;
      });
  };

  /**
   * sends a request to backend api to delete a particular note from the database
   * @returns response from the backend api
   */
  deleteNote = (data) => {
    console.log(`latest token: ${token}`);
    //http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes
    return (
      axios
        // .post(`${process.env.REACT_APP_BASE_CRUD_URL}trashNotes`, {
        //   headers: { ...headers, isDeleted: true, noteIdList: [id] },
        //   // isDeleted: true,
        //   // noteIdList: [id],
        // })
        .post(`${process.env.REACT_APP_BASE_CRUD_URL}trashNotes`, data, {
          headers: headers, //{ isDeleted: true, noteIdList: [id] },
        })
        .then((res) => {
          console.log(`delete res from axios: ${res}`);
          return res;
        })
        .catch((err) => {
          console.log(`delete err from axios: ${err}`);
          return err;
        })
    );
  };
}

//exporting class
export default new FundooNotesServices();
