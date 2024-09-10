import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "./NavBar.css"; // Ensure you import your CSS

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/" activeClassName="active-link">
        Vending Machine
      </NavLink>
      <NavLink to="/soda" activeClassName="active-link">
        Soda
      </NavLink>
      <NavLink to="/chips" activeClassName="active-link">
        Chips
      </NavLink>
      <NavLink to="/sardines" activeClassName="active-link">
        Sardines
      </NavLink>
    </nav>
  );
}

export default NavBar;
