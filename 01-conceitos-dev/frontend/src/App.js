import React, { useState } from 'react'

import './App.js'
import Header from './components/Header'
import backgroundImage from './assets/background.jpg'

export default function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
    console.log(projects)
  }

  return (
    <>
      <Header title="Homepage" />

      <img src={backgroundImage} width={300} />

      <ul>
        <ul>
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </ul>

      <button type="button" onClick={handleAddProject}>
        Projeto
      </button>
    </>
  )
}
