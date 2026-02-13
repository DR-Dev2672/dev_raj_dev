import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Home(){
  const [profile, setProfile] = useState(null)
  useEffect(()=>{
    axios.get(`${API()}/api/profile`).then(r=> setProfile(r.data)).catch(()=>{})
  },[])

  return (
    <section className="home">
      <div className="hero container">
        <div>
          <h1>{profile?.name || 'Your Name'}</h1>
          <p className="muted">{profile?.headline || 'Full-stack Developer'}</p>
          <p className="about">{profile?.about || 'Add a brief description about yourself.'}</p>
          <div className="socials">
            {profile?.socials?.github && <a href={profile.socials.github} target="_blank">GitHub</a>}
            {profile?.socials?.linkedin && <a href={profile.socials.linkedin} target="_blank">LinkedIn</a>}
          </div>
        </div>
        <div className="hero-card">
          <div className="card-inner">
            <p className="muted">Location</p>
            <h3>{profile?.location || 'City, Country'}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
