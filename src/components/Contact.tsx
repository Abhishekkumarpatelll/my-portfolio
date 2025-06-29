'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="text-center space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Have a question, idea, or opportunity? I&rsquo;m always open to connect!
        </p>

        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="mailto:patelabhishekkumar423@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Abhishekkumarpatelll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-patel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
