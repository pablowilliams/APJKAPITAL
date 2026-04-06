import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

interface Props { onCTA: () => void }

export default function HeroIntro({ onCTA }: Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,_rgba(201,168,76,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_80%,_rgba(201,168,76,0.03)_0%,_transparent_40%)]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 sm:px-12 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 max-w-[600px]">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }} className="label mb-8">
            Multi-Asset Investment & Advisory
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-display font-bold mb-8"
          >
            Capital markets expertise,{' '}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold bg-clip-text text-transparent">
              quantitative edge.
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }}
            className="text-[18px] text-zinc-400 leading-[1.8] max-w-[500px] mb-12"
          >
            Decades of institutional experience in derivatives and structured products,
            combined with next-generation data science and systematic strategies.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }} className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <button onClick={onCTA} className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-[#060608] font-semibold rounded-xl text-[16px] shadow-[0_4px_20px_rgba(201,168,76,0.15)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.3)] hover:scale-[1.02] transition-all duration-300 active:scale-[0.97]">
              Discover More &rarr;
            </button>
            <div className="flex items-center gap-3 text-[15px] text-zinc-500 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-gold/50 shadow-[0_0_8px_rgba(201,168,76,0.3)] animate-pulse" />
              Milan &middot; London
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[380px] lg:w-[460px] relative will-change-transform"
        >
          <div className="absolute inset-[-30px] bg-gold/[0.03] rounded-full blur-[50px]" />
          <img src="/bull.png" alt="APJ Kapital" className="w-full h-auto relative drop-shadow-[0_0_40px_rgba(201,168,76,0.12)]" />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-default">
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-2.5">
          <span className="text-[10px] text-zinc-600 tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-zinc-600/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
