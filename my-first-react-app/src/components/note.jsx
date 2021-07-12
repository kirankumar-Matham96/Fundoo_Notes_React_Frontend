import React from 'react'
import '../scss/note.scss';
import { Card } from 'react-bootstrap';
import { RiInboxArchiveLine} from 'react-icons/ri';
import {BiBellPlus, BiUserPlus, BiImage} from 'react-icons/bi';
import { CgTrash } from 'react-icons/cg';

const note = (props) =>
{
  const deleteNote = () =>
  {
    props.deleteItem(props.id);
  }

  return (

    <Card style={{ width: '13rem' }} className='note'>
  <Card.Body>
        <Card.Title>{ props.title }</Card.Title>
        <Card.Text>
          { props.content}
        </Card.Text>
        <div className='note_icons'>
          <BiBellPlus className='inner_note_icons'/>
          <BiUserPlus className='inner_note_icons'/>
          <BiImage className='inner_note_icons'/>
          <RiInboxArchiveLine className='inner_note_icons' />
          <CgTrash className='inner_note_icons' onClick={deleteNote}/>
        </div>
  </Card.Body>
</Card>
  )
}

export default note;
