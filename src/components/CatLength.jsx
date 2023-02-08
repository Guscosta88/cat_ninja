import React, { useState, useEffect } from 'react';

const CatLength = () => {
  const [catLength, setCatLength] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatLength(data.length);
    };
    fetchData();
  }, []);

  return (
    <div>
      {catLength ? <p>{catLength}</p> : <p>Loading...</p>}
    </div>
  );
};

export default CatLength;
