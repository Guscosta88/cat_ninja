import React from 'react'
import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'

const Home = () => {
  return (
    <div>
        <Link to="/allbreeds">
            <button>All Breeds</button>
        </Link>

        <Link to="/breedsAndFacts">
            <button>Breeds and Facts</button>
        </Link>

        <Link to="/justfacts">
            <button>Random Facts</button>
        </Link>

        <Link to="/catlength">
            <button>Cat Length</button>
        </Link>

        <Link to="/onebreed">
            <button>Random Breed</button>
        </Link>

        <Link to="/breedinfo">
            <button>Random Breed Info</button>
        </Link>

        <Link to="/percisting">
            <button>Persisting</button>
        </Link>

        <DarkMode />
    </div>
  )
}

export default Home


