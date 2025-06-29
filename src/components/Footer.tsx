// components/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-8 bg-gray-100 dark:bg-zinc-900 border-t dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} Your Name. All rights reserved.
        </p>

        <div className="flex items-center space-x-4">
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
