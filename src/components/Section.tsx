import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { SectionId } from '../App'

// Each section gets a unique bull animation description and accent
const sectionThemes: Record<SectionId, { accent: string; bullAnim: string }> = {
  about:    { accent: '#c9a84c', bullAnim: 'The bull stands tall — strength through conviction.' },
  strategy: { accent: '#3b82f6', bullAnim: 'The bull charges forward — decisive action.' },
  insights: { accent: '#a855f7', bullAnim: 'The bull surveys the horizon — far-sighted vision.' },
  ventures: { accent: '#22c55e', bullAnim: 'The bull breaks new ground — pioneering spirit.' },
  team:     { accent: '#f59e0b', bullAnim: 'The bull leads the herd — trusted leadership.' },
  research: { accent: '#ef4444', bullAnim: 'The bull reads the terrain — analytical precision.' },
  contact:  { accent: '#06b6d4', bullAnim: 'The bull approaches — open and approachable.' },
}

interface Props {
  id: SectionId
  label: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export default function Section({ id, label, isOpen, onToggle, children }: Props) {
  const theme = sectionThemes[id]

  return (
    <div>
      {/* Button row */}
      <button
        onClick={onToggle}
        className="w-full group"
      >
        <div
          className={`flex items-center justify-between px-8 md:px-12 py-6 rounded-2xl border-2 transition-all duration-400 ${
            isOpen
              ? 'border-current bg-current/[0.04]'
              : 'border-zinc-800/60 bg-transparent hover:border-zinc-700'
          }`}
          style={isOpen ? { borderColor: `${theme.accent}30`, background: `${theme.accent}06` } : undefined}
        >
          <div className="flex items-center gap-5">
            {/* Dot indicator */}
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isOpen ? 'scale-100' : 'scale-75 opacity-40'
              }`}
              style={{ background: theme.accent }}
            />
            <span
              className={`text-[20px] md:text-[24px] font-display font-semibold tracking-[-0.02em] transition-colors duration-300 ${
                isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
              }`}
            >
              {label}
            </span>
          </div>

          <ChevronDown
            size={20}
            className={`transition-all duration-400 ${
              isOpen ? 'rotate-180 text-zinc-400' : 'text-zinc-700 group-hover:text-zinc-500'
            }`}
          />
        </div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {/* Bull animation strip */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 px-10 md:px-14 pt-8 pb-4"
            >
              <motion.img
                src="/bull-logo.svg"
                alt=""
                className="h-8 w-auto opacity-20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <span className="text-[12px] text-zinc-700 italic">{theme.bullAnim}</span>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="px-8 md:px-12 pb-12 pt-4"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
