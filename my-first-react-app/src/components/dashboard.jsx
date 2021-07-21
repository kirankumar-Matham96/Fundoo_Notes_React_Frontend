/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render the dashboard for FundooNotes app
 *
 * @description
 *
 * @file        : components/dashboard.jsx
 * @overview    : provides all the components for the CRUD operations and renders header and notes
 * @module      : this is necessary to provide GUI for the user to perform CRUD
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing all necessary libraries and components
import React, { useState } from "react";
import Header from "../components/header";
import "../scss/dashBoard.scss";
import TakeANote from "./createNote";
import CRUD from "../services/fundooNotesServices";
import Note from "./note";

const noteIdMap = new Map();

/**
 * Functional component for dashboard
 * @returns jsx tags and components
 */
const DashBoard = () => {
  //to add the notes to the array
  const [addItem, setAddItem] = useState([]);
  //to store note ids
  // const noteIdMap = new Map();

  /**
   * to store the note id and set the note list to display
   */
  const addToMap = (data) => {
    setAddItem(data.data.data.data);
    let i = 0;
    data.data.data.data.forEach((noteData) => {
      noteIdMap.set(i, noteData.id);
      i++;
    });
    console.log("from addToMap function: ", noteIdMap.get(2)); //able to store
  };

  const addNote = (note) => {
    CRUD.getAllNotes().then((data) => {
      addToMap(data);
    });
  };

  //onPinned
  const onPinned = () => {};
  //to delete the notes from the array of notes
  const onDelete = (id) => {
    console.log(`id from note: ${id}`);
    console.log(noteIdMap.get(2));
    const mapNoteIdValue = noteIdMap.get(id);
    console.log(`mapNoteIdValue: ${mapNoteIdValue}`);
    const noteData = {
      noteIdList: [mapNoteIdValue],
      isDeleted: true,
    };
    CRUD.deleteNote(noteData);
    CRUD.getAllNotes().then((data) => {
      addToMap(data);
    });
  };

  return (
    <div className="dashBoard" data-testid="dashboardContainer">
      <div data-testid="header">
        <Header />
      </div>
      <div data-testid="takeANote">
        <TakeANote passNote={addNote} />
      </div>
      <div className="for_scrollbar">
        <div className="note_container">
          {addItem
            ? addItem.map((val, index) => {
                return (
                  <Note
                    key={index}
                    id={index}
                    title={val.title}
                    description={val.description}
                    noteId={val.id}
                    deleteItem={onDelete}
                    pinItem={onPinned}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

//exporting dashboard component
export default DashBoard;
