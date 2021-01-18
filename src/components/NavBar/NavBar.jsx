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
              <Link to="" onClick={handleLogout}>
                <Dropdown.Item>
                  LogOut
              </Dropdown.Item>
              </Link>
              <Link to="/profile">
                <Dropdown.Item>
                  Profile
              </Dropdown.Item>
              </Link>
              <Link to="">
                <Dropdown.Item>
                  Settings
              </Dropdown.Item>
              </Link>
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
