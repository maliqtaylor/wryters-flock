import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <Menu>
          <Menu.Item>Wryters Flock</Menu.Item>

          <Dropdown item text="My Info">
            <Dropdown.Menu>
              <Link to="/dashboard">
                <Dropdown.Item>
                  Dashboard
              </Dropdown.Item>
              </Link>
              <Link to="">
                <Dropdown.Item>
                  Settings
              </Dropdown.Item>
              </Link>
              <Link to="" onClick={handleLogout}>
                <Dropdown.Item>
                  LogOut
              </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Link to="/entries">View Posts</Link>
          </Menu.Item>
        </Menu>
      ) : (
          <Menu>
            <Menu.Item>
              <Link to="/login" className="nav-link">
                Log In
            </Link>{" "}
            </Menu.Item>
            <Link to="/signup" className="nav-link">
              <Menu.Item>
                Sign Up
            </Menu.Item>
            </Link>{" "}
          </Menu>
        )}
    </>
  );
};

export default NavBar;
