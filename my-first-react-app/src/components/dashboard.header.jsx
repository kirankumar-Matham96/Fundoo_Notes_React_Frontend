import React from 'react';
import Title from './title';
import { FaStickyNote, FaBars, FaRedo, FaCog, FaEquals, FaSearch } from 'react-icons/fa';
import { Row, Col, Form, FormControl, Container } from 'react-bootstrap';
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
                <FaStickyNote className='icon notes'/>
                <h4 className='custom-title'><Title /></h4>
                <Form.Group className='middle'>
                  <FaSearch className='search-icon icon'/>
                  <FormControl className='text-box placeholder' type='text' placeholder='Search'/>
                </Form.Group>
                <div className='right'>
                <FaRedo className='icon'/>
                <FaEquals className='icon'/>
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
