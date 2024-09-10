import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';

import Home from "./Home"
import Eat from "./Eat"
import Drink from "./Drink"
import NavBar from "./NavBar"

function App() {

  return (
 <div className="App">
     <BrowserRouter>
         <NavBar/>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/drink" element={<Drink />} />
                        <Route path="/eat" element={<Eat />} />
                </Routes>

     </BrowserRouter>

 </div>
  )
}

export default App;
