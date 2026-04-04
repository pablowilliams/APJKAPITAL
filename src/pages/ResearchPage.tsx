import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, Cell,
} from 'recharts'

const f = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
})

/* ── DATA ── */

const weeklyEquities = [
  { name: 'S&P 500', value: 3.4, level: '6,583' },
  { name: 'Nasdaq', value: 4.4, level: '21,879' },
  { name: 'Dow', value: 3.0, level: '46,505' },
  { name: 'Russell 2k', value: 2.8, level: '2,530' },
  { name: 'FTSE 100', value: 4.7, level: '—' },
  { name: 'DAX', value: 3.9, level: '—' },
  { name: 'Nikkei', value: -1.7, level: '—' },
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

const ChartTip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0b0b0d] border border-[#1a1a20] rounded-md px-3 py-2 text-[11px]">
      <p className="text-zinc-500 mb-1">{label}</p>
      {payload.map((e: any) => (
        <p key={e.dataKey} style={{ color: e.stroke || e.fill }}>
          {e.name || e.dataKey}: {typeof e.value === 'number' ? e.value.toLocaleString() : e.value}
        </p>
      ))}
    </div>
  )
}

export default function ResearchPage() {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-72px)] px-8 md:px-12 py-16 md:py-20">
        <div className="max-w-[880px] mx-auto">

          {/* Header */}
          <motion.p {...f(0.05)} className="text-gold/70 text-[12px] tracking-[0.25em] uppercase mb-5">
            Macro Research
          </motion.p>
          <motion.h1 {...f(0.1)} className="text-[28px] sm:text-[36px] md:text-[44px] font-display font-bold leading-[1.1] tracking-[-0.03em] mb-3">
            Weekly Market Report
          </motion.h1>
          <motion.p {...f(0.15)} className="text-[14px] text-zinc-600 mb-12">
            28 March &ndash; 4 April 2026 &nbsp;|&nbsp; APJ Kapital Research Desk
          </motion.p>

          {/* ── EXECUTIVE SUMMARY ── */}
          <motion.div {...f(0.2)} className="mb-14">
            <h2 className="text-[13px] text-gold/60 tracking-[0.2em] uppercase mb-4">Executive Summary</h2>
            <div className="border-l-2 border-gold/20 pl-6 space-y-4 text-[15px] text-zinc-400 leading-[1.85]">
              <p>
                A volatile week dominated by <strong className="text-zinc-200">geopolitical escalation in the Middle East</strong> and
                the <strong className="text-zinc-200">one-year anniversary of Liberation Day tariffs</strong>. Oil surged past $112/bbl
                on Strait of Hormuz fears, gold extended its run near $4,700, and equities rallied
                sharply mid-week on hopes of de-escalation before giving back gains Thursday.
              </p>
              <p>
                U.S. labour market data surprised to the upside: <strong className="text-zinc-200">+178K non-farm payrolls</strong> vs.
                130K expected, unemployment falling to <strong className="text-zinc-200">4.3%</strong>. Fed funds rate steady at 3.75%;
                markets now pricing no cuts through year-end as energy-driven inflation concerns persist.
              </p>
            </div>
          </motion.div>

          {/* ── EQUITIES ── */}
          <motion.div {...f(0.25)} className="mb-14">
            <h2 className="text-[13px] text-gold/60 tracking-[0.2em] uppercase mb-6">Equity Markets &mdash; Weekly Change</h2>
            <div className="h-[220px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyEquities} layout="vertical" margin={{ left: 0, right: 20 }}>
                  <CartesianGrid stroke="#16161a" horizontal={false} />
                  <XAxis type="number" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip content={<ChartTip />} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16}>
                    {weeklyEquities.map((entry) => (
                      <Cell key={entry.name} fill={entry.value >= 0 ? '#22c55e' : '#ef4444'} opacity={0.7} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-dark-border text-zinc-600">
                    <th className="text-left py-2 font-medium">Index</th>
                    <th className="text-right py-2 font-medium">Level</th>
                    <th className="text-right py-2 font-medium">Weekly</th>
                    <th className="text-right py-2 font-medium">YTD</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-dark-border"><td className="py-2">S&P 500</td><td className="text-right">6,583</td><td className="text-right text-emerald-400">+3.4%</td><td className="text-right text-emerald-400">+29.5%</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">Nasdaq</td><td className="text-right">21,879</td><td className="text-right text-emerald-400">+4.4%</td><td className="text-right text-emerald-400">+37.8%</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">Dow Jones</td><td className="text-right">46,505</td><td className="text-right text-emerald-400">+3.0%</td><td className="text-right text-emerald-400">+21.2%</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">Russell 2000</td><td className="text-right">2,530</td><td className="text-right text-emerald-400">+2.8%</td><td className="text-right text-emerald-400">+32.4%</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">FTSE 100</td><td className="text-right text-zinc-600">&mdash;</td><td className="text-right text-emerald-400">+4.7%</td><td className="text-right text-zinc-600">&mdash;</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">DAX 40</td><td className="text-right text-zinc-600">&mdash;</td><td className="text-right text-emerald-400">+3.9%</td><td className="text-right text-zinc-600">&mdash;</td></tr>
                  <tr><td className="py-2">Nikkei 225</td><td className="text-right text-zinc-600">&mdash;</td><td className="text-right text-red-400">-1.7%</td><td className="text-right text-zinc-600">&mdash;</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.8] mt-5">
              U.S. and European equities rallied on a strong NFP print and brief hopes of Strait of Hormuz
              de-escalation after Iran-Oman protocol talks. Japan underperformed on yen weakness
              (USD/JPY 159.6) and energy import cost fears. VIX remains elevated at 23.9.
            </p>
          </motion.div>

          {/* ── OIL ── */}
          <motion.div {...f(0.3)} className="mb-14">
            <h2 className="text-[13px] text-gold/60 tracking-[0.2em] uppercase mb-6">Crude Oil &mdash; Strait of Hormuz Crisis</h2>
            <div className="h-[240px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={oilChart}>
                  <defs>
                    <linearGradient id="oilG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
                  <XAxis dataKey="d" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[70, 120]} />
                  <Tooltip content={<ChartTip />} />
                  <Area type="monotone" dataKey="brent" stroke="#f97316" strokeWidth={1.5} fill="transparent" name="Brent" />
                  <Area type="monotone" dataKey="wti" stroke="#ef4444" strokeWidth={1.5} fill="url(#oilG)" name="WTI" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.8]">
              WTI surged <strong className="text-red-400">+18.1% WoW</strong> to $112.06, Brent +7.0% to $109.03. The Strait of
              Hormuz &mdash; through which ~20M bbl/day flows &mdash; remains effectively constrained following
              Operation Epic Fury. Iran-Oman talks on a shipping protocol offered brief relief mid-week
              before Trump&rsquo;s vow to &ldquo;hit Iran hard&rdquo; reversed sentiment. Energy equities outperformed
              all sectors. Natural gas bucked the trend, falling 4.4% WoW.
            </p>
          </motion.div>

          {/* ── GOLD ── */}
          <motion.div {...f(0.35)} className="mb-14">
            <h2 className="text-[13px] text-gold/60 tracking-[0.2em] uppercase mb-6">Gold &mdash; Safe Haven Demand</h2>
            <div className="h-[200px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={goldChart}>
                  <defs>
                    <linearGradient id="goldG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c9a84c" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#c9a84c" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
                  <XAxis dataKey="d" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[4100, 4800]} />
                  <Tooltip content={<ChartTip />} />
                  <Area type="monotone" dataKey="gold" stroke="#c9a84c" strokeWidth={1.5} fill="url(#goldG)" name="Gold $/oz" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.8]">
              Gold closed at <strong className="text-gold">$4,703/oz</strong>, up 6.8% WoW and near all-time highs.
              Central bank purchases continue accelerating &mdash; net ETF inflows hit 78 tonnes YTD
              (+73% YoY). Silver followed at $73.17 (+4.9% WoW). The combination of geopolitical
              risk, USD softness, and Fed rate uncertainty continues to drive institutional safe-haven flows.
            </p>
          </motion.div>

          {/* ── FIXED INCOME ── */}
          <motion.div {...f(0.4)} className="mb-14">
            <h2 className="text-[13px] text-gold/60 tracking-[0.2em] uppercase mb-6">Fixed Income &mdash; Yield Curve</h2>
            <div className="h-[200px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yieldCurve}>
                  <defs>
                    <linearGradient id="yieldG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
                  <XAxis dataKey="mat" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[3.4, 5.2]} />
                  <Tooltip content={<ChartTip />} />
                  <Area type="monotone" dataKey="yield" stroke="#3b82f6" strokeWidth={1.5} fill="url(#yieldG)" name="Yield %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-dark-border text-zinc-600">
                    <th className="text-left py-2 font-medium">Maturity</th>
                    <th className="text-right py-2 font-medium">Yield</th>
                    <th className="text-right py-2 font-medium">WoW &Delta;</th>
                    <th className="text-right py-2 font-medium">MoM &Delta;</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-dark-border"><td className="py-2">2-Year</td><td className="text-right">3.83%</td><td className="text-right">+2.4bp</td><td className="text-right">+27.7bp</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">5-Year</td><td className="text-right">3.98%</td><td className="text-right">+2.9bp</td><td className="text-right">—</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">10-Year</td><td className="text-right">4.32%</td><td className="text-right">+0.9bp</td><td className="text-right">+21.6bp</td></tr>
                  <tr><td className="py-2">30-Year</td><td className="text-right">4.92%</td><td className="text-right">+3.5bp</td><td className="text-right">—</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.8] mt-5">
              Curve steepened modestly. The 2s10s spread widened to +49bp as the long end priced in
              persistent energy inflation. Fed funds at 3.75%; markets now pricing zero cuts through 2026
              as oil-driven CPI pressures overwhelm the softening labour market narrative.
            </p>
          </motion.div>

          {/* ── FX & CRYPTO ── */}
          <motion.div {...f(0.45)} className="mb-14">
            <h2 className="text-[13px] text-gold/60 tracking-[0.2em] uppercase mb-6">Currencies & Digital Assets</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-dark-border text-zinc-600">
                    <th className="text-left py-2 font-medium">Pair</th>
                    <th className="text-right py-2 font-medium">Level</th>
                    <th className="text-right py-2 font-medium">WoW</th>
                    <th className="text-right py-2 font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-dark-border"><td className="py-2">DXY</td><td className="text-right">100.22</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-500">Conflict bid</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">EUR/USD</td><td className="text-right">1.1522</td><td className="text-right text-red-400">-0.4%</td><td className="text-right text-zinc-500">Energy drag</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">GBP/USD</td><td className="text-right">1.3194</td><td className="text-right text-red-400">-0.2%</td><td className="text-right text-zinc-500">Mild weakness</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">USD/JPY</td><td className="text-right">159.63</td><td className="text-right text-red-400">+0.6%</td><td className="text-right text-zinc-500">Yen under pressure</td></tr>
                  <tr className="border-b border-dark-border"><td className="py-2">BTC/USD</td><td className="text-right">$66,957</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-500">Range-bound</td></tr>
                  <tr><td className="py-2">XRP/USD</td><td className="text-right">$1.31</td><td className="text-right text-emerald-400">+0.1%</td><td className="text-right text-zinc-500">Flat</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.8] mt-5">
              Dollar firmed on safe-haven flows despite long-term structural weakness thesis.
              Euro weakened on Eurozone energy vulnerability. Yen hit multi-decade lows as
              BoJ remains pinned. Crypto notably muted despite macro volatility &mdash; BTC
              consolidating in the $65K&ndash;$68K range.
            </p>
          </motion.div>

          {/* ── WEEK AHEAD ── */}
          <motion.div {...f(0.5)} className="mb-10">
            <h2 className="text-[13px] text-gold/60 tracking-[0.2em] uppercase mb-4">Week Ahead</h2>
            <div className="border-l-2 border-gold/20 pl-6 space-y-3 text-[14px] text-zinc-400 leading-[1.8]">
              <p><strong className="text-zinc-200">Mon 7 Apr</strong> &mdash; ISM Services PMI; Fed&rsquo;s Waller speaks</p>
              <p><strong className="text-zinc-200">Tue 8 Apr</strong> &mdash; JOLTS job openings; ECB minutes</p>
              <p><strong className="text-zinc-200">Wed 9 Apr</strong> &mdash; FOMC minutes release; 10Y auction</p>
              <p><strong className="text-zinc-200">Thu 10 Apr</strong> &mdash; CPI (March); initial jobless claims</p>
              <p><strong className="text-zinc-200">Fri 11 Apr</strong> &mdash; PPI; UMich consumer sentiment</p>
            </div>
            <p className="text-[13px] text-zinc-500 leading-[1.8] mt-5">
              All eyes on Thursday&rsquo;s CPI print. Consensus expects +0.3% MoM core, but any
              energy-driven upside surprise could further cement the &ldquo;no cuts in 2026&rdquo; narrative
              and pressure rate-sensitive sectors. FOMC minutes will be scrutinised for any shift
              in the Fed&rsquo;s reaction function to geopolitical supply shocks.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div {...f(0.55)} className="pt-8 border-t border-dark-border">
            <p className="text-[11px] text-zinc-700 leading-relaxed">
              This report is for informational purposes only and does not constitute investment advice.
              Data sourced from Yahoo Finance, Trading Economics, and public reporting as of 4 April 2026.
              &copy; APJ Kapital Research.
            </p>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  )
}
