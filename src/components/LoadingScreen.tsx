import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 2200)
    const t2 = setTimeout(onComplete, 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete])

  if (done) return null

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#0a0a0c] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src="/bull.png" alt="APJ Kapital"
        className="w-[200px] md:w-[280px] mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[14px] text-zinc-500 font-display tracking-[0.15em]"
      >
        APJ KAPITAL
      </motion.p>
      <motion.div
        className="w-32 h-px bg-dark-border mt-6 overflow-hidden rounded-full"
      >
        <motion.div
          className="h-full bg-gold/50 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'linear' }}
        />
      </motion.div>
    </motion.div>
  )
}
