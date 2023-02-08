import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllBreeds = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://catfact.ninja/breeds')
      .then(response => response.json())
      .then(json => {
        setData(json.data);
      });
  }, []);

  return (
    <div>
{data.map((item, index) => (
  <Link key={index} to={`/selectedbreed/${item.breed}`}>
  <button>{item.breed}</button>
</Link>

))}

    </div>
  );
};

export default AllBreeds;


