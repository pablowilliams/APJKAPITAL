import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Mail, Phone, MapPin, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const contacts = [
  { name: 'Guido Williams', role: 'Managing Partner', email: 'guido@apjkapital.com', phone: '+39 335 764 2008', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/', loc: 'Milan' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', email: 'andrea@apjkapital.com', phone: '+44 7535 666050', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/', loc: 'London' },
  { name: 'Pablo Williams', role: 'Data Scientist', email: 'pablo@apjkapital.com', phone: '+44 7508 522776', linkedin: 'https://www.linkedin.com/in/pablowilliams/', loc: 'London' },
]

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-8 md:px-12 py-16 md:py-24">
        <div className="max-w-[720px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-6">
            Contact
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[32px] sm:text-[40px] md:text-[52px] font-display font-bold leading-[1.1] tracking-[-0.03em] mb-8">
            Get in touch
          </motion.h1>

          <motion.p {...f(0.18)} className="text-[16px] text-zinc-400 leading-[1.85] mb-20 max-w-[480px]">
            Reach out to any of our team directly.
          </motion.p>

          {/* General */}
          <motion.div {...f(0.22)} className="flex flex-col sm:flex-row gap-10 mb-16 pb-16 border-b border-dark-border">
            <div className="flex items-start gap-4">
              <Mail size={16} className="text-gold/50 mt-0.5" />
              <div>
                <p className="text-[11px] text-zinc-600 tracking-[0.12em] uppercase mb-1">Email</p>
                <a href="mailto:info@apjkapital.com" className="text-[15px] text-zinc-300 hover:text-gold transition-colors">info@apjkapital.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-gold/50 mt-0.5" />
              <div>
                <p className="text-[11px] text-zinc-600 tracking-[0.12em] uppercase mb-1">Locations</p>
                <p className="text-[15px] text-zinc-300">Milan &middot; London</p>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <div className="space-y-0 divide-y divide-dark-border">
            {contacts.map((c, i) => (
              <motion.div key={c.name} {...f(0.3 + i * 0.08)} className="py-8 first:pt-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2.5">
                      <h3 className="text-[16px] font-display font-semibold text-white/90">{c.name}</h3>
                      <span className="text-[11px] text-zinc-700">{c.loc}</span>
                    </div>
                    <p className="text-[12px] text-gold/40 tracking-[0.1em] uppercase mt-0.5">{c.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 md:gap-5">
                    <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1.5 text-[13px] text-zinc-600 hover:text-gold transition-colors">
                      <Mail size={12} className="text-gold/30" /> {c.email}
                    </a>
                    <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 text-[13px] text-zinc-600 hover:text-gold transition-colors">
                      <Phone size={12} className="text-gold/30" /> {c.phone}
                    </a>
                    <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] text-zinc-600 hover:text-gold transition-colors">
                      <Link2 size={12} className="text-gold/30" /> LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...f(0.6)} className="text-[11px] text-zinc-800 mt-16 pt-10 border-t border-dark-border">
            &copy; {new Date().getFullYear()} APJ Kapital. All rights reserved. Past performance is not indicative of future results.
          </motion.p>

        </div>
      </section>
    </PageWrapper>
  )
}
