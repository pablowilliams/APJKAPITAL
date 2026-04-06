import { motion } from 'framer-motion'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const insights = [
  { title: 'Liberation Day +1 Year', date: '2 Apr 2026', text: 'One year since sweeping tariffs. Markets recovered but global trade patterns permanently shifted. Manufacturing employment down 89K since April 2025.' },
  { title: 'Strait of Hormuz Crisis', date: '28 Mar 2026', text: 'Operation Epic Fury constrained the world\u2019s most critical oil chokepoint. WTI surged 50% in a month. Energy equities outperforming all sectors.' },
  { title: 'Gold\u2019s New Paradigm', date: '25 Mar 2026', text: 'Central bank purchases accelerating \u2014 78 tonnes YTD ETF inflows (+73% YoY). Geopolitical risk and USD weakness creating a structural floor.' },
  { title: 'Fed on Hold', date: '20 Mar 2026', text: 'Markets pricing zero cuts through 2026 as energy-driven CPI dominates. The "higher for longer" narrative now entrenched.' },
]

export default function InsightsContent() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {insights.map((item, i) => (
        <motion.div key={item.title} {...f(0.05 + i * 0.07)} className="card p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2 h-2 rounded-full bg-purple-400/50" />
            <span className="text-[11px] text-zinc-600 tracking-[0.08em]">{item.date}</span>
          </div>
          <h3 className="text-[16px] font-display font-semibold text-white/85 mb-4">{item.title}</h3>
          <p className="text-[14px] text-zinc-500 leading-[1.85]">{item.text}</p>
        </motion.div>
      ))}
    </div>
  )
}
