import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'outline' | 'fill' | 'done'>('outline')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fill'), 2600)
    const t2 = setTimeout(() => setPhase('done'), 4200)
    const t3 = setTimeout(() => onComplete(), 4700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  if (phase === 'done') return null

  /*
    Outline traced from the new bull image (white/silver ornamental charging bull).
    Image dimensions roughly 800x450, bull centred.
    Tracing: tail-tip → back → hump → neck → head → horns → snout → chest →
    front legs → belly → rear legs → tail base → back to tail-tip
  */
  const outline = `
    M 80,195
    C 60,180 48,160 55,140
    C 60,125 72,130 78,140
    C 82,148 75,160 80,195

    M 80,195
    C 90,185 100,175 115,170
    L 140,165
    L 165,158
    L 190,150
    C 210,142 230,130 255,118
    C 275,108 295,98 315,92
    C 340,85 360,82 380,80
    C 400,78 420,80 440,88
    C 455,94 468,105 478,118
    L 490,135

    C 498,142 510,148 525,150
    C 540,150 555,145 568,135
    C 578,128 585,118 590,112
    L 598,108

    C 610,100 622,96 635,100
    C 645,104 650,112 648,122
    L 640,130
    C 630,135 618,136 608,132

    M 598,108
    C 605,95 615,85 628,82
    C 640,80 648,86 645,95
    C 640,92 632,90 625,94
    L 615,100

    M 608,132
    C 598,138 588,148 580,160
    C 572,175 565,188 558,200
    L 548,215

    C 540,228 530,248 525,268
    C 522,282 518,298 515,315
    C 514,325 508,332 498,335
    C 490,336 484,330 485,320
    L 490,300
    C 494,280 498,260 505,242
    L 515,220

    C 505,225 492,228 478,230
    L 450,232
    L 415,230
    C 395,228 375,225 360,222

    L 348,235
    C 340,255 332,278 328,300
    C 326,315 320,328 310,332
    C 302,335 296,328 298,318
    L 305,295
    C 310,272 318,250 325,232

    L 310,228
    C 290,225 268,222 248,220
    L 220,218
    L 195,218
    L 170,220

    C 160,232 148,252 140,275
    C 135,292 128,310 122,325
    C 118,332 112,336 104,334
    C 96,330 95,322 98,312
    L 108,280
    C 115,258 122,238 132,222

    L 128,218
    C 118,222 108,228 100,238
    C 92,250 85,268 80,288
    C 76,305 70,320 62,328
    C 55,332 48,328 50,318
    L 58,295
    C 65,270 75,248 88,230
    L 100,218

    C 95,210 88,202 82,198
    L 80,195
  `

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#050506] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Bull container */}
      <div className="relative w-[340px] md:w-[460px] lg:w-[540px]">
        {/* The actual bull image — hidden initially, revealed after outline */}
        <img
          src="/bull.png"
          alt="APJ Kapital"
          className="w-full h-auto block invisible"
          aria-hidden
        />
        <motion.img
          src="/bull.png"
          alt="APJ Kapital"
          className="absolute inset-0 w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'fill' ? 1 : 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />

        {/* SVG outline overlay — exactly matches image dimensions */}
        <svg
          viewBox="0 0 700 450"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Main outline — gold stroke drawing in */}
          <motion.path
            d={outline}
            stroke="#c9a84c"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
          />
          {/* Glow behind */}
          <motion.path
            d={outline}
            stroke="#e0c97f"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ filter: 'blur(6px)' }}
          />
          {/* Bright leading edge */}
          <motion.path
            d={outline}
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.4}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
          />
        </svg>
      </div>

      {/* Text and progress */}
      <motion.div
        className="mt-14 flex flex-col items-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-white font-display font-semibold text-[18px] tracking-[0.18em]">
          APJ KAPITAL
        </span>
        <div className="w-48 h-[2px] bg-zinc-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
        <motion.span
          className="text-[10px] text-zinc-700 tracking-[0.3em] uppercase"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
