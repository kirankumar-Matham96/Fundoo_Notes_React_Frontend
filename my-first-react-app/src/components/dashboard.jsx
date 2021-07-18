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
import Note from "./note";

/**
 * Functional component for dashboard
 * @returns jsx tags and components
 */
const DashBoard = () => {
  //to add the notes to the array
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };

  //to delete the notes from the array of notes
  const onDelete = (id) => {
    const remaining = addItem.filter(
      (current, indexOfNote) => indexOfNote !== id
    );
    setAddItem(remaining);
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
                  content={val.content}
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
