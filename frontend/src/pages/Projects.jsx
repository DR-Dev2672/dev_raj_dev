import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Projects(){
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    axios.get(`${API()}/api/projects`).then(r=> setProjects(r.data)).catch(()=>{})
  },[])

  return (
    <section className="projects container">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p=> (
          <article className="card" key={p._id}>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.techStack?.join(' • ')}</p>
              <p>{p.description}</p>
              {p.link && <a className="btn" href={p.link} target="_blank">Visit</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
