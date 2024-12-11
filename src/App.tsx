import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Menu, X } from 'lucide-react';
import Background from './components/Background';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Background />
      <div className="min-h-screen">
        {/* Header */}
        <header className="fixed top-0 z-50 w-full backdrop-blur-sm">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-xl font-bold text-white"
            >
              <Terminal className="h-6 w-6" />
              <span>eosdev</span>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-6"
            >
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item}
                </a>
              ))}
            </motion.div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[72px] left-0 w-full bg-black/90 backdrop-blur-sm md:hidden"
            >
              <div className="flex flex-col items-center py-4">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="w-full py-4 text-center text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </header>

        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white md:text-7xl"
            >
              Hi, I'm <span className="text-blue-400">eosdev</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-gray-300"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex justify-center gap-6"
            >
              <a
                href="https://github.com/eosdev-x"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/imtux/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:tux@eosdev.org"
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-white"
            >
              Featured Projects
            </motion.h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Project
                title="Clean Sheets"
                description="A developers cheat sheet website with a twist, click the command to copy to clipboard."
                image="https://1drv.ms/i/s!Amo7Ig2olbdsgYcw_mW6cmYzCWKlOg?embed=1&width=660"
                tech={["TypeScript", "React", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/Clean-Sheets"
                demo="https://cleansheets.tech/"
              />
              <Project
                title="Cryptonicflux"
                description="A landing page for Pro streamer Cryptonicflux to showcase content and connect with fanbase."
                image="https://1drv.ms/i/s!Amo7Ig2olbdsgYcxy27ttfnXAQKXtw?embed=1&width=660"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/cryptonicflux"
                demo="https://cryptonicflux.com/"
              />
              <Project
                title="TJ Dorpers"
                description="A website for famous Dorper sheep farm TJ Dorper’s Sheep Farm."
                image="https://1drv.ms/i/s!Amo7Ig2olbdsgYczlM7MoyErL0Y3pw?embed=1&width=660"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/tjdorpers"
                demo="https://tjdorpers.com/"
              />
              <Project
                title="Findy.wiki"
                description="A powerful search tool for the infamous flight logs, just for fun."
                image="https://1drv.ms/i/s!Amo7Ig2olbdsgYc0IiIr9WFQrSbIOQ?embed=1&width=660"
                tech={["JS", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/findy-wiki"
                demo="https://findy.wiki/"
              />
              <Project
                title="pastebin"
                description="A pastebin for developers to share code and check correctness."
                image="https://1drv.ms/i/s!Amo7Ig2olbdsgYc1TGDeUu2CCxKiZw?embed=1&width=660"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com"
                demo="https://atomlaunch.com/"
              />
              <Project
                title="Mamadroid"
                description="Streamer and content creator Mamadroid showcases content and connects with followers."
                image="https://1drv.ms/i/s!Amo7Ig2olbdsgYcyjOFn6LvKU2SUGA?embed=1&width=660"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/mamadroid-react"
                demo="https://mamadroid.com/"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-white"
            >
              Skills & Expertise
            </motion.h2>
            <div className="mt-12 grid gap-6">
              <Skill name="JavaScript/TypeScript" level={95} />
              <Skill name="Rust" level={90} />
              <Skill name="Python" level={85} />
              <Skill name="Node.js" level={80} />
              <Skill name="UI/UX Design" level={75} />
              <Skill name="DevOps/Cloud" level={70} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-300"
            >
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              href="mailto:tux@eosdev.org"
              className="mt-8 inline-block rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Get in Touch
            </motion.a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8">
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} eosdev. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;