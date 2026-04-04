import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { SectionId } from '../App'

const themes: Record<SectionId, {
  accent: string
  bullMotion: { x?: number[]; y?: number[]; rotate?: number[]; scale?: number[] }
  bullDuration: number
  label: string
}> = {
  about: {
    accent: '#c9a84c',
    bullMotion: { y: [0, -8, 0], rotate: [0, 2, 0] },
    bullDuration: 3,
    label: 'The bull stands tall.',
  },
  strategy: {
    accent: '#3b82f6',
    bullMotion: { x: [-30, 30, -30], rotate: [-5, 5, -5], scale: [1, 1.15, 1] },
    bullDuration: 2,
    label: 'The bull charges.',
  },
  insights: {
    accent: '#a855f7',
    bullMotion: { rotate: [0, -15, 15, 0], y: [0, -4, -4, 0] },
    bullDuration: 4,
    label: 'The bull surveys the horizon.',
  },
  ventures: {
    accent: '#22c55e',
    bullMotion: { x: [0, 15, 0], y: [0, -12, 0], scale: [1, 1.1, 1] },
    bullDuration: 3,
    label: 'The bull explores new ground.',
  },
  team: {
    accent: '#f59e0b',
    bullMotion: { y: [0, -3, 0], scale: [1, 1.05, 1] },
    bullDuration: 4,
    label: 'The bull leads the herd.',
  },
  research: {
    accent: '#ef4444',
    bullMotion: { x: [-20, 20, -20], y: [0, -6, 0], rotate: [-3, 3, -3] },
    bullDuration: 2.5,
    label: 'The bull reads the market.',
  },
  contact: {
    accent: '#06b6d4',
    bullMotion: { x: [0, 8, 0], scale: [1, 1.08, 1], rotate: [0, 3, 0] },
    bullDuration: 3.5,
    label: 'The bull approaches.',
  },
}

interface Props {
  id: SectionId
  label: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export default function Section({ id, label, isOpen, onToggle, children }: Props) {
  const t = themes[id]

  return (
    <div>
      <button onClick={onToggle} className="w-full group">
        <div
          className="flex items-center justify-between px-8 md:px-12 py-7 rounded-2xl border-2 transition-all duration-300"
          style={
            isOpen
              ? { borderColor: `${t.accent}35`, background: `${t.accent}05` }
              : { borderColor: '#27272a40' }
          }
        >
          <div className="flex items-center gap-5">
            <div
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background: t.accent,
                opacity: isOpen ? 1 : 0.3,
                transform: isOpen ? 'scale(1)' : 'scale(0.7)',
              }}
            />
            <span
              className={`text-[22px] md:text-[26px] font-display font-semibold tracking-[-0.02em] transition-colors duration-300 ${
                isOpen ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
              }`}
            >
              {label}
            </span>
          </div>
          <ChevronDown
            size={22}
            className={`transition-all duration-400 ${
              isOpen ? 'rotate-180 text-zinc-400' : 'text-zinc-700 group-hover:text-zinc-500'
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {/* Bull animation strip — unique per section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-5 px-10 md:px-14 pt-10 pb-2"
            >
              <motion.img
                src="/bull.png"
                alt=""
                className="h-10 w-auto"
                style={{ filter: `drop-shadow(0 0 8px ${t.accent}30)` }}
                animate={t.bullMotion}
                transition={{ duration: t.bullDuration, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-[12px] italic" style={{ color: `${t.accent}50` }}>
                {t.label}
              </span>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-8 md:px-12 pb-14 pt-6"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
