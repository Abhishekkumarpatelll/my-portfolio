'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="text-center space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Have a question, idea, or opportunity? I'm always open to connect!
        </p>

        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="mailto:yourname@example.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Optional contact form */}
        {/* 
        <form className="mt-10 space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        */}
      </div>
    </section>
  )
}

export default Contact
