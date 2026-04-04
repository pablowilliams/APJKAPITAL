import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import Performance from '../components/Performance'

const f = (d: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function PerformancePage() {
  return (
    <PageWrapper>
      <section className="px-8 md:px-12 py-20 md:py-32">
        <div className="max-w-[780px] mx-auto">

          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-8">
            Performance
          </motion.p>

          <motion.h1 {...f(0.1)} className="text-[36px] sm:text-[44px] md:text-[56px] font-display font-bold tracking-[-0.03em] mb-8">
            Track record
          </motion.h1>

          <motion.p {...f(0.18)} className="text-[16px] text-zinc-400 leading-[2] mb-20 max-w-[540px]">
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
