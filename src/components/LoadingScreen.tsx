import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'outline' | 'fill' | 'done'>('outline')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fill'), 2400)
    const t2 = setTimeout(() => setPhase('done'), 4000)
    const t3 = setTimeout(() => onComplete(), 4500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#050506] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Bull container — SVG outline and image share EXACT same dimensions */}
      <div className="relative w-[320px] md:w-[440px]">
        {/* Base: the actual bull image — hidden initially, revealed by mask */}
        <motion.img
          src="/bull.png"
          alt="APJ Kapital"
          className="w-full h-auto block"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'fill' ? 1 : 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />

        {/* SVG Outline overlay — sized to match image exactly */}
        <svg
          viewBox="0 0 600 340"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* The gold bull image has these approximate outline contours.
              The path traces: back of body → tail → rear legs → belly → front legs → chest → head → horns → back */}
          {/* Outer body contour */}
          <motion.path
            d="M 85,150 L 105,125 L 130,108 L 170,98 L 220,92 L 270,90 L 320,95 L 370,108 L 410,130 L 440,155 L 465,185 L 485,215 L 505,200 L 520,180 L 530,160 L 540,175 L 548,195 L 550,215 L 545,225 L 535,225 L 525,215 L 515,210 L 505,220 L 495,235 L 480,245 L 460,245 L 440,235 L 425,215 L 410,220 L 400,250 L 395,285 L 380,300 L 365,298 L 360,285 L 365,250 L 355,225 L 330,215 L 290,210 L 250,210 L 210,208 L 175,205 L 145,200 L 125,210 L 115,240 L 108,275 L 100,290 L 82,292 L 72,280 L 78,250 L 82,215 L 85,180 L 72,170 L 55,165 L 42,150 L 45,130 L 58,115 L 80,110 L 95,125 L 85,150 Z"
            stroke="#e8d08a"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Glowing duplicate for premium effect */}
          <motion.path
            d="M 85,150 L 105,125 L 130,108 L 170,98 L 220,92 L 270,90 L 320,95 L 370,108 L 410,130 L 440,155 L 465,185 L 485,215 L 505,200 L 520,180 L 530,160 L 540,175 L 548,195 L 550,215 L 545,225 L 535,225 L 525,215 L 515,210 L 505,220 L 495,235 L 480,245 L 460,245 L 440,235 L 425,215 L 410,220 L 400,250 L 395,285 L 380,300 L 365,298 L 360,285 L 365,250 L 355,225 L 330,215 L 290,210 L 250,210 L 210,208 L 175,205 L 145,200 L 125,210 L 115,240 L 108,275 L 100,290 L 82,292 L 72,280 L 78,250 L 82,215 L 85,180 L 72,170 L 55,165 L 42,150 L 45,130 L 58,115 L 80,110 L 95,125 L 85,150 Z"
            stroke="#c9a84c"
            strokeWidth="6"
            fill="none"
            opacity={0.3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ filter: 'blur(8px)' }}
          />

          {/* Horn detail */}
          <motion.path
            d="M 485,215 L 500,200 L 510,195 L 508,185 L 495,180 L 485,190"
            stroke="#e8d08a"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          />
        </svg>
      </div>

      {/* Loading text */}
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
            transition={{ duration: 3.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
        <motion.span
          className="text-[10px] text-zinc-700 tracking-[0.3em] uppercase"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
