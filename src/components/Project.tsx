import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export default function Project({ title, description, image, tech, github, demo }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}