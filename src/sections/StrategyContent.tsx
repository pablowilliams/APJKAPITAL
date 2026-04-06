import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]
const f = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: d, ease } })

const strategies = [
  { id: '01', name: 'Derivatives & Structured Products', tag: 'Multi-Asset', text: 'Bespoke derivative solutions across equities, rates, FX, and commodities. Payoff structures matched to each client\u2019s risk appetite.', points: ['Structured notes', 'FX & rate hedging', 'Commodity overlays', 'Payoff engineering'] },
  { id: '02', name: 'Systematic Quantitative Trading', tag: 'Global Markets', text: 'ML-driven strategies that capture alpha. Rigorous backtesting and out-of-sample validation before live deployment.', points: ['Statistical arbitrage', 'Momentum signals', 'Regime-adaptive sizing', 'Real-time risk'] },
  { id: '03', name: 'Digital Assets & Prediction Markets', tag: 'Crypto & Events', text: 'Institutional discipline applied to cryptocurrency and event-driven markets. High-frequency market making and systematic directional strategies.', points: ['CEX & DEX making', 'Cross-venue arb', 'Prediction markets', 'Sentiment analysis'] },
  { id: '04', name: 'Family Office Advisory', tag: 'Wealth Management', text: 'Advisory built around relationships. Portfolio construction, risk management, wealth structuring, and direct investment origination.', points: ['Asset allocation', 'Tax structuring', 'Direct investments', 'Reporting'] },
]

export default function StrategyContent() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {strategies.map((s, i) => (
        <motion.div key={s.id} {...f(0.05 + i * 0.06)} className="card group flex flex-col cursor-default">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[12px] text-gold/20 font-mono font-medium">{s.id}</span>
            <div>
              <h3 className="text-[20px] font-display font-semibold text-white/85 group-hover:text-gold transition-colors duration-300 mb-1.5">{s.name}</h3>
              <span className="text-[12px] text-zinc-500 tracking-[0.15em] uppercase">{s.tag}</span>
            </div>
          </div>
          <p className="text-[16px] text-zinc-400 leading-[1.8] mb-8 flex-1">{s.text}</p>
          <div className="grid grid-cols-2 gap-3 pt-7 border-t border-dark-border/60">
            {s.points.map((p) => (
              <span key={p} className="text-[14px] text-zinc-500 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/25 shadow-[0_0_4px_rgba(201,168,76,0.2)]" /> {p}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
