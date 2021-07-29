/*********************************************************************
 * Execution    : cmd> npm start
 *                cmd> npm test
 *                cmd> npm test -- --coverage
 *
 * Purpose      : to test the register and login page components
 *
 * @description
 *
 * @file        : test/user.test.js
 * @overview    : tests the different components whether they are rendered successfully or not
 * @module      : this is necessary to perform tests on the components for increasing performance of the code
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : _ _ _
 * @since       : 22-06-2021
 *********************************************************************/

//importing required libraries and components
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Title from "../components/title";
import Register from "../pages/register";
import Login from "../pages/login";

describe("shallow rendering test for number of elements and successful rendering", () => {
  test("givenTitleForShallow_whenContainsOnlyOneReturningTag_shouldPassTheTest", () => {
    expect(shallow(<Title />).length).toEqual(1);
  });

  test("givenRegisterForShallow_whenRendersSuccessfully_shouldPassTheTest", () => {
    expect(shallow(<Register />).length).toEqual(1);
  });

  test("givenLoginForShallow_whenRendersSuccessfully_shouldPassTheTest", () => {
    expect(shallow(<Login />).length).toEqual(1);
  });
});

describe("Snapshot Testing for Register and Login pages", () => {
  test("givenRegisterPageShallowWrapper_whenMatchWithSnapshotThatExists_shouldPassTheTest", () => {
    let wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
  });

  test("givenLoginPageShallowWrapper_whenMatchWithSnapshotThatExists_shouldPassTheTest", () => {
    let wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Data Binding Tests for Register Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  test("givenDataForTheFieldFirstName_whenCaptured_shouldPassTheTest", () => {
    let firstName = wrapper.find(".firstName").first();

    firstName.simulate("change", {
      target: {
        name: "firstName",
        value: "Hey",
      },
    });

    firstName = wrapper.find(".firstName").first();
    expect(firstName.props().value).toEqual("Hey");
    expect(firstName.props().value).not.toEqual("Hey1");
  });

  test("givenDataForTheFieldLastName_whenCaptured_shouldPassTheTest", () => {
    let lastName = wrapper.find(".lastName").first();

    lastName.simulate("change", {
      target: {
        name: "lastName",
        value: "SaiKiran",
      },
    });

    lastName = wrapper.find(".lastName").first();
    expect(lastName.props().value).toEqual("SaiKiran");
    expect(lastName.props().value).not.toEqual("Hey1");
  });

  test("givenDataForTheEmailField_whenCaptured_shouldPassTheTest", () => {
    let email = wrapper.find(".email").first();

    email.simulate("change", {
      target: {
        name: "email",
        value: "Hey",
      },
    });

    email = wrapper.find(".email").first();
    expect(email.props().value).toEqual("Hey");
    expect(email.props().value).not.toEqual("Hey1");
  });

  test("givenDataForThePasswordField_whenCaptured_shouldPassTheTest", () => {
    let password = wrapper.find(".password1").first();

    password.simulate("change", {
      target: {
        name: "password",
        value: "Hey11111111",
      },
    });

    password = wrapper.find(".password1").first();
    expect(password.props().value).toEqual("Hey11111111");
    expect(password.props().value).not.toEqual("Hey1111111");
  });
});

describe("Login page components test for render", () => {
  test("renderLoginPage_whenContainsWholePage_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const containerTag = getByTestId("loginTestContainer");
    expect(containerTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsHeader_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const headerTag = getByTestId("header");
    expect(headerTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsTitle_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const titleTag = getByTestId("title");
    expect(titleTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsSubTitle_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const subTitleTag = getByTestId("subTitle");
    expect(subTitleTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsForm_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const formTag = getByTestId("form");
    expect(formTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsLabelForEmail_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const emailLabelTag = getByTestId("labelForEmail");
    expect(emailLabelTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsEmailInputField_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const emailFieldTag = getByTestId("emailField");
    expect(emailFieldTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsPlaceholderForEmail_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const placeholderTag = getByTestId("emailPlaceholder");
    expect(placeholderTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsInputFieldForPassword_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const inputFieldTag = getByTestId("passwordField");
    expect(inputFieldTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsPlaceholderForPassword_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const placeholderTag = getByTestId("passwordPlaceholder");
    expect(placeholderTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsShowPasswordDiv_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const showPWDTag = getByTestId("showPWD");
    expect(showPWDTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsCheckBox_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const checkboxElement = getByTestId("checkBox");
    expect(checkboxElement).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsLabelForCheckBox_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const showLabelElement = getByTestId("labelForShowPWD");
    expect(showLabelElement).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsLoginButton_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const loginButtonTag = getByTestId("loginButton");
    expect(loginButtonTag).toBeInTheDocument();
  });

  test("renderLoginPage_whenContainsLinkToRegisterPage_shouldPassTheTest", () => {
    const { getByTestId } = render(<Login />);
    const registerLinkTag = getByTestId("registerPageLink");
    expect(registerLinkTag).toBeInTheDocument();
  });
});
