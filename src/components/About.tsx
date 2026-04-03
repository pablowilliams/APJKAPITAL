import { motion } from 'framer-motion'
import { useInView } from './hooks'
import { TrendingUp, Shield, Cpu, Globe } from 'lucide-react'

const stats = [
  { value: '$50M+', label: 'Assets Under Strategy' },
  { value: '18%', label: 'Avg. Annual Return' },
  { value: '0.85', label: 'Sharpe Ratio' },
  { value: '24/7', label: 'Market Monitoring' },
]

const pillars = [
  {
    icon: Cpu,
    title: 'Quantitative Edge',
    description: 'Machine learning models trained on decades of market microstructure data to identify alpha signals.',
  },
  {
    icon: Shield,
    title: 'Risk First',
    description: 'Dynamic position sizing and tail-risk hedging ensure capital preservation across all market regimes.',
  },
  {
    icon: TrendingUp,
    title: 'Systematic Execution',
    description: 'Fully automated trading infrastructure with sub-millisecond latency and 99.99% uptime.',
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Multi-asset strategies spanning equities, crypto, commodities, and prediction markets.',
  },
]

export default function About() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="about" className="relative py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 p-8 rounded-2xl bg-dark-card border border-dark-border"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About header */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight">
              Where Finance Meets
              <br />
              <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center"
          >
            <p className="text-zinc-400 text-lg leading-relaxed">
              APJ Kapital is a quantitative investment firm that leverages advanced
              statistical models, machine learning, and proprietary technology to
              generate consistent risk-adjusted returns. Founded on the principle
              that markets are complex adaptive systems, we build strategies that
              evolve with the markets they trade.
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.5 }}
              className="group p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <pillar.icon size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{pillar.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
