import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { skills } from '../data/portfolioData'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div variants={fadeUp} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-blue-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skills[0].category)
  const current = skills.find(s => s.category === activeTab)!

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Skills & Expertise
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            A broad stack from pixel-perfect UIs to scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
            {skills.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(cat.category)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === cat.category
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skill bars */}
        <motion.div
          key={activeTab}
          className="space-y-5 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {current.skills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { value: '50+', label: 'Projects shipped' },
            { value: '1+', label: 'Years experience' },
            { value: '20+', label: 'Happy clients' },
            { value: '12k+', label: 'GitHub stars' },
          ].map(stat => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
