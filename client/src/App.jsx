import { useEffect, useState } from 'react'
import Header from "./components/Header"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pageViews/Home'
import Recipes from './pageViews/Recipes'
import SingleRecipe from './pageViews/SingleRecipe'
import Login from './components/Login'
import Register from './components/Register'
export const baseURL = import.meta.env.VITE_baseURL || "http://localhost:8080"


function App() {
  const [showNav, setShowNav] = useState(false)
  const [token, setToken] = useState(null)
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token")
    if (tokenFromStorage){
      setToken(tokenFromStorage)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        {showNav && <Header setToken={setToken} token={token} />}
        <div className='d-flex justify-content-center'>


          <Routes>

            <Route path='/' element={<Home setShowNav={setShowNav} />} />
            <Route path='/recipes' element={<Recipes setShowNav={setShowNav} />} />
            <Route path='/recipes/:id' element={<SingleRecipe setShowNav={setShowNav} />} />
            <Route path='/login' element={<Login setShowNav={setShowNav} setToken={setToken} />} />
            <Route path='/register' element={<Register setShowNav={setShowNav} setToken={setToken} />} />

          </Routes>


        </div>
      </BrowserRouter>
    </>
  )
}

export default App
