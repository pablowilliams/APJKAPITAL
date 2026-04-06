import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'draw' | 'reveal' | 'done'>('draw')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 2000)
    const t2 = setTimeout(() => setPhase('done'), 3400)
    const t3 = setTimeout(onComplete, 3800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  if (phase === 'done') return null

  // Path traced from the new silver/white ornamental bull — charging right, head down
  // Contour follows: tail → back → hump → neck → head → horn → snout → jaw → chest → front legs → belly → rear legs → back to tail
  const outline = "M 72,210 C 58,195 50,172 56,152 C 60,138 70,135 75,145 C 70,155 68,175 72,195 L 80,210 C 92,195 108,182 128,175 L 158,168 L 195,160 L 235,148 C 260,138 285,125 310,112 C 340,100 368,92 395,88 C 418,85 438,88 455,98 L 475,112 C 488,122 502,128 520,130 C 535,130 552,122 565,110 L 580,96 C 590,88 602,85 615,90 C 622,94 625,102 620,110 L 610,118 C 600,122 588,120 580,115 L 575,120 C 565,135 555,152 545,168 L 535,182 C 528,198 522,218 518,240 L 512,268 C 510,280 504,288 494,290 C 486,290 482,282 485,272 L 492,245 C 498,222 505,200 515,182 L 505,188 C 490,195 472,198 450,200 L 418,200 C 398,198 378,195 360,190 L 345,200 C 338,222 330,248 325,272 C 322,285 316,292 306,294 C 298,294 294,286 298,275 L 308,248 C 315,225 322,205 330,190 L 315,192 C 295,192 272,190 250,188 L 218,188 L 190,190 C 178,202 165,222 155,248 L 142,280 C 138,290 130,296 120,294 C 112,292 110,284 115,274 L 130,240 C 140,218 150,200 162,188 L 150,192 C 138,200 125,215 115,235 C 108,252 100,272 92,288 C 86,296 78,298 70,294 C 64,290 65,280 70,270 L 85,238 C 95,218 108,200 120,188 L 108,195 C 98,202 90,208 82,212 L 72,210"

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#050506] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-[300px] sm:w-[380px] md:w-[460px]">
        {/* Invisible sizing image */}
        <img src="/bull.png" alt="" className="w-full h-auto invisible" aria-hidden="true" />

        {/* SVG outline — draws over the bull shape */}
        <svg viewBox="0 0 700 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Glow layer */}
          <motion.path d={outline} stroke="#c9a84c" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.15}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ filter: 'blur(8px)' }}
          />
          {/* Main gold stroke */}
          <motion.path d={outline} stroke="#c9a84c" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }} animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* White highlight */}
          <motion.path d={outline} stroke="#ffffff" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.3}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </svg>

        {/* Actual bull — fades in on top */}
        <motion.img src="/bull.png" alt="APJ Kapital" className="absolute inset-0 w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'reveal' ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>

      <motion.div className="mt-14 flex flex-col items-center gap-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <span className="text-white/90 font-display font-semibold text-[17px] tracking-[0.18em]">APJ KAPITAL</span>
        <div className="w-44 h-[1.5px] bg-zinc-900 rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full"
            initial={{ width: '0%' }} animate={{ width: '100%' }}
            transition={{ duration: 3.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
