import { motion } from 'framer-motion'

const f = (d: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
})

const strategies = [
  { id: '01', name: 'Derivatives & Structured Products', tag: 'Multi-Asset', text: 'Bespoke derivative solutions across equities, rates, FX, and commodities. Payoff structures precisely matched to each client\u2019s risk appetite.', points: ['Structured notes', 'FX & rate hedging', 'Commodity overlays', 'Payoff engineering'] },
  { id: '02', name: 'Systematic Quantitative Trading', tag: 'Global Markets', text: 'ML-driven strategies that systematically capture alpha. Rigorous backtesting and out-of-sample validation before any live deployment.', points: ['Statistical arbitrage', 'Momentum signals', 'Regime-adaptive sizing', 'Real-time risk'] },
  { id: '03', name: 'Digital Assets & Prediction Markets', tag: 'Crypto & Events', text: 'Institutional discipline applied to cryptocurrency and event-driven markets. High-frequency market making and systematic directional strategies.', points: ['CEX & DEX making', 'Cross-venue arb', 'Prediction markets', 'Sentiment analysis'] },
  { id: '04', name: 'Family Office Advisory', tag: 'Wealth Management', text: 'Advisory built around relationships. Portfolio construction, risk management, wealth structuring, and direct investment origination.', points: ['Asset allocation', 'Tax structuring', 'Direct investments', 'Performance reporting'] },
]

export default function StrategyContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {strategies.map((s, i) => (
        <motion.div key={s.id} {...f(0.1 + i * 0.08)} className="p-8 rounded-xl bg-dark-surface border border-dark-border">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-[11px] text-gold/20 font-mono">{s.id}</span>
            <div>
              <h3 className="text-[17px] font-display font-semibold text-white/85 mb-1">{s.name}</h3>
              <span className="text-[10px] text-zinc-600 tracking-[0.15em] uppercase">{s.tag}</span>
            </div>
          </div>
          <p className="text-[14px] text-zinc-500 leading-[1.85] mb-6">{s.text}</p>
          <div className="grid grid-cols-2 gap-2">
            {s.points.map((p) => (
              <span key={p} className="text-[12px] text-zinc-600 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-400/30" /> {p}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
