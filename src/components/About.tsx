import { motion } from 'framer-motion'
import { useInView } from './hooks'
import { TrendingUp, Shield, BarChart3, Globe } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: 'Multi-Asset', label: 'Derivatives Focus' },
  { value: 'Global', label: 'Market Coverage' },
  { value: 'Milan & London', label: 'Presence' },
]

const pillars = [
  {
    icon: BarChart3,
    title: 'Capital Markets',
    description: 'Deep expertise across equity, fixed income, FX, and commodity derivatives, with a focus on structured products and bespoke hedging solutions.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Institutional-grade risk frameworks combining quantitative models with seasoned market judgement to protect and grow capital.',
  },
  {
    icon: TrendingUp,
    title: 'Quantitative Strategies',
    description: 'Systematic, data-driven investment strategies leveraging machine learning, statistical arbitrage, and advanced signal processing.',
  },
  {
    icon: Globe,
    title: 'Advisory & Family Office',
    description: 'Tailored advisory services for families and institutions, from wealth structuring to direct investment origination across global markets.',
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
              <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-2">
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
              Conviction Meets
              <br />
              <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
                Discipline
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
              APJ Kapital is a multi-asset investment and advisory firm built on
              decades of capital markets experience. Founded by professionals with
              deep roots in derivatives, structured products, and institutional
              trading, we combine seasoned market insight with next-generation
              quantitative technology. Our family office heritage means we think
              like owners — focused on long-term value, capital preservation,
              and sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24 p-10 rounded-2xl border border-gold/10 bg-gradient-to-br from-gold/[0.03] to-transparent relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <span className="text-gold text-sm tracking-widest uppercase block mb-4">Our Mission</span>
            <blockquote className="text-2xl md:text-3xl font-display font-medium leading-snug text-white/90">
              &ldquo;To deliver institutional-quality investment solutions with the
              agility of a family office — bridging traditional capital markets
              expertise with the frontier of quantitative innovation.&rdquo;
            </blockquote>
          </div>
        </motion.div>

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
