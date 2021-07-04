import React from 'react';
// import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
// import { Dropdown } from 'react-bootstrap-dropdown-menu';
import { Dropdown } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';

// class SettingsMenu extends React.Component {
//   constructor() {
//     super();
//     this.deleteAccount = this.deleteAccount.bind(this);
//     this.logout = this.logout.bind(this);
//   }

//   deleteAccount(e) {
//     console.log("Deleting Account")
//   }

//   logout(e) {
//     console.log("Logging out")
//   }

//   render() {
//     return (
//       <DropdownMenu userName="Chris Smith">
//         <MenuItem text="Home" location="/home" />
//         <MenuItem text="Edit Profile" location="/profile" />
//         <MenuItem text="Change Password" location="/change-password" />
//         <MenuItem text="Privacy Settings" location="/privacy-settings" />
//         <MenuItem text="Delete Account" onClick={this.deleteAccount} />
//         <MenuItem text="Logout" onClick={this.logout} />
//       </DropdownMenu>
//     );
//   }
// }

// export default SettingsMenu;

const DropDown = () =>
{
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e =>
      {
        e.preventDefault();
        onClick(e);
      }}
    >
      {/* Render custom icon here */}
      <FaCog></FaCog>
      {children}
    </a>
  ));

  return(
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item text="Home" location="../pages/register" >Red</Dropdown.Item>
        {/* <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown;