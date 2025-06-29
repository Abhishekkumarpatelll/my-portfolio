// app/page.tsx
'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <section id="hero" className="w-full">
        <Hero />
      </section>

      <section id="about" className="w-full scroll-mt-20">
        <About />
      </section>

      <section id="skills" className="w-full scroll-mt-20">
        <Skills />
      </section>

      <section id="projects" className="w-full scroll-mt-20">
        <Projects />
      </section>

      <section id="experience" className="w-full scroll-mt-20">
        <Experience />
      </section>

      <section id="contact" className="w-full scroll-mt-20">
        <Contact />
      </section>
    </div>
  )
}
