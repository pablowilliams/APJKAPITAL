import { motion } from 'framer-motion'

/** Floating gold orb — decorative background element */
export function GoldOrb({
  size = 300,
  x = '50%',
  y = '50%',
  delay = 0,
  opacity = 0.07,
}: {
  size?: number
  x?: string
  y?: string
  delay?: number
  opacity?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute rounded-full pointer-events-none animate-float-slow"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, rgba(201,168,76,${opacity * 3}) 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
    />
  )
}

/** Abstract city skyline SVG — Milan/London vibe */
export function CitylineSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cityGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Buildings */}
      <rect x="40" y="80" width="30" height="120" fill="url(#cityGold)" rx="2" />
      <rect x="80" y="50" width="25" height="150" fill="url(#cityGold)" rx="2" />
      <rect x="115" y="100" width="35" height="100" fill="url(#cityGold)" rx="2" />
      <rect x="160" y="30" width="20" height="170" fill="url(#cityGold)" rx="2" />
      <rect x="190" y="70" width="40" height="130" fill="url(#cityGold)" rx="2" />
      <rect x="245" y="90" width="28" height="110" fill="url(#cityGold)" rx="2" />
      <rect x="285" y="40" width="22" height="160" fill="url(#cityGold)" rx="2" />
      <rect x="320" y="60" width="45" height="140" fill="url(#cityGold)" rx="2" />
      <rect x="380" y="85" width="30" height="115" fill="url(#cityGold)" rx="2" />
      <rect x="425" y="25" width="18" height="175" fill="url(#cityGold)" rx="2" />
      <rect x="455" y="55" width="35" height="145" fill="url(#cityGold)" rx="2" />
      <rect x="505" y="95" width="25" height="105" fill="url(#cityGold)" rx="2" />
      <rect x="545" y="45" width="30" height="155" fill="url(#cityGold)" rx="2" />
      <rect x="590" y="75" width="40" height="125" fill="url(#cityGold)" rx="2" />
      <rect x="645" y="35" width="22" height="165" fill="url(#cityGold)" rx="2" />
      <rect x="680" y="65" width="35" height="135" fill="url(#cityGold)" rx="2" />
      <rect x="730" y="90" width="28" height="110" fill="url(#cityGold)" rx="2" />
      {/* Window dots */}
      {[80, 160, 285, 425, 545, 645].map((bx) =>
        [0, 1, 2, 3, 4].map((row) => (
          <circle
            key={`${bx}-${row}`}
            cx={bx + 10}
            cy={50 + row * 25}
            r="1.5"
            fill="#c9a84c"
            opacity={Math.random() * 0.5 + 0.2}
          />
        ))
      )}
    </svg>
  )
}

/** Abstract data grid — looks like a trading terminal */
export function DataGridSVG({ className = '' }: { className?: string }) {
  const rows = 8
  const cols = 12
  return (
    <svg viewBox="0 0 480 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const opacity = Math.random() * 0.4 + 0.05
          const isGold = Math.random() > 0.7
          return (
            <rect
              key={`${r}-${c}`}
              x={c * 40 + 4}
              y={r * 40 + 4}
              width="32"
              height="32"
              rx="6"
              fill={isGold ? '#c9a84c' : '#ffffff'}
              opacity={opacity}
            />
          )
        })
      )}
    </svg>
  )
}

/** Wavy line divider */
export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1200 60" className="w-full h-12" fill="none" preserveAspectRatio="none">
        <path
          d="M0,30 C200,0 400,60 600,30 C800,0 1000,60 1200,30 L1200,60 L0,60 Z"
          fill="#111111"
        />
      </svg>
    </div>
  )
}
