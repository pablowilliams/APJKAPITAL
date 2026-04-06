import { motion } from 'framer-motion'
import { Mail, MapPin, Link2 } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]
const f = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: d, ease } })

const contacts = [
  { name: 'Guido Williams', role: 'Managing Partner', email: 'guido@apjkapital.com', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', email: 'andrea@apjkapital.com', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/' },
  { name: 'Pablo Williams', role: 'Data Scientist', email: 'pablo@apjkapital.com', linkedin: 'https://www.linkedin.com/in/pablowilliams/' },
]

export default function ContactContent() {
  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
      <motion.div {...f(0.05)}>
        <p className="text-[17px] text-zinc-400 leading-[1.85] mb-14 max-w-[520px]">
          Whether you're exploring investment opportunities, seeking advisory services, or simply curious — reach out directly.
        </p>
        <div className="space-y-8">
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-gold/[0.05] flex items-center justify-center shrink-0 mt-0.5">
              <Mail size={18} className="text-gold/40" />
            </div>
            <div>
              <p className="label mb-2">General</p>
              <a href="mailto:info@apjkapital.com" className="text-[18px] text-zinc-300 hover:text-gold transition-colors duration-200">info@apjkapital.com</a>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-gold/[0.05] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={18} className="text-gold/40" />
            </div>
            <div>
              <p className="label mb-2">Locations</p>
              <p className="text-[18px] text-zinc-300">Milan, Italy &middot; London, UK</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div {...f(0.12)}>
        <p className="label mb-6">Key Contacts</p>
        <div className="space-y-0 divide-y divide-dark-border/60">
          {contacts.map((c) => (
            <div key={c.name} className="flex items-center justify-between py-7 first:pt-0 last:pb-0 group">
              <div>
                <h4 className="text-[18px] font-display font-semibold text-white/85 group-hover:text-gold transition-colors duration-200">{c.name}</h4>
                <p className="label mt-1.5">{c.role}</p>
              </div>
              <div className="flex items-center gap-3">
                <a href={`mailto:${c.email}`} className="text-zinc-600 hover:text-gold hover:bg-gold/[0.05] transition-all duration-200 p-2.5 rounded-xl" aria-label={`Email ${c.name}`}><Mail size={18} /></a>
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-gold hover:bg-gold/[0.05] transition-all duration-200 p-2.5 rounded-xl" aria-label={`${c.name} LinkedIn`}><Link2 size={18} /></a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
