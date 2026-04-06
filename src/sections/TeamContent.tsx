import { useState } from 'react'

const team = [
  { name: 'Guido Williams', role: 'Managing Partner', bio: 'Multi-asset derivative specialist with over two decades of experience in capital markets. Senior institutional roles across Milan and London spanning structured products, exotic derivatives, and cross-asset risk management. Imperial College Management School. Leads firm strategy, investment oversight, and key client relationships.', initials: 'GW', email: 'guido@apjkapital.com', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/', photo: '/team/guido.jpg' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', bio: 'Extensive experience in business management and financial administration. Oversees firm operations, compliance, and client services — the operational backbone that enables the investment team to focus on performance.', initials: 'AW', email: 'andrea@apjkapital.com', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/', photo: '/team/andrea.jpg' },
  { name: 'Pablo Williams', role: 'Data Scientist', bio: 'MSc from University College London. Specialises in machine learning, market microstructure, and systematic trading systems. Designs the models, data pipelines, and infrastructure that power the firm\u2019s technology-driven strategies across crypto, equities, and prediction markets.', initials: 'PW', email: 'pablo@apjkapital.com', linkedin: 'https://www.linkedin.com/in/pablowilliams/', photo: '/team/pablo.jpg' },
]

export default function TeamContent() {
  return (
    <div>
      <div className="max-w-[720px] mb-16">
        <h2 className="text-[28px] md:text-[36px] mb-6">Team</h2>
        <p className="text-[16px] leading-[1.85] max-w-[560px]">
          A family-founded firm combining institutional experience with
          entrepreneurial drive. We think in generations, not quarters.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {team.map((m) => {
          const [err, setErr] = useState(false)
          return (
            <div key={m.name}>
              <div className="mb-6">
                {err ? (
                  <div className="w-full aspect-[3/4] rounded-lg bg-dark-surface flex items-center justify-center">
                    <span className="text-[32px] font-display text-zinc-800">{m.initials}</span>
                  </div>
                ) : (
                  <img src={m.photo} alt={m.name}
                    className="w-full aspect-[3/4] rounded-lg object-cover bg-dark-surface"
                    loading="lazy" onError={() => setErr(true)}
                  />
                )}
              </div>
              <h3 className="text-[17px] mb-1">{m.name}</h3>
              <p className="text-[13px] text-gold/50 uppercase tracking-wider mb-5">{m.role}</p>
              <p className="text-[14px] leading-[1.8] mb-6">{m.bio}</p>
              <div className="space-y-1.5 text-[13px]">
                <a href={`mailto:${m.email}`} className="block text-zinc-600 hover:text-gold transition-colors">{m.email}</a>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="block text-zinc-600 hover:text-gold transition-colors">LinkedIn &rarr;</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
