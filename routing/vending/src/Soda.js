import React ,{ useState, useEffect } from  'react';
import { Link } from "react-router-dom";
import "./Soda.css"
function Soda() {

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 6) % 360); // 6 degrees per second to simulate a clock
    }, 30);

    return () => clearInterval(interval);
  }, []);

    return(
        <div className="soda-container">

            <img
                src="https://img1.picmix.com/output/stamp/normal/7/6/2/8/1538267_e3fd9.png"
                alt="Rotating Clock Hand"
                className="rotating-image"
                style={{transform: `rotate(${angle}deg)`}}
            />
            <p className="soda-text">
                OMG SUGARRRRR
                <p><Link to="/">GO BACK</Link> </p>
            </p>
            <img
                src="https://img1.picmix.com/output/stamp/normal/7/6/2/8/1538267_e3fd9.png"
                alt="Rotating Clock Hand"
                className="rotating-image"
                style={{transform: `rotate(${angle}deg)`}}
            />

        </div>
    )
}

export default Soda;