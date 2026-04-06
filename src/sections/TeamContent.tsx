import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const team = [
  { name: 'Guido Williams', role: 'Managing Partner', location: 'Milan', bio: 'Multi-asset derivative specialist. 20+ years across Milan & London. Imperial College Management School.', initials: 'GW', email: 'guido@apjkapital.com', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/', photo: '/team/guido.jpg' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', location: 'London', bio: 'Firm operations, compliance, and client services. The operational backbone of APJ Kapital.', initials: 'AW', email: 'andrea@apjkapital.com', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/', photo: '/team/andrea.jpg' },
  { name: 'Pablo Williams', role: 'Data Scientist', location: 'London', bio: 'ML, market microstructure, systematic trading. MSc UCL. Builds the quantitative edge.', initials: 'PW', email: 'pablo@apjkapital.com', linkedin: 'https://www.linkedin.com/in/pablowilliams/', photo: '/team/pablo.jpg' },
]

function PhotoFallback({ initials }: { initials: string }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-dark-surface border border-dark-border flex items-center justify-center">
      <span className="text-[40px] font-display font-semibold text-gold/15">{initials}</span>
    </div>
  )
}

export default function TeamContent() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {team.map((m, i) => {
        const [imgErr, setImgErr] = useState(false)
        return (
          <motion.div key={m.name} {...f(0.05 + i * 0.08)} className="group">
            <div className="mb-8">
              {imgErr ? <PhotoFallback initials={m.initials} /> : (
                <img src={m.photo} alt={m.name}
                  className="w-full aspect-[4/5] rounded-2xl object-cover bg-dark-surface border border-dark-border transition-all duration-300 group-hover:border-gold/12 group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                  loading="lazy" onError={() => setImgErr(true)}
                />
              )}
            </div>
            <h3 className="text-[20px] font-display font-semibold text-white/85 group-hover:text-gold transition-colors duration-200 mb-2">{m.name}</h3>
            <p className="label mb-1">{m.role}</p>
            <p className="text-[13px] text-zinc-700 mb-6">{m.location}</p>
            <p className="text-[15px] text-zinc-500 leading-[1.8] mb-8">{m.bio}</p>
            <div className="flex flex-col gap-3 pt-6 border-t border-dark-border">
              <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2.5 text-[14px] text-zinc-600 hover:text-gold transition-colors">
                <Mail size={14} className="text-gold/20" /> {m.email}
              </a>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[14px] text-zinc-600 hover:text-gold transition-colors">
                <Link2 size={14} className="text-gold/20" /> LinkedIn
              </a>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
