import { motion } from 'framer-motion'
import { Mail, ArrowDown, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons'
import ParticleCanvas from './ParticleCanvas'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { personal, roles } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

const socials = [
  { icon: GithubIcon, href: personal.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personal.social.linkedin, label: 'LinkedIn' },
  { icon: TwitterXIcon, href: personal.social.twitter, label: 'Twitter / X' },
  { icon: Mail, href: personal.social.email, label: 'Email' },
]

const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5]

function fadeUpVariant(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
  }
}

export default function HeroSection() {
  const typed = useTypingEffect(roles)
  const { theme } = useTheme()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Particle background */}
      <div className="absolute inset-0">
        <ParticleCanvas
          count={80}
          color={theme === 'dark' ? '99,179,237' : '59,130,246'}
          maxDist={140}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting badge */}
        <motion.div
          {...fadeUpVariant(delays[0])}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUpVariant(delays[1])}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
            {personal.name.split(' ')[0]}
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          {...fadeUpVariant(delays[2])}
          className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-10"
          aria-live="polite"
        >
          <span>{typed}</span>
          <span className="cursor-blink text-blue-400 ml-0.5">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUpVariant(delays[3])}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personal.tagline} — crafting fast, accessible, and beautiful web experiences from idea to production.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUpVariant(delays[4])}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="group px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDown size={16} className="inline ml-2 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href={personal.resumeUrl}
            download
            className="px-8 py-3.5 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-base transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUpVariant(delays[5])}
          className="flex items-center justify-center gap-5"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-xl border border-slate-700 hover:border-blue-500/60 text-slate-400 hover:text-blue-400 transition-all hover:-translate-y-0.5"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-blue-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
