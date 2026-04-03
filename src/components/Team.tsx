import { motion } from 'framer-motion'
import { useInView } from './hooks'
import { Link2, Mail, Phone } from 'lucide-react'

const team = [
  {
    name: 'Guido Williams',
    role: 'Managing Partner',
    bio: 'Multi-asset derivative specialist with decades of experience across capital markets. Former institutional roles in Milan and London. Imperial College Management School. Leads firm strategy, client relationships, and investment oversight.',
    initials: 'GW',
    email: 'guido@apjkapital.com',
    phone: '+39 02 XXX XXXX',
    linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/',
  },
  {
    name: 'Andrea Williams',
    role: 'Partner & Head of Operations',
    bio: 'Oversees firm operations, compliance, and client services. Brings extensive experience in business management and financial administration to ensure seamless execution across all firm activities.',
    initials: 'AW',
    email: 'andrea@apjkapital.com',
    phone: '+39 02 XXX XXXX',
    linkedin: 'https://www.linkedin.com/in/andreapbwilliams/',
  },
  {
    name: 'Pablo Williams',
    role: 'Head of Quantitative Strategy',
    bio: 'Quantitative researcher and technologist. MSc from UCL. Specialises in systematic trading, machine learning, and market microstructure. Builds the data-driven strategies and technology infrastructure that power APJ Kapital\'s next-generation edge.',
    initials: 'PW',
    email: 'pablo@apjkapital.com',
    phone: '+44 XXX XXX XXXX',
    linkedin: '#',
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
              People
            </span>{' '}
            Behind APJ
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            A family-founded firm combining institutional experience with entrepreneurial drive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2 }}
              className="group p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/20 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                <span className="text-2xl font-display font-bold text-gold">
                  {member.initials}
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-display font-semibold group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold/70 text-sm mt-1 mb-4 font-medium">{member.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{member.bio}</p>
              </div>

              {/* Contact details */}
              <div className="space-y-3 pt-6 border-t border-dark-border">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-gold transition-colors"
                >
                  <Mail size={14} className="text-gold/50" />
                  {member.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <Phone size={14} className="text-gold/50" />
                  {member.phone}
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-gold transition-colors"
                >
                  <Link2 size={14} className="text-gold/50" />
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
