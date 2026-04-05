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

const sectionThemes: Record<SectionId, { accent: string; label: string }> = {
  about:    { accent: '#c9a84c', label: 'The bull stands tall.' },
  strategy: { accent: '#3b82f6', label: 'The bull charges forward.' },
  insights: { accent: '#a855f7', label: 'The bull surveys the horizon.' },
  ventures: { accent: '#22c55e', label: 'The bull explores new ground.' },
  team:     { accent: '#f59e0b', label: 'The bull leads the herd.' },
  research: { accent: '#ef4444', label: 'The bull reads the market.' },
  contact:  { accent: '#06b6d4', label: 'The bull approaches.' },
}

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  const navigateTo = useCallback((id: SectionId) => {
    setActiveSection(id)
  }, [])

  // Open About by default after loading
  useEffect(() => {
    if (!loading) setActiveSection('about')
  }, [loading])

  const contentMap: Record<SectionId, React.ReactNode> = {
    about: <AboutContent />,
    strategy: <StrategyContent />,
    team: <TeamContent />,
    contact: <ContactContent />,
    research: <ResearchContent />,
    insights: <InsightsContent />,
    ventures: <VenturesContent />,
  }

  const theme = sectionThemes[activeSection]
  const activeLabel = sections.find((s) => s.id === activeSection)?.label ?? ''

  return (
    <div className="min-h-screen bg-[#050506]">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activeSection={activeSection} onNavigate={navigateTo} />
          <HeroIntro onCTA={() => {
            navigateTo('about')
            document.getElementById('content-panel')?.scrollIntoView({ behavior: 'smooth' })
          }} />

          {/* Single content panel — shows the active section */}
          <div id="content-panel" className="px-6 md:px-16 lg:px-24 py-24 max-w-[1400px] mx-auto">
            {/* Section header with bull animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`header-${activeSection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-16 flex items-center gap-6"
              >
                <motion.img
                  src="/bull.png"
                  alt=""
                  className="h-14 w-auto"
                  style={{ filter: `drop-shadow(0 0 12px ${theme.accent}40)` }}
                  animate={{
                    x: [0, 6, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div>
                  <p
                    className="text-[11px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: `${theme.accent}90` }}
                  >
                    {activeLabel}
                  </p>
                  <p className="text-[13px] text-zinc-600 italic">{theme.label}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Section content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeSection}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {contentMap[activeSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  )
}

export default App
