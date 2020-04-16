import React, { useState, useEffect } from 'react'

import api from './services/api'

import './App.js'
import Header from './components/Header'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data)
    })
  })

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
    console.log(projects)
  }

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Projeto
      </button>
    </>
  )
}
