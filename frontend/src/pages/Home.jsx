import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const API = () => import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Home(){
  const [profile, setProfile] = useState(null)
  useEffect(()=>{
    axios.get(`${API()}/api/profile`).then(r=> setProfile(r.data)).catch(()=>{})
  },[])

  const container = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } }
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }

  return (
    <section className="home">
      <motion.div className="hero container" initial="hidden" animate="show" variants={container}>
        <motion.div className="hero-left" variants={item}>
          <h1>{profile?.name || 'Dev Raj Dev'}</h1>
          <p className="muted">{profile?.headline || 'Full-stack Developer'}</p>
          <p className="about">{profile?.about || 'Add a brief description about yourself.'}</p>

          <div className="socials">
            {profile?.socials?.github && <a className="btn-link" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>}
            {profile?.socials?.codeforces && <a className="btn-link" href={profile.socials.codeforces} target="_blank" rel="noreferrer">Codeforces</a>}
            {profile?.socials?.leetcode && <a className="btn-link" href={profile.socials.leetcode} target="_blank" rel="noreferrer">LeetCode</a>}
            {profile?.resume && <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">Download Resume</a>}
          </div>

          <div className="education muted">
            <div><strong>College:</strong> {profile?.college || 'Your College Name'}</div>
            <div><strong>School:</strong> {profile?.school || 'Your School Name'}</div>
          </div>
        </motion.div>

        <motion.div className="hero-right" variants={item}>
          <div className="profile-card">
            <img className="profile-img" src={profile?.image || 'https://picsum.photos/seed/profile/400/400'} alt="profile" />
            <div className="card-info">
              <p className="muted">Location</p>
              <h3>{profile?.location || 'City, Country'}</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
