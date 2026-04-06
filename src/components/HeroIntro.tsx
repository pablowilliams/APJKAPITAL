import { motion } from 'framer-motion'

interface Props { onCTA: () => void }

export default function HeroIntro({ onCTA }: Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,_rgba(201,168,76,0.04)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_85%,_rgba(201,168,76,0.02)_0%,_transparent_40%)]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        {/* Text — left */}
        <div className="flex-1 max-w-[580px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="label mb-10"
          >
            Multi-Asset Investment & Advisory
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-display font-bold mb-10"
          >
            Capital markets expertise,{' '}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              quantitative edge.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[16px] md:text-[17px] text-zinc-500 leading-[1.9] max-w-[480px] mb-14"
          >
            Decades of institutional experience in derivatives and structured products,
            combined with next-generation data science and systematic strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <button
              onClick={onCTA}
              className="px-7 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-[#050506] font-semibold rounded-lg text-[14px] hover:shadow-[0_8px_40px_rgba(201,168,76,0.25)] transition-all duration-300 active:scale-[0.97]"
            >
              Discover More &rarr;
            </button>
            <div className="flex items-center gap-3 text-[13px] text-zinc-600">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse" />
              Milan &middot; London
            </div>
          </motion.div>
        </div>

        {/* Bull — right */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] relative will-change-transform"
        >
          <div className="absolute inset-[-40px] bg-gold/[0.02] rounded-full blur-[60px]" />
          <img
            src="/bull.png"
            alt="APJ Kapital — Charging Bull"
            className="w-full h-auto relative drop-shadow-[0_0_30px_rgba(201,168,76,0.08)]"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-2.5">
          <span className="text-[10px] text-zinc-700 tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-zinc-700/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
