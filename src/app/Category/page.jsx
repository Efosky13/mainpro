import React from 'react'
import { projects } from '../array/array'
import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'

export default function category() {
  const filteredProjects = projects.filter(proj => proj.title.toLowerCase())
  return (
    <div className='grid grid-cols-3'>
      {filteredProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
