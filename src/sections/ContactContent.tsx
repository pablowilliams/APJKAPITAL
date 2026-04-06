import { motion } from 'framer-motion'
import { Mail, MapPin, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const contacts = [
  { name: 'Guido Williams', role: 'Managing Partner', email: 'guido@apjkapital.com', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', email: 'andrea@apjkapital.com', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/' },
  { name: 'Pablo Williams', role: 'Data Scientist', email: 'pablo@apjkapital.com', linkedin: 'https://www.linkedin.com/in/pablowilliams/' },
]

export default function ContactContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">
      <motion.div {...f(0.05)}>
        <p className="text-[17px] text-zinc-400 leading-[1.85] mb-16 max-w-[480px]">
          Whether you're exploring investment opportunities, seeking advisory
          services, or simply curious — reach out directly.
        </p>
        <div className="space-y-10">
          <div className="flex items-start gap-5">
            <Mail size={20} className="text-gold/30 mt-1 shrink-0" />
            <div>
              <p className="label mb-2">General</p>
              <a href="mailto:info@apjkapital.com" className="text-[18px] text-zinc-300 hover:text-gold transition-colors">info@apjkapital.com</a>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <MapPin size={20} className="text-gold/30 mt-1 shrink-0" />
            <div>
              <p className="label mb-2">Locations</p>
              <p className="text-[18px] text-zinc-300">Milan, Italy &middot; London, UK</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div {...f(0.15)} className="space-y-0 divide-y divide-dark-border">
        {contacts.map((c) => (
          <div key={c.name} className="flex items-center justify-between py-8 first:pt-0 last:pb-0">
            <div>
              <h4 className="text-[18px] font-display font-semibold text-white/85">{c.name}</h4>
              <p className="label mt-1.5">{c.role}</p>
            </div>
            <div className="flex items-center gap-5">
              <a href={`mailto:${c.email}`} className="text-zinc-600 hover:text-gold transition-colors p-2.5 rounded-xl hover:bg-gold/[0.04]" aria-label={`Email ${c.name}`}>
                <Mail size={18} />
              </a>
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-gold transition-colors p-2.5 rounded-xl hover:bg-gold/[0.04]" aria-label={`${c.name} LinkedIn`}>
                <Link2 size={18} />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
