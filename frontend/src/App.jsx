import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Journey from './pages/Journey'
import CodingBackground from './pages/CodingBackground'
import Header from './pages/Header'
import Footer from './pages/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/journey" element={<Journey/>} />
          <Route path="/coding-background" element={<CodingBackground/>} />
        </Routes>
        <Footer/>
      </main>
    </div>
  )
}
