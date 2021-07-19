/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render the createNote tab that will take input content from user
 *
 * @description
 *
 * @file        : components/createNote.jsx
 * @overview    : provides input field for capturing the data from user and save the content
 * @module      : this is necessary to create a new note
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing the required libraries and components
import "../scss/createNotes.scss";
import React, { useState } from "react";
import { RiPushpin2Line, RiInboxArchiveLine } from "react-icons/ri";
import { BiBellPlus, BiUserPlus, BiImage } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import CRUD from "../services/fundooNotesServices";

/**
 * to create a new note
 * @param {properties of the component} props
 * @returns
 */
const CreateNote = (props) => {
  //object for initial state for the createNote component
  const initialState = {
    title: "",
    description: "",
  };

  //to store the data of the note
  const [note, setNote] = useState(initialState);
  //to store the state of 'take a note' component
  const [initiateNote, setInitiateNote] = useState(false);

  /**
   * to handle the input data when the note is submitted
   * @param {Object} event
   */
  const handleSubmit = (event) => {
    //to prevent reloading of the page
    event.preventDefault();

    //toggling the state of take a note tab
    setInitiateNote(!initiateNote);
    console.log(`event in handler: ${event.target.title}`);
    console.log(`note in create note: ${JSON.stringify(note)}`);

    //modified object to send the data to backend
    const newObj = {
      ...note,
      isPined: false,
      isArchived: false,
    };
    console.log(`object de-structured new data: ${JSON.stringify(newObj)}`);
    // {
    //       title: Hmmm...
    //       description: HHhhhhmmmmm..........
    //       isPined: false
    //       color: #FFFFFF
    //       isArchived: false
    //       labelIdList: []
    //       reminder:
    //       collaberators: []
    //     }

    const axiosResponse = CRUD.createNote(newObj);
    console.log("axios response:", axiosResponse);
    console.log(`getAll: ${CRUD.getAllNotes()}`);
    // (note.title && note.content) ? props.passNote(CRUD.createNote(newObj)) : alert('Please add Title and Content');

    //condition to send the props to display the note
    note.title && note.description
      ? props.passNote(note)
      : // : alert("Please add Title and Content");
        console.log("attempted!");
    // resetForm();
  };

  //to reset form after submission
  const resetForm = () => {
    document.getElementById("form-fields").reset();
  };

  /**
   * to add new notes data to array
   * @param {Object} event
   */
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  return (
    <div>
      {initiateNote ? (
        <div className="createNote">
          <div className="main_note">
            <form
              className="form-part"
              id="form-fields"
              onSubmit={handleSubmit}
            >
              <div className="row1">
                <div className="input-group">
                  <input
                    className="mb-0 mr-1"
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={inputEvent}
                    placeholder="Title"
                  />
                  <RiPushpin2Line className="pin" />
                </div>
                <textarea
                  className="content-area"
                  name="description"
                  value={note.description}
                  onChange={inputEvent}
                  placeholder="Take a note..."
                ></textarea>
                <div className="icon-close-group inline">
                  <div className="mt-1 pt-1 pb-1 notebar_icons">
                    <BiBellPlus className="inner_icons" />
                    <BiUserPlus className="inner_icons" />
                    <IoColorPaletteOutline className="inner_icons" />
                    <BiImage className="inner_icons" />
                    <RiInboxArchiveLine className="inner_icons" />
                  </div>
                  <button className="close" type="submit">
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="initial">
          <div className="main_note">
            <form
              className="initial-form"
              // onSubmit={handleSubmit}
            >
              <div className="row1-1">
                <div className="input-group-1">
                  <input
                    className="mb-0 mr-1"
                    type="text"
                    name="title"
                    value=""
                    onChange={inputEvent}
                    placeholder="Title"
                    onClick={handleSubmit}
                    autoComplete="off"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

//exporting functional component
export default CreateNote;
