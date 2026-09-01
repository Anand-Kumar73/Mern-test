import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import{Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
