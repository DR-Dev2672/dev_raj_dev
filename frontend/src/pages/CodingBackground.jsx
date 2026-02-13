import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function CodingBackground(){
  const [bg, setBg] = useState({ languages: [], frameworks: [], tools: [] })
  useEffect(()=>{
    axios.get(`${API()}/api/background`).then(r=> setBg(r.data)).catch(()=>{})
  },[])

  return (
    <section className="background container">
      <h2>Coding Background</h2>
      <div className="skills">
        <div className="skill-col">
          <h4>Languages</h4>
          <ul>{bg.languages.map((l,i)=> <li key={i}>{l}</li>)}</ul>
        </div>
        <div className="skill-col">
          <h4>Frameworks</h4>
          <ul>{bg.frameworks.map((l,i)=> <li key={i}>{l}</li>)}</ul>
        </div>
        <div className="skill-col">
          <h4>Tools</h4>
          <ul>{bg.tools.map((l,i)=> <li key={i}>{l}</li>)}</ul>
        </div>
      </div>
      <p className="muted">{bg.notes}</p>
    </section>
  )
}
