'use client'

import React from 'react'

type ExperienceItem = {
  title: string
  company: string
  date: string
  responsibilities: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'Tech Innovators Inc.',
    date: 'Jan 2023 – Present',
    responsibilities: [
      'Developed scalable UI components using React and Tailwind CSS.',
      'Collaborated with backend team to integrate RESTful APIs.',
      'Improved Lighthouse performance score from 72 to 95.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'CloudNet Solutions',
    date: 'Jun 2022 – Dec 2022',
    responsibilities: [
      'Built internal admin dashboard to monitor user activity.',
      'Wrote reusable hooks to improve code modularity.',
      'Contributed to CI/CD pipeline optimization.',
    ],
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Docker'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">
              {exp.title} @ <span className="text-blue-600">{exp.company}</span>
            </h3>
            <span className="text-gray-500">{exp.date}</span>
          </div>

          <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700 dark:text-gray-300">
            {exp.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience
