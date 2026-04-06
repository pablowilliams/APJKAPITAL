import { motion } from 'framer-motion'
import { TrendingUp, Shield, BarChart3, Globe } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const pillars = [
  { icon: BarChart3, title: 'Capital Markets', text: 'Deep derivatives expertise across equity, fixed income, FX, and commodities.' },
  { icon: Shield, title: 'Risk Management', text: 'Quantitative models paired with decades of institutional market intuition.' },
  { icon: TrendingUp, title: 'Quantitative Innovation', text: 'Systematic strategies built on machine learning and statistical research.' },
  { icon: Globe, title: 'Global Perspective', text: 'Dual roots in Milan and London — a vantage point others miss.' },
]

export default function AboutContent() {
  return (
    <div>
      {/* Story */}
      <motion.div {...f(0.05)} className="max-w-[800px] space-y-8 text-[17px] text-zinc-400 leading-[1.85] mb-24">
        <p>
          APJ Kapital is a multi-asset investment and advisory firm founded
          by a family with deep roots in the financial markets. We combine
          institutional-level expertise in derivatives and structured products
          with the agility and personal attention of a family office.
        </p>
        <p>
          Our founding team brings over two decades of experience across the
          world's leading capital markets — from structured derivative desks
          in Milan to quantitative research labs in London.
        </p>
        <p>
          The future of investment sits at the intersection of traditional
          finance and technology. We don't just run models — we understand
          the markets behind them.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div {...f(0.2)} className="border-l-2 border-gold/20 pl-10 mb-28 max-w-[700px]">
        <p className="label mb-6">Mission</p>
        <p className="text-[24px] md:text-[28px] font-display font-medium leading-[1.45] text-white/80">
          "To deliver institutional-quality investment solutions with the
          agility of a family office."
        </p>
      </motion.div>

      {/* Pillars — full-width 4-column */}
      <motion.div {...f(0.3)} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
        {pillars.map((p, i) => (
          <motion.div key={p.title} {...f(0.3 + i * 0.06)} className="card">
            <div className="w-12 h-12 rounded-xl bg-gold/[0.05] flex items-center justify-center mb-6">
              <p.icon size={22} className="text-gold/50" />
            </div>
            <h3 className="text-[18px] font-display font-semibold text-white/85 mb-4">{p.title}</h3>
            <p className="text-[15px] text-zinc-500 leading-[1.8]">{p.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats — full width */}
      <motion.div {...f(0.5)} className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-dark-border">
        {[{ v: '20+', l: 'Years Experience' }, { v: 'Multi-Asset', l: 'Derivatives Focus' }, { v: 'Global', l: 'Market Coverage' }, { v: 'Milan & London', l: 'Presence' }].map((s) => (
          <div key={s.l}>
            <div className="text-[26px] font-display font-bold text-gold mb-2">{s.v}</div>
            <div className="text-[13px] text-zinc-600 tracking-[0.1em] uppercase">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
