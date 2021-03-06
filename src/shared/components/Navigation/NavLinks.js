import React, { useContext } from "react";

import { AuthContext } from "../../context/auth-context";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

export const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/u1/places'>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/places/new'>ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/auth'>AUTHENTICATED</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
