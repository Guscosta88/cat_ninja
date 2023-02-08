import React from 'react'
import AllBreeds from './AllBreeds'
import BreedsAndFacts from './BreedsAndFacts'
import JustFacts from './JustFacts'
import CatLength from './CatLength'
import OneBreed from './OneBreed'
import Home from './Home'
import Persisting from './Persisting'
import BreedInfo from './BreedInfo'
import SelectedBreed from './SelectedBreed'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'

const App = () =>{
  
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/breedsAndFacts' element={<BreedsAndFacts />}/>
            <Route path='/allbreeds' element={<AllBreeds />}/>
            <Route path='/justfacts' element={<JustFacts />}/>
            <Route path='/catlength' element={<CatLength />}/>
            <Route path='/onebreed' element={<OneBreed />}/>
            <Route path='/percisting' element={<Persisting />}/>
            <Route path='/breedinfo' element={<BreedInfo />}/>
            <Route path='/selectedbreed/:breed' element={<SelectedBreed />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App