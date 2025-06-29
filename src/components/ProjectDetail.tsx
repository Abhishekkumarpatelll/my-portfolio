// components/ProjectDetail.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

type ProjectDetailProps = {
  title: string
  description: string
  role: string
  stack: string[]
  challenges: string
  results?: string
  liveLink?: string
  repoLink?: string
  screenshots: string[]
}

export default function ProjectDetail({
  title,
  description,
  role,
  stack,
  challenges,
  results,
  liveLink,
  repoLink,
  screenshots,
}: ProjectDetailProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
        {title}
      </h1>

      <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-6">{description}</p>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">My Role</h2>
          <p className="text-zinc-600 dark:text-zinc-400">{role}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Tech Stack</h2>
          <ul className="flex flex-wrap gap-2 mt-2">
            {stack.map((tech, i) => (
              <li
                key={i}
                className="bg-zinc-200 dark:bg-zinc-700 text-sm px-3 py-1 rounded"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Challenges & Solutions</h2>
          <p className="text-zinc-600 dark:text-zinc-400">{challenges}</p>
        </div>

        {results && (
          <div>
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Results</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{results}</p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mt-6">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              Live Demo
            </Link>
          )}

          {repoLink && (
            <Link
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Github className="w-5 h-5 mr-1" />
              GitHub Repo
            </Link>
          )}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((src, i) => (
          <div key={i} className="relative w-full h-64 rounded overflow-hidden shadow">
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
