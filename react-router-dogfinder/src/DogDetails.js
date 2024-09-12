import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DogDetails() {
  const { name } = useParams(); // Get the dog's name from the URL
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/dogs') // Fetch dogs data from your API
      .then((response) => response.json())
      .then((data) => {
        // Directly using the data array since the response is an array of dogs
        const foundDog = data.find((d) => d.name.toLowerCase() === name.toLowerCase()); // Find the dog by name
        setDog(foundDog);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog details:', error);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  if (!dog) {
    return <div>Dog not found!</div>; // Show a message if the dog is not found
  }

  return (
    <div className="dog-details">
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;



