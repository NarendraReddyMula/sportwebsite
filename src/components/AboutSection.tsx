import { motion, type Variants } from 'framer-motion'
import { Download, MapPin, Mail, Phone } from 'lucide-react'
import { personal, techStack } from '../data/portfolioData'

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 blur-xl opacity-20 scale-110" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-4 ring-blue-500/20 shadow-2xl">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
                  }}
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg px-4 py-2 border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">1+ Years</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="space-y-5"
          >
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{personal.bio}</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{personal.bio2}</p>

            {/* Contact info */}
            <div className="flex flex-col gap-2 pt-2">
              {[
                { icon: MapPin, text: personal.location },
                { icon: Mail, text: personal.email },
                { icon: Phone, text: personal.phone },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <Icon size={15} className="text-blue-500 shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 mt-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-slate-500 dark:text-slate-400 text-sm font-medium tracking-widest uppercase mb-8"
          >
            Technologies I Work With
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(tech => (
              <motion.span
                key={tech}
                variants={fadeUp}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-sm hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
