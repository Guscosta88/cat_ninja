import React, { useState, useEffect } from 'react';

const BreedsAndFacts = () => {
  const [firstBreed, setFirstBreed] = useState('');
  const [catFact, setCatFact] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const factResponse = await fetch('https://catfact.ninja/fact');
      const factData = await factResponse.json();
      setCatFact(factData.fact);
    };
    fetchData();
  }, []);

  useEffect(() => {
    fetch('https://catfact.ninja/breeds')
      .then(response => response.json())
      .then(json => {
        setFirstBreed(json.data[Math.floor(Math.random() * json.data.length)].breed);
      });
  }, []);

  return (
    <div>
        <p>{catFact}</p>
        
        <p>{firstBreed}</p>
    </div>
  );
};

export default BreedsAndFacts;