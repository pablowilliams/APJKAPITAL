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
    const fn = () => {
      if (!ticking) { requestAnimationFrame(() => { setScrolled(window.scrollY > 50); ticking = false }); ticking = true }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    if (!mobileOpen) return
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [mobileOpen])

  const handleNav = (id: SectionId) => { onNavigate(id); setMobileOpen(false) }

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[#060608]/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04),_0_4px_16px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
        role="navigation" aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-8 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between h-[72px]">
          <button onClick={() => handleNav('about')} className="flex items-center gap-3 shrink-0 group" aria-label="APJ Kapital home">
            <img src="/bull.png" alt="" className="h-9 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(201,168,76,0.15)]" loading="eager" />
            <span className="text-white/95 font-display font-semibold text-[15px] tracking-[0.1em] transition-colors duration-200 group-hover:text-gold hidden sm:inline">
              APJ KAPITAL
            </span>
          </button>

          <div className="hidden md:flex items-center gap-0.5" role="tablist">
            {sections.map((s) => (
              <button
                key={s.id} onClick={() => handleNav(s.id)}
                role="tab" aria-selected={activeSection === s.id} aria-controls={`section-${s.id}`}
                className="relative px-5 py-2.5 text-[15px] tracking-[0.01em] rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  activeSection === s.id ? 'text-gold' : 'text-zinc-400 hover:text-zinc-200'
                }`}>{s.label}</span>
                {activeSection === s.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gold/[0.08] border border-gold/25 rounded-lg shadow-[inset_0_1px_0_rgba(201,168,76,0.08)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-zinc-400 hover:text-gold transition-colors duration-200 p-2.5 -mr-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}
          >
            <motion.div animate={{ rotate: mobileOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMobile} />
            <motion.div
              initial={{ opacity: 0, x: 120 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 120 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-[#0c0c10] border-l border-dark-border/60 p-10 pt-24 shadow-[-8px_0_30px_rgba(0,0,0,0.4)]"
              role="dialog" aria-label="Navigation menu"
            >
              <div className="flex flex-col gap-1.5">
                {sections.map((s, i) => (
                  <motion.button
                    key={s.id} onClick={() => handleNav(s.id)}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-left text-[18px] font-display font-medium py-3.5 px-5 rounded-xl transition-all duration-200 ${
                      activeSection === s.id ? 'text-gold bg-gold/[0.07]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >{s.label}</motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
