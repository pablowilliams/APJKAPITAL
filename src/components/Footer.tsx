import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <span className="text-black font-bold text-xs font-display">APJ</span>
            </div>
            <span className="text-zinc-500 font-display text-sm tracking-wider">
              KAPITAL
            </span>
          </div>

          <div className="flex items-center gap-8">
            {['About', 'Strategy', 'Performance', 'Team', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-zinc-600 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} APJ Kapital. All rights reserved.
          </p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mt-12"
        />

        <p className="text-center text-[10px] text-zinc-800 mt-6 max-w-2xl mx-auto leading-relaxed">
          Past performance is not indicative of future results. All investments involve risk.
          The information on this site does not constitute investment advice or a solicitation to invest.
        </p>
      </div>
    </footer>
  )
}
