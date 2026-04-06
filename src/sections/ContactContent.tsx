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
    <div className="grid lg:grid-cols-[1fr_1fr] gap-20">
      {/* Left */}
      <motion.div {...f(0.05)}>
        <p className="text-[15px] text-zinc-400 leading-[1.9] mb-14">
          Whether you're exploring investment opportunities, seeking advisory
          services, or simply curious — reach out directly.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail size={16} className="text-gold/30 mt-1 shrink-0" />
            <div>
              <p className="label mb-2">General</p>
              <a href="mailto:info@apjkapital.com" className="text-[15px] text-zinc-300 hover:text-gold transition-colors">info@apjkapital.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={16} className="text-gold/30 mt-1 shrink-0" />
            <div>
              <p className="label mb-2">Locations</p>
              <p className="text-[15px] text-zinc-300">Milan, Italy &middot; London, UK</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div {...f(0.15)} className="space-y-0 divide-y divide-dark-border">
        {contacts.map((c) => (
          <div key={c.name} className="flex items-center justify-between py-7 first:pt-0 last:pb-0">
            <div>
              <h4 className="text-[15px] font-display font-semibold text-white/85">{c.name}</h4>
              <p className="label mt-1">{c.role}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href={`mailto:${c.email}`} className="text-zinc-600 hover:text-gold transition-colors p-2 rounded-lg hover:bg-gold/[0.04]" aria-label={`Email ${c.name}`}>
                <Mail size={15} />
              </a>
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-gold transition-colors p-2 rounded-lg hover:bg-gold/[0.04]" aria-label={`${c.name} LinkedIn`}>
                <Link2 size={15} />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
