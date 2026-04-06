import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts'

const tabs = ['Equities', 'Oil', 'Gold', 'Bonds', 'FX & Crypto', 'Week Ahead'] as const
type Tab = typeof tabs[number]

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-[12px] shadow-lg">
      <p className="text-zinc-500 mb-1">{label}</p>
      {payload.map((e: any) => <p key={e.dataKey} style={{ color: e.stroke || e.fill }}>{e.name || e.dataKey}: {e.value?.toLocaleString()}</p>)}
    </div>
  )
}

const axis = { fill: '#52525b', fontSize: 12 }
const grid = '#1e1e24'
const equities = [{ name: 'S&P 500', v: 3.4 },{ name: 'Nasdaq', v: 4.4 },{ name: 'Dow', v: 3.0 },{ name: 'Russell 2k', v: 2.8 },{ name: 'FTSE 100', v: 4.7 },{ name: 'DAX', v: 3.9 },{ name: 'Nikkei', v: -1.7 }]
const oil = [{ d:'Mar 3',v:74.5 },{ d:'Mar 10',v:76.1 },{ d:'Mar 17',v:82.3 },{ d:'Mar 24',v:91.7 },{ d:'Mar 28',v:98.4 },{ d:'Mar 31',v:104.2 },{ d:'Apr 2',v:111.5 },{ d:'Apr 3',v:112.1 }]
const gold = [{ d:'Mar 3',v:4200 },{ d:'Mar 10',v:4280 },{ d:'Mar 17',v:4350 },{ d:'Mar 24',v:4490 },{ d:'Mar 28',v:4550 },{ d:'Mar 31',v:4620 },{ d:'Apr 2',v:4680 },{ d:'Apr 3',v:4703 }]
const yields = [{ m:'3M',v:3.70 },{ m:'6M',v:3.71 },{ m:'2Y',v:3.83 },{ m:'5Y',v:3.98 },{ m:'10Y',v:4.32 },{ m:'30Y',v:4.92 }]

function Content({ tab }: { tab: Tab }) {
  if (tab === 'Equities') return (
    <div>
      <div className="h-[260px] md:h-[320px] mb-8">
        <ResponsiveContainer><BarChart data={equities} layout="vertical" margin={{left:0,right:16}}>
          <CartesianGrid stroke={grid} horizontal={false}/><XAxis type="number" tick={axis} axisLine={false} tickLine={false} tickFormatter={v=>`${v}%`}/><YAxis type="category" dataKey="name" tick={{...axis, fontSize:13}} axisLine={false} tickLine={false} width={90}/><Tooltip content={<Tip/>}/>
          <Bar dataKey="v" radius={[0,6,6,0]} barSize={16}>{equities.map(e=><Cell key={e.name} fill={e.v>=0?'#22c55e':'#ef4444'} opacity={0.55}/>)}</Bar>
        </BarChart></ResponsiveContainer>
      </div>
      <p className="text-[15px] leading-[1.85]">U.S. and European equities rallied on strong NFP (+178K) and brief Hormuz de-escalation hopes. Nasdaq led at +4.4%. Japan underperformed on yen weakness (USD/JPY 159.6). VIX remains elevated at 23.9.</p>
    </div>
  )
  if (tab === 'Oil') return (
    <div>
      <div className="h-[260px] md:h-[320px] mb-8">
        <ResponsiveContainer><AreaChart data={oil}>
          <defs><linearGradient id="oG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" stopOpacity={0.12}/><stop offset="100%" stopColor="#ef4444" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke={grid} strokeDasharray="3 3"/><XAxis dataKey="d" tick={axis} axisLine={false} tickLine={false}/><YAxis tick={axis} axisLine={false} tickLine={false} domain={[70,120]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="v" stroke="#ef4444" strokeWidth={1.5} fill="url(#oG)" name="WTI"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[15px] leading-[1.85]">WTI surged <strong className="text-red-400">+18.1% WoW</strong> to $112/bbl. The Strait of Hormuz — through which approximately 20 million barrels per day flows — remains effectively constrained following Operation Epic Fury.</p>
    </div>
  )
  if (tab === 'Gold') return (
    <div>
      <div className="h-[260px] md:h-[320px] mb-8">
        <ResponsiveContainer><AreaChart data={gold}>
          <defs><linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c9a84c" stopOpacity={0.18}/><stop offset="100%" stopColor="#c9a84c" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke={grid} strokeDasharray="3 3"/><XAxis dataKey="d" tick={axis} axisLine={false} tickLine={false}/><YAxis tick={axis} axisLine={false} tickLine={false} domain={[4100,4800]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="v" stroke="#c9a84c" strokeWidth={1.5} fill="url(#gG)" name="Gold $/oz"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[15px] leading-[1.85]">Gold closed at <strong className="text-gold">$4,703/oz</strong>, up 6.8% week-over-week and near all-time highs. ETF inflows hit 78 tonnes year-to-date, a 73% increase over the same period last year.</p>
    </div>
  )
  if (tab === 'Bonds') return (
    <div>
      <div className="h-[260px] md:h-[320px] mb-8">
        <ResponsiveContainer><AreaChart data={yields}>
          <defs><linearGradient id="yG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity={0.1}/><stop offset="100%" stopColor="#6366f1" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke={grid} strokeDasharray="3 3"/><XAxis dataKey="m" tick={axis} axisLine={false} tickLine={false}/><YAxis tick={axis} axisLine={false} tickLine={false} domain={[3.4,5.2]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={1.5} fill="url(#yG)" name="Yield %"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[15px] leading-[1.85]">The curve steepened modestly. 2s10s spread widened to +49bp. 10-year at 4.32%, 30-year at 4.92%. Markets pricing zero Fed cuts through 2026 as oil-driven CPI pressures persist.</p>
    </div>
  )
  if (tab === 'FX & Crypto') return (
    <div className="overflow-x-auto">
      <table className="w-full text-[15px] min-w-[480px]">
        <thead><tr className="border-b border-dark-border text-[13px] text-zinc-600"><th className="text-left py-3 font-normal">Pair</th><th className="text-right py-3 font-normal">Level</th><th className="text-right py-3 font-normal">WoW</th><th className="text-right py-3 font-normal">Trend</th></tr></thead>
        <tbody>
          {[['DXY','100.22','+0.2%','Safe-haven bid',true],['EUR/USD','1.1522','-0.4%','Energy drag',false],['USD/JPY','159.63','+0.6%','Yen pressure',false],['BTC/USD','$66,957','+0.2%','Range-bound',true],['XRP/USD','$1.31','+0.1%','Flat',true]].map(([p,l,w,t,up],i,a) => (
            <tr key={p as string} className={i < a.length - 1 ? 'border-b border-dark-border/50' : ''}>
              <td className="py-3.5 text-zinc-300">{p}</td><td className="text-right text-zinc-400">{l}</td>
              <td className={`text-right ${up ? 'text-emerald-400/80' : 'text-red-400/80'}`}>{w}</td>
              <td className="text-right text-zinc-600">{t}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  return (
    <div className="max-w-[560px]">
      <div className="space-y-5">
        {[['Mon 7 Apr','ISM Services PMI; Fed\u2019s Waller speaks'],['Tue 8 Apr','JOLTS job openings; ECB minutes'],['Wed 9 Apr','FOMC minutes release; 10Y auction'],['Thu 10 Apr','CPI (March); initial jobless claims'],['Fri 11 Apr','PPI; University of Michigan consumer sentiment']].map(([d,e]) => (
          <div key={d as string} className="flex gap-6">
            <span className="text-[14px] text-zinc-400 font-medium whitespace-nowrap w-24 shrink-0">{d}</span>
            <span className="text-[14px] text-zinc-600">{e}</span>
          </div>
        ))}
      </div>
      <p className="text-[14px] text-zinc-600 mt-10">All eyes on Thursday's CPI. Consensus +0.3% MoM core — any energy-driven upside surprise could further cement the "no cuts in 2026" narrative.</p>
    </div>
  )
}

export default function ResearchContent() {
  const [tab, setTab] = useState<Tab>('Equities')
  return (
    <div>
      <div className="max-w-[720px] mb-12">
        <h2 className="text-[28px] md:text-[36px] mb-3">Weekly Market Report</h2>
        <p className="text-[14px] text-zinc-600">28 March &ndash; 4 April 2026</p>
      </div>

      <div className="flex gap-1 mb-12 overflow-x-auto pb-1 border-b border-dark-border">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-5 py-3 text-[14px] whitespace-nowrap transition-colors relative ${
              tab === t ? 'text-gold' : 'text-zinc-600 hover:text-zinc-300'
            }`}
          >
            {t}
            {tab === t && (
              <motion.div layoutId="research-tab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <Content tab={tab} />
        </motion.div>
      </AnimatePresence>

      <p className="text-[12px] text-zinc-700 mt-16 pt-8 border-t border-dark-border">
        Data sourced from Yahoo Finance, Trading Economics, and public reporting. This content is for informational purposes only and does not constitute investment advice.
      </p>
    </div>
  )
}
