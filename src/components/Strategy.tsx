import { motion } from 'framer-motion'
import { useInView } from './hooks'
import { ArrowRight } from 'lucide-react'

const strategies = [
  {
    id: '01',
    name: 'Momentum Alpha',
    asset: 'Global Equities',
    description:
      'Cross-sectional momentum strategy with dynamic factor exposure management. Uses ML-based regime detection to rotate between momentum, mean-reversion, and volatility harvesting.',
    metrics: { return: '+22.4%', sharpe: '1.12', maxDD: '-8.3%' },
  },
  {
    id: '02',
    name: 'Crypto Microstructure',
    asset: 'Digital Assets',
    description:
      'High-frequency market making and statistical arbitrage across centralized and decentralized venues. Proprietary order flow toxicity models for real-time spread optimization.',
    metrics: { return: '+34.7%', sharpe: '1.45', maxDD: '-12.1%' },
  },
  {
    id: '03',
    name: 'Event-Driven',
    asset: 'Prediction Markets',
    description:
      'Systematic strategies on political, sports, and weather prediction markets. NLP-powered sentiment extraction from news flow with automated position management.',
    metrics: { return: '+28.1%', sharpe: '0.98', maxDD: '-15.4%' },
  },
  {
    id: '04',
    name: 'Macro Volatility',
    asset: 'Multi-Asset',
    description:
      'Tail-risk hedging and volatility surface arbitrage across equity, rates, and FX options. Machine learning models for implied-realized volatility spread forecasting.',
    metrics: { return: '+15.8%', sharpe: '0.92', maxDD: '-6.7%' },
  },
]

export default function Strategy() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="strategy" className="relative py-32 px-6 md:px-12" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">Strategies</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            How We{' '}
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Generate Alpha
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {strategies.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2 }}
              className="group relative p-8 md:p-10 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <span className="text-gold/40 font-display text-sm">{s.id}</span>
                  <div>
                    <h3 className="text-xl font-display font-semibold group-hover:text-gold transition-colors">
                      {s.name}
                    </h3>
                    <span className="text-xs text-zinc-600 uppercase tracking-wider">
                      {s.asset}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                  {s.description}
                </p>

                <div className="flex gap-8 shrink-0">
                  {Object.entries(s.metrics).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-display font-semibold text-white">
                        {val}
                      </div>
                      <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">
                        {key === 'maxDD' ? 'Max DD' : key === 'return' ? 'Return' : 'Sharpe'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} className="text-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
