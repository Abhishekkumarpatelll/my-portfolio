'use client'

import React from 'react'
import skills from '@/app/data/skills.json'

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {(items as string[]).map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
