import React from 'react';
import Title from './title';
import { FaStickyNote, FaBars } from 'react-icons/fa';
import { Row, Col, Form, FormControl } from 'react-bootstrap';

const header = () =>
{
  return (
    <div>

      <Form>
        <header className='header'>
          <Row>
            <Col>
              <h1><FaBars /> </h1>
            </Col>
            <Col>
              <h1><FaStickyNote /> </h1>
            </Col>
            <Col>
              <Title />
            </Col>
            <Col>
              <FormControl type='text'  placeholder="Search" />
            </Col>
            <Col>
              some control buttons
            </Col>
          </Row>
        </header>
      </Form>

    </div>
  )
}

export default header;
