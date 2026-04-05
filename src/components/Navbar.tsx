import { useState } from 'react'
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

  const handleNav = (id: SectionId) => {
    onNavigate(id)
    setMobileOpen(false)
    setTimeout(() => {
      document.getElementById('content-panel')?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#050506]/90 backdrop-blur-xl border-b border-white/[0.04]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav('about')} className="flex items-center gap-3 shrink-0">
            <img src="/bull.png" alt="APJ Kapital" className="h-9 w-auto" />
            <span className="text-white font-display font-semibold text-[14px] tracking-[0.1em]">
              APJ KAPITAL
            </span>
          </button>

          {/* Desktop section buttons — bookmark-style */}
          <div className="hidden lg:flex items-center gap-0.5">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className="relative px-4 py-2 text-[13px] tracking-[0.03em] rounded-md transition-all duration-200"
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    activeSection === s.id ? 'text-gold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {s.label}
                </span>
                {activeSection === s.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gold/[0.08] border border-gold/20 rounded-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-zinc-400">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050506]/95 backdrop-blur-xl pt-20 px-8"
          >
            <div className="flex flex-col gap-2 mt-6">
              {sections.map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => handleNav(s.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-left text-[24px] font-display font-medium py-3 transition-colors ${
                    activeSection === s.id ? 'text-gold' : 'text-zinc-400'
                  }`}
                >
                  {s.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
