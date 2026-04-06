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
    <div className="grid lg:grid-cols-[1fr_380px] gap-20">
      {/* Left — story */}
      <div>
        <motion.div {...f(0.05)} className="space-y-8 text-[15px] text-zinc-400 leading-[1.9] mb-20">
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
        <motion.div {...f(0.2)} className="border-l-2 border-gold/20 pl-10 mb-20">
          <p className="label mb-5">Mission</p>
          <p className="text-[18px] md:text-[21px] font-display font-medium leading-[1.55] text-white/80">
            "To deliver institutional-quality investment solutions with the
            agility of a family office."
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div {...f(0.3)} className="grid grid-cols-2 gap-x-12 gap-y-10 pt-12 border-t border-dark-border">
          {[{ v: '20+', l: 'Years Experience' }, { v: 'Multi-Asset', l: 'Derivatives Focus' }, { v: 'Global', l: 'Market Coverage' }, { v: 'Milan & London', l: 'Presence' }].map((s) => (
            <div key={s.l}>
              <div className="text-[20px] font-display font-semibold text-gold mb-1.5">{s.v}</div>
              <div className="text-[11px] text-zinc-600 tracking-[0.12em] uppercase">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — pillars */}
      <div className="space-y-5">
        {pillars.map((p, i) => (
          <motion.div key={p.title} {...f(0.1 + i * 0.07)} className="card p-7">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold/[0.05] flex items-center justify-center">
                <p.icon size={18} className="text-gold/50" />
              </div>
              <h3 className="text-[15px] font-display font-semibold text-white/85">{p.title}</h3>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.8]">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
