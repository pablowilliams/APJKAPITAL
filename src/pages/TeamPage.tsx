import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Mail, Phone, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const team = [
  {
    name: 'Guido Williams', role: 'Managing Partner', location: 'Milan',
    bio: 'Multi-asset derivative specialist. 20+ years across Milan & London. Imperial College.',
    initials: 'GW', email: 'guido@apjkapital.com', phone: '+39 335 764 2008',
    linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/', photo: '/team/guido.jpg',
  },
  {
    name: 'Andrea Williams', role: 'Partner & Head of Operations', location: 'London',
    bio: 'Firm operations, compliance, and client services. The backbone of APJ Kapital.',
    initials: 'AW', email: 'andrea@apjkapital.com', phone: '+44 7535 666050',
    linkedin: 'https://www.linkedin.com/in/andreapbwilliams/', photo: '/team/andrea.jpg',
  },
  {
    name: 'Pablo Williams', role: 'Data Scientist', location: 'London',
    bio: 'ML, market microstructure, systematic trading. MSc UCL. Builds the quant edge.',
    initials: 'PW', email: 'pablo@apjkapital.com', phone: '+44 7508 522776',
    linkedin: 'https://www.linkedin.com/in/pablowilliams/', photo: '/team/pablo.jpg',
  },
]

export default function TeamPage() {
  return (
    <PageWrapper>
      <section className="px-8 md:px-12 py-20 md:py-32">
        <div className="max-w-[900px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-8">
            Team
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[36px] sm:text-[44px] md:text-[56px] font-display font-bold tracking-[-0.03em] mb-8">
            The people behind APJ
          </motion.h1>

          <motion.p {...f(0.18)} className="text-[16px] text-zinc-400 leading-[2] mb-20 max-w-[440px]">
            A family-founded firm. We think in generations, not quarters.
          </motion.p>

          {/* Side by side */}
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((m, i) => (
              <motion.div key={m.name} {...f(0.25 + i * 0.1)} className="group">
                {/* Photo */}
                <div className="mb-6">
                  <img
                    src={m.photo} alt={m.name}
                    className="w-full aspect-[4/5] rounded-2xl object-cover bg-dark-surface border border-dark-border group-hover:border-gold/15 transition-colors"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement
                      t.style.display = 'none'
                      t.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden w-full aspect-[4/5] rounded-2xl bg-dark-surface border border-dark-border items-center justify-center">
                    <span className="text-[40px] font-display font-semibold text-gold/25">{m.initials}</span>
                  </div>
                </div>

                <h3 className="text-[17px] font-display font-semibold text-white/90 group-hover:text-gold transition-colors mb-1">
                  {m.name}
                </h3>
                <p className="text-[11px] text-gold/40 tracking-[0.12em] uppercase mb-1">{m.role}</p>
                <p className="text-[11px] text-zinc-700 mb-5">{m.location}</p>

                <p className="text-[14px] text-zinc-500 leading-[1.85] mb-6">{m.bio}</p>

                <div className="flex flex-col gap-2 pt-5 border-t border-dark-border">
                  <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-[12px] text-zinc-600 hover:text-gold transition-colors">
                    <Mail size={11} className="text-gold/25" /> {m.email}
                  </a>
                  <a href={`tel:${m.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-[12px] text-zinc-600 hover:text-gold transition-colors">
                    <Phone size={11} className="text-gold/25" /> {m.phone}
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] text-zinc-600 hover:text-gold transition-colors">
                    <Link2 size={11} className="text-gold/25" /> LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  )
}
