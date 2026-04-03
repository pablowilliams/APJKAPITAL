import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Strategy from './components/Strategy'
import Performance from './components/Performance'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Strategy />
      <Performance />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
