import { motion } from 'framer-motion'
import { TrendingUp, Shield, BarChart3, Globe } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
})

const pillars = [
  { icon: BarChart3, title: 'Capital Markets', text: 'Deep derivatives expertise across equity, fixed income, FX, and commodities.' },
  { icon: Shield, title: 'Risk Management', text: 'Quantitative models paired with decades of institutional market intuition.' },
  { icon: TrendingUp, title: 'Quantitative Innovation', text: 'Systematic strategies built on machine learning and statistical research.' },
  { icon: Globe, title: 'Global Perspective', text: 'Dual roots in Milan and London — a vantage point others miss.' },
]

export default function AboutContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Left */}
      <div>
        <motion.div {...f(0.1)} className="space-y-8 text-[16px] text-zinc-400 leading-[2] mb-16">
          <p>
            APJ Kapital is a multi-asset investment and advisory firm founded
            by a family with deep roots in the financial markets. We combine
            institutional-level expertise in derivatives and structured products
            with the agility and personal attention of a family office.
          </p>
          <p>
            Our founding team brings over two decades of experience across the
            world's leading capital markets — from structured derivative desks in
            Milan to quantitative research labs in London.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div {...f(0.25)} className="border-l-2 border-gold/25 pl-8">
          <p className="text-gold/50 text-[11px] tracking-[0.25em] uppercase mb-5">Mission</p>
          <p className="text-[19px] font-display font-medium leading-[1.6] text-white/80">
            "To deliver institutional-quality investment solutions with the
            agility of a family office."
          </p>
        </motion.div>
      </div>

      {/* Right — pillars */}
      <div className="space-y-8">
        {pillars.map((p, i) => (
          <motion.div key={p.title} {...f(0.15 + i * 0.08)} className="flex gap-5">
            <div className="w-11 h-11 rounded-lg bg-gold/[0.06] flex items-center justify-center shrink-0 mt-0.5">
              <p.icon size={18} className="text-gold/50" />
            </div>
            <div>
              <h3 className="text-[16px] font-display font-semibold mb-2 text-white/85">{p.title}</h3>
              <p className="text-[14px] text-zinc-500 leading-[1.85]">{p.text}</p>
            </div>
          </motion.div>
        ))}

        {/* Stats row */}
        <motion.div {...f(0.5)} className="grid grid-cols-2 gap-8 pt-10 border-t border-dark-border mt-10">
          {[{ v: '20+', l: 'Years' }, { v: 'Multi-Asset', l: 'Derivatives' }, { v: 'Global', l: 'Coverage' }, { v: 'Milan & London', l: 'Presence' }].map((s) => (
            <div key={s.l}>
              <div className="text-[18px] font-display font-semibold text-gold mb-1">{s.v}</div>
              <div className="text-[11px] text-zinc-600 tracking-[0.1em] uppercase">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
