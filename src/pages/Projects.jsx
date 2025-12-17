import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/blue-dokkaebi/repos?sort=updated')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repos')
        return res.json()
      })
      .then((data) => {
        const projects = data
          .filter((repo) => !repo.fork && !repo.name.endsWith('.github.io'))
          .map((repo) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            tags: repo.topics || [],
          }))
        setRepos(projects)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="projects page">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <p className="projects-intro">Tools and projects I've built and published on GitHub.</p>
        {loading && <p>Loading projects...</p>}
        {error && <p>Error: {error}</p>}
        <div className="projects-grid">
          {repos.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
