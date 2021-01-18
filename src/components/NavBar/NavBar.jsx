import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <Menu>
          <Menu.Item>Welcome, {user.name}</Menu.Item>

          <Dropdown item text="My Info">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="" onClick={handleLogout}>
                  LogOut
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/profile">
                  Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="">
                  Settings
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Link to="/entries">View Posts</Link>
          </Menu.Item>
          {/* <li><Link to="/draft" className="nav-link">Draft your Masterpiece</Link></li> */}
          {/* <li className="nav-search-bar">
                <input type="text"/>
                <button type="button" to="/entries">Search</button>
              </li> */}
        </Menu>
      ) : (
        <Menu>
          <Menu.Item>
            <Link to="/login" className="nav-link">
              Log In
            </Link>{" "}
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>{" "}
          </Menu.Item>
        </Menu>
      )}
    </>
  );
};

export default NavBar;
