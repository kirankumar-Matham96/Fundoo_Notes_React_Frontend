import React from 'react';
// import { } from 'react-bootstrap';
import {FaRegStickyNote, FaRegBell, FaPencilAlt, FaRegFileArchive, FaRegTrashAlt} from 'react-icons/fa';

const sidenav = () =>
{
  return (
    <div className='body'>
      <div className="side-nav">
        <div className="notes">
          <FaRegStickyNote className='icon' />
        </div>
        <div className="remainders">
          <FaRegBell className='icon' />
        </div>
        <div className="edit-notes">
          <FaPencilAlt className='icon' />
        </div>
        <div className="archive">
          <FaRegFileArchive className='icon' />
        </div>
        <div className="trash">
          <FaRegTrashAlt className='icon' />
        </div>
      </div>
    </div>
  );
}

export default sidenav;

