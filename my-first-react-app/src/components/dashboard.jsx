import React from 'react';
import Header from '../components/header';
import '../scss/dashBoard.scss';
import TakeANote from './createNote';
import Note from './note';

const DashBoard = () =>
{
    return (
      <div className='dashBoard'>
        <Header />
        <TakeANote />
        <Note />
      </div>
    )
  }

export default DashBoard;
