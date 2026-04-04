import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import type { Page } from '../App'

/*
  Unique bull animation per category:
  - home:        Bull gallops across with a golden trail of particles
  - about:       Bull descends from above, creating a dust-cloud impact
  - strategy:    Bull charges through geometric glass panels that shatter
  - performance: Bull runs upward along an animated rising chart
  - team:        Bull walks in under an expanding golden spotlight
  - contact:     Bull materialises from swirling gold particles
*/

interface Props {
  isTransitioning: boolean
  targetPage: Page
  onMidpoint: () => void
  onComplete: () => void
}

function Particles({ count, mode }: { count: number; mode: 'burst' | 'rise' | 'swirl' | 'trail' }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const dist = 100 + Math.random() * 250
        const size = 1.5 + Math.random() * 4
        const delay = Math.random() * 0.3

        let tx = 0, ty = 0
        if (mode === 'burst') { tx = Math.cos(angle) * dist; ty = Math.sin(angle) * dist }
        else if (mode === 'rise') { tx = (Math.random() - 0.5) * 300; ty = -(80 + Math.random() * 300) }
        else if (mode === 'swirl') {
          const r = 50 + Math.random() * 200
          const a = angle + Math.random() * 2
          tx = Math.cos(a) * r; ty = Math.sin(a) * r
        }
        else if (mode === 'trail') { tx = -(50 + Math.random() * 300); ty = (Math.random() - 0.5) * 80 }

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{ width: size, height: size, background: `rgba(201,168,76,${0.3 + Math.random() * 0.6})` }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: tx, y: ty, opacity: 0, scale: 0 }}
            transition={{ duration: 0.8 + Math.random() * 0.6, delay, ease: 'easeOut' }}
          />
        )
      })}
    </>
  )
}

function RisingChart() {
  return (
    <motion.svg viewBox="0 0 900 250" className="absolute w-[70vw] h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} transition={{ duration: 0.4 }}>
      <motion.path
        d="M0,220 C80,200 140,180 200,150 C260,120 300,140 360,100 C420,60 480,80 540,45 C600,10 660,30 720,15 C780,5 840,18 900,5"
        stroke="#c9a84c" strokeWidth="2.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <motion.path
        d="M0,220 C80,200 140,180 200,150 C260,120 300,140 360,100 C420,60 480,80 540,45 C600,10 660,30 720,15 C780,5 840,18 900,5 L900,250 L0,250 Z"
        fill="url(#chartFill)" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

function GlassShards() {
  return (
    <>
      {Array.from({ length: 16 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 700
        const y = (Math.random() - 0.5) * 500
        const rot = Math.random() * 360
        const w = 15 + Math.random() * 50
        return (
          <motion.div key={i}
            className="absolute left-1/2 top-1/2 border border-white/[0.06] bg-white/[0.01]"
            style={{ width: w, height: w * (0.4 + Math.random() * 0.4) }}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 0.4, scale: 1 }}
            animate={{ x, y, rotate: rot, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.02, ease: 'easeOut' }}
          />
        )
      })}
    </>
  )
}

function Spotlight() {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 2, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
  )
}

const pageConfig: Record<Page, {
  enter: any; center: any; exit: any;
  particleMode: 'burst' | 'rise' | 'swirl' | 'trail'
  particleCount: number
  extra?: 'chart' | 'glass' | 'spotlight' | 'swirl-in'
  enterDur: number; exitDur: number; holdDur: number
}> = {
  home: {
    enter: { x: '-110vw', y: 0, rotate: -15, scale: 0.7 },
    center: { x: 0, y: 0, rotate: 0, scale: 1.3 },
    exit: { x: '110vw', y: 0, rotate: 12, scale: 0.7 },
    particleMode: 'trail', particleCount: 25,
    enterDur: 0.7, holdDur: 0.4, exitDur: 0.6,
  },
  about: {
    enter: { x: 0, y: '-100vh', rotate: 0, scale: 0.5 },
    center: { x: 0, y: 0, rotate: 0, scale: 1.4 },
    exit: { x: 0, y: '20vh', rotate: 0, scale: 0.6, opacity: 0 },
    particleMode: 'rise', particleCount: 35,
    enterDur: 0.7, holdDur: 0.5, exitDur: 0.5,
  },
  strategy: {
    enter: { x: '-80vw', y: 0, rotate: -20, scale: 1.1 },
    center: { x: 0, y: 0, rotate: 5, scale: 1.5 },
    exit: { x: '80vw', y: 0, rotate: 15, scale: 1.1 },
    particleMode: 'burst', particleCount: 0, extra: 'glass',
    enterDur: 0.6, holdDur: 0.5, exitDur: 0.5,
  },
  performance: {
    enter: { x: '-50vw', y: '15vh', rotate: -8, scale: 0.7 },
    center: { x: '8vw', y: '-8vh', rotate: 5, scale: 1.2 },
    exit: { x: '50vw', y: '-25vh', rotate: 12, scale: 0.7 },
    particleMode: 'burst', particleCount: 15, extra: 'chart',
    enterDur: 0.8, holdDur: 0.6, exitDur: 0.5,
  },
  team: {
    enter: { x: '-40vw', y: 0, rotate: 0, scale: 0.8 },
    center: { x: 0, y: 0, rotate: 0, scale: 1.1 },
    exit: { x: 0, y: 0, rotate: 0, scale: 0, opacity: 0 },
    particleMode: 'rise', particleCount: 20, extra: 'spotlight',
    enterDur: 0.8, holdDur: 0.6, exitDur: 0.5,
  },
  contact: {
    enter: { x: 0, y: 0, rotate: 0, scale: 0, opacity: 0 },
    center: { x: 0, y: 0, rotate: 0, scale: 1.2 },
    exit: { x: 0, y: 0, rotate: 0, scale: 2.5, opacity: 0 },
    particleMode: 'swirl', particleCount: 50, extra: 'swirl-in',
    enterDur: 0.9, holdDur: 0.5, exitDur: 0.6,
  },
  research: {
    enter: { x: '-60vw', y: '10vh', rotate: -10, scale: 0.6 },
    center: { x: 0, y: 0, rotate: 3, scale: 1.3 },
    exit: { x: '60vw', y: '-10vh', rotate: 10, scale: 0.6 },
    particleMode: 'burst', particleCount: 20, extra: 'chart',
    enterDur: 0.8, holdDur: 0.5, exitDur: 0.5,
  },
}

export default function BullTransition({ isTransitioning, targetPage, onMidpoint, onComplete }: Props) {
  const [phase, setPhase] = useState<'idle' | 'enter' | 'hold' | 'exit'>('idle')
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (!isTransitioning) { setPhase('idle'); return }

    const c = pageConfig[targetPage]
    setPhase('enter')

    const t1 = setTimeout(() => setPhase('hold'), c.enterDur * 1000)
    const t2 = setTimeout(() => { onMidpoint(); setPhase('exit') }, (c.enterDur + c.holdDur) * 1000)
    const t3 = setTimeout(() => { onComplete(); setPhase('idle') }, (c.enterDur + c.holdDur + c.exitDur) * 1000)

    timers.current = [t1, t2, t3]
    return () => timers.current.forEach(clearTimeout)
  }, [isTransitioning, onMidpoint, onComplete, targetPage])

  const c = pageConfig[targetPage]

  return (
    <AnimatePresence>
      {phase !== 'idle' && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#050506]"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'exit' ? 0 : 0.98 }}
            transition={{ duration: phase === 'exit' ? c.exitDur * 0.6 : 0.25 }}
          />

          {/* Extras */}
          {c.extra === 'spotlight' && phase !== 'idle' && <Spotlight />}
          {c.extra === 'chart' && phase !== 'idle' && <RisingChart />}
          {c.extra === 'glass' && (phase === 'hold' || phase === 'exit') && <GlassShards />}

          {/* Swirl-in particles (contact: appear before bull) */}
          {c.extra === 'swirl-in' && phase === 'enter' && (
            <div className="absolute left-1/2 top-1/2">
              {Array.from({ length: 30 }).map((_, i) => {
                const angle = (i / 30) * Math.PI * 2
                const r = 150 + Math.random() * 200
                return (
                  <motion.div key={i}
                    className="absolute rounded-full"
                    style={{ width: 3, height: 3, background: `rgba(201,168,76,${0.3 + Math.random() * 0.5})` }}
                    initial={{ x: Math.cos(angle) * r, y: Math.sin(angle) * r, opacity: 0.8 }}
                    animate={{ x: 0, y: 0, opacity: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.01, ease: 'easeIn' }}
                  />
                )
              })}
            </div>
          )}

          {/* Bull */}
          <motion.img
            src="/bull-logo.svg" alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 md:w-48"
            style={{ filter: 'drop-shadow(0 0 50px rgba(201,168,76,0.15))' }}
            initial={c.enter}
            animate={phase === 'enter' || phase === 'hold' ? c.center : c.exit}
            transition={{
              duration: phase === 'exit' ? c.exitDur : c.enterDur,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Exit particles */}
          {(phase === 'hold' || phase === 'exit') && c.particleCount > 0 && (
            <Particles count={c.particleCount} mode={c.particleMode} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
