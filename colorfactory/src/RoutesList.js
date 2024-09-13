import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NewColor from "./NewColor";
import Colors from "./Colors";
import ColorPage from "./ColorPage";

function RoutesList() {
  const [colors, setColors] = useState([
    { name: "red", value: "red" },
    { name: "green", value: "green" },
    { name: "blue", value: "blue" },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Routes>
      <Route path="/colors" element={<Colors colors={colors} />} />
      <Route path="/colors/new" element={<NewColor addColor={addColor} />} />
      <Route path="/colors/:color" element={<ColorPage colors={colors} />} />
      <Route path="*" element={<Navigate to="/colors" />} />
    </Routes>
  );
}

export default RoutesList;


