import React from 'react'
import './AuthorCard.css'

interface AuthorCardProps {
  name: string
  title: string
  experience: string[]
  linkedIn?: string
  isIndonesian?: boolean
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name, title, experience, linkedIn, isIndonesian = true }) => {
  return (
    <div className="author-card">
      <div className="author-card-header">
        <div className="author-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div className="author-info">
          <h4 className="author-name">{isIndonesian ? 'Oleh:' : 'By:'} {name}</h4>
          <p className="author-title">{title}</p>
        </div>
      </div>
      <div className="author-experience">
        {experience.map((exp, index) => (
          <span key={index} className="experience-item">{exp}</span>
        ))}
      </div>
      {linkedIn && (
        <a 
          href={linkedIn} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="author-linkedin"
          aria-label={`LinkedIn profile of ${name}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn Profile
        </a>
      )}
    </div>
  )
}

export default AuthorCard
