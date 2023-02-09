import React, { useState, useEffect } from 'react';

const OneBreed = () => {
  const [firstBreed, setFirstBreed] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/breeds')
      .then(response => response.json())
      .then(json => {
        setFirstBreed(json.data[Math.floor(Math.random() * json.data.length)].breed);
      });
  }, []);

  return (
    <div>
        <p>{firstBreed}</p>
    </div>
  );
};

export default OneBreed;