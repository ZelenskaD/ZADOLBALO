import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';

import Soda from "./Soda"
import Chips from "./Chips"
import Sardines from "./Sardines"
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
 <BrowserRouter>
     <NavBar/>
                <Routes>
                         <Route path="/" element={<VendingMachine />} />
                        <Route path="/soda" element={<Soda />} />
                        <Route path="/chips" element={<Chips />} />
                        <Route path="/sardines" element={<Sardines />} />
                </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
