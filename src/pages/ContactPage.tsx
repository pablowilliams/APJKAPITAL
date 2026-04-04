import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Mail, Phone, MapPin, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const contacts = [
  { name: 'Guido Williams', role: 'Managing Partner', email: 'guido@apjkapital.com', phone: '+39 335 764 2008', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/', loc: 'Milan' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', email: 'andrea@apjkapital.com', phone: '+44 7535 666050', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/', loc: 'London' },
  { name: 'Pablo Williams', role: 'Data Scientist', email: 'pablo@apjkapital.com', phone: '+44 7508 522776', linkedin: 'https://www.linkedin.com/in/pablowilliams/', loc: 'London' },
]

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="px-8 md:px-12 py-20 md:py-32">
        <div className="max-w-[700px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-8">
            Contact
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[36px] sm:text-[44px] md:text-[56px] font-display font-bold tracking-[-0.03em] mb-8">
            Get in touch
          </motion.h1>

          <motion.p {...f(0.18)} className="text-[16px] text-zinc-400 leading-[2] mb-20 max-w-[460px]">
            Reach out to any of our team directly.
          </motion.p>

          {/* General */}
          <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-12 mb-20 pb-16 border-b border-dark-border">
            <div className="flex items-start gap-4">
              <Mail size={16} className="text-gold/50 mt-1" />
              <div>
                <p className="text-[11px] text-zinc-600 tracking-[0.12em] uppercase mb-2">Email</p>
                <a href="mailto:info@apjkapital.com" className="text-[15px] text-zinc-300 hover:text-gold transition-colors">info@apjkapital.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-gold/50 mt-1" />
              <div>
                <p className="text-[11px] text-zinc-600 tracking-[0.12em] uppercase mb-2">Locations</p>
                <p className="text-[15px] text-zinc-300">Milan &middot; London</p>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <div className="space-y-16">
            {contacts.map((c, i) => (
              <motion.div key={c.name} {...f(0.3 + i * 0.08)} className="border-b border-dark-border pb-12 last:border-0">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-[18px] font-display font-semibold text-white/90">{c.name}</h3>
                  <span className="text-[11px] text-zinc-700">{c.loc}</span>
                </div>
                <p className="text-[12px] text-gold/40 tracking-[0.1em] uppercase mb-6">{c.role}</p>

                <div className="flex flex-wrap gap-6">
                  <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-[13px] text-zinc-600 hover:text-gold transition-colors">
                    <Mail size={12} className="text-gold/30" /> {c.email}
                  </a>
                  <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-[13px] text-zinc-600 hover:text-gold transition-colors">
                    <Phone size={12} className="text-gold/30" /> {c.phone}
                  </a>
                  <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] text-zinc-600 hover:text-gold transition-colors">
                    <Link2 size={12} className="text-gold/30" /> LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...f(0.6)} className="text-[11px] text-zinc-800 mt-20 pt-10 border-t border-dark-border">
            &copy; {new Date().getFullYear()} APJ Kapital. All rights reserved.
          </motion.p>

        </div>
      </section>
    </PageWrapper>
  )
}
