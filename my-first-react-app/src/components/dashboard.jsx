import React from 'react';
import Header from '../components/header';
import '../scss/dashBoard.scss';
import TakeANote from './createNote';

const DashBoard = () =>
{
    return (
      <div className='dashBoard'>
        <Header />
        <TakeANote />
      </div>
    )
  }

export default DashBoard;
