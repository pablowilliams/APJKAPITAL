import { motion } from 'framer-motion'

export default function HeroIntro() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background from the gold/black colour reference */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(201,168,76,0.04)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(201,168,76,0.02)_0%,_transparent_40%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text */}
        <div className="flex-1 max-w-[600px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-gold/50 text-[12px] tracking-[0.3em] uppercase mb-10"
          >
            Multi-Asset Investment & Advisory
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.7 }}
            className="text-[38px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-display font-bold tracking-[-0.04em] leading-[1.05] mb-10"
          >
            Capital markets expertise,{' '}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              quantitative edge.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="text-[17px] text-zinc-500 leading-[1.95] max-w-[500px] mb-14"
          >
            Decades of institutional experience in derivatives and structured products,
            combined with next-generation data science and systematic strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.1 }}
            className="flex items-center gap-3 text-[13px] text-zinc-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Milan &middot; London
          </motion.div>
        </div>

        {/* Right: Bull with outline-draw-then-fill animation */}
        <div className="flex-shrink-0 w-[280px] md:w-[360px] lg:w-[440px] relative">
          {/* Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="absolute inset-[-40px] bg-gold/[0.03] rounded-full blur-[60px]"
          />

          {/* Phase 1: Outline draws in (0-2s) */}
          <svg
            viewBox="0 0 400 280"
            className="w-full h-auto absolute inset-0"
          >
            <motion.path
              d="M78,30 L95,72 L100,58 L120,25 L128,32 L118,72 L135,100 L175,82 L210,100 L280,120 L340,110 L360,108 L355,115 L350,135 C365,120 370,100 372,90 C372,90 368,85 368,85 C362,78 370,72 370,72 M350,135 L335,150 L290,155 L250,160 L190,165 L140,155 L110,135 L90,110 L80,88 L78,65 L76,52 L82,60 L78,30"
              stroke="#c9a84c"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            {/* Horns outline */}
            <motion.path
              d="M78,30 L70,38 M120,25 L128,32"
              stroke="#e0c97f"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {/* Leg outlines */}
            <motion.path
              d="M110,135 L108,182 L118,180 M155,140 L160,188 L150,190 M280,150 L288,195 L278,197 M320,145 L332,192 L322,194"
              stroke="#a08030"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </svg>

          {/* Phase 2: Full bull fades in (after outline completes) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          >
            <img
              src="/bull-logo.svg"
              alt="APJ Kapital — Charging Bull"
              className="w-full h-auto relative drop-shadow-[0_0_40px_rgba(201,168,76,0.1)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[11px] text-zinc-700 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
