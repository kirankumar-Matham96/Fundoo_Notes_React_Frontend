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

// const deletedNoteIdMap = new Map();
const unDeletedNoteIdMap = new Map();
// const archivedNoteIdMap = new Map();

/**
 * Functional component for dashboard
 * @returns jsx tags and components
 */
const DashBoard = () => {
  //to add the notes to the array
  const [addDeletedItem, setDeletedItem] = useState([]);
  const [addUnDeletedItem, setUnDeletedItem] = useState([]);
  const [displayUpdateSheet, setDisplayUpdateSheet] = useState(false);
  const [array, setArray] = useState([]);
  const [infiniteStopper, setInfiniteStopper] = useState(0);
  //to store note ids
  // const noteIdMap = new Map();

  /**
   * to store the note id and set the note list to display
   */
  const addToMap = (data) => {
    //***************************************************
    /**
     * test
     */
    const unDeletedNotesArray = data.data.data.data.filter((obj) => {
      return obj.isDeleted === false ? obj : null;
    });
    console.log(
      `unDeletedNotesArray: ${JSON.stringify(unDeletedNotesArray[0])}`
    );
    console.log(`unDeletedNotesArray: ${unDeletedNotesArray.length}`);
    setUnDeletedItem(unDeletedNotesArray);
    console.log(`addUnDeletedItem: ${addUnDeletedItem.length}`);

    //***************************************************

    for (let noteData of data.data.data.data) {
      // let i = 0;
      let j = 0;

      if (noteData.isDeleted) {
        // setDeletedItem(data.data.data.data);
        // data.data.data.data.forEach((noteData) => {
        //   deletedNoteIdMap.set(i, noteData.id);
        //   i++;
        // });
      } else {
        // setUnDeletedItem(data.data.data.data);
        data.data.data.data.forEach((noteData) => {
          unDeletedNoteIdMap.set(j, noteData.id);
          j++;
        });
      }
    }
  };

  // for (let i of addDeletedItem) {
  //   console.log(i.title);
  //   console.log(i.description);
  //   console.log(i.id);
  // }

  // const addNote = () => {
  //   CRUD.getAllNotes().then((data) => {
  //     addToMap(data);
  //   });
  // };

  //************************************ */
  /**
   * trying demo
   */
  const addNote = async () => {
    const data = await CRUD.getAllNotes();
    await addToMap(data);
  };

  //************************************ */

  // useEffect(() => {
  //   addNote();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [!addUnDeletedItem && !addDeletedItem]);

  useEffect(() => {
    addNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infiniteStopper]);

  //onArchived
  const onArchive = (id) => {
    const mapNoteIdValue = unDeletedNoteIdMap.get(id);
    const noteData = {
      noteIdList: [mapNoteIdValue],
      isArchived: true,
    };
    CRUD.archiveNote(noteData);
    addNote();
    // CRUD.getAllNotes().then((data) => {
    //   addToMap(data);
    // });
  };
  //onPinned
  const onPinned = (id) => {
    const mapNoteIdValue = unDeletedNoteIdMap.get(id);
    const noteData = {
      noteIdList: [mapNoteIdValue],
      isPined: true,
    };
    CRUD.pinTheNote(noteData);
    addNote();
    // CRUD.getAllNotes().then((data) => {
    //   addToMap(data);
    // });
  };

  //to delete the notes from the array of notes
  const onDelete = (id) => {
    const mapNoteIdValue = unDeletedNoteIdMap.get(id);
    console.log(`mapNoteIdValue: ${typeof mapNoteIdValue}`);
    const noteData = {
      noteIdList: [mapNoteIdValue],
      isDeleted: true,
    };
    CRUD.deleteNote(noteData);
    addNote();
    // CRUD.getAllNotes().then((data) => {
    //   addToMap(data);
    // });
  };

  const onUpdate = (id) => {
    const noteId = unDeletedNoteIdMap.get(id + 3);
    console.log(`noteId from dash: ${noteId}`);
    const otherData = addUnDeletedItem[id];
    setArray([
      {
        noteId: noteId,
        title: otherData.title,
        description: otherData.description,
      },
    ]);
    setDisplayUpdateSheet(true);
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
                    // id={index}
                    title={val.title}
                    description={val.description}
                    // Id={val.id}
                    noteId={val.noteId}
                    dispUpdateSheet={(boolean) => {
                      setDisplayUpdateSheet(boolean);
                    }}
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
          {/* <p className="headings">pinned notes</p> */}
          <div className="note_container mb-5">
            {addDeletedItem
              ? ""
              : // addPinnedItem.map((val, index) => {
                //     return (
                //       <Note
                //         key={index}
                //         id={index}
                //         title={val.title}
                //         description={val.description}
                //         noteId={val.id}
                //         deleteItem={onDelete}
                //         pinItem={onPinned}
                //         archiveItem={onArchive}
                //         dispUpdateSheet={onUpdate}
                //       />
                //     );
                //   })
                null}
          </div>
          {/* <p className="headings">Others</p> */}
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
