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
// import React from "react";
import "../scss/note.scss";
import { Card } from "react-bootstrap";
import { RiInboxArchiveLine, RiPushpin2Line } from "react-icons/ri";
import { BiBellPlus, BiUserPlus, BiImage } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";
import { IoColorPaletteOutline } from "react-icons/io5";

/**
 * functional component for the note
 * @param {Object} props properties from createNote component
 * @returns
 */
const Note = (props) => {
  /**
   * is pinned?
   */
  const pinNote = () => {
    props.pinItem(props.id);
  };

  // const displayUpdateSheet = () => {
  //   props.dispUpdateSheet(props.id);
  // };
  /**
   * to update note
   */
  const updateTheNote = () => {
    // displayUpdateSheet();
    // dispUpdateSheet;
    props.dispUpdateSheet(props.id);
    //to update the description in the note
    //sending id of the note to the dashboard to update the content init
  };

  /**
   * to delete particular note from dashboard and backend storage
   */
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  const archivedNote = () => {
    props.archiveItem(props.id);
  };

  return (
    <Card style={{ width: "13rem" }} className="note">
      <Card.Body
        className="noteBody"
        data-testid="body"
        onDoubleClick={() => updateTheNote()}
      >
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
          <RiInboxArchiveLine
            className="inner_note_icons"
            onClick={archivedNote}
          />
          <CgTrash className="inner_note_icons" onClick={deleteNote} />
        </div>
      </Card.Body>
    </Card>
  );
};

//exporting note
export default Note;
