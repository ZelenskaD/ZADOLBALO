import { Navigate, Route, Routes } from "react-router-dom";
import AllDogs from "./AllDogs";
import DogDetails from "./DogDetails";

function RoutesList() {
  return (
    <Routes>
      <Route path="/dogs" element={<AllDogs />} />
      <Route path="/dogs/:name" element={<DogDetails />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;
