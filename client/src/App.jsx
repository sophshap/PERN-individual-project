import { useState } from 'react'
import Header from "./components/Header"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pageViews/Home'
import Recipes from './pageViews/Recipes'
import SingleRecipe from './pageViews/SingleRecipe'
export const baseURL = import.meta.env.VITE_baseURL || "http://localhost:8080"


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/:id' element={<SingleRecipe />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
