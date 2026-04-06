import { motion } from 'framer-motion'

export default function HeroIntro() {
  return (
    <section className="pt-[64px]">
      <div className="container py-24 md:py-36 flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-20">
        {/* Text */}
        <div className="flex-1 max-w-[560px]">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[48px] lg:text-[56px] mb-8"
          >
            Capital markets expertise, quantitative edge.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[17px] text-zinc-500 leading-[1.85] mb-10 max-w-[480px]"
          >
            Multi-asset investment and advisory. Decades of institutional
            experience in derivatives and structured products, combined with
            next-generation data science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-6 text-[14px] text-zinc-600"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              Milan
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              London
            </span>
          </motion.div>
        </div>

        {/* Bull */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-[200px] md:w-[280px] lg:w-[360px] shrink-0"
        >
          <img src="/bull.png" alt="" className="w-full h-auto opacity-90" />
        </motion.div>
      </div>
    </section>
  )
}
