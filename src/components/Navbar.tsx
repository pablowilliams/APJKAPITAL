import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { Page } from '../App'

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Strategy', page: 'strategy' },
  { label: 'Performance', page: 'performance' },
  { label: 'Team', page: 'team' },
  { label: 'Contact', page: 'contact' },
  { label: 'Research', page: 'research' },
]

interface Props {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Navbar({ currentPage, onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (page: Page) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050506]/90 backdrop-blur-xl' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 flex items-center justify-between h-[72px]">
          <button onClick={() => handleNav('home')} className="flex items-center gap-2.5">
            <img src="/bull-logo.svg" alt="APJ Kapital" className="h-8 w-auto" />
            <span className="text-white font-display font-semibold text-[15px] tracking-[0.08em]">
              APJ KAPITAL
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`relative px-4 py-1.5 text-[13px] tracking-[0.04em] transition-colors duration-200 ${
                  currentPage === link.page
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-4 right-4 h-[1px] bg-gold"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-zinc-400">
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
            className="fixed inset-0 z-40 bg-[#050506] pt-20 px-8"
          >
            <div className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-left text-[28px] font-display font-medium py-3 transition-colors ${
                    currentPage === link.page ? 'text-gold' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
