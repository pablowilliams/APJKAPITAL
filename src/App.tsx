import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import StrategyPage from './pages/StrategyPage'
import PerformancePage from './pages/PerformancePage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import ResearchPage from './pages/ResearchPage'
import BullTransition from './components/BullTransition'

export type Page = 'home' | 'about' | 'strategy' | 'performance' | 'team' | 'contact' | 'research'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionTarget, setTransitionTarget] = useState<Page>('home')

  const navigateTo = useCallback((page: Page) => {
    if (page === currentPage || isTransitioning) return
    setTransitionTarget(page)
    setIsTransitioning(true)
  }, [currentPage, isTransitioning])

  const handleTransitionMid = useCallback(() => {
    setCurrentPage(transitionTarget)
  }, [transitionTarget])

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} />
      case 'about': return <AboutPage />
      case 'strategy': return <StrategyPage />
      case 'performance': return <PerformancePage />
      case 'team': return <TeamPage />
      case 'contact': return <ContactPage />
      case 'research': return <ResearchPage />
    }
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <AnimatePresence mode="wait">
        <BullTransition
          key={isTransitioning ? `trans-${transitionTarget}` : `page-${currentPage}`}
          isTransitioning={isTransitioning}
          targetPage={transitionTarget}
          onMidpoint={handleTransitionMid}
          onComplete={handleTransitionEnd}
        />
      </AnimatePresence>

      <main className="pt-[72px]">
        <AnimatePresence mode="wait">
          <div key={currentPage}>
            {renderPage()}
          </div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
