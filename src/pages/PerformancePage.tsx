import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import Performance from '../components/Performance'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function PerformancePage() {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-8 md:px-12 py-16 md:py-24">
        <div className="max-w-[800px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-6">
            Performance
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[32px] sm:text-[40px] md:text-[52px] font-display font-bold leading-[1.1] tracking-[-0.03em] mb-8">
            Track record
          </motion.h1>

          <motion.p {...f(0.18)} className="text-[16px] text-zinc-400 leading-[1.85] mb-16 max-w-[560px]">
            Consistent, risk-adjusted returns across market cycles.
            Full transparency — our numbers speak for themselves.
          </motion.p>

          <motion.div {...f(0.28)}>
            <Performance />
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  )
}
