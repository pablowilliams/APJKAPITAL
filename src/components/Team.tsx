import { motion } from 'framer-motion'
import { useInView } from './hooks'
import { Link2, ExternalLink } from 'lucide-react'

const team = [
  {
    name: 'Pablo',
    role: 'Founder & CIO',
    bio: 'Quantitative researcher with deep expertise in systematic trading, machine learning, and market microstructure. MSc from UCL.',
    initials: 'P',
  },
  {
    name: 'Alex',
    role: 'Head of Technology',
    bio: 'Full-stack engineer specializing in low-latency trading systems and real-time data pipelines. Previously at top-tier HFT firms.',
    initials: 'A',
  },
  {
    name: 'James',
    role: 'Head of Research',
    bio: 'PhD in Applied Mathematics. Expert in stochastic processes, options pricing, and statistical arbitrage strategy development.',
    initials: 'J',
  },
]

export default function Team() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="team" className="relative py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Team</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            The{' '}
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Minds
            </span>{' '}
            Behind APJ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2 }}
              className="group p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/20 transition-all duration-500 text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-gold">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold group-hover:text-gold transition-colors">
                {member.name}
              </h3>
              <p className="text-gold/70 text-sm mt-1 mb-4">{member.role}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{member.bio}</p>

              <div className="flex items-center justify-center gap-3 mt-6">
                <button className="w-9 h-9 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-zinc-600 hover:text-gold hover:border-gold/30 transition-all">
                  <Link2 size={16} />
                </button>
                <button className="w-9 h-9 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-zinc-600 hover:text-gold hover:border-gold/30 transition-all">
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
