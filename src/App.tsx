import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroIntro from './components/HeroIntro'
import AboutContent from './sections/AboutContent'
import StrategyContent from './sections/StrategyContent'
import TeamContent from './sections/TeamContent'
import ContactContent from './sections/ContactContent'
import ResearchContent from './sections/ResearchContent'
import InsightsContent from './sections/InsightsContent'
import VenturesContent from './sections/VenturesContent'

export type SectionId = 'about' | 'strategy' | 'team' | 'contact' | 'research' | 'insights' | 'ventures'

export const sections: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'insights', label: 'Insights' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'team', label: 'Team' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

const CONTENT: Record<SectionId, () => React.ReactNode> = {
  about: () => <AboutContent />,
  strategy: () => <StrategyContent />,
  team: () => <TeamContent />,
  contact: () => <ContactContent />,
  research: () => <ResearchContent />,
  insights: () => <InsightsContent />,
  ventures: () => <VenturesContent />,
}

const EASE = [0.16, 1, 0.3, 1]

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  useEffect(() => {
    const hash = window.location.hash.slice(1) as SectionId
    if (hash && sections.some((s) => s.id === hash)) setActiveSection(hash)
    const onPop = () => {
      const h = window.location.hash.slice(1) as SectionId
      if (h && sections.some((s) => s.id === h)) setActiveSection(h)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigateTo = useCallback((id: SectionId) => {
    setActiveSection(id)
    window.history.pushState(null, '', `#${id}`)
    requestAnimationFrame(() => {
      document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  const activeLabel = sections.find((s) => s.id === activeSection)?.label ?? ''

  return (
    <div className="min-h-screen bg-dark">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activeSection={activeSection} onNavigate={navigateTo} />
          <HeroIntro onCTA={() => navigateTo('about')} />

          <div id="main-content" className="px-8 sm:px-12 md:px-16 lg:px-24 py-28 lg:py-36 max-w-[1400px] mx-auto">
            {/* Section header */}
            <AnimatePresence mode="wait">
              <motion.div key={`hdr-${activeSection}`}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="mb-12 flex items-center gap-5"
              >
                <motion.img src="/bull.png" alt="" className="h-12 w-auto will-change-transform opacity-80"
                  animate={{ x: [0, 3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div>
                  <p className="label mb-1">{activeLabel}</p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-gold/30 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div key={`cnt-${activeSection}`}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {CONTENT[activeSection]()}
              </motion.div>
            </AnimatePresence>
          </div>

          <footer className="px-8 sm:px-12 md:px-16 lg:px-24 py-16 border-t border-dark-border/60 max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/bull.png" alt="" className="h-6 w-auto opacity-25" />
                <span className="text-[12px] text-zinc-600 tracking-[0.1em]">APJ KAPITAL</span>
              </div>
              <p className="text-[12px] text-zinc-700">&copy; {new Date().getFullYear()} APJ Kapital. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
