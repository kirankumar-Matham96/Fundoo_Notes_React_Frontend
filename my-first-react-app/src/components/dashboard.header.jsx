import React from 'react';
import Title from './title';
import { FaStickyNote, FaBars, FaRedo, FaCog, FaEquals, FaSearch, FaRegStickyNote, FaRegBell, FaPencilAlt, FaRegFileArchive, FaRegTrashAlt } from 'react-icons/fa';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import '../scss/dashboard.header.scss'

const header = () =>
{
  return (
    <div className='header'>

        <div className="head-part">
          <Row className='col-xs-12'>
            <Col>
              <div className='left'>
                <FaBars className='icon'/>
                <FaStickyNote className='icon solid-notes'/>
                <div className='custom-title'><Title className='fundooTitile'/></div>
                <Form.Group className='middle'>
                  <FaSearch className='search-icon icon'/>
                  <FormControl className='text-box placeholder' type='text' placeholder='Search'/>
                </Form.Group>
                <div className='right'>
                <button className='login-button'>Logout</button>
                <FaCog className='icon'/>
              </div>
              </div>
            </Col>
          </Row>
      </div>

    </div>
  )
}

export default header;
