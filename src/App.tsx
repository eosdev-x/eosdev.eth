import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background from './components/Background';
import Project from './components/Project';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Projects', path: '#projects' },
    { name: 'Github', path: '/github' },
    { name: 'Contact', path: '/contact' },
  ];

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
              <Link to="/" className="text-white">eosdev</Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-6"
            >
              {menuItems.map((item) => (
                item.name === 'Contact' || item.name === 'Github' ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                )
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
                {menuItems.map((item) => (
                  item.name === 'Contact' || item.name === 'Github' ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="w-full py-4 text-center text-gray-300 transition-colors hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.path}
                      className="w-full py-4 text-center text-gray-300 transition-colors hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
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
                title="calcity.info"
                description="The priemier website for all things Cal City."
                image="https://huhghkvarocusxnrevpr.supabase.co/storage/v1/object/sign/site-images/eosdev-site/calcityinfo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWltYWdlcy9lb3NkZXYtc2l0ZS9jYWxjaXR5aW5mby5wbmciLCJpYXQiOjE3MzU1MTEwMTQsImV4cCI6MTc2NzA0NzAxNH0.bkU96bQHNArCoxr4Qv-jHpmw5JWOJTDKj83wMn7GZ0U&t=2024-12-29T22%3A23%3A34.090Z"
                tech={["TypeScript", "React", "CSS", "Vite", "HTML"]}
                github="https://github.com/eosdev-x/calcity"
                demo="https://calcity.info/"
              />
              <Project
                title="Cryptonicflux"
                description="A landing page for Pro streamer Cryptonicflux to showcase content and connect with fanbase."
                image="https://huhghkvarocusxnrevpr.supabase.co/storage/v1/object/sign/site-images/eosdev-site/cryptonicflux.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWltYWdlcy9lb3NkZXYtc2l0ZS9jcnlwdG9uaWNmbHV4LnBuZyIsImlhdCI6MTczNTUxMTg4OCwiZXhwIjoxNzY3MDQ3ODg4fQ.0mx1JPx-QBLeNOeToCv_BTc_4Z-Q--RgZ7kEEnmS3M8&t=2024-12-29T22%3A38%3A08.484Z"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/cryptonicflux"
                demo="https://cryptonicflux.com/"
              />
              <Project
                title="TJ Dorpers"
                description="A website for famous Dorper sheep farm TJ Dorper’s Sheep Farm."
                image="https://huhghkvarocusxnrevpr.supabase.co/storage/v1/object/sign/site-images/eosdev-site/tjdorpers.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWltYWdlcy9lb3NkZXYtc2l0ZS90amRvcnBlcnMucG5nIiwiaWF0IjoxNzM1NTExODQxLCJleHAiOjE3NjcwNDc4NDF9.sbqVMH5PotzgS3tEodCBJ_ypQNRuo_lmq3DSbTf19Ns&t=2024-12-29T22%3A37%3A21.878Z"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/tjdorpers"
                demo="https://tjdorpers.com/"
              />
              <Project
                title="TRB Oilfield Services"
                description="Advanced Oilfield Solutions for Tomorrow's Challenges."
                image="https://eivvclmcyhtilruderyw.supabase.co/storage/v1/object/public/eosdev//trb_oil.png"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/trb-oil"
                demo="https://trb-oil.pages.dev/"
              />
              <Project
                title="pastebin"
                description="A pastebin for developers to share code and check correctness."
                image="https://huhghkvarocusxnrevpr.supabase.co/storage/v1/object/sign/site-images/eosdev-site/atombin-js.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWltYWdlcy9lb3NkZXYtc2l0ZS9hdG9tYmluLWpzLnBuZyIsImlhdCI6MTczNTUxMDg5NywiZXhwIjoxNzY3MDQ2ODk3fQ.nE1kWmF3nnKobGGztExbnT99EQgiW_u38kYaCH8zYQ4&t=2024-12-29T22%3A21%3A37.699Z"
                tech={["Typescript", "JS", "Vite", "CSS", "HTML"]}
                github="https://github.com/eosdev-x/atombin"
                demo="https://atombin.pages.dev/"
              />
              <Project
                title="Mamadroid"
                description="Streamer and content creator Mamadroid showcases content and connects with followers."
                image="https://huhghkvarocusxnrevpr.supabase.co/storage/v1/object/sign/site-images/eosdev-site/mamadroid.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlLWltYWdlcy9lb3NkZXYtc2l0ZS9tYW1hZHJvaWQucG5nIiwiaWF0IjoxNzM1NTExMDcyLCJleHAiOjE3NjcwNDcwNzJ9.T44sKySTtrGpF78_ObMpa1dIVfBimNR4Bey5PwUHvO0&t=2024-12-29T22%3A24%3A32.170Z"
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
            </motion.h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;