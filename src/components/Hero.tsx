// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownToLine, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-20 bg-white dark:bg-zinc-900"
    >
      <div className="flex-1 flex flex-col items-center md:items-start gap-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white"
        >
          Software Engineer&nbsp;
          <span className="text-blue-600">| Building Scalable & User-Centric Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-zinc-600 dark:text-zinc-400 max-w-lg"
        >
          I’m a passionate developer focused on crafting clean, efficient, and performant web apps
          with delightful user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          >
            View My Work
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </Link>

          <a
            href="/Resume.pdf"
            download
            className="flex items-center px-6 py-3 text-sm text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <ArrowDownToLine className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative w-76 h-76 md:w-72 md:h-92 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
          <Image
            src="/patel.png"
            alt="Profile photo"
            fill
            priority
            sizes="(min-width: 768px) 18rem, 14rem"
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
