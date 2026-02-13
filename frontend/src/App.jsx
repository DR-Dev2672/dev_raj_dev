import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Journey from './pages/Journey'
import CodingBackground from './pages/CodingBackground'

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/journey" element={<Journey/>} />
          <Route path="/coding-background" element={<CodingBackground/>} />
        </Routes>
      </main>
    </div>
  )
}
