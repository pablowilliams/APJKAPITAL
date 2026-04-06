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

export type SectionId = 'about' | 'strategy' | 'insights' | 'ventures' | 'team' | 'research' | 'contact'

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

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  useEffect(() => {
    const hash = window.location.hash.slice(1) as SectionId
    if (hash && sections.some((s) => s.id === hash)) setActiveSection(hash)
    const fn = () => {
      const h = window.location.hash.slice(1) as SectionId
      if (h && sections.some((s) => s.id === h)) setActiveSection(h)
    }
    window.addEventListener('popstate', fn)
    return () => window.removeEventListener('popstate', fn)
  }, [])

  const navigateTo = useCallback((id: SectionId) => {
    setActiveSection(id)
    window.history.pushState(null, '', `#${id}`)
    requestAnimationFrame(() => {
      document.getElementById('content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activeSection={activeSection} onNavigate={navigateTo} />
          <HeroIntro />

          {/* Content */}
          <div id="content" className="border-t border-dark-border">
            {/* Section nav — horizontal rule style */}
            <div className="container">
              <nav className="flex gap-0 overflow-x-auto border-b border-dark-border" aria-label="Sections">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => navigateTo(s.id)}
                    className={`relative px-6 py-5 text-[14px] tracking-wide whitespace-nowrap transition-colors duration-200 ${
                      activeSection === s.id ? 'text-gold' : 'text-zinc-600 hover:text-zinc-300'
                    }`}
                  >
                    {s.label}
                    {activeSection === s.id && (
                      <motion.div
                        layoutId="section-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Section content */}
            <div className="container py-20 md:py-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {CONTENT[activeSection]()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-dark-border">
            <div className="container py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <img src="/bull.png" alt="" className="h-8 w-auto opacity-25" />
                <div>
                  <p className="text-[13px] text-zinc-500 font-display tracking-wide">APJ Kapital</p>
                  <p className="text-[12px] text-zinc-700">Milan &middot; London</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-[12px] text-zinc-700">
                <a href="mailto:info@apjkapital.com" className="hover:text-gold transition-colors">info@apjkapital.com</a>
                <span>&copy; {new Date().getFullYear()} APJ Kapital. All rights reserved.</span>
              </div>
            </div>
            <div className="container pb-8">
              <p className="text-[11px] text-zinc-800 leading-relaxed max-w-3xl">
                Past performance is not indicative of future results. All investments involve risk,
                including possible loss of principal. This website does not constitute investment advice
                or a solicitation to invest.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
