import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, ChevronRight } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import type { Project } from '../data/portfolioData'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Hero image */}
            <div className="relative h-52 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-200 dark:border-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Challenges */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40">
                <div className="flex items-center gap-2 mb-2">
                  <ChevronRight size={16} className="text-amber-500" />
                  <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">Key Challenges</span>
                </div>
                <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">{project.challenges}</p>
              </div>

              {/* Outcomes */}
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40">
                <div className="flex items-center gap-2 mb-2">
                  <ChevronRight size={16} className="text-green-500" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">Outcomes</span>
                </div>
                <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">{project.outcomes}</p>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
