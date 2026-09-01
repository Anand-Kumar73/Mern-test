import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'
import AddEvent from './pages/UpdateEvent'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/add-event" element={<AddEvent />} />
      </Routes>

    </div>
  )
}

export default App
