import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllDogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/dogs')
      .then((response) => response.json())
      .then((data) => {
        setDogs(data); // Directly set the fetched array of dogs
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dogs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dogs || dogs.length === 0) {
    return <div>No dogs found!</div>;
  }

  return (
    <div className="all-dogs">
      {dogs.map((dog) => (
        <div key={dog.name} className="dog-card">
          <h2>{dog.name}</h2>
          <p>Age: {dog.age}</p>
          <img src={dog.src} alt={dog.name} />
          <p>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>See more about {dog.name}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default AllDogs;
