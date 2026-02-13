import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation();
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">My Portfolio</div>
        <div className="links">
          <Link className={loc.pathname === '/' ? 'active' : ''} to="/">Home</Link>
          <Link className={loc.pathname === '/projects' ? 'active' : ''} to="/projects">Projects</Link>
          <Link className={loc.pathname === '/journey' ? 'active' : ''} to="/journey">Journey</Link>
          <Link className={loc.pathname === '/coding-background' ? 'active' : ''} to="/coding-background">Coding Background</Link>
        </div>
      </div>
    </nav>
  )
}
