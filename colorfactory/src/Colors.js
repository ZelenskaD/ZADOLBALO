import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

function Colors({ colors }) {
  return (
    <div className="add">
      <h1>Welcome to the Color Factory.</h1>
      <Link to="/colors/new">Add a Color</Link>
      <div className="colors">
        <h3>Please select a color.</h3>
        {colors.map((color, idx) => (
          <p key={idx}>
            <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link> {/* Use the name in the URL */}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Colors;



