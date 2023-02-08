import React, { useState, useEffect } from 'react';

const JustFacts = () => {
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatFact(data.fact);
    };
    fetchData();
  }, []);

  return (
    <div>
      {catFact ? <p>{catFact}</p> : <p>Loading...</p>}
    </div>
  );
};

export default JustFacts;
