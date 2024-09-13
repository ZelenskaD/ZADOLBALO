import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useNavigate } from "react-router-dom";
import "./styles/NewColor.css";

function NewColor({ addColor }) {
  const [colorName, setColorName] = useState("");
  const [colorValue, setColorValue] = useState("red");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name: colorName, value: colorValue });
    navigate("/colors");
  };

  return (
    <div className="new-color-page">
      <div className="new-color-form-container">
        <h2>Add a New Color</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="colorName">Color name</label>
            <input
              type="text"
              id="colorName"
              value={colorName}
              onChange={(e) => setColorName(e.target.value)}
              placeholder="Enter a name for the color"
              required
            />
          </div>
          <div className="form-group">
            <label>Color value</label>
            <SketchPicker
              color={colorValue}
              onChangeComplete={(color) => setColorValue(color.hex)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Add this color
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewColor;

