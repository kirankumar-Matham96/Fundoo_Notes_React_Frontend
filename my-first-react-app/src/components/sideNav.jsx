import React from 'react';
import {FaRegStickyNote, FaRegBell, FaPencilAlt, FaRegFileArchive, FaRegTrashAlt} from 'react-icons/fa';
import '../scss/side-nav.scss';

const sideNav = ({show}) =>
{
  return (
    <div className='body'>

      <div className={show ? "side-nav active" : "side-nav"}>

        <ul>
          <li>
            <div className='inline-content1 active'>
              <FaRegStickyNote className='icon side-icon' />
              <a className='linkTag'>Notes</a>
            </div>
          </li>
          <li>
            <div className='inline-content2'>
              <FaRegBell className='icon side-icon' />
              <a className='linkTag'>Remainders</a>
            </div>
          </li>
          <li>
            <div className='inline-content2'>
              <FaPencilAlt className='icon side-icon' />
              <a className='linkTag'>Edit</a>
            </div>
          </li>
          <li>
            <div className='inline-content2'>
              <FaRegFileArchive className='icon side-icon' />
              <a className='linkTag'>Archive</a>
            </div>
          </li>
          <li>
            <div className='inline-content2'>
              <FaRegTrashAlt className='icon side-icon' />
              <a className='linkTag'>Trash</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default sideNav;

