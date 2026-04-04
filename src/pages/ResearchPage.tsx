import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, Cell,
} from 'recharts'

const f = (d: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})

// Slide in from left
const slideL = (d: number) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
})

// Slide in from right
const slideR = (d: number) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
})

// Scale up
const pop = (d: number) => ({
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

/* ── DATA ── */

const weeklyEquities = [
  { name: 'S&P 500', value: 3.4 },
  { name: 'Nasdaq', value: 4.4 },
  { name: 'Dow', value: 3.0 },
  { name: 'Russell 2k', value: 2.8 },
  { name: 'FTSE 100', value: 4.7 },
  { name: 'DAX', value: 3.9 },
  { name: 'Nikkei', value: -1.7 },
]

const oilChart = [
  { d: 'Mar 3', wti: 74.5, brent: 78.2 },
  { d: 'Mar 10', wti: 76.1, brent: 79.8 },
  { d: 'Mar 17', wti: 82.3, brent: 85.4 },
  { d: 'Mar 24', wti: 91.7, brent: 94.2 },
  { d: 'Mar 28', wti: 98.4, brent: 101.3 },
  { d: 'Mar 31', wti: 104.2, brent: 106.1 },
  { d: 'Apr 2', wti: 111.5, brent: 109.0 },
  { d: 'Apr 3', wti: 112.1, brent: 109.5 },
]

const goldChart = [
  { d: 'Mar 3', gold: 4200 },
  { d: 'Mar 10', gold: 4280 },
  { d: 'Mar 17', gold: 4350 },
  { d: 'Mar 24', gold: 4490 },
  { d: 'Mar 28', gold: 4550 },
  { d: 'Mar 31', gold: 4620 },
  { d: 'Apr 2', gold: 4680 },
  { d: 'Apr 3', gold: 4703 },
]

const yieldCurve = [
  { mat: '3M', yield: 3.70 },
  { mat: '6M', yield: 3.71 },
  { mat: '2Y', yield: 3.83 },
  { mat: '5Y', yield: 3.98 },
  { mat: '10Y', yield: 4.32 },
  { mat: '30Y', yield: 4.92 },
]

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0b0b0d] border border-[#1e1e24] rounded-xl px-4 py-3 text-[12px] shadow-xl">
      <p className="text-zinc-500 mb-1">{label}</p>
      {payload.map((e: any) => (
        <p key={e.dataKey} style={{ color: e.stroke || e.fill }}>
          {e.name || e.dataKey}: {typeof e.value === 'number' ? e.value.toLocaleString() : e.value}
        </p>
      ))}
    </div>
  )
}

/* Speech bubble component */
function Bubble({ color, icon, children, anim, className = '' }: {
  color: string; icon: string; children: React.ReactNode; anim: any; className?: string
}) {
  return (
    <motion.div {...anim} className={`relative mb-20 ${className}`}>
      {/* Icon badge */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-[20px] mb-4 border"
        style={{ background: `${color}10`, borderColor: `${color}25` }}
      >
        {icon}
      </div>
      {/* Bubble body */}
      <div
        className="rounded-2xl px-8 py-7 border"
        style={{ background: '#0c0c0f', borderColor: `${color}15` }}
      >
        {children}
      </div>
      {/* Tail */}
      <div
        className="absolute -bottom-2.5 left-10 w-5 h-5 rotate-45 border-r border-b"
        style={{ background: '#0c0c0f', borderColor: `${color}15` }}
      />
    </motion.div>
  )
}

export default function ResearchPage() {
  return (
    <PageWrapper>
      <section className="px-8 md:px-12 py-20 md:py-28">
        <div className="max-w-[780px] mx-auto">

          {/* Header */}
          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-8">
            Macro Research
          </motion.p>
          <motion.h1 {...f(0.1)} className="text-[32px] sm:text-[40px] md:text-[48px] font-display font-bold tracking-[-0.03em] mb-4">
            Weekly Market Report
          </motion.h1>
          <motion.p {...f(0.15)} className="text-[14px] text-zinc-600 mb-20">
            28 March &ndash; 4 April 2026 &nbsp;|&nbsp; APJ Kapital Research Desk
          </motion.p>

          {/* ── EXECUTIVE SUMMARY ── speech bubble */}
          <Bubble color="#c9a84c" icon="📋" anim={pop(0.2)}>
            <p className="text-[11px] text-gold/50 tracking-[0.2em] uppercase mb-4">Executive Summary</p>
            <p className="text-[15px] text-zinc-400 leading-[2] mb-5">
              A volatile week dominated by <strong>geopolitical escalation in the Middle East</strong> and
              the <strong>one-year anniversary of Liberation Day tariffs</strong>. Oil surged past $112/bbl
              on Strait of Hormuz fears, gold extended its run near $4,700.
            </p>
            <p className="text-[15px] text-zinc-400 leading-[2]">
              U.S. labour market surprised to the upside: <strong>+178K non-farm payrolls</strong> vs.
              130K expected, unemployment falling to <strong>4.3%</strong>. Fed funds steady at 3.75%.
            </p>
          </Bubble>

          {/* ── EQUITIES ── slides in from left, tech/circuit board vibe */}
          <Bubble color="#3b82f6" icon="📈" anim={slideL(0.25)}>
            <p className="text-[11px] text-blue-400/50 tracking-[0.2em] uppercase mb-6">Equities &mdash; Weekly Change</p>
            <div className="h-[220px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyEquities} layout="vertical" margin={{ left: 0, right: 16 }}>
                  <CartesianGrid stroke="#16161a" horizontal={false} />
                  <XAxis type="number" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} width={85} />
                  <Tooltip content={<Tip />} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={14}>
                    {weeklyEquities.map((e) => (
                      <Cell key={e.name} fill={e.value >= 0 ? '#22c55e' : '#ef4444'} opacity={0.75} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-[13px]">
                <thead><tr className="border-b border-dark-border text-zinc-600">
                  <th className="text-left py-2.5 font-medium">Index</th>
                  <th className="text-right py-2.5 font-medium">Level</th>
                  <th className="text-right py-2.5 font-medium">Weekly</th>
                  <th className="text-right py-2.5 font-medium">YTD</th>
                </tr></thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-dark-border/50"><td className="py-3">S&P 500</td><td className="text-right">6,583</td><td className="text-right text-emerald-400">+3.4%</td><td className="text-right text-emerald-400">+29.5%</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">Nasdaq</td><td className="text-right">21,879</td><td className="text-right text-emerald-400">+4.4%</td><td className="text-right text-emerald-400">+37.8%</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">Dow Jones</td><td className="text-right">46,505</td><td className="text-right text-emerald-400">+3.0%</td><td className="text-right text-emerald-400">+21.2%</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">Russell 2000</td><td className="text-right">2,530</td><td className="text-right text-emerald-400">+2.8%</td><td className="text-right text-emerald-400">+32.4%</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">FTSE 100</td><td className="text-right text-zinc-600">&mdash;</td><td className="text-right text-emerald-400">+4.7%</td><td className="text-right text-zinc-600">&mdash;</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">DAX 40</td><td className="text-right text-zinc-600">&mdash;</td><td className="text-right text-emerald-400">+3.9%</td><td className="text-right text-zinc-600">&mdash;</td></tr>
                  <tr><td className="py-3">Nikkei 225</td><td className="text-right text-zinc-600">&mdash;</td><td className="text-right text-red-400">-1.7%</td><td className="text-right text-zinc-600">&mdash;</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.9]">
              U.S. and Europe rallied on strong NFP and Hormuz de-escalation hopes.
              Japan underperformed on yen weakness (USD/JPY 159.6) and energy costs. VIX at 23.9.
            </p>
          </Bubble>

          {/* ── OIL ── slides in from right, red/orange energy theme */}
          <Bubble color="#ef4444" icon="🛢️" anim={slideR(0.3)}>
            <p className="text-[11px] text-red-400/50 tracking-[0.2em] uppercase mb-6">Crude Oil &mdash; Hormuz Crisis</p>
            <div className="h-[240px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={oilChart}>
                  <defs>
                    <linearGradient id="oilG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
                  <XAxis dataKey="d" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[70, 120]} />
                  <Tooltip content={<Tip />} />
                  <Area type="monotone" dataKey="brent" stroke="#f97316" strokeWidth={1.5} fill="transparent" name="Brent" />
                  <Area type="monotone" dataKey="wti" stroke="#ef4444" strokeWidth={2} fill="url(#oilG)" name="WTI" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.9]">
              WTI surged <strong className="text-red-400">+18.1% WoW</strong> to $112.06, Brent +7.0% to $109.03.
              The Strait of Hormuz — ~20M bbl/day — remains constrained post-Operation Epic Fury.
              Energy equities outperformed all sectors. Natural gas bucked the trend at -4.4%.
            </p>
          </Bubble>

          {/* ── GOLD ── pops in, gold themed */}
          <Bubble color="#c9a84c" icon="🥇" anim={pop(0.35)}>
            <p className="text-[11px] text-gold/50 tracking-[0.2em] uppercase mb-6">Gold &mdash; Safe Haven</p>
            <div className="h-[200px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={goldChart}>
                  <defs>
                    <linearGradient id="goldG2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c9a84c" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#c9a84c" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
                  <XAxis dataKey="d" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[4100, 4800]} />
                  <Tooltip content={<Tip />} />
                  <Area type="monotone" dataKey="gold" stroke="#c9a84c" strokeWidth={2} fill="url(#goldG2)" name="Gold $/oz" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.9]">
              Gold closed at <strong className="text-gold">$4,703/oz</strong>, up 6.8% WoW near all-time highs.
              ETF inflows hit 78 tonnes YTD (+73% YoY). Silver at $73.17 (+4.9%).
              Geopolitical risk + USD softness driving institutional safe-haven flows.
            </p>
          </Bubble>

          {/* ── BONDS ── slides from left, blue theme */}
          <Bubble color="#3b82f6" icon="🏦" anim={slideL(0.4)}>
            <p className="text-[11px] text-blue-400/50 tracking-[0.2em] uppercase mb-6">Fixed Income &mdash; Yield Curve</p>
            <div className="h-[200px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yieldCurve}>
                  <defs>
                    <linearGradient id="yG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
                  <XAxis dataKey="mat" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[3.4, 5.2]} />
                  <Tooltip content={<Tip />} />
                  <Area type="monotone" dataKey="yield" stroke="#3b82f6" strokeWidth={2} fill="url(#yG)" name="Yield %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-[13px]">
                <thead><tr className="border-b border-dark-border text-zinc-600">
                  <th className="text-left py-2.5 font-medium">Maturity</th>
                  <th className="text-right py-2.5 font-medium">Yield</th>
                  <th className="text-right py-2.5 font-medium">WoW</th>
                  <th className="text-right py-2.5 font-medium">MoM</th>
                </tr></thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-dark-border/50"><td className="py-3">2-Year</td><td className="text-right">3.83%</td><td className="text-right">+2.4bp</td><td className="text-right">+27.7bp</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">5-Year</td><td className="text-right">3.98%</td><td className="text-right">+2.9bp</td><td className="text-right">&mdash;</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">10-Year</td><td className="text-right">4.32%</td><td className="text-right">+0.9bp</td><td className="text-right">+21.6bp</td></tr>
                  <tr><td className="py-3">30-Year</td><td className="text-right">4.92%</td><td className="text-right">+3.5bp</td><td className="text-right">&mdash;</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.9]">
              Curve steepened. 2s10s spread at +49bp as the long end prices persistent energy inflation.
              Markets pricing zero Fed cuts through 2026 on oil-driven CPI concerns.
            </p>
          </Bubble>

          {/* ── FX & CRYPTO ── slides from right, green theme */}
          <Bubble color="#22c55e" icon="💱" anim={slideR(0.45)}>
            <p className="text-[11px] text-emerald-400/50 tracking-[0.2em] uppercase mb-6">Currencies & Digital Assets</p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-[13px]">
                <thead><tr className="border-b border-dark-border text-zinc-600">
                  <th className="text-left py-2.5 font-medium">Pair</th>
                  <th className="text-right py-2.5 font-medium">Level</th>
                  <th className="text-right py-2.5 font-medium">WoW</th>
                  <th className="text-right py-2.5 font-medium">Trend</th>
                </tr></thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-dark-border/50"><td className="py-3">DXY</td><td className="text-right">100.22</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-600">Safe-haven bid</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">EUR/USD</td><td className="text-right">1.1522</td><td className="text-right text-red-400">-0.4%</td><td className="text-right text-zinc-600">Energy drag</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">GBP/USD</td><td className="text-right">1.3194</td><td className="text-right text-red-400">-0.2%</td><td className="text-right text-zinc-600">Mild weakness</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">USD/JPY</td><td className="text-right">159.63</td><td className="text-right text-red-400">+0.6%</td><td className="text-right text-zinc-600">Yen pressure</td></tr>
                  <tr className="border-b border-dark-border/50"><td className="py-3">BTC/USD</td><td className="text-right">$66,957</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-600">Range-bound</td></tr>
                  <tr><td className="py-3">XRP/USD</td><td className="text-right">$1.31</td><td className="text-right text-emerald-400">+0.1%</td><td className="text-right text-zinc-600">Flat</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.9]">
              Dollar firmed on safe-haven flows. Euro weakened on Eurozone energy vulnerability.
              Yen at multi-decade lows. Crypto muted — BTC consolidating $65K&ndash;$68K.
            </p>
          </Bubble>

          {/* ── WEEK AHEAD ── pops in */}
          <Bubble color="#a855f7" icon="📅" anim={pop(0.5)}>
            <p className="text-[11px] text-purple-400/50 tracking-[0.2em] uppercase mb-5">Week Ahead</p>
            <div className="space-y-4 text-[14px] text-zinc-400 leading-[1.85]">
              <p><strong>Mon 7 Apr</strong> — ISM Services PMI; Fed's Waller speaks</p>
              <p><strong>Tue 8 Apr</strong> — JOLTS job openings; ECB minutes</p>
              <p><strong>Wed 9 Apr</strong> — FOMC minutes; 10Y auction</p>
              <p><strong>Thu 10 Apr</strong> — CPI (March); initial claims</p>
              <p><strong>Fri 11 Apr</strong> — PPI; UMich consumer sentiment</p>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.9] mt-6">
              All eyes on Thursday's CPI. Consensus +0.3% MoM core — any upside surprise
              cements "no cuts in 2026" and pressures rate-sensitive sectors.
            </p>
          </Bubble>

          {/* Footer */}
          <motion.div {...f(0.6)} className="pt-10 border-t border-dark-border">
            <p className="text-[11px] text-zinc-700 leading-[1.8]">
              For informational purposes only. Not investment advice.
              Data: Yahoo Finance, Trading Economics, public reporting. 4 April 2026.
              &copy; APJ Kapital Research.
            </p>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  )
}
