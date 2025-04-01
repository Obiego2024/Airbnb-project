import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Login from './Pages/Login'
import HelpCenter from './Pages/HelpCenter'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/HelpCenter' element={<HelpCenter />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
