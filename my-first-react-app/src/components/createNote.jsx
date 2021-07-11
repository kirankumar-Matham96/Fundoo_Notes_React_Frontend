import "../scss/createNotes.scss";
import {RiPushpin2Line, RiInboxArchiveLine} from 'react-icons/ri';
import {BiBellPlus, BiUserPlus, BiImage} from 'react-icons/bi';
import {IoColorPaletteOutline} from 'react-icons/io5';
const createNote = () =>
{
  return (<div className='createNote'>
    <div className='main_note'>
      <div className='row1'>
        <input type='text' placeholder='Title' />
        <textarea placeholder='Take a note...'></textarea>
        <div className='note_icons'>
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