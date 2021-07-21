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

/**
 * Functional component for dashboard
 * @returns jsx tags and components
 */
const DashBoard = () => {
  //to add the notes to the array
  const [addItem, setAddItem] = useState([]);
  //to store note ids
  const noteIdMap = new Map();

  const addToMap = (data) => {
    setAddItem(data.data.data.data);
    let i = 0;
    data.data.data.data.forEach((noteData) => {
      noteIdMap.set(i, noteData.id);
      i++;
    });
  };
  /**
   * to store the note id
   */
  // const setNoteIdToMap = (id, noteId) => {
  // };

  const addNote = (note) => {
    CRUD.getAllNotes().then((data) => {
      addToMap(data);
    });

    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };

  //to delete the notes from the array of notes
  const onDelete = async (id) => {
    const mapValue = await noteIdMap.get(id);
    const noteData = {
      noteIdList: [mapValue],
      isDeleted: true,
    };
    await CRUD.deleteNote(noteData);
    await CRUD.getAllNotes().then((data) => {
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
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

//exporting dashboard component
export default DashBoard;
