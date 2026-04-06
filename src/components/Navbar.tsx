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
    const fn = () => setScrolled(window.scrollY > 30)
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
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050506]/92 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.03)]' : 'bg-transparent'
        }`}
        role="navigation"
      >
        <div className="max-w-[1400px] mx-auto px-8 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between h-[72px]">
          <button onClick={() => handleNav('about')} className="flex items-center gap-3 shrink-0 group">
            <img src="/bull.png" alt="" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="text-white/90 font-display font-semibold text-[15px] tracking-[0.1em] hidden sm:inline">
              APJ KAPITAL
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1" role="tablist">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                role="tab"
                aria-selected={activeSection === s.id}
                className="relative px-5 py-2 text-[15px] tracking-[0.01em] rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  activeSection === s.id ? 'text-gold' : 'text-zinc-500 hover:text-zinc-300'
                }`}>
                  {s.label}
                </span>
                {activeSection === s.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gold/[0.07] border border-gold/15 rounded-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-zinc-400 hover:text-zinc-200 p-2 -mr-2 rounded-lg" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={closeMobile} />
            <motion.div
              initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-[#0a0a0e] border-l border-dark-border p-10 pt-24"
            >
              <div className="flex flex-col gap-2">
                {sections.map((s, i) => (
                  <motion.button
                    key={s.id} onClick={() => handleNav(s.id)}
                    initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`text-left text-[20px] font-display font-medium py-3.5 px-5 rounded-xl transition-all ${
                      activeSection === s.id ? 'text-gold bg-gold/[0.06]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    {s.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
