import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/bull-logo.svg" alt="APJ Kapital" className="h-8 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-display font-semibold text-sm tracking-widest">
                APJ
              </span>
              <span className="text-gold/50 font-display text-[8px] tracking-[0.3em] uppercase">
                Kapital
              </span>
            </div>
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
          Past performance is not indicative of future results. All investments involve risk, including possible loss of principal.
          The information on this site does not constitute investment advice or a solicitation to invest.
          APJ Kapital is not responsible for any investment decisions made on the basis of information provided herein.
        </p>
      </div>
    </footer>
  )
}
