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
let headers;
class FundooNotesServices {
  constructor() {
    //getting token from local storage of the browser
    token = localStorage.getItem("token");

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
  // getAllNotes = () => {
  //   return axios
  //     .get(
  //       `${process.env.REACT_APP_BASE_CRUD_URL}getNotesList?access_token=${token}`
  //     )
  //     .then((res) => {
  //       res.data.data.data.forEach((obj) => {
  //         if (!obj.isDeleted) console.log("get from axios: ", obj);
  //       });
  //       return res;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // };

  // getAllNotes = async () => {
  //   return await axios.get(
  //     `${process.env.REACT_APP_BASE_CRUD_URL}getNotesList?access_token=${token}`
  //   );
  // };

  getAllNotes = async () => {
    return await axios.get(
      `${process.env.REACT_APP_BASE_CRUD_URL}getNotesList`,
      {
        headers: headers,
      }
    );
  };

  /**
   * sends a request to the backend for updating a particular note
   * @param {Object} data updated data from the dashboard
   * @returns response from backend api
   */
  updateNote = (data) => {
    // console.log("data in update axios: ", data);
    return axios
      .post(`${process.env.REACT_APP_BASE_CRUD_URL}updateNotes`, data, {
        headers: headers,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   * sends a request to backend api to delete a particular note from the database
   * @returns response from the backend api
   */
  // deleteNote = (data) => {
  //   return axios
  //     .post(`${process.env.REACT_APP_BASE_CRUD_URL}trashNotes`, data, {
  //       headers: headers,
  //     })
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // };

  deleteNote = async (data) => {
    return await axios.post(
      `${process.env.REACT_APP_BASE_CRUD_URL}trashNotes`,
      data,
      {
        headers: headers,
      }
    );
  };

  /**
   * pinned notes
   * @param {*} data
   * @returns
   */
  pinTheNote = (data) => {
    return axios
      .post(`${process.env.REACT_APP_BASE_CRUD_URL}pinUnpinNotes`, data, {
        headers: headers,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  /**
   *
   * @param {*} data
   * @returns
   */
  archiveNote = (data) => {
    return axios
      .post(`${process.env.REACT_APP_BASE_CRUD_URL}archiveNotes`, data, {
        headers: headers,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
}

//exporting class
export default new FundooNotesServices();
