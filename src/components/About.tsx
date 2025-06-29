// components/About.tsx
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-gray-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          I&rsquo;m a software developer with a strong foundation in web technologies and a passion for
          building performant, scalable, and user-friendly applications. My journey began with a
          curiosity for how things work behind the screen, and that curiosity turned into a deep
          appreciation for clean architecture, modern frameworks, and great user experience.
          <br />
          <br />
          I&rsquo;m especially excited about working with JavaScript/TypeScript, React, and serverless
          architecture. I enjoy breaking down complex problems and turning ideas into fully
          functional products that help users.
        </motion.p>
      </div>
    </section>
  )
}
