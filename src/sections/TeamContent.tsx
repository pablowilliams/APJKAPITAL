import { motion } from 'framer-motion'
import { Mail, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
})

const team = [
  { name: 'Guido Williams', role: 'Managing Partner', location: 'Milan', bio: 'Multi-asset derivative specialist. 20+ years across Milan & London. Imperial College Management School.', initials: 'GW', email: 'guido@apjkapital.com', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/', photo: '/team/guido.jpg' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', location: 'London', bio: 'Firm operations, compliance, and client services. The operational backbone of APJ Kapital.', initials: 'AW', email: 'andrea@apjkapital.com', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/', photo: '/team/andrea.jpg' },
  { name: 'Pablo Williams', role: 'Data Scientist', location: 'London', bio: 'ML, market microstructure, systematic trading. MSc UCL. Builds the quantitative edge.', initials: 'PW', email: 'pablo@apjkapital.com', linkedin: 'https://www.linkedin.com/in/pablowilliams/', photo: '/team/pablo.jpg' },
]

export default function TeamContent() {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {team.map((m, i) => (
        <motion.div key={m.name} {...f(0.1 + i * 0.1)} className="group">
          <div className="mb-6">
            <img src={m.photo} alt={m.name}
              className="w-full aspect-[4/5] rounded-xl object-cover bg-dark-surface border border-dark-border"
              onError={(e) => { const t = e.target as HTMLImageElement; t.style.display='none'; t.nextElementSibling?.classList.remove('hidden') }}
            />
            <div className="hidden w-full aspect-[4/5] rounded-xl bg-dark-surface border border-dark-border items-center justify-center">
              <span className="text-[36px] font-display font-semibold text-gold/20">{m.initials}</span>
            </div>
          </div>
          <h3 className="text-[17px] font-display font-semibold text-white/85 mb-1">{m.name}</h3>
          <p className="text-[11px] text-gold/40 tracking-[0.12em] uppercase mb-1">{m.role}</p>
          <p className="text-[11px] text-zinc-700 mb-5">{m.location}</p>
          <p className="text-[14px] text-zinc-500 leading-[1.85] mb-6">{m.bio}</p>
          <div className="flex flex-col gap-2 pt-5 border-t border-dark-border">
            <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-[12px] text-zinc-600 hover:text-gold transition-colors">
              <Mail size={11} className="text-gold/25" /> {m.email}
            </a>
            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] text-zinc-600 hover:text-gold transition-colors">
              <Link2 size={11} className="text-gold/25" /> LinkedIn
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
