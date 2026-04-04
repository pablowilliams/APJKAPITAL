import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import PageWrapper from '../components/PageWrapper'
import type { Page } from '../App'

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let id: number
    const pts: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    for (let i = 0; i < 30; i++) pts.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.08, vy: (Math.random() - 0.5) * 0.08,
      r: Math.random() * 1 + 0.3, o: Math.random() * 0.15 + 0.02,
    })
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${p.o})`; ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y)
          if (d < 160) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(201,168,76,${0.015 * (1 - d / 160)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0" />
}

interface Props { onNavigate: (page: Page) => void }

export default function Home({ onNavigate }: Props) {
  return (
    <PageWrapper>
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.03)_0%,_transparent_50%)]" />
        <ParticleField />

        <div className="relative z-10 text-center px-8 max-w-[680px] mx-auto">
          <motion.img
            src="/bull-logo.svg"
            alt="APJ Kapital"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-20 sm:h-28 md:h-36 w-auto mx-auto mb-10 sm:mb-16"
          />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[44px] sm:text-[56px] md:text-[72px] font-display font-bold leading-[1] tracking-[-0.04em]"
          >
            APJ{' '}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              Kapital
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-[17px] text-zinc-500 leading-[1.75] max-w-[480px] mx-auto"
          >
            Multi-asset investment and advisory. Decades of capital
            markets expertise, powered by quantitative technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-3 bg-gold text-[#050506] text-[14px] font-semibold rounded-md hover:bg-gold-light transition-colors duration-200"
            >
              Discover More
            </button>
            <button
              onClick={() => onNavigate('team')}
              className="px-7 py-3 text-[14px] text-zinc-400 border border-zinc-800 rounded-md hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200"
            >
              Meet the Team
            </button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
