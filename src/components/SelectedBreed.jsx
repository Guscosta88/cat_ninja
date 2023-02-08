import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SelectedBreed = () => {
  const [data, setData] = useState([]);
  const { breed } = useParams();
  const [selectedBreed, setSelectedBreed] = useState({});

  useEffect(() => {
    fetch('https://catfact.ninja/breeds')
      .then(response => response.json())
      .then(json => {
        setData(json.data);
        const selected = json.data.find(breedData => breedData.breed.toLowerCase() === breed.toLowerCase());
        console.log('Selected breed:', selected);
        setSelectedBreed(selected);
      });
  }, [breed]);
  

  return (
    <div>
      {selectedBreed ? (
        <>
          <p>Breed Name: {selectedBreed.breed}</p>
          <p>Country: {selectedBreed.country}</p>
          <p>Originally: {selectedBreed.origin}</p>
          <p>Coat: {selectedBreed.coat}</p>
          <p>Patterns: {selectedBreed.pattern}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SelectedBreed;
