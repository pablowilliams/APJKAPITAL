import { motion } from 'framer-motion'
import { useInView } from './hooks'
import { ArrowRight } from 'lucide-react'

const strategies = [
  {
    id: '01',
    name: 'Derivatives & Structured Products',
    asset: 'Multi-Asset',
    description:
      'Bespoke derivative solutions across equities, rates, FX, and commodities. From vanilla hedging to complex exotic structures, we design payoffs tailored to each client\u2019s risk-return objectives.',
  },
  {
    id: '02',
    name: 'Systematic Quantitative Trading',
    asset: 'Global Markets',
    description:
      'Machine learning-driven strategies spanning momentum, mean-reversion, and volatility harvesting. Proprietary models trained on decades of market data with rigorous out-of-sample validation.',
  },
  {
    id: '03',
    name: 'Digital Assets & Prediction Markets',
    asset: 'Crypto & Events',
    description:
      'High-frequency market making, statistical arbitrage across centralised and decentralised venues, and systematic strategies on political and event-driven prediction markets.',
  },
  {
    id: '04',
    name: 'Family Office & Advisory',
    asset: 'Wealth Management',
    description:
      'Holistic wealth management combining portfolio construction, risk oversight, tax-efficient structuring, and direct investment origination. Built around each family\u2019s unique goals and values.',
  },
]

export default function Strategy() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="strategy" className="relative py-32 px-6 md:px-12" ref={ref}>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Our{' '}
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl">
            From institutional derivatives to cutting-edge quantitative strategies,
            we offer a full spectrum of investment solutions.
          </p>
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
                <div className="flex items-center gap-4 md:w-80 shrink-0">
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
