import React from 'react'
import { projects } from '@/app/array/array'
import ProjectCard from '@/app/components/ProjectCard'
import Link from 'next/link'



export default function category({params}) {

  const filteredProjects = projects.find(proj => proj.title.split(' ').join('-') === params.id)

  const relatedPost = filteredProjects ? projects.filter(project => (
    project.category === project.category && project.title !== filteredProjects.title
  )) : [];

  return (
    <div>
    {
        filteredProjects && (
            <div>
                <h2 className='text-center'>{filteredProjects.title}</h2>
                <p className='place-content-center'>{filteredProjects.description}</p>
            </div>
        )
    }
    </div>
  )
}
