/*********************************************************************
 * Execution    : cmd> npm start
 *
 * Purpose      : to test the dashboard components
 *
 * @description
 *
 * @file        : test/dashboard.test.js
 * @overview    : tests the different components whether they are rendered successfully or not
 * @module      : this is necessary to perform tests on the components for increasing performance of the code
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing all required libraries and components
import { shallow } from "enzyme";
import DashBoard from "../pages/dashboard";
import Header from "../components/dashboard.header";
import DropDown from "../components/dashboard.header.dropdownMenue";
import SideNav from "../components/dashboard.sideNav";

describe("Dashboard Testing", () => {
  test("Dashboard snapshot testing", () => {
    expect(shallow(<DashBoard />).length).toEqual(1);
  });

  test("Dashboard Header Test", () => {
    expect(shallow(<Header />).length).toEqual(1);
  });

  test("Dashboard Header Drop Down Menu Test", () => {
    expect(shallow(<DropDown />).length).toEqual(1);
  });

  test("Dashboard Side Nav Test", () => {
    expect(shallow(<SideNav />).length).toEqual(1);
  });
});
