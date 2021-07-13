import axios from 'axios';
require('dotenv').config();

let token = localStorage.getItem('token');

class FundooNotesServices
{
  createNote = (data) =>
  {
    //http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes
    /**
     * Object sent:
     * {
          title: Hmmm...
          description: HHhhhhmmmmm..........
          isPined: false
          color: #FFFFFF
          isArchived: false
          labelIdList: []
          reminder: default
          collaberators: []
        }
     */
    console.log(`token: ${ token }`)//FIXME: How to send the token to backend ? (from where?)

    // const newData = {
    //   ...data,
    //   token: token
    // }
    // console.log(`newData: ${ JSON.stringify(newData) }`)

    // return axios.post(`${ process.env.REACT_APP_BASE_CRUD_URL }addNotes`,newData)
    return axios.post(`${ process.env.REACT_APP_BASE_CRUD_URL }addNotes`,data)
      .then(res => res).catch(err => err);
  }

  getAllNotes = () =>
  {
    //http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList
    /**
     * Response data:
     * {
     *  "data":
     *        {
     *          "success":true,
     *          "message":"",
     *          "data":[
     *            {
     *              "title":"Hmmm...",
     *              "description":"HHhhhhmmmmm..........",
     *              "isPined":false,
     *              "isArchived":false,
     *              "isDeleted":false,
     *              "reminder":[],
     *              "createdDate":"2021-07-13T15:20:40.221Z",
     *              "modifiedDate":"2021-07-13T15:20:40.221Z",
     *              "color":"#FFFFFF",
     *              "label":[],
     *              "imageUrl":"",
     *              "linkUrl":"",
     *              "collaborators":[],
     *              "id":"60edaf48833be700222a9dba",
     *              "userId":"60edabd9833be700222a9db9",
     *              "collaberator":[],
     *              "labelIdList":[],
     *              "noteCheckLists":[],
     *              "noteLabels":[],
     *              "questionAndAnswerNotes":[],
     *              "user":{
     *                  "firstName":"hey",
     *                  "lastName":"hey",
     *                  "role":"user",
     *                  "service":"basic",
     *                  "createdDate":"2021-07-13T15:06:01.402Z",
     *                  "modifiedDate":"2021-07-13T15:06:01.402Z",
     *                  "username":"heyemail@gmail.com",
     *                  "email":"heyemail@gmail.com",
     *                  "emailVerified":true,
     *                  "id":"60edabd9833be700222a9db9"
     *               }
     *            }
     *         ]
     *      }
     * }
     */
    return axios.post(`${ process.env.REACT_APP_BASE_CRUD_URL }getNotesList`)
      .then(res => res).catch(err => err);
  }

  updateNote = (data) =>
  {
    //http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes
    /**
     * Updated request Data:
     *  {
     *    noteId: "60edaf48833be700222a9dba",
     *    title: "Hmmm...",
     *    description: "HHhhhhmmmmm..........mmmhhhHH"
     *  }
     */

    return axios.post(`${ process.env.REACT_APP_BASE_CRUD_URL }updateNotes`,data)
      .then(res => res).catch(err => err);
  }

  /**
   * Delete api is not implemented or connected in reference APP..!
   */
  // deleteNote = (data) =>
  // {
  //   return axios.post(`${ process.env.REACT_APP_BASE_URL }`,data)
  //     .then(res => res).catch(err => err);
  // }
}

export default new FundooNotesServices();