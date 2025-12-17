import { FaGithub } from 'react-icons/fa'
import './ProjectCard.css'

export default function ProjectCard({ name, description, url, tags }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project-card card">
      <div className="project-header">
        <FaGithub className="project-icon" />
        <h3 className="project-name">{name}</h3>
      </div>
      <p className="project-description">{description}</p>
      {tags && tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      )}
    </a>
  )
}
