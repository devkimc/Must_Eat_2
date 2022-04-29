import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home, Map, Login, SignUp } from './pages'
import { Header } from './layouts'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App