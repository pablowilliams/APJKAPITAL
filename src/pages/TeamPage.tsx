import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Mail, Phone, Link2 } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
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
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-8 md:px-12 py-20 md:py-28">
        <div className="max-w-[960px] mx-auto w-full">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-5">
            Team
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[32px] sm:text-[40px] md:text-[48px] font-display font-bold leading-[1.1] tracking-[-0.03em] mb-6">
            The people behind APJ
          </motion.h1>

          <motion.p {...f(0.18)} className="text-[15px] text-zinc-500 leading-[1.8] mb-14 max-w-[440px]">
            A family-founded firm. We think in generations, not quarters.
          </motion.p>

          {/* Side by side grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                {...f(0.25 + i * 0.1)}
                className="group flex flex-col"
              >
                {/* Photo */}
                <div className="mb-5">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full aspect-[4/5] rounded-lg object-cover bg-dark-surface border border-dark-border group-hover:border-gold/15 transition-colors"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement
                      t.style.display = 'none'
                      t.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden w-full aspect-[4/5] rounded-lg bg-dark-surface border border-dark-border items-center justify-center group-hover:border-gold/15 transition-colors">
                    <span className="text-[36px] font-display font-semibold text-gold/30">{m.initials}</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-[16px] font-display font-semibold text-white/90 group-hover:text-gold transition-colors">
                  {m.name}
                </h3>
                <p className="text-[11px] text-gold/40 tracking-[0.12em] uppercase mt-1 mb-3">{m.role}</p>
                <p className="text-[13px] text-zinc-500 leading-[1.7] mb-4 flex-1">{m.bio}</p>

                {/* Contact */}
                <div className="flex flex-col gap-1.5 pt-4 border-t border-dark-border">
                  <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1.5 text-[12px] text-zinc-600 hover:text-gold transition-colors">
                    <Mail size={11} className="text-gold/30" /> {m.email}
                  </a>
                  <a href={`tel:${m.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 text-[12px] text-zinc-600 hover:text-gold transition-colors">
                    <Phone size={11} className="text-gold/30" /> {m.phone}
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] text-zinc-600 hover:text-gold transition-colors">
                    <Link2 size={11} className="text-gold/30" /> LinkedIn
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
