/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render the side navigation in dashboard
 *
 * @description
 *
 * @file        : components/sideNav.jsx
 * @overview    : renders the side navigation and provides some functionality
 * @module      : this is necessary to render side navigation bar
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
import React from "react";
import { FaRegBell, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdLightbulbOutline } from "react-icons/md";
import "../scss/side-nav.scss";

/**
 * functional component for the side navigation
 * @param {Object} show prop from the header
 * @returns side nav jsx component
 */
const sideNav = ({ show }) => {
  return (
    <div className="body">
      <div className={show ? "side-nav active" : "side-nav"}>
        <ul>
          <li>
            <div className="inline-content1 active">
              {/* <FaRegStickyNote className='icon side-icon' /> */}
              <MdLightbulbOutline className="icon side-icon" />
              <a className="linkTag">Notes</a>
            </div>
          </li>
          <li>
            <div className="inline-content2">
              <FaRegBell className="icon side-icon" />
              <a className="linkTag">Remainders</a>
            </div>
          </li>
          <li>
            <div className="inline-content2">
              <FaPencilAlt className="icon side-icon" />
              <a className="linkTag">Edit</a>
            </div>
          </li>
          <li>
            <div className="inline-content2">
              <RiInboxArchiveLine className="icon side-icon" />
              <a className="linkTag">Archive</a>
            </div>
          </li>
          <li>
            <div className="inline-content2">
              <FaRegTrashAlt className="icon side-icon" />
              <a className="linkTag">Trash</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

//exporting sideNav
export default sideNav;
