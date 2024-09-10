import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chips.css';

function Chips() {
  const [chips, setChips] = useState(0); // State to track the number of bags eaten
  const [positions, setPositions] = useState([]); // State to track positions of images

  const increment = () => {
    setChips((prevChips) => prevChips + 1);
    addRandomImagePosition();
  };

  const addRandomImagePosition = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random X position within the viewport
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Y position within the viewport

    setPositions((prevPositions) => [
      ...prevPositions,
      { x: randomX, y: randomY },
    ]);
  };

  return (
    <div className="chips">
      <div className="chips-counter">
        <h1>BAGS EATEN: {chips}</h1>
        <button onClick={increment}>NOM NOM NOM</button>
        <p>
          <Link to="/">GO BACK</Link>
        </p>
      </div>

      {/* Render images at random positions */}
      {positions.map((position, index) => (
        <img
          key={index}
          src="https://purepng.com/public/uploads/large/purepng.com-lays-potato-chips-packfood-potato-tasty-pack-lays-chips-taste-product-snaks-941524625368gdogh.png"
          alt="Random"
          className="random-image"
          style={{ top: position.y, left: position.x }}
        />
      ))}
    </div>
  );
}

export default Chips;



