import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { TrendingUp, Shield, BarChart3, Globe } from 'lucide-react'

const f = (d: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
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
      <section className="px-8 md:px-12 py-20 md:py-32">
        <div className="max-w-[700px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-8">
            About
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[36px] sm:text-[44px] md:text-[56px] font-display font-bold tracking-[-0.03em] mb-20">
            Where conviction meets discipline
          </motion.h1>

          {/* Story paragraphs — generous spacing */}
          <motion.div {...f(0.2)} className="space-y-10 text-[16px] text-zinc-400 leading-[2] mb-32">
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
          <motion.div {...f(0.3)} className="border-l-2 border-gold/30 pl-10 mb-32">
            <p className="text-gold/60 text-[11px] tracking-[0.25em] uppercase mb-6">Mission</p>
            <p className="text-[22px] md:text-[26px] font-display font-medium leading-[1.55] text-white/85 tracking-[-0.015em]">
              "To deliver institutional-quality investment solutions with the
              agility of a family office — bridging traditional markets expertise
              with the frontier of quantitative innovation."
            </p>
          </motion.div>

          {/* Pillars */}
          <motion.p {...f(0.35)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-12">
            What drives us
          </motion.p>

          <div className="space-y-8 mb-32">
            {pillars.map((p, i) => (
              <motion.div key={p.title} {...f(0.4 + i * 0.08)} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-gold/[0.06] flex items-center justify-center shrink-0 mt-1">
                  <p.icon size={20} className="text-gold/60" />
                </div>
                <div>
                  <h3 className="text-[17px] font-display font-semibold mb-3 text-white/90">{p.title}</h3>
                  <p className="text-[15px] text-zinc-500 leading-[1.85]">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div {...f(0.65)} className="grid grid-cols-2 gap-12 py-12 border-t border-dark-border">
            {[
              { v: '20+', l: 'Years Experience' },
              { v: 'Multi-Asset', l: 'Derivatives Focus' },
              { v: 'Global', l: 'Market Coverage' },
              { v: 'Milan & London', l: 'Presence' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[22px] font-display font-semibold text-gold mb-2">{s.v}</div>
                <div className="text-[12px] text-zinc-600 tracking-[0.12em] uppercase">{s.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  )
}
