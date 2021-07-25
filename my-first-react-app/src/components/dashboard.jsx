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
import React, { useState, useEffect } from "react";
import Header from "./header";
import "../scss/dashBoard.scss";
import TakeANote from "./createNote";
import CRUD from "../services/fundooNotesServices";
import Note from "./note";
import UpdateSheet from "./updateSheet";

const unDeletedNoteIdMap = new Map();

/**
 * Functional component for dashboard
 * @returns jsx tags and components
 */
const DashBoard = () => {
  //to add the notes to the array
  const [addUnDeletedItem, setUnDeletedItem] = useState([]);
  const [displayUpdateSheet, setDisplayUpdateSheet] = useState(false);
  const [array, setArray] = useState([]);
  const [infiniteStopper, setInfiniteStopper] = useState(0);

  /**
   * to store the note id and set the note list to display
   */
  const addToMap = (data) => {
    const unDeletedNotesArray = data.data.data.data.filter((obj) => {
      return obj.isDeleted === false ? obj : null;
    });
    setUnDeletedItem(unDeletedNotesArray);

    for (let noteData of data.data.data.data) {
      let j = 0;
      if (noteData.isDeleted) {
      } else {
        data.data.data.data.forEach((noteData) => {
          unDeletedNoteIdMap.set(j, noteData.id);
          j++;
        });
      }
    }
  };

  const createNewNote = (note) => {
    const axiosResponse = CRUD.createNote(note);
    axiosResponse.then((res) => {
      res.data && res.data.status.success
        ? alert(`note added successfully!`)
        : alert(`something bad happened!`);
    });
    addNote();
  };

  const addNote = async () => {
    const data = await CRUD.getAllNotes();
    await addToMap(data);
  };

  useEffect(() => {
    addNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInfiniteStopper]);

  //to delete the notes from the array of notes
  const onDelete = (id) => {
    // const mapNoteIdValue = unDeletedNoteIdMap.get(id);
    const otherData = addUnDeletedItem[id];
    const noteData = {
      noteIdList: [otherData.id],
      isDeleted: true,
    };
    CRUD.deleteNote(noteData);
    // setInfiniteStopper();
    addNote();
  };

  const onUpdate = (id) => {
    const otherData = addUnDeletedItem[id];
    setArray([
      {
        noteId: otherData.id,
        title: otherData.title,
        description: otherData.description,
      },
    ]);
    setDisplayUpdateSheet(true);
    // setInfiniteStopper(0);
    addNote();
  };

  return (
    <div className="dashBoard" data-testid="dashboardContainer">
      {displayUpdateSheet ? (
        <div>
          {array.length
            ? array.map((val, index) => {
                return (
                  <UpdateSheet
                    key={index}
                    title={val.title}
                    description={val.description}
                    noteId={val.noteId}
                    dispUpdateSheet={(boolean) => {
                      setDisplayUpdateSheet(boolean);
                    }}
                    function1={addNote}
                  />
                );
              })
            : null}
        </div>
      ) : (
        ""
      )}
      <div data-testid="header">
        <Header />
      </div>
      <div className="main-board">
        <div data-testid="takeANote">
          <TakeANote passNote={createNewNote} />
        </div>
        <div className="for_scrollbar">
          <div className="note_container">
            {addUnDeletedItem
              ? addUnDeletedItem.map((val, index) => {
                  return (
                    <Note
                      key={index}
                      id={index}
                      title={val.title}
                      description={val.description}
                      noteId={val.id}
                      deleteItem={onDelete}
                      dispUpdateSheet={onUpdate}
                      function2={addNote}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

//exporting dashboard component
export default DashBoard;
