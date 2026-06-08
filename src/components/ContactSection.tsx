import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons'
import { personal } from '../data/portfolioData'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const socials = [
  { icon: GithubIcon, href: personal.social.github, label: 'GitHub', color: 'hover:text-slate-900 dark:hover:text-white' },
  { icon: LinkedinIcon, href: personal.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: TwitterXIcon, href: personal.social.twitter, label: 'Twitter', color: 'hover:text-sky-500' },
  { icon: Mail, href: personal.social.email, label: 'Email', color: 'hover:text-red-500' },
]

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <motion.div variants={fadeUp} className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </motion.div>
  )
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const web3FormsAccessKey =
    (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ||
    'a242a615-7c81-4fd6-94be-93f95f6de4b5'

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: data.name,
          replyto: data.email,
        }),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error('Failed to send contact message')
      }

      toast.success("Message sent! I'll get back to you soon.")
      reset()
    } catch {
      toast.error('Message could not be sent. Please try again in a moment.')
    }
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Let's Work Together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: 'Email', value: personal.email },
                  { icon: MapPin, label: 'Location', value: personal.location },
                  { icon: MessageSquare, label: 'Availability', value: 'Open to opportunities' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-200">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-widest">
                Find me online
              </h3>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 ${color} hover:border-transparent hover:shadow-md transition-all hover:-translate-y-1`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA card */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
            >
              <h4 className="font-bold text-lg mb-1">Ready to build something great?</h4>
              <p className="text-blue-100 text-sm">
                I'm currently available for freelance work and full-time opportunities. Let's create something impactful together.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            noValidate
            className="space-y-5 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" error={errors.name?.message}>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="John Doe"
                  className={inputCls}
                  aria-invalid={!!errors.name}
                />
              </Field>
              <Field label="Email Address" error={errors.email?.message}>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="john@example.com"
                  className={inputCls}
                  aria-invalid={!!errors.email}
                />
              </Field>
            </div>

            <Field label="Subject" error={errors.subject?.message}>
              <input
                {...register('subject')}
                type="text"
                placeholder="Project inquiry, collaboration..."
                className={inputCls}
                aria-invalid={!!errors.subject}
              />
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Tell me about your project or idea..."
                className={`${inputCls} resize-none`}
                aria-invalid={!!errors.message}
              />
            </Field>

            <motion.button
              variants={fadeUp}
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/25"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
