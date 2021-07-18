/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render the header
 *
 * @description
 *
 * @file        : components/header.jsx
 * @overview    : provides the header components to the dashboard
 * @module      : this is necessary to provide GUI for the user to logout
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import auth from "../services/auth";
import Title from "./title";
import {
  FaStickyNote,
  FaBars,
  FaSearch,
  FaRegUserCircle,
} from "react-icons/fa";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import "../scss/header.scss";
import SideNav from "../components/sideNav";

/**
 * functional component for the header in dashboard
 * @returns header components
 */
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const history = useHistory();

  /**
   * To deny the permission after the user logged out
   */
  const denyPermission = () => {
    auth.logout(() => {
      localStorage.clear();
      history.push("/login");
    });
  };

  return (
    <div>
      <div className="header">
        <div className="head-part">
          <Row className="col-xs-12">
            <Col>
              <div className="left">
                <FaBars
                  className="icon"
                  onClick={() => {
                    setShowNav(!showNav);
                  }}
                />
                <FaStickyNote className="icon solid-notes" />
                <div className="custom-title">
                  <Title className="fundooTitile" />
                </div>
                <Form.Group className="middle">
                  <FaSearch className="search-icon icon" />
                  <FormControl
                    className="text-box placeholder"
                    type="text"
                    placeholder="Search"
                  />
                </Form.Group>
                <div className="right">
                  <p className="text-muted mt-3">
                    {localStorage.getItem("email")}
                  </p>
                  <FaRegUserCircle
                    className="profile-icon icon"
                    onClick={denyPermission}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {<SideNav show={showNav} />}
      </div>
    </div>
  );
};

//to export header
export default Header;
