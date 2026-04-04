import { motion } from 'framer-motion'

export default function HeroIntro() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.03)_0%,_transparent_50%)]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Text */}
        <div className="flex-1 max-w-[640px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gold/60 text-[12px] tracking-[0.3em] uppercase mb-8"
          >
            Multi-Asset Investment & Advisory
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[40px] sm:text-[52px] md:text-[64px] font-display font-bold tracking-[-0.035em] leading-[1.05] mb-10"
          >
            Capital markets expertise,{' '}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              quantitative edge.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[17px] text-zinc-500 leading-[1.9] max-w-[480px] mb-12"
          >
            Decades of institutional experience in derivatives and structured products,
            combined with next-generation data science and systematic strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-3 text-[13px] text-zinc-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Milan &middot; London
          </motion.div>
        </div>

        {/* Right: Bull animation — draws in with stroke */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative w-[240px] md:w-[320px] lg:w-[380px]">
            {/* Glow behind */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute inset-0 bg-gold/[0.03] rounded-full blur-[80px]"
            />
            {/* Bull with reveal animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Clip mask that reveals from bottom to top */}
              <motion.div
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/bull-logo.svg"
                  alt="APJ Kapital"
                  className="w-full h-auto drop-shadow-[0_0_60px_rgba(201,168,76,0.1)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[11px] text-zinc-700 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
