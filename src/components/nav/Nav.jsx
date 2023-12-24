import React from "react";
import { NavLink } from "react-router-dom";
import validatetoken from "../../helpers/validate-token";

const Nav = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <nav>
        <h1>PROJECT</h1>
        <ul className="nav__list">
          <li className="s"></li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          {token || validatetoken(token) ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--active" : "nav__link"
                }
                to="/Dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
