import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/dogs">All Dogs</Link>
      <Link to="/dogs/whiskey">Whiskey</Link>
      <Link to="/dogs/duke">Duke</Link>
      <Link to="/dogs/perry">Perry</Link>
      <Link to="/dogs/tubby">Tubby</Link>
    </nav>
  );
}

export default NavBar;
