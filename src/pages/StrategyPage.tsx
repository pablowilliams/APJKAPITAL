import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const strategies = [
  {
    id: '01', name: 'Derivatives & Structured Products', tag: 'Multi-Asset',
    text: 'Bespoke derivative solutions across equities, rates, FX, and commodities. Payoff structures precisely matched to each client\u2019s risk appetite.',
    points: ['Structured notes', 'FX & rate hedging', 'Commodity overlays', 'Payoff engineering'],
  },
  {
    id: '02', name: 'Systematic Quantitative Trading', tag: 'Global Markets',
    text: 'ML-driven strategies that systematically capture alpha. Rigorous backtesting and out-of-sample validation before any live deployment.',
    points: ['Statistical arbitrage', 'Momentum & mean-reversion', 'Regime-adaptive sizing', 'Real-time risk monitoring'],
  },
  {
    id: '03', name: 'Digital Assets & Prediction Markets', tag: 'Crypto & Events',
    text: 'Institutional discipline applied to cryptocurrency and event-driven markets. High-frequency market making and systematic directional strategies.',
    points: ['CEX & DEX market making', 'Cross-venue arbitrage', 'Prediction market strategies', 'Sentiment analysis'],
  },
  {
    id: '04', name: 'Family Office Advisory', tag: 'Wealth Management',
    text: 'Advisory built around relationships. Portfolio construction, risk management, wealth structuring, and direct investment origination.',
    points: ['Asset allocation', 'Tax-efficient structuring', 'Direct investments', 'Performance reporting'],
  },
]

export default function StrategyPage() {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-8 md:px-12 py-16 md:py-24">
        <div className="max-w-[720px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-6">
            Strategy
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[32px] sm:text-[40px] md:text-[52px] font-display font-bold leading-[1.1] tracking-[-0.03em] mb-8">
            Our capabilities
          </motion.h1>

          <motion.p {...f(0.18)} className="text-[16px] text-zinc-400 leading-[1.85] mb-20 max-w-[560px]">
            A full spectrum of investment and advisory solutions, each rooted
            in real market experience and a commitment to transparency.
          </motion.p>

          <div className="space-y-0 divide-y divide-dark-border">
            {strategies.map((s, i) => (
              <motion.div key={s.id} {...f(0.25 + i * 0.08)} className="py-10 first:pt-0">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[11px] text-gold/30 font-mono">{s.id}</span>
                  <div>
                    <h3 className="text-[18px] font-display font-semibold text-white/90 tracking-[-0.01em]">
                      {s.name}
                    </h3>
                    <span className="text-[11px] text-zinc-600 tracking-[0.15em] uppercase">{s.tag}</span>
                  </div>
                </div>
                <p className="text-[15px] text-zinc-500 leading-[1.8] mb-6 ml-9">{s.text}</p>
                <div className="ml-9 grid grid-cols-2 gap-x-6 gap-y-2">
                  {s.points.map((p) => (
                    <span key={p} className="text-[13px] text-zinc-600 flex items-center gap-2.5">
                      <span className="w-[3px] h-[3px] rounded-full bg-gold/30" />
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  )
}
