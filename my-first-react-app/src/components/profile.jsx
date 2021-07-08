import React from 'react';
import '../scss/profile.scss'
import { useHistory } from 'react-router-dom';
import auth from '../services/auth';


const profile = ({showProf}) =>
{
  const history = useHistory();
  const denyPermission = () =>
  {
    auth.logout(() =>
    {
      localStorage.clear();
      history.push('/login');
    });
  }

  return (
    <div className={showProf ? 'profile active' : 'profile'}>
      <div className='info'>
        <div className='text-muted from-storage'>{ localStorage.getItem('email') }</div>
      </div >
        <button className='btn btn-danger' onClick={denyPermission}>Logout</button>
    </div>
    )
  }

export default profile;