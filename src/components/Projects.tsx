'use client'

import React from 'react'
import rawProjects from '@/app/data/projects.json'
import ProjectCard from './ProjectCard'

type Project = {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
}

const projects = rawProjects as Project[]

const Projects = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
