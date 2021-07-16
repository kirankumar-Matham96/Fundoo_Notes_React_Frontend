import axios from "axios";
require("dotenv").config();

let token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: token,
};
class FundooNotesServices {
  createNote = (data) => {
    return axios
      .post(`${process.env.REACT_APP_BASE_CRUD_URL}addNotes`, data, {
        headers: headers,
      })
      .then((res) => res)
      .catch((err) => err);
  };

  getAllNotes = () => {
    //http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList
    return axios
      .post(`${process.env.REACT_APP_BASE_CRUD_URL}getNotesList`, {
        headers: headers,
      })
      .then((res) => {
        console.log(`res from axios: ${res}`);
        return res;
      })
      .catch((err) => {
        console.log(`err from axios: ${err}`);
        return err;
      });
  };

  updateNote = (data) => {
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

  deleteNote = () => {
    //http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}trashNotes`, { headers: headers })
      .then((res) => {
        console.log(`delete res from axios: ${res}`);
        return res;
      })
      .catch((err) => {
        console.log(`delete err from axios: ${err}`);
        return err;
      });
  };
}

export default new FundooNotesServices();
