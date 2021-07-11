import "../scss/createNotes.scss";
import { Button } from 'react-bootstrap';
import {RiPushpin2Line} from 'react-icons/ri';
import {FaRegPlusSquare} from 'react-icons/fa';
const createNote = () =>
{
  return (<div className='createNote'>
    <div className='main_note'>
      <div className='row1'>
        <input type='text' placeholder='Title' />
        <textarea placeholder='Take a note...'></textarea>
      </div>
      <div className='row2'>
        <RiPushpin2Line className='pin'/>
        <Button className='cancel'>cancel</Button>
      </div>
    </div>
  </div>)
}

export default createNote;