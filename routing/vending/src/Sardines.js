import React from  'react';
import { Link } from "react-router-dom";
import "./Sardines.css";
function Sardines() {



    return(
        <div className="Sardines">
            <p className="sardines-text">YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!
             <p><Link to="/">GO BACK</Link></p>
            </p>

        </div>
    )
}

export default Sardines;