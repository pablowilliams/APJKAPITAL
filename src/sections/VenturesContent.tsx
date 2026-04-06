import { motion } from 'framer-motion'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const ventures = [
  { name: 'Prediction Market Infrastructure', status: 'Active', text: 'Systematic strategies on political, sports, and weather prediction markets. NLP-powered sentiment extraction with automated position management.' },
  { name: 'Crypto Market Making', status: 'Active', text: 'High-frequency market making across centralised and decentralised exchanges. Proprietary order flow toxicity models for real-time spread optimisation.' },
  { name: 'Climate Risk Analytics', status: 'Development', text: 'Quantitative models for pricing climate-related financial risks. Next-generation ESG scoring frameworks in partnership with academic institutions.' },
]

export default function VenturesContent() {
  return (
    <div className="space-y-6">
      {ventures.map((v, i) => (
        <motion.div key={v.name} {...f(0.05 + i * 0.08)} className="card p-8 md:p-10 flex gap-6 items-start">
          <div className="shrink-0 mt-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${v.status === 'Active' ? 'bg-emerald-400/50' : 'bg-amber-400/50'}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
              <h3 className="text-[16px] font-display font-semibold text-white/85">{v.name}</h3>
              <span className={`text-[10px] tracking-[0.15em] uppercase ${v.status === 'Active' ? 'text-emerald-400/50' : 'text-amber-400/50'}`}>{v.status}</span>
            </div>
            <p className="text-[14px] text-zinc-500 leading-[1.85]">{v.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
