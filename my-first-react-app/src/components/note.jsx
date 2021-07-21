/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render the note inside dashboard
 *
 * @description
 *
 * @file        : components/note.jsx
 * @overview    : provides the note components to the dashboard
 * @module      : this is necessary to render notes in the dashboard
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing the required libraries and components
import React, { useState } from "react";
import "../scss/note.scss";
import { Card } from "react-bootstrap";
import { RiInboxArchiveLine, RiPushpin2Line } from "react-icons/ri";
import { BiBellPlus, BiUserPlus, BiImage } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";
import { IoColorPaletteOutline } from "react-icons/io5";
import CRUD from "../services/fundooNotesServices";

/**
 * functional component for the note
 * @param {Object} props properties from createNote component
 * @returns
 */
const Note = (props) => {
  // const [pinned, setPinned] = useState(false);

  /**
   * is pinned?
   */
  const pinNote = () => {
    // setPinned(!pinned);
    // const pinnedNoteData = {
    //   isPined: pinned,
    //   noteIdList: [localStorage.getItem("noteId")],
    // };
    //to delete the note from database(invoking delete api at the backend)
    // CRUD.pinTheNote(pinnedNoteData);
    //sending id of the note to the dashboard to remove it from notes array
    // console.log("pinned in note: ", pinned);
    // props.pinItem(props.id);
    props.pinItem(props.id);
  };
  // /**
  //  * to update note
  //  */
  // const updateTheNote = () => {
  //   //to update the description in the note
  //   CRUD.updateNote();
  //   //sending id of the note to the dashboard to update the content init
  // };

  /**
   * to delete particular note from dashboard and backend storage
   */
  const deleteNote = () => {
    // const deleteData = {
    //   isDeleted: true,
    //   // noteIdList: [localStorage.getItem("noteId")],
    //   noteIdList: [],
    // };
    //to delete the note from database(invoking delete api at the backend)
    // CRUD.deleteNote(deleteData);
    //sending id of the note to the dashboard to remove it from notes array
    props.deleteItem(props.id);
  };

  return (
    <Card style={{ width: "13rem" }} className="note">
      <Card.Body data-testid="body">
        <div className="note_head">
          <div className="Group">
            <Card.Title data-testid="title">{props.title}</Card.Title>
            <RiPushpin2Line className="pin" onClick={pinNote} />
          </div>
          <Card.Text data-testid="content">{props.description}</Card.Text>
          <Card.Text>{props.id}</Card.Text>
        </div>
        <div className="note_icons" data-testid="icons">
          <BiBellPlus className="inner_note_icons" />
          <BiUserPlus className="inner_note_icons" />
          <BiImage className="inner_note_icons" />
          <IoColorPaletteOutline className="inner_note_icons" />
          <RiInboxArchiveLine className="inner_note_icons" />
          <CgTrash className="inner_note_icons" onClick={deleteNote} />
        </div>
      </Card.Body>
    </Card>
  );
};

//exporting note
export default Note;
