import "../scss/createNotes.scss";
import React, { useState } from 'react';
import {RiPushpin2Line, RiInboxArchiveLine} from 'react-icons/ri';
import {BiBellPlus, BiUserPlus, BiImage} from 'react-icons/bi';
import { IoColorPaletteOutline } from 'react-icons/io5';

const createNote = () =>
{
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  // const addCard = (event) => {
  //   event.key === 'Enter' ?
  // }

  const inputEvent = (event) =>
  {
    const { name, value } = event.target;

    setNote((oldData) =>
    {
      return {
        ...oldData,
        [name]: value,
      }
    })
    console.log(`note: ${JSON.stringify(note)}`);
  }

  return (<div className='createNote'>
    <div className='main_note'>
      <div className='row1'>
        <input type='text' name='title' value={note.title} onChange={ inputEvent } placeholder='Title' />
        <textarea  name='content' value={note.content} onChange={ inputEvent } placeholder='Take a note...'></textarea>
        <div className='notebar_icons'>
          <BiBellPlus className='inner_icons'/>
          <BiUserPlus className='inner_icons'/>
          <IoColorPaletteOutline className='inner_icons'/>
          <BiImage className='inner_icons'/>
          <RiInboxArchiveLine className='inner_icons'/>
        </div>
      </div>
      <div className='row2'>
        <RiPushpin2Line className='pin'/>
        <button className='cancel'>Close</button>
      </div>
    </div>
  </div>)
}

export default createNote;