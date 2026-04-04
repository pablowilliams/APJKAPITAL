import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050506]/80 backdrop-blur-xl border-b border-white/[0.03]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/bull-logo.svg" alt="APJ Kapital" className="h-8 w-auto" />
          <span className="text-white font-display font-semibold text-[14px] tracking-[0.1em]">
            APJ KAPITAL
          </span>
        </a>
        <a
          href="mailto:info@apjkapital.com"
          className="text-[13px] text-zinc-500 hover:text-gold transition-colors"
        >
          info@apjkapital.com
        </a>
      </div>
    </motion.nav>
  )
}
