import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]
const f = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: d, ease } })

const ventures = [
  { name: 'Prediction Market Infrastructure', status: 'Active', text: 'Systematic strategies on political, sports, and weather prediction markets. NLP-powered sentiment extraction with automated position management.' },
  { name: 'Crypto Market Making', status: 'Active', text: 'High-frequency market making across centralised and decentralised exchanges. Proprietary order flow toxicity models for real-time spread optimisation.' },
  { name: 'Climate Risk Analytics', status: 'Development', text: 'Quantitative models for pricing climate-related financial risks. Next-generation ESG scoring frameworks in partnership with academic institutions.' },
]

export default function VenturesContent() {
  return (
    <div className="space-y-6">
      {ventures.map((v, i) => (
        <motion.div key={v.name} {...f(0.05 + i * 0.06)} className="card group flex gap-6 md:gap-8 items-start cursor-default">
          <div className="shrink-0 mt-2">
            <div className={`w-3 h-3 rounded-full shadow-[0_0_6px] ${v.status === 'Active' ? 'bg-emerald-400/60 shadow-emerald-400/20' : 'bg-amber-400/60 shadow-amber-400/20'}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 mb-5">
              <h3 className="text-[20px] font-display font-semibold text-white/85 group-hover:text-gold transition-colors duration-300">{v.name}</h3>
              <span className={`text-[12px] tracking-[0.12em] uppercase font-medium ${v.status === 'Active' ? 'text-emerald-400/60' : 'text-amber-400/60'}`}>{v.status}</span>
            </div>
            <p className="text-[16px] text-zinc-400 leading-[1.8]">{v.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
