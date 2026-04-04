import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'outline' | 'fill' | 'done'>('outline')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fill'), 2200)
    const t2 = setTimeout(() => setPhase('done'), 3800)
    const t3 = setTimeout(() => onComplete(), 4300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  // The outline path traced from the bull reference image
  const outlinePath = "M28,60 C32,48 40,42 48,48 C42,55 38,68 42,82 C44,95 55,102 55,102 C60,85 72,72 90,68 L130,65 L180,55 L240,48 L280,32 L320,28 L360,35 L390,48 L410,62 L430,78 L455,88 L475,95 L485,105 L505,98 L520,95 L535,98 L548,95 L558,100 L560,110 L555,118 L540,120 L520,118 L498,112 L478,118 L460,128 L435,132 L405,135 L400,155 L418,215 L445,268 L442,282 L428,285 L422,278 L400,210 L380,168 L340,168 L330,240 L325,280 L338,283 L344,275 L345,240 L355,172 L320,178 L250,180 L190,165 L155,140 L120,140 L110,220 L105,275 L118,278 L125,220 L132,148 L105,148 L80,142 L65,185 L52,260 L48,280 L60,282 L72,260 L88,185 L95,150 L80,142 L62,128 L55,102"

  if (phase === 'done') return null

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#050506] flex flex-col items-center justify-center"
      animate={phase === 'done' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[320px] md:w-[420px] relative">
        {/* Phase 1: Outline draws itself */}
        <svg viewBox="0 0 600 340" className="w-full h-auto">
          {/* Gold outline drawing in */}
          <motion.path
            d={outlinePath}
            stroke="#c9a84c"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* Glowing version slightly behind */}
          <motion.path
            d={outlinePath}
            stroke="#e0c97f"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.15}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            filter="blur(4px)"
          />
        </svg>

        {/* Phase 2: Full bull fills in over the outline */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'fill' ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img
            src="/bull-photo.webp"
            alt="APJ Kapital"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        className="mt-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-white font-display font-semibold text-[18px] tracking-[0.15em]">
          APJ KAPITAL
        </span>

        {/* Progress bar that fills as outline draws */}
        <div className="w-40 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
