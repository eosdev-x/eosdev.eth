import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, GitFork } from 'lucide-react';
import Background from '../components/Background';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

export default function Github() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/eosdev-x/repos?sort=updated&per_page=100');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const languageColors: Record<string, string> = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    Python: 'bg-green-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-purple-500',
    default: 'bg-gray-500'
  };

  return (
    <>
      <Background />
      <div className="min-h-screen py-20 px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="fixed top-6 left-6 flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Github Repositories
          </motion.h1>

          {loading && (
            <div className="text-center text-gray-300">
              Loading repositories...
            </div>
          )}

          {error && (
            <div className="text-center text-red-500">
              {error}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {repo.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || languageColors.default}`} />
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </div>
                  </div>

                  {repo.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {repo.topics.map(topic => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
