import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Toaster } from 'sonner'
import CustomCursor from '../components/CustomCursor'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { personal } from '../data/portfolioData'

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

function useSEO() {
  useEffect(() => {
    document.title = `${personal.name} — Full Stack Developer`

    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector<HTMLMetaElement>(selector)
      if (!el) {
        el = document.createElement('meta')
        if (isProperty) el.setAttribute('property', name)
        else el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const desc = `${personal.name} is a Full Stack Developer specializing in React, Node.js, and cloud infrastructure. ${personal.tagline}.`
    setMeta('description', desc)
    setMeta('og:title', `${personal.name} — Full Stack Developer`, true)
    setMeta('og:description', desc, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', window.location.href, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', `${personal.name} — Developer Portfolio`)
    setMeta('twitter:description', desc)

    let ld = document.querySelector<HTMLScriptElement>('#json-ld')
    if (!ld) {
      ld = document.createElement('script')
      ld.id = 'json-ld'
      ld.type = 'application/ld+json'
      document.head.appendChild(ld)
    }
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personal.name,
      url: window.location.origin,
      email: personal.email,
      jobTitle: 'Full Stack Developer',
      address: { '@type': 'PostalAddress', addressLocality: personal.location },
      sameAs: [personal.social.github, personal.social.linkedin, personal.social.twitter],
    })
  }, [])
}

export default function Portfolio() {
  useSEO()

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>

      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </motion.div>
  )
}
