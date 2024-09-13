import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ColorPage.css";

function ColorPage({ colors }) {
  const { color } = useParams();
  const navigate = useNavigate();

  // Find the color object based on the color name from the URL
  const foundColor = colors.find((c) => c.name.toLowerCase() === color.toLowerCase());

  // Validate color and redirect if invalid
  useEffect(() => {
    if (!foundColor) {
      navigate("/colors", { replace: true });
    }
  }, [foundColor, navigate]);

  // Only render if the color is found
  if (!foundColor) {
    return null; // Prevent rendering during the redirection process
  }

  const style = {
    backgroundColor: foundColor.value, // Use the value of the found color
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
  };

  return (
    <div className="color-page" style={style}>
      <p>THIS IS {foundColor.name}</p>
      <p>ISN'T IT BEAUTIFUL?</p>
      <Link to="/colors">GO BACK</Link>
    </div>
  );
}

export default ColorPage;

