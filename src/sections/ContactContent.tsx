import { motion } from 'framer-motion'
import { Mail, MapPin, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
})

export default function ContactContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-16">
      {/* Left */}
      <motion.div {...f(0.1)}>
        <p className="text-[16px] text-zinc-400 leading-[2] mb-12">
          Whether you're exploring investment opportunities, seeking advisory
          services, or simply curious about what we do — reach out directly.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail size={16} className="text-gold/40 mt-1" />
            <div>
              <p className="text-[11px] text-zinc-600 tracking-[0.12em] uppercase mb-2">General</p>
              <a href="mailto:info@apjkapital.com" className="text-[16px] text-zinc-300 hover:text-gold transition-colors">info@apjkapital.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={16} className="text-gold/40 mt-1" />
            <div>
              <p className="text-[11px] text-zinc-600 tracking-[0.12em] uppercase mb-2">Locations</p>
              <p className="text-[16px] text-zinc-300">Milan, Italy &middot; London, UK</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right — team emails */}
      <motion.div {...f(0.2)} className="space-y-6">
        {[
          { name: 'Guido Williams', role: 'Managing Partner', email: 'guido@apjkapital.com', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/' },
          { name: 'Andrea Williams', role: 'Partner & Head of Operations', email: 'andrea@apjkapital.com', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/' },
          { name: 'Pablo Williams', role: 'Data Scientist', email: 'pablo@apjkapital.com', linkedin: 'https://www.linkedin.com/in/pablowilliams/' },
        ].map((c) => (
          <div key={c.name} className="flex items-center justify-between py-5 border-b border-dark-border last:border-0">
            <div>
              <h4 className="text-[15px] font-display font-semibold text-white/85">{c.name}</h4>
              <p className="text-[11px] text-gold/35 tracking-[0.1em] uppercase mt-0.5">{c.role}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href={`mailto:${c.email}`} className="text-[12px] text-zinc-600 hover:text-gold transition-colors"><Mail size={14} /></a>
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="text-[12px] text-zinc-600 hover:text-gold transition-colors"><Link2 size={14} /></a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
