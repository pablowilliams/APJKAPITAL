import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { sections } from '../App'
import type { SectionId } from '../App'

interface Props {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export default function Navbar({ activeSection, onNavigate }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const fn = () => { if (!ticking) { requestAnimationFrame(() => { setScrolled(window.scrollY > 40); ticking = false }); ticking = true } }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = useCallback(() => setMobileOpen(false), [])
  useEffect(() => {
    if (!mobileOpen) return
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [mobileOpen])

  const nav = (id: SectionId) => { onNavigate(id); setMobileOpen(false) }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-dark-border/50' : ''
        }`}
      >
        <div className="container flex items-center justify-between h-[64px]">
          <a href="#" onClick={(e) => { e.preventDefault(); nav('about') }} className="flex items-center gap-3">
            <img src="/bull.png" alt="" className="h-8 w-auto" />
            <span className="text-[14px] text-zinc-300 font-display font-semibold tracking-[0.08em]">
              APJ KAPITAL
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="mailto:info@apjkapital.com" className="text-[13px] text-zinc-600 hover:text-gold transition-colors">
              Contact
            </a>
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden text-zinc-500 p-2" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50" onClick={close} />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-dark-card border-l border-dark-border"
            >
              <div className="flex justify-end p-4">
                <button onClick={close} className="text-zinc-500 p-2"><X size={20} /></button>
              </div>
              <nav className="px-6 space-y-1">
                {sections.map((s) => (
                  <button key={s.id} onClick={() => nav(s.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-[16px] transition-colors ${
                      activeSection === s.id ? 'text-gold bg-gold/5' : 'text-zinc-400 hover:text-white'
                    }`}
                  >{s.label}</button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
