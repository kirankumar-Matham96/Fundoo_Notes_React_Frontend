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
