import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { projects, type Project, type ProjectCategory } from '../data/portfolioData'
import ProjectModal from './ProjectModal'
import SkeletonCard from './SkeletonCard'

const CATEGORIES: ProjectCategory[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all"
      data-cursor-hover
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="p-2 rounded-lg bg-white/90 text-slate-800 hover:bg-white transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={15} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="p-2 rounded-lg bg-white/90 text-slate-800 hover:bg-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onOpen(project)}
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          View case study →
        </button>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of things I've built — from side projects to production systems.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} onOpen={setSelected} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
