import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroIntro from './components/HeroIntro'
import Section from './components/Section'
import AboutContent from './sections/AboutContent'
import StrategyContent from './sections/StrategyContent'
import TeamContent from './sections/TeamContent'
import ContactContent from './sections/ContactContent'
import ResearchContent from './sections/ResearchContent'
import InsightsContent from './sections/InsightsContent'
import VenturesContent from './sections/VenturesContent'

export type SectionId = 'about' | 'strategy' | 'team' | 'contact' | 'research' | 'insights' | 'ventures'

const sections: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'insights', label: 'Insights' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'team', label: 'Team' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [loading, setLoading] = useState(true)
  const [openSection, setOpenSection] = useState<SectionId | null>(null)

  const toggle = useCallback((id: SectionId) => {
    setOpenSection((prev) => (prev === id ? null : id))
  }, [])

  const contentMap: Record<SectionId, React.ReactNode> = {
    about: <AboutContent />,
    strategy: <StrategyContent />,
    team: <TeamContent />,
    contact: <ContactContent />,
    research: <ResearchContent />,
    insights: <InsightsContent />,
    ventures: <VenturesContent />,
  }

  return (
    <div className="min-h-screen bg-[#050506]">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <HeroIntro />

          <div className="px-6 md:px-16 lg:px-24 py-20 max-w-[1400px] mx-auto">
            <div className="space-y-5">
              {sections.map((s) => (
                <Section
                  key={s.id}
                  id={s.id}
                  label={s.label}
                  isOpen={openSection === s.id}
                  onToggle={() => toggle(s.id)}
                >
                  {contentMap[s.id]}
                </Section>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
