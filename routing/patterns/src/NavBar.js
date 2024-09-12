import React from "react";
import {Link} from 'react-router-dom';



export const NavBar  = () => {
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

