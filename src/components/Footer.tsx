import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons'
import { personal } from '../data/portfolioData'

const socials = [
  { icon: GithubIcon, href: personal.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: personal.social.linkedin, label: 'LinkedIn' },
  { icon: TwitterXIcon, href: personal.social.twitter, label: 'Twitter' },
  { icon: Mail, href: personal.social.email, label: 'Email' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {personal.name}
            </span>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{personal.tagline}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1">
          <span>Built with</span>
          <Heart size={13} className="text-red-500 fill-red-500" />
          <span>by {personal.name} · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
