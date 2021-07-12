import React, { useState } from 'react';
import Header from '../components/header';
import '../scss/dashBoard.scss';
import TakeANote from './createNote';
import Note from './note';

const DashBoard = () =>
{
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) =>
  {
    setAddItem((oldData) =>
    {
      return [...oldData, note]
    });
  }

  const onDelete = (id) =>
  {
    const remaining = addItem.filter((current, indexOfNote) => indexOfNote !== id);
    setAddItem(remaining);
  }

  return (
      <div className='dashBoard'>
        <Header />
      <TakeANote passNote={addNote} />
      <div className='note_container'>
        {addItem ? addItem.map((val, index) =>
        {
          return <Note className='mr-3' key={index} id={index} title={val.title} content={val.content} deleteItem={ onDelete }/>
        }) : null}
      </div>
      </div>
    )
  }

export default DashBoard;
