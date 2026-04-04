import { motion } from 'framer-motion'

const f = (d: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
})

const ventures = [
  { name: 'Prediction Market Infrastructure', status: 'Active', text: 'Building systematic strategies on political, sports, and weather prediction markets. NLP-powered sentiment extraction with automated position management across multiple platforms.' },
  { name: 'Crypto Market Making', status: 'Active', text: 'High-frequency market making across centralised and decentralised exchanges. Proprietary order flow toxicity models for real-time spread optimisation.' },
  { name: 'Climate Risk Analytics', status: 'Development', text: 'Quantitative models for pricing climate-related financial risks. Partnering with academic institutions to develop next-generation ESG scoring frameworks.' },
]

export default function VenturesContent() {
  return (
    <div className="space-y-8">
      {ventures.map((v, i) => (
        <motion.div key={v.name} {...f(0.1 + i * 0.1)} className="flex gap-8 items-start p-8 rounded-xl bg-dark-surface border border-dark-border">
          <div className="shrink-0 mt-1">
            <div className={`w-3 h-3 rounded-full ${v.status === 'Active' ? 'bg-emerald-400/60' : 'bg-amber-400/60'}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="text-[17px] font-display font-semibold text-white/85">{v.name}</h3>
              <span className={`text-[10px] tracking-[0.15em] uppercase ${v.status === 'Active' ? 'text-emerald-400/60' : 'text-amber-400/60'}`}>{v.status}</span>
            </div>
            <p className="text-[15px] text-zinc-500 leading-[1.9]">{v.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
