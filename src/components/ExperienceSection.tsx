import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { timeline } from '../data/portfolioData'

type Filter = 'work' | 'education'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function ExperienceSection() {
  const [filter, setFilter] = useState<Filter>('work')
  const entries = timeline.filter(e => e.type === filter)

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Experience & Education
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
            {(['work', 'education'] as Filter[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {f === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                {f === 'work' ? 'Work History' : 'Education'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          key={filter}
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-8">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.id}
                variants={fadeUp}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'} pl-16 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                  >
                    <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-xs font-semibold text-blue-500 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full border border-blue-100 dark:border-blue-900">
                        {entry.period}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{entry.title}</h3>
                    <div className={`flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm mt-0.5 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <MapPin size={12} className="text-blue-400" />
                      {entry.organization}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                      {entry.description}
                    </p>
                    <div className={`flex flex-wrap gap-1.5 mt-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {entry.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-950 shadow-md"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
