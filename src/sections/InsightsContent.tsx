import { motion } from 'framer-motion'

const f = (d: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
})

const insights = [
  { title: 'Liberation Day +1 Year', date: '2 Apr 2026', text: 'One year since Trump\u2019s sweeping tariffs, markets have recovered but global trade patterns have permanently shifted. Manufacturing employment down 89K since April 2025.' },
  { title: 'Strait of Hormuz Crisis', date: '28 Mar 2026', text: 'Operation Epic Fury has effectively constrained the world\u2019s most critical oil chokepoint. WTI surged 50% in a month. Energy equities outperforming all sectors.' },
  { title: 'Gold\u2019s New Paradigm', date: '25 Mar 2026', text: 'Central bank purchases accelerating \u2014 78 tonnes YTD ETF inflows (+73% YoY). The combination of geopolitical risk and USD structural weakness creating a new floor.' },
  { title: 'Fed on Hold', date: '20 Mar 2026', text: 'Markets pricing zero cuts through 2026 as energy-driven CPI pressures dominate. The "higher for longer" narrative is now "higher forever" for some analysts.' },
]

export default function InsightsContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {insights.map((item, i) => (
        <motion.div key={item.title} {...f(0.1 + i * 0.08)} className="p-8 rounded-xl bg-dark-surface border border-dark-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400/60" />
            <span className="text-[11px] text-zinc-600 tracking-wider">{item.date}</span>
          </div>
          <h3 className="text-[17px] font-display font-semibold text-white/85 mb-4">{item.title}</h3>
          <p className="text-[14px] text-zinc-500 leading-[1.85]">{item.text}</p>
        </motion.div>
      ))}
    </div>
  )
}
