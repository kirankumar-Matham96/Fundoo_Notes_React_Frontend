/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to render the title of the project
 *
 * @description
 *
 * @file        : components/title.jsx
 * @overview    : renders the FundooNotes title
 * @module      : this is necessary to render the title
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
// import React from "react";
import "../scss/title.scss";

/**
 * functional component for the title component
 * @returns title for the application
 */
const Title = () => {
  return (
    <div className="title">
      <div className="fundoo">
        <h3 id="f">F</h3>
        <h3 id="u">u</h3>
        <h3 id="n1">n</h3>
        <h3 id="d">d</h3>
        <h3 id="o1">o</h3>
        <h3 id="o2">o</h3>
        <h3 id="n2">N</h3>
        <h3 id="o3">o</h3>
        <h3 id="t">t</h3>
        <h3 id="e">e</h3>
        <h3 id="s">s</h3>
      </div>
    </div>
  );
};

//exporting title
export default Title;
