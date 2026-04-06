import { motion } from 'framer-motion'
import { TrendingUp, Shield, BarChart3, Globe } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]
const f = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: d, ease } })

const pillars = [
  { icon: BarChart3, title: 'Capital Markets', text: 'Deep derivatives expertise across equity, fixed income, FX, and commodities.' },
  { icon: Shield, title: 'Risk Management', text: 'Quantitative models paired with decades of institutional market intuition.' },
  { icon: TrendingUp, title: 'Quantitative Innovation', text: 'Systematic strategies built on machine learning and statistical research.' },
  { icon: Globe, title: 'Global Perspective', text: 'Dual roots in Milan and London — a vantage point others miss.' },
]

export default function AboutContent() {
  return (
    <div>
      <motion.div {...f(0.05)} className="max-w-[780px] space-y-8 text-[17px] text-zinc-400 leading-[1.85] mb-20">
        <p>APJ Kapital is a multi-asset investment and advisory firm founded by a family with deep roots in the financial markets. We combine institutional-level expertise in derivatives and structured products with the agility and personal attention of a family office.</p>
        <p>Our founding team brings over two decades of experience across the world's leading capital markets — from structured derivative desks in Milan to quantitative research labs in London.</p>
        <p>The future of investment sits at the intersection of traditional finance and technology. We don't just run models — we understand the markets behind them.</p>
      </motion.div>

      <motion.div {...f(0.15)} className="border-l-[3px] border-gold/30 pl-8 mb-24 hover:border-gold/50 transition-colors duration-300 max-w-[680px]">
        <p className="label mb-5">Mission</p>
        <p className="text-[24px] lg:text-[28px] font-display font-medium leading-[1.45] text-white/80">
          "To deliver institutional-quality investment solutions with the agility of a family office."
        </p>
      </motion.div>

      <motion.div {...f(0.25)} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {pillars.map((p, i) => (
          <motion.div key={p.title} {...f(0.25 + i * 0.05)} className="card group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gold/[0.08] shadow-[0_0_12px_rgba(201,168,76,0.04)] flex items-center justify-center mb-6 group-hover:bg-gold/[0.14] transition-colors duration-300">
              <p.icon size={22} className="text-gold/50 group-hover:text-gold/70 transition-colors duration-300" />
            </div>
            <h3 className="text-[18px] font-display font-semibold text-white/85 mb-4">{p.title}</h3>
            <p className="text-[15px] text-zinc-500 leading-[1.8]">{p.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div {...f(0.4)} className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-dark-border/50">
        {[{ v: '20+', l: 'Years Experience' }, { v: 'Multi-Asset', l: 'Derivatives Focus' }, { v: 'Global', l: 'Market Coverage' }, { v: 'Milan & London', l: 'Presence' }].map((s) => (
          <div key={s.l}>
            <div className="text-[26px] font-display font-bold text-gold mb-2">{s.v}</div>
            <div className="text-[13px] text-zinc-500 tracking-[0.1em] uppercase">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
