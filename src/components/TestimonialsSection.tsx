import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setDir(1)
      setIdx(i => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [paused])

  const prev = () => {
    setDir(-1)
    setIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setDir(1)
    setIdx(i => (i + 1) % testimonials.length)
  }

  const current = testimonials[idx]

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Testimonials
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4">
            What teammates and clients say about working with me.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-blue-500/20 dark:text-blue-400/20">
              <Quote size={72} fill="currentColor" />
            </div>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 font-medium">
                  "{current.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/30"
                  />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{current.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {current.role} · {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? 'w-6 bg-blue-500' : 'w-2 bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
