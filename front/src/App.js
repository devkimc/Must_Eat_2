import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Map, Login, SignUp } from './pages'

const App = () => {
  return (
      <Routes>
        <Route expact path='/' component={Home} />
        <Route path='/map' component={Map} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Routes>
  )
}

export default App