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

const contentMap: Record<SectionId, () => React.ReactNode> = {
  about: () => <AboutContent />,
  strategy: () => <StrategyContent />,
  team: () => <TeamContent />,
  contact: () => <ContactContent />,
  research: () => <ResearchContent />,
  insights: () => <InsightsContent />,
  ventures: () => <VenturesContent />,
}

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  // Hash-based routing (#72, #74)
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
    setTimeout(() => {
      document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
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

          {/* Main content panel */}
          <div id="main-content" className="px-6 md:px-12 lg:px-20 py-32 max-w-[1400px] mx-auto">
            {/* Section indicator */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`indicator-${activeSection}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.4 }}
                className="mb-20 flex items-center gap-6"
              >
                <motion.img
                  src="/bull.png"
                  alt=""
                  className="h-12 w-auto will-change-transform"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div>
                  <p className="label mb-1.5">{activeLabel}</p>
                  <div className="w-12 h-[1px] bg-gold/20" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`section-${activeSection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {contentMap[activeSection]()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <footer className="px-6 md:px-12 lg:px-20 py-16 border-t border-dark-border max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img src="/bull.png" alt="" className="h-6 w-auto opacity-40" />
                <span className="text-[12px] text-zinc-700 tracking-[0.1em]">APJ KAPITAL</span>
              </div>
              <p className="text-[11px] text-zinc-800">
                &copy; {new Date().getFullYear()} APJ Kapital. All rights reserved. Not investment advice.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
