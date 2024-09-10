import React from 'react';
import { Link } from 'react-router-dom';
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="vending-machine">
      <div className="text-box">
        <p>HELLO. I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</p>
      </div>
      <div className="vending-list text-box">
        <ul>
          <li>
            <Link to="/soda">SODA</Link>
          </li>
          <li>
            <Link to="/chips">CHIPS</Link>
          </li>
          <li>
            <Link to="/sardines">FRESH SARDINES</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VendingMachine;

