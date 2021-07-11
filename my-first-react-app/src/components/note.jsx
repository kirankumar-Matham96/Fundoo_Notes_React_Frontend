import React from 'react'
import '../scss/note.scss';
import { Card } from 'react-bootstrap';
import { RiInboxArchiveLine} from 'react-icons/ri';
import {BiBellPlus, BiUserPlus, BiImage} from 'react-icons/bi';
import { IoColorPaletteOutline } from 'react-icons/io5';

const note = () => {
  return (
    // <div className='note card'>
    //   <h1>title</h1>
    //   <br />
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, non!</p>
    //   <div className='note_icons'>
    //       <BiBellPlus className='inner_note_icons'/>
    //       <BiUserPlus className='inner_note_icons'/>
    //       <IoColorPaletteOutline className='inner_note_icons'/>
    //       <BiImage className='inner_note_icons'/>
    //       <RiInboxArchiveLine className='inner_note_icons'/>
    //   </div>
    // </div>

    <Card style={{ width: '15rem' }} className='note'>
  <Card.Body>
    <Card.Title>Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default note;
