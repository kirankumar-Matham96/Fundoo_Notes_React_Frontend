import React, {useState} from 'react';
import Title from './title';
import { FaStickyNote, FaBars, FaSearch, FaRegUserCircle} from 'react-icons/fa';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import '../scss/header.scss';
import SideNav from '../components/sideNav';
import Profile from '../components/profile';

const header = () =>
{
  const [showNav, setShowNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  console.log('show profile: ',showProfile);
  return (
    <div>
    <div className='header'>

        <div className="head-part">
          <Row className='col-xs-12'>
            <Col>
              <div className='left'>
              <FaBars className='icon' onClick={() => { setShowNav(!showNav) } }/>
                <FaStickyNote className='icon solid-notes'/>
                <div className='custom-title'><Title className='fundooTitile'/></div>
                <Form.Group className='middle'>
                  <FaSearch className='search-icon icon'/>
                  <FormControl className='text-box placeholder' type='text' placeholder='Search'/>
                </Form.Group>
              <div className='right'>
                <FaRegUserCircle className='profile-icon icon' onClick={() => {setShowProfile(!showProfile)}} />
              </div>
              </div>
            </Col>
          </Row>
      </div>
      {<SideNav show={showNav} />}

      </div>
      { <Profile showProf={showProfile}/> }

      </div>
  )
}

export default header;