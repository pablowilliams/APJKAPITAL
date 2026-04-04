import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { TrendingUp, Shield, BarChart3, Globe } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

const pillars = [
  { icon: BarChart3, title: 'Capital Markets', text: 'Deep derivatives expertise across equity, fixed income, FX, and commodities. Vanilla hedging to complex exotic structures.' },
  { icon: Shield, title: 'Risk Management', text: 'Institutional rigour, personal attention. Quantitative models paired with decades of market intuition.' },
  { icon: TrendingUp, title: 'Quantitative Innovation', text: 'Human insight meets machine intelligence. Systematic strategies built on ML and statistical research.' },
  { icon: Globe, title: 'Global Perspective', text: 'Roots in Milan and London. A dual vantage point that surfaces opportunities others overlook.' },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-72px)] px-8 md:px-12 py-16 md:py-24">
        <div className="max-w-[720px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-6">
            About
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[32px] sm:text-[40px] md:text-[52px] font-display font-bold leading-[1.1] tracking-[-0.03em] mb-16">
            Where conviction meets discipline
          </motion.h1>

          <motion.div {...f(0.2)} className="space-y-8 text-[16px] text-zinc-400 leading-[1.85] mb-24">
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
            <p>
              The future of investment sits at the intersection of traditional
              finance and technology. We don't just run models — we understand the
              markets behind them. We don't just manage capital — we build long-term
              relationships founded on trust, transparency, and performance.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div {...f(0.3)} className="border-l-2 border-gold/30 pl-8 mb-28">
            <p className="text-gold/60 text-[11px] tracking-[0.25em] uppercase mb-4">Mission</p>
            <p className="text-[20px] md:text-[24px] font-display font-medium leading-[1.5] text-white/85 tracking-[-0.02em]">
              To deliver institutional-quality investment solutions with the
              agility of a family office — bridging traditional markets expertise
              with the frontier of quantitative innovation.
            </p>
          </motion.div>

          {/* Pillars */}
          <motion.p {...f(0.35)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-10">
            What drives us
          </motion.p>

          <div className="grid md:grid-cols-2 gap-px bg-dark-border rounded-lg overflow-hidden mb-28">
            {pillars.map((p, i) => (
              <motion.div key={p.title} {...f(0.4 + i * 0.06)} className="bg-dark-card p-8">
                <p.icon size={18} className="text-gold/60 mb-5" />
                <h3 className="text-[15px] font-display font-semibold mb-3 text-white/90">{p.title}</h3>
                <p className="text-[14px] text-zinc-500 leading-[1.75]">{p.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div {...f(0.55)} className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10 border-t border-dark-border">
            {[
              { v: '20+', l: 'Years' },
              { v: 'Multi-Asset', l: 'Derivatives' },
              { v: 'Global', l: 'Coverage' },
              { v: 'Milan & London', l: 'Presence' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-[18px] font-display font-semibold text-gold">{s.v}</div>
                <div className="text-[11px] text-zinc-600 tracking-[0.1em] uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  )
}
