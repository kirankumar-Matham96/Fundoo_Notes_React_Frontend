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
import { render } from "@testing-library/react";
import DashBoard from "../components/dashboard";
import auth from "../services/auth";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Note from "../components/note";

describe("Dashboard Testing", () => {
  test("Dashboard snapshot testing", () => {
    expect(shallow(<DashBoard />).length).toEqual(1);
  });

  test("Dashboard Header Test", () => {
    expect(shallow(<Header />).length).toEqual(1);
  });

  test("Dashboard Side Nav Test", () => {
    expect(shallow(<SideNav />).length).toEqual(1);
  });

  test("Dashboard Note Test", () => {
    expect(shallow(<Note />).length).toEqual(1);
  });
});

describe("Snapshot Testing for Dashboard and It's Components", () => {
  test("givenDashboardComponentShallowWrapper_whenMatchWithSnapshotThatExists_shouldPassTheTest", () => {
    const wrapper = shallow(<DashBoard />);
    expect(wrapper).toMatchSnapshot();
  });

  test("givenHeaderComponentShallowWrapper_whenMatchWithSnapshotThatExists_shouldPassTheTest", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  test("givenSidenavComponentShallowWrapper_whenMatchWithSnapshotThatExists_shouldPassTheTest", () => {
    const wrapper = shallow(<SideNav />);
    expect(wrapper).toMatchSnapshot();
  });

  test("givenNoteComponentShallowWrapper_whenMatchWithSnapshotThatExists_shouldPassTheTest", () => {
    const wrapper = shallow(<Note />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Dashboard components tests for render", () => {
  beforeEach(() => {
    auth.login(() => {
      console.log("logged in");
    });
  });

  afterEach(() => {
    auth.logout(() => {
      console.log("logged out");
    });
  });

  test("renderDashboard_whenContainsBodyOfDashboard_shouldPassTheTest", () => {
    const { getByTestId } = render(<DashBoard />);
    const element = getByTestId("dashboardContainer");
    expect(element).toBeInTheDocument();
  });
  test("renderDashboard_whenContainsHeader_shouldPassTheTest", () => {
    const { getByTestId } = render(<DashBoard />);
    const element = getByTestId("header");
    expect(element).toBeInTheDocument();
  });
  test("renderDashboard_whenContainsNoteCreator_shouldPassTheTest", () => {
    const { getByTestId } = render(<DashBoard />);
    const element = getByTestId("takeANote");
    expect(element).toBeInTheDocument();
  });
});

describe("Header components render tests", () => {
  test("renderHeader_whenContainsMenuIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId("menuIcon");
    expect(element).toBeInTheDocument();
  });

  test("renderHeader_whenContainsMainNoteIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId("mainNoteIcon");
    expect(element).toBeInTheDocument();
  });

  test("renderHeader_whenContainsFundooNotesTitle_shouldPassTheTest", () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId("title");
    expect(element).toBeInTheDocument();
  });

  test("renderHeader_whenContainsSearchBox_shouldPassTheTest", () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId("searchBox");
    expect(element).toBeInTheDocument();
  });

  test("renderHeader_whenContainsUserEmail_shouldPassTheTest", () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId("email");
    expect(element).toBeInTheDocument();
  });

  test("renderHeader_whenContainsProfileIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<Header />);
    const element = getByTestId("userProfileIcon");
    expect(element).toBeInTheDocument();
  });
});

describe("SideNav components render tests", () => {
  test("renderSidenav_whenContainsBody_shouldPassTheTest", () => {
    const { getByTestId } = render(<SideNav />);
    const element = getByTestId("body");
    expect(element).toBeInTheDocument();
  });

  test("renderSidenav_whenContainsBulbIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<SideNav />);
    const element = getByTestId("bulbIcon");
    expect(element).toBeInTheDocument();
  });

  test("renderSidenav_whenContainsBellIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<SideNav />);
    const element = getByTestId("bellIcon");
    expect(element).toBeInTheDocument();
  });

  test("renderSidenav_whenContainsPencilIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<SideNav />);
    const element = getByTestId("pencilIcon");
    expect(element).toBeInTheDocument();
  });

  test("renderSidenav_whenContainsArchiveIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<SideNav />);
    const element = getByTestId("archiveIcon");
    expect(element).toBeInTheDocument();
  });

  test("renderSidenav_whenContainsTrashcanIcon_shouldPassTheTest", () => {
    const { getByTestId } = render(<SideNav />);
    const element = getByTestId("trashCanIcon");
    expect(element).toBeInTheDocument();
  });
});

describe("Note components render tests", () => {
  test("renderNote_whenContainsBody_shouldPassTheTest", () => {
    const { getByTestId } = render(<Note />);
    const element = getByTestId("body");
    expect(element).toBeInTheDocument();
  });

  test("renderNote_whenContainsTitleOfTheNote_shouldPassTheTest", () => {
    const { getByTestId } = render(<Note />);
    const element = getByTestId("title");
    expect(element).toBeInTheDocument();
  });

  test("renderNote_whenContainsContent_shouldPassTheTest", () => {
    const { getByTestId } = render(<Note />);
    const element = getByTestId("content");
    expect(element).toBeInTheDocument();
  });
});
