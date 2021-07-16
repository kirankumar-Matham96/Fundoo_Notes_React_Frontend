/* eslint-disable prettier/prettier */
import "../scss/createNotes.scss";
import React, { useState } from "react";
// import { useForm } from 'react-hook-form';
import { RiPushpin2Line, RiInboxArchiveLine } from "react-icons/ri";
import { BiBellPlus, BiUserPlus, BiImage } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import CRUD from "../services/fundooNotesServices";

const CreateNote = (props) => {
  const initialState = {
    title: "",
    content: "",
  };

  const [note, setNote] = useState(initialState);
  const [initiateNote, setInitiateNote] = useState(true);

  // const { handleSubmit } = useForm();

  // const close = (event) =>
  const handleSubmit = (event) => {
    event.preventDefault();
    setInitiateNote(!initiateNote);
    console.log(`event in handler: ${event.target.title}`);
    console.log(`note in create note: ${JSON.stringify(note)}`);
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

    console.log("axios response:", CRUD.createNote(newObj));
    // CRUD.getAllNotes();
    // (note.title && note.content) ? props.passNote(CRUD.createNote(newObj)) : alert('Please add Title and Content');
    note.title && note.content
      ? props.passNote(note)
      : alert("Please add Title and Content");
    resetForm();
  };

  const resetForm = () => {
    document.getElementById("form-fields").reset();
  };

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
    <div className="createNote">
      <div className="main_note">
        {initiateNote ? (
          <form className="form-part" id="form-fields" onSubmit={handleSubmit}>
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
                <button className="close" type="submit">
                  Close
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form className="form-part" id="form-fields" onSubmit={handleSubmit}>
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

              {/* <textarea className='mb-0 mt-1 mr-1' name='content' value={note.content} onChange={ inputEvent } placeholder='Take a note...'></textarea> */}
              <textarea
                className="content-area"
                name="content"
                value={note.content}
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
                {/* <button className='close' type='submit' onClick={ close }>Close</button> */}
                <button className="close" type="submit">
                  Close
                </button>
              </div>
            </div>

            {/* <div className='row2'>
          <RiPushpin2Line className='pin'/>
          <button className='close' type='submit' onClick={ close }>Close</button>
        </div> */}
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateNote;
