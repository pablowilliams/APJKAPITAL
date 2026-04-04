import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, Cell,
} from 'recharts'

const tabs = ['Equities', 'Oil', 'Gold', 'Bonds', 'FX & Crypto', 'Week Ahead'] as const
type Tab = typeof tabs[number]

const tabColors: Record<Tab, string> = {
  'Equities': '#3b82f6',
  'Oil': '#ef4444',
  'Gold': '#c9a84c',
  'Bonds': '#6366f1',
  'FX & Crypto': '#22c55e',
  'Week Ahead': '#a855f7',
}

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0b0b0d] border border-[#1e1e24] rounded-lg px-3.5 py-2.5 text-[11px] shadow-xl">
      <p className="text-zinc-500 mb-1">{label}</p>
      {payload.map((e: any) => (
        <p key={e.dataKey} style={{ color: e.stroke || e.fill }}>{e.name || e.dataKey}: {e.value?.toLocaleString()}</p>
      ))}
    </div>
  )
}

const equitiesData = [
  { name: 'S&P 500', value: 3.4 }, { name: 'Nasdaq', value: 4.4 }, { name: 'Dow', value: 3.0 },
  { name: 'Russell 2k', value: 2.8 }, { name: 'FTSE 100', value: 4.7 }, { name: 'DAX', value: 3.9 }, { name: 'Nikkei', value: -1.7 },
]
const oilData = [
  { d: 'Mar 3', wti: 74.5 }, { d: 'Mar 10', wti: 76.1 }, { d: 'Mar 17', wti: 82.3 },
  { d: 'Mar 24', wti: 91.7 }, { d: 'Mar 28', wti: 98.4 }, { d: 'Mar 31', wti: 104.2 }, { d: 'Apr 2', wti: 111.5 }, { d: 'Apr 3', wti: 112.1 },
]
const goldData = [
  { d: 'Mar 3', gold: 4200 }, { d: 'Mar 10', gold: 4280 }, { d: 'Mar 17', gold: 4350 },
  { d: 'Mar 24', gold: 4490 }, { d: 'Mar 28', gold: 4550 }, { d: 'Mar 31', gold: 4620 }, { d: 'Apr 2', gold: 4680 }, { d: 'Apr 3', gold: 4703 },
]
const yieldData = [
  { mat: '3M', yield: 3.70 }, { mat: '6M', yield: 3.71 }, { mat: '2Y', yield: 3.83 },
  { mat: '5Y', yield: 3.98 }, { mat: '10Y', yield: 4.32 }, { mat: '30Y', yield: 4.92 },
]

function TabContent({ tab }: { tab: Tab }) {
  const f = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } }

  if (tab === 'Equities') return (
    <motion.div {...f}>
      <div className="h-[240px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={equitiesData} layout="vertical" margin={{ left: 0, right: 16 }}>
            <CartesianGrid stroke="#16161a" horizontal={false} />
            <XAxis type="number" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
            <YAxis type="category" dataKey="name" tick={{ fill: '#71717a', fontSize: 12 }} axisLine={false} tickLine={false} width={85} />
            <Tooltip content={<Tip />} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={14}>
              {equitiesData.map((e) => <Cell key={e.name} fill={e.value >= 0 ? '#22c55e' : '#ef4444'} opacity={0.7} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.9]">
        U.S. and European equities rallied on strong NFP (+178K) and brief Hormuz de-escalation hopes.
        Nasdaq led at +4.4%. Japan underperformed on yen weakness (USD/JPY 159.6). VIX at 23.9.
      </p>
    </motion.div>
  )
  if (tab === 'Oil') return (
    <motion.div {...f}>
      <div className="h-[240px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={oilData}>
            <defs><linearGradient id="oG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" stopOpacity={0.2} /><stop offset="100%" stopColor="#ef4444" stopOpacity={0} /></linearGradient></defs>
            <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
            <XAxis dataKey="d" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[70, 120]} />
            <Tooltip content={<Tip />} />
            <Area type="monotone" dataKey="wti" stroke="#ef4444" strokeWidth={2} fill="url(#oG)" name="WTI" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.9]">
        WTI surged <strong className="text-red-400">+18.1% WoW</strong> to $112/bbl. Strait of Hormuz (~20M bbl/day)
        remains constrained post-Operation Epic Fury. Energy equities outperformed all sectors.
      </p>
    </motion.div>
  )
  if (tab === 'Gold') return (
    <motion.div {...f}>
      <div className="h-[240px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={goldData}>
            <defs><linearGradient id="gG2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c9a84c" stopOpacity={0.2} /><stop offset="100%" stopColor="#c9a84c" stopOpacity={0} /></linearGradient></defs>
            <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
            <XAxis dataKey="d" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[4100, 4800]} />
            <Tooltip content={<Tip />} />
            <Area type="monotone" dataKey="gold" stroke="#c9a84c" strokeWidth={2} fill="url(#gG2)" name="Gold $/oz" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.9]">
        Gold at <strong className="text-gold">$4,703/oz</strong>, +6.8% WoW near all-time highs. ETF inflows 78 tonnes YTD (+73% YoY).
        Geopolitical risk + USD softness driving institutional safe-haven flows.
      </p>
    </motion.div>
  )
  if (tab === 'Bonds') return (
    <motion.div {...f}>
      <div className="h-[220px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={yieldData}>
            <defs><linearGradient id="yG2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity={0.15} /><stop offset="100%" stopColor="#6366f1" stopOpacity={0} /></linearGradient></defs>
            <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
            <XAxis dataKey="mat" tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#3f3f46', fontSize: 11 }} axisLine={false} tickLine={false} domain={[3.4, 5.2]} />
            <Tooltip content={<Tip />} />
            <Area type="monotone" dataKey="yield" stroke="#6366f1" strokeWidth={2} fill="url(#yG2)" name="Yield %" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.9]">
        Curve steepened. 2s10s at +49bp. 10Y at 4.32%, 30Y at 4.92%.
        Markets pricing zero Fed cuts through 2026 on oil-driven CPI.
      </p>
    </motion.div>
  )
  if (tab === 'FX & Crypto') return (
    <motion.div {...f}>
      <div className="overflow-x-auto">
        <table className="w-full text-[14px]">
          <thead><tr className="border-b border-dark-border text-zinc-600 text-[12px]">
            <th className="text-left py-3 font-medium">Pair</th><th className="text-right py-3 font-medium">Level</th>
            <th className="text-right py-3 font-medium">WoW</th><th className="text-right py-3 font-medium">Trend</th>
          </tr></thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-dark-border/50"><td className="py-3">DXY</td><td className="text-right">100.22</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-600">Safe-haven</td></tr>
            <tr className="border-b border-dark-border/50"><td className="py-3">EUR/USD</td><td className="text-right">1.1522</td><td className="text-right text-red-400">-0.4%</td><td className="text-right text-zinc-600">Energy drag</td></tr>
            <tr className="border-b border-dark-border/50"><td className="py-3">USD/JPY</td><td className="text-right">159.63</td><td className="text-right text-red-400">+0.6%</td><td className="text-right text-zinc-600">Yen pressure</td></tr>
            <tr className="border-b border-dark-border/50"><td className="py-3">BTC/USD</td><td className="text-right">$66,957</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-600">Range-bound</td></tr>
            <tr><td className="py-3">XRP/USD</td><td className="text-right">$1.31</td><td className="text-right text-emerald-400">+0.1%</td><td className="text-right text-zinc-600">Flat</td></tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
  return (
    <motion.div {...f}>
      <div className="space-y-5 text-[15px] text-zinc-400 leading-[1.9]">
        <p><strong>Mon 7 Apr</strong> — ISM Services PMI; Fed's Waller speaks</p>
        <p><strong>Tue 8 Apr</strong> — JOLTS job openings; ECB minutes</p>
        <p><strong>Wed 9 Apr</strong> — FOMC minutes; 10Y auction</p>
        <p><strong>Thu 10 Apr</strong> — CPI (March); initial claims</p>
        <p><strong>Fri 11 Apr</strong> — PPI; UMich consumer sentiment</p>
      </div>
      <p className="text-[13px] text-zinc-500 leading-[1.9] mt-8">
        All eyes on Thursday's CPI. Consensus +0.3% MoM core — any upside surprise
        cements "no cuts in 2026."
      </p>
    </motion.div>
  )
}

export default function ResearchContent() {
  const [activeTab, setActiveTab] = useState<Tab>('Equities')

  return (
    <div>
      <p className="text-[14px] text-zinc-600 mb-8">
        28 March &ndash; 4 April 2026 &nbsp;|&nbsp; APJ Kapital Research Desk
      </p>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 text-[13px] rounded-lg border transition-all duration-200 ${
              activeTab === t
                ? 'text-white border-current'
                : 'text-zinc-600 border-zinc-800 hover:border-zinc-600 hover:text-zinc-400'
            }`}
            style={activeTab === t ? { borderColor: tabColors[t], color: tabColors[t], background: `${tabColors[t]}08` } : undefined}
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <div key={activeTab}>
          <TabContent tab={activeTab} />
        </div>
      </AnimatePresence>

      <p className="text-[11px] text-zinc-700 mt-12 pt-8 border-t border-dark-border">
        Data: Yahoo Finance, Trading Economics. Not investment advice. &copy; APJ Kapital Research.
      </p>
    </div>
  )
}
