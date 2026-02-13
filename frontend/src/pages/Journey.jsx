import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Journey(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    axios.get(`${API()}/api/journey`).then(r=> setItems(r.data)).catch(()=>{})
  },[])

  return (
    <section className="journey container">
      <h2>Journey</h2>
      <div className="timeline">
        {items.map(it=> (
          <div className="timeline-item" key={it._id}>
            <div className="ti-left">
              <h4>{it.title}</h4>
              <p className="muted">{it.period}</p>
            </div>
            <div className="ti-right">
              <p>{it.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
