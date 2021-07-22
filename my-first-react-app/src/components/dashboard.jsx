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
import Header from "../components/header";
import "../scss/dashBoard.scss";
import TakeANote from "./createNote";
import CRUD from "../services/fundooNotesServices";
import Note from "./note";
import UpdateSheet from "./updateSheet";
// import SideNav from "../components/sideNav";

const pinnedNoteIdMap = new Map();
const unPinnedNoteIdMap = new Map();
// const archivedNoteIdMap = new Map();

/**
 * Functional component for dashboard
 * @returns jsx tags and components
 */
const DashBoard = () => {
  //to add the notes to the array
  const [addPinnedItem, setPinnedItem] = useState([]);
  const [addUnpinnedItem, setUnpinnedItem] = useState([]);
  const [displayUpdateSheet, setDisplayUpdateSheet] = useState(false);
  //to store note ids
  // const noteIdMap = new Map();

  /**
   * to store the note id and set the note list to display
   */
  const addToMap = (data) => {
    for (let noteData of data.data.data.data) {
      let i = 0;
      let j = 0;
      if (noteData.isPined) {
        setUnpinnedItem(data.data.data.data);
        data.data.data.data.forEach((noteData) => {
          pinnedNoteIdMap.set(i, noteData.id);
          i++;
        });
      } else {
        setPinnedItem(data.data.data.data);
        data.data.data.data.forEach((noteData) => {
          unPinnedNoteIdMap.set(j, noteData.id);
          j++;
        });
      }
    }
  };

  // for (let i of addPinnedItem) {
  //   console.log(i.title);
  //   console.log(i.description);
  //   console.log(i.id);
  // }

  const addNote = () => {
    CRUD.getAllNotes().then((data) => {
      addToMap(data);
    });
  };

  useEffect(() => {
    addNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!addUnpinnedItem && !addPinnedItem]);

  //onArchived
  const onArchive = (id) => {
    const mapNoteIdValue = unPinnedNoteIdMap.get(id);
    const noteData = {
      noteIdList: [mapNoteIdValue],
      isArchived: true,
    };
    CRUD.archiveNote(noteData);
    CRUD.getAllNotes().then((data) => {
      addToMap(data);
    });
  };
  //onPinned
  const onPinned = (id) => {
    const mapNoteIdValue = unPinnedNoteIdMap.get(id);
    const noteData = {
      noteIdList: [mapNoteIdValue],
      isPined: true,
    };
    CRUD.pinTheNote(noteData);
    CRUD.getAllNotes().then((data) => {
      addToMap(data);
    });
  };

  //to delete the notes from the array of notes
  const onDelete = (id) => {
    const mapNoteIdValue = unPinnedNoteIdMap.get(id);
    const noteData = {
      noteIdList: [mapNoteIdValue],
      isDeleted: true,
    };
    CRUD.deleteNote(noteData);
    CRUD.getAllNotes().then((data) => {
      addToMap(data);
    });
  };

  //********************
  /**
   * For testing:
   */
  const array = [
    // { title: "Title from array", description: "Description from array" },
  ];
  //********************

  const onUpdate = async (id) => {
    const noteId = await unPinnedNoteIdMap.get(id);
    const otherData = await addPinnedItem[id];
    await array.splice(0, array.length);
    await array.push({
      noteId: noteId,
      title: otherData.title,
      description: otherData.description,
    });
    await setDisplayUpdateSheet(true);
  };

  return (
    <div className="dashBoard" data-testid="dashboardContainer">
      {displayUpdateSheet ? (
        <div>
          {array
            ? array.map((val, index) => {
                return (
                  <UpdateSheet
                    key={index}
                    id={index}
                    title={val.title}
                    description={val.description}
                    noteId={val.id}
                    // dispUpdateSheet={(boolean) => {
                    //   setDisplayUpdateSheet(boolean);
                    // }}
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
      {/* <div>
        <SideNav />
      </div> */}
      <div className="main-board">
        <div data-testid="takeANote">
          <TakeANote passNote={addNote} />
        </div>
        <div className="for_scrollbar">
          <p className="headings">pinned notes</p>
          <div className="note_container mb-5">
            {addPinnedItem
              ? addPinnedItem.map((val, index) => {
                  return (
                    <Note
                      key={index}
                      id={index}
                      title={val.title}
                      description={val.description}
                      noteId={val.id}
                      deleteItem={onDelete}
                      pinItem={onPinned}
                      archiveItem={onArchive}
                      dispUpdateSheet={onUpdate}
                    />
                  );
                })
              : null}
          </div>
          <p className="headings">Others</p>
          <div className="note_container">
            {addUnpinnedItem
              ? addUnpinnedItem.map((val, index) => {
                  return (
                    <Note
                      key={index}
                      id={index}
                      title={val.title}
                      description={val.description}
                      noteId={val.id}
                      deleteItem={onDelete}
                      pinItem={onPinned}
                      archiveItem={onArchive}
                      dispUpdateSheet={onUpdate}
                      // dispUpdateSheet={(boolean) => {
                      //   setDisplayUpdateSheet(boolean);
                      // }}
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
