import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts'

const tabs = ['Equities', 'Oil', 'Gold', 'Bonds', 'FX & Crypto', 'Week Ahead'] as const
type Tab = typeof tabs[number]
const tabColors: Record<Tab, string> = { Equities: '#3b82f6', Oil: '#ef4444', Gold: '#c9a84c', Bonds: '#6366f1', 'FX & Crypto': '#22c55e', 'Week Ahead': '#a855f7' }

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="card px-3.5 py-2.5 text-[11px] shadow-2xl !border-dark-border">
      <p className="text-zinc-500 mb-1">{label}</p>
      {payload.map((e: any) => <p key={e.dataKey} style={{ color: e.stroke || e.fill }}>{e.name || e.dataKey}: {e.value?.toLocaleString()}</p>)}
    </div>
  )
}

const equities = [{ name: 'S&P 500', value: 3.4 },{ name: 'Nasdaq', value: 4.4 },{ name: 'Dow', value: 3.0 },{ name: 'Russell 2k', value: 2.8 },{ name: 'FTSE 100', value: 4.7 },{ name: 'DAX', value: 3.9 },{ name: 'Nikkei', value: -1.7 }]
const oil = [{ d:'Mar 3',wti:74.5 },{ d:'Mar 10',wti:76.1 },{ d:'Mar 17',wti:82.3 },{ d:'Mar 24',wti:91.7 },{ d:'Mar 28',wti:98.4 },{ d:'Mar 31',wti:104.2 },{ d:'Apr 2',wti:111.5 },{ d:'Apr 3',wti:112.1 }]
const gold = [{ d:'Mar 3',gold:4200 },{ d:'Mar 10',gold:4280 },{ d:'Mar 17',gold:4350 },{ d:'Mar 24',gold:4490 },{ d:'Mar 28',gold:4550 },{ d:'Mar 31',gold:4620 },{ d:'Apr 2',gold:4680 },{ d:'Apr 3',gold:4703 }]
const yields = [{ mat:'3M',yield:3.70 },{ mat:'6M',yield:3.71 },{ mat:'2Y',yield:3.83 },{ mat:'5Y',yield:3.98 },{ mat:'10Y',yield:4.32 },{ mat:'30Y',yield:4.92 }]

function Content({ tab }: { tab: Tab }) {
  const anim = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } }
  const chartH = 'h-[200px] sm:h-[240px]'

  if (tab === 'Equities') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-8`}>
        <ResponsiveContainer><BarChart data={equities} layout="vertical" margin={{left:0,right:16}}>
          <CartesianGrid stroke="#1a1a20" horizontal={false}/><XAxis type="number" tick={{fill:'#3f3f46',fontSize:11}} axisLine={false} tickLine={false} tickFormatter={v=>`${v}%`}/><YAxis type="category" dataKey="name" tick={{fill:'#71717a',fontSize:12}} axisLine={false} tickLine={false} width={85}/><Tooltip content={<Tip/>}/>
          <Bar dataKey="value" radius={[0,6,6,0]} barSize={14}>{equities.map(e=><Cell key={e.name} fill={e.value>=0?'#22c55e':'#ef4444'} opacity={0.65}/>)}</Bar>
        </BarChart></ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.85]">U.S. and European equities rallied on strong NFP (+178K) and Hormuz de-escalation hopes. Nasdaq led at +4.4%. Japan underperformed on yen weakness. VIX at 23.9.</p>
    </motion.div>
  )
  if (tab === 'Oil') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-8`}>
        <ResponsiveContainer><AreaChart data={oil}>
          <defs><linearGradient id="oG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" stopOpacity={0.15}/><stop offset="100%" stopColor="#ef4444" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke="#1a1a20" strokeDasharray="3 3"/><XAxis dataKey="d" tick={{fill:'#3f3f46',fontSize:11}} axisLine={false} tickLine={false}/><YAxis tick={{fill:'#3f3f46',fontSize:11}} axisLine={false} tickLine={false} domain={[70,120]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="wti" stroke="#ef4444" strokeWidth={2} fill="url(#oG)" name="WTI"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.85]">WTI surged <strong className="text-red-400">+18.1% WoW</strong> to $112/bbl. Strait of Hormuz (~20M bbl/day) constrained post-Operation Epic Fury. Energy equities outperformed.</p>
    </motion.div>
  )
  if (tab === 'Gold') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-8`}>
        <ResponsiveContainer><AreaChart data={gold}>
          <defs><linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c9a84c" stopOpacity={0.15}/><stop offset="100%" stopColor="#c9a84c" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke="#1a1a20" strokeDasharray="3 3"/><XAxis dataKey="d" tick={{fill:'#3f3f46',fontSize:11}} axisLine={false} tickLine={false}/><YAxis tick={{fill:'#3f3f46',fontSize:11}} axisLine={false} tickLine={false} domain={[4100,4800]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="gold" stroke="#c9a84c" strokeWidth={2} fill="url(#gG)" name="Gold $/oz"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.85]">Gold at <strong className="text-gold">$4,703/oz</strong>, +6.8% WoW near all-time highs. ETF inflows 78 tonnes YTD (+73% YoY). Geopolitical risk + USD softness driving safe-haven flows.</p>
    </motion.div>
  )
  if (tab === 'Bonds') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-8`}>
        <ResponsiveContainer><AreaChart data={yields}>
          <defs><linearGradient id="yG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity={0.12}/><stop offset="100%" stopColor="#6366f1" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke="#1a1a20" strokeDasharray="3 3"/><XAxis dataKey="mat" tick={{fill:'#3f3f46',fontSize:11}} axisLine={false} tickLine={false}/><YAxis tick={{fill:'#3f3f46',fontSize:11}} axisLine={false} tickLine={false} domain={[3.4,5.2]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="yield" stroke="#6366f1" strokeWidth={2} fill="url(#yG)" name="Yield %"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[14px] text-zinc-500 leading-[1.85]">Curve steepened. 2s10s at +49bp. 10Y at 4.32%, 30Y at 4.92%. Markets pricing zero Fed cuts through 2026 on oil-driven CPI.</p>
    </motion.div>
  )
  if (tab === 'FX & Crypto') return (
    <motion.div {...anim}>
      <div className="overflow-x-auto -mx-2 px-2">
        <table className="w-full text-[14px] min-w-[480px]">
          <thead><tr className="border-b border-dark-border text-zinc-600 text-[12px]"><th className="text-left py-3 font-medium">Pair</th><th className="text-right py-3 font-medium">Level</th><th className="text-right py-3 font-medium">WoW</th><th className="text-right py-3 font-medium">Trend</th></tr></thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-dark-border/40"><td className="py-3.5">DXY</td><td className="text-right">100.22</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-600">Safe-haven</td></tr>
            <tr className="border-b border-dark-border/40"><td className="py-3.5">EUR/USD</td><td className="text-right">1.1522</td><td className="text-right text-red-400">-0.4%</td><td className="text-right text-zinc-600">Energy drag</td></tr>
            <tr className="border-b border-dark-border/40"><td className="py-3.5">USD/JPY</td><td className="text-right">159.63</td><td className="text-right text-red-400">+0.6%</td><td className="text-right text-zinc-600">Yen pressure</td></tr>
            <tr className="border-b border-dark-border/40"><td className="py-3.5">BTC/USD</td><td className="text-right">$66,957</td><td className="text-right text-emerald-400">+0.2%</td><td className="text-right text-zinc-600">Range-bound</td></tr>
            <tr><td className="py-3.5">XRP/USD</td><td className="text-right">$1.31</td><td className="text-right text-emerald-400">+0.1%</td><td className="text-right text-zinc-600">Flat</td></tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
  return (
    <motion.div {...anim}>
      <div className="space-y-5 text-[14px] text-zinc-400 leading-[1.85]">
        <p><strong>Mon 7 Apr</strong> — ISM Services PMI; Fed's Waller speaks</p>
        <p><strong>Tue 8 Apr</strong> — JOLTS job openings; ECB minutes</p>
        <p><strong>Wed 9 Apr</strong> — FOMC minutes; 10Y auction</p>
        <p><strong>Thu 10 Apr</strong> — CPI (March); initial claims</p>
        <p><strong>Fri 11 Apr</strong> — PPI; UMich consumer sentiment</p>
      </div>
      <p className="text-[13px] text-zinc-500 leading-[1.85] mt-8">All eyes on Thursday's CPI. Consensus +0.3% MoM core — any upside surprise cements "no cuts in 2026."</p>
    </motion.div>
  )
}

export default function ResearchContent() {
  const [activeTab, setActiveTab] = useState<Tab>('Equities')
  return (
    <div>
      <p className="text-[13px] text-zinc-600 mb-10">28 March &ndash; 4 April 2026 &nbsp;|&nbsp; APJ Kapital Research Desk</p>
      {/* Tabs — horizontally scrollable on mobile (#11) */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
        {tabs.map((t) => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-4 py-2 text-[13px] rounded-lg border whitespace-nowrap transition-all duration-200 shrink-0 ${
              activeTab === t ? 'text-white border-current' : 'text-zinc-600 border-zinc-800/50 hover:border-zinc-600 hover:text-zinc-400'
            }`}
            style={activeTab === t ? { borderColor: tabColors[t], color: tabColors[t], background: `${tabColors[t]}08` } : undefined}
          >{t}</button>
        ))}
      </div>
      <AnimatePresence mode="wait"><div key={activeTab}><Content tab={activeTab} /></div></AnimatePresence>
      <p className="text-[11px] text-zinc-800 mt-14 pt-8 border-t border-dark-border">Data: Yahoo Finance, Trading Economics. Not investment advice. &copy; APJ Kapital Research.</p>
    </div>
  )
}
