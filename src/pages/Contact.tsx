import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';

export default function Contact() {
  return (
    <>
      <Background />
      <section className="flex min-h-screen items-center justify-center px-6 pt-20">
        {/* Back Button */}
        <Link
          to="/"
          className="fixed top-6 left-6 flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white md:text-7xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-300"
          >
            I'm always open to new opportunities and interesting projects.
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
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            href="mailto:tux@eosdev.org"
            className="mt-8 inline-block rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Send me an email
          </motion.a>
        </div>
      </section>
    </>
  );
}
