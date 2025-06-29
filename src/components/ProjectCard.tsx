// components/ProjectCard.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden border dark:border-zinc-800 transition"
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">{title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>

          <ul className="flex flex-wrap gap-2 mt-2">
            {technologies.map((t, idx) => (
              <li
                key={idx}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-4 inline-flex items-center text-blue-600 hover:underline dark:text-blue-400">
            View Project <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

