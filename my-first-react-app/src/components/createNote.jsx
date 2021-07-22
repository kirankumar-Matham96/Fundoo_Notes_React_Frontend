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
  //to set title
  const [title, setTitle] = useState("");
  //to set content
  const [content, setContent] = useState("");
  //to store the data of the note
  // const [note, setNote] = useState(initialState);
  const [note, setNote] = useState({});
  //to store the state of 'take a note' component
  const [initiateNote, setInitiateNote] = useState(false);

  const toggleBoolean = () => {
    setInitiateNote(!initiateNote);
  };

  /**
   * Pass the note
   * @param {*} event
   */
  const passingNote = () => {
    //condition to send the props to display the note
    if (note.title && note.description) {
      props.passNote(note);

      const axiosResponse = CRUD.createNote(note);
      axiosResponse.then((res) => {
        res.data && res.data.status.success
          ? alert(`note added successfully!`)
          : alert(`something bad happened!`);
      });
      resetForm();
    } else {
      alert("Please add Title and Content");
    }
  };

  /**
   * to handle the input data when the note is submitted
   * @param {Object} event
   */
  const handleSubmit = (event) => {
    //to prevent reloading of the page
    event.preventDefault();

    setNote({
      title: title,
      description: content,
      isPined: false,
      isArchived: false,
      isDeleted: false,
    });

    passingNote();
  };

  //to reset form after submission
  const resetForm = () => {
    // await document.getElementById("form-fields").reset();
    setTitle("");
    setContent("");
    setNote([]);
    //toggling the state of take a note tab
    toggleBoolean();
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
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    placeholder="Title"
                    autoComplete="off"
                  />
                  <RiPushpin2Line className="pin" />
                </div>
                <textarea
                  className="content-area"
                  name="description"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
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
            <form className="initial-form" onSubmit={toggleBoolean}>
              <div className="row1-1">
                <div className="input-group-1">
                  <input
                    className="mb-0 mr-1"
                    type="text"
                    name="title1"
                    placeholder="Title"
                    onClick={toggleBoolean}
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
