import React, { useState, useEffect } from 'react';

const BreedInfo = () => {
    const [randomBreed, setRandomBreed] = useState({});
  
    useEffect(() => {
      fetch('https://catfact.ninja/breeds')
        .then(response => response.json())
        .then(json => {
          setRandomBreed(json.data[Math.floor(Math.random() * json.data.length)]);
        });
    }, []);
  
    return (
      <div>
          <p>Breed Name: {randomBreed.breed}</p>
          <p>Country: {randomBreed.country}</p>
          <p>Originally:{randomBreed.origin}</p>
          <p>Coat: {randomBreed.coat}</p>
          <p>Patterns: {randomBreed.pattern}</p>
      </div>
    );
  };

  export default BreedInfo;