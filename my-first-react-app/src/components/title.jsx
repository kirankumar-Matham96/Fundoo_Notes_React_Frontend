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
import React from "react";
import "../scss/title.scss";

/**
 * functional component for the title component
 * @returns title for the application
 */
const Title = () => {
  return (
    <div className="title">
      <div className="fundoo">
        <h1 id="f">F</h1>
        <h1 id="u">u</h1>
        <h1 id="n1">n</h1>
        <h1 id="d">d</h1>
        <h1 id="o1">o</h1>
        <h1 id="o2">o</h1>
        <h1 id="n2">N</h1>
        <h1 id="o3">o</h1>
        <h1 id="t">t</h1>
        <h1 id="e">e</h1>
        <h1 id="s">s</h1>
      </div>
    </div>
  );
};

//exporting title
export default Title;
