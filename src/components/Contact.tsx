import { motion } from 'framer-motion'
import { useInView } from './hooks'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-widest uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
                Talk
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Whether you&apos;re exploring investment opportunities, seeking advisory
              services, or interested in our quantitative strategies — we&apos;d love
              to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email</div>
                  <a href="mailto:info@apjkapital.com" className="text-white hover:text-gold transition-colors">
                    info@apjkapital.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Guido Williams</div>
                  <span className="text-white">+39 02 XXX XXXX</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Andrea Williams</div>
                  <span className="text-white">+39 02 XXX XXXX</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Locations</div>
                  <span className="text-white">Milan, Italy &middot; London, UK</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-dark-card border border-dark-border space-y-6"
            >
              <div>
                <label className="text-sm text-zinc-500 mb-2 block">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white placeholder-zinc-700 focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-zinc-500 mb-2 block">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white placeholder-zinc-700 focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-zinc-500 mb-2 block">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white placeholder-zinc-700 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your interest..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold to-gold-dark text-black font-semibold rounded-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-500 flex items-center justify-center gap-2"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                {!submitted && <ArrowUpRight size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
