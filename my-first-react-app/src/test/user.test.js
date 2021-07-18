import { shallow } from "enzyme";
// import { render } from "@testing-library/react";
import Title from "../components/title";
import Register from "../pages/register";
import Login from "../pages/login";

/**
 * Shallow testing: testing title, Register and Login
 */
describe("Shallow testing", () => {
  test("expect to render Title component", () => {
    expect(shallow(<Title />).length).toEqual(1);
  });

  test("expect to render Register component", () => {
    expect(shallow(<Register />).length).toEqual(1);
  });

  test("expect to render Login component", () => {
    expect(shallow(<Login />).length).toEqual(1);
  });
});

/**
 * Snapshot testing
 */
describe("Register Snapshot Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  test("expect to render Register component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("expect to take the first name from form", () => {
    let firstName = wrapper.find(".firstName").first();

    firstName.simulate("change", {
      target: {
        name: "firstName",
        value: "Hey",
      },
    });

    firstName = wrapper.find(".firstName").first();
    expect(firstName.props().value).toEqual("Hey");
  });

  test("expect to take the last name from form", () => {
    let lastName = wrapper.find(".lastName").first();

    lastName.simulate("change", {
      target: {
        name: "lastName",
        value: "Hey",
      },
    });

    lastName = wrapper.find(".lastName").first();
    expect(lastName.props().value).toEqual("Hey");
  });

  test("expect to take the email from form", () => {
    let email = wrapper.find(".email").first();

    email.simulate("change", {
      target: {
        name: "email",
        value: "Hey",
      },
    });

    email = wrapper.find(".email").first();
    expect(email.props().value).toEqual("Hey");
  });

  test("expect to take the password from form", () => {
    let password = wrapper.find(".password").first();

    password.simulate("change", {
      target: {
        name: "password",
        value: "Hey11111111",
      },
    });

    password = wrapper.find(".password").first();
    expect(password.props().value).toEqual("Hey11111111");
  });
});

describe("Login Snapshot Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test("expect to render Login component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Email input field gets the email", () => {
    expect(wrapper.length).toEqual(1);
  });

  // test("Password input field gets the password", () => {
  //   const subTitle = (
  //     <div>
  //       <h1>Login here</h1>
  //     </div>
  //   );
  //   expect(wrapper.contains(subTitle)).toEqual(true);
  // });
});

//   test("render test with test", () => {
//     let wrapper = render(<Login />);
//     const subTitle = (
//       <div>
//         <h1>Login here</h1>
//       </div>
//     );
//     // expect(wrapper.contains({}).toequal(true));
//     expect(loginTestContainer).toBeInTheDocument();
//     // expect(form).toBeInTheDocument();
//     // expect(button).toBeInTheDocument();
//     // expect(email).toBeInTheDocument();
//     // expect(password).toBeInTheDocument();
//   });

//TODO: follow this pattern
//describe("render test", () => {
//   test("check elements available", () => {
//     const { getByTestId } = render(<Login />);
//     const logo = getByTestId("loginTestContainer");
//     expect(logo).toBeInTheDocument();
//   });
// });
