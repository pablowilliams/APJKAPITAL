import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts'

const tabs = ['Equities', 'Oil', 'Gold', 'Bonds', 'FX & Crypto', 'Week Ahead'] as const
type Tab = typeof tabs[number]
const tabColors: Record<Tab, string> = { Equities: '#3b82f6', Oil: '#ef4444', Gold: '#c9a84c', Bonds: '#6366f1', 'FX & Crypto': '#22c55e', 'Week Ahead': '#a855f7' }

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0c0c10] border border-dark-border rounded-xl px-4 py-3 text-[13px] shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <p className="text-zinc-500 mb-1.5">{label}</p>
      {payload.map((e: any) => <p key={e.dataKey} style={{ color: e.stroke || e.fill }}>{e.name || e.dataKey}: {e.value?.toLocaleString()}</p>)}
    </div>
  )
}

const equities = [{ name: 'S&P 500', value: 3.4 },{ name: 'Nasdaq', value: 4.4 },{ name: 'Dow', value: 3.0 },{ name: 'Russell 2k', value: 2.8 },{ name: 'FTSE 100', value: 4.7 },{ name: 'DAX', value: 3.9 },{ name: 'Nikkei', value: -1.7 }]
const oil = [{ d:'Mar 3',wti:74.5 },{ d:'Mar 10',wti:76.1 },{ d:'Mar 17',wti:82.3 },{ d:'Mar 24',wti:91.7 },{ d:'Mar 28',wti:98.4 },{ d:'Mar 31',wti:104.2 },{ d:'Apr 2',wti:111.5 },{ d:'Apr 3',wti:112.1 }]
const goldData = [{ d:'Mar 3',gold:4200 },{ d:'Mar 10',gold:4280 },{ d:'Mar 17',gold:4350 },{ d:'Mar 24',gold:4490 },{ d:'Mar 28',gold:4550 },{ d:'Mar 31',gold:4620 },{ d:'Apr 2',gold:4680 },{ d:'Apr 3',gold:4703 }]
const yields = [{ mat:'3M',yield:3.70 },{ mat:'6M',yield:3.71 },{ mat:'2Y',yield:3.83 },{ mat:'5Y',yield:3.98 },{ mat:'10Y',yield:4.32 },{ mat:'30Y',yield:4.92 }]

const ease = [0.16, 1, 0.3, 1]
const anim = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease } }
const chartH = 'h-[260px] md:h-[320px]'
const axisStyle = { fill: '#52525b', fontSize: 13 }

function Content({ tab }: { tab: Tab }) {
  if (tab === 'Equities') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-10`}>
        <ResponsiveContainer><BarChart data={equities} layout="vertical" margin={{left:0,right:20}}>
          <CartesianGrid stroke="#22222a" horizontal={false}/><XAxis type="number" tick={axisStyle} axisLine={false} tickLine={false} tickFormatter={v=>`${v}%`}/><YAxis type="category" dataKey="name" tick={{...axisStyle, fontSize:14}} axisLine={false} tickLine={false} width={90}/><Tooltip content={<Tip/>}/>
          <Bar dataKey="value" radius={[0,8,8,0]} barSize={18}>{equities.map(e=><Cell key={e.name} fill={e.value>=0?'#22c55e':'#ef4444'} opacity={0.6}/>)}</Bar>
        </BarChart></ResponsiveContainer>
      </div>
      <p className="text-[16px] text-zinc-400 leading-[1.85] max-w-[680px]">U.S. and European equities rallied on strong NFP (+178K) and Hormuz de-escalation hopes. Nasdaq led at +4.4%. Japan underperformed on yen weakness. VIX at 23.9.</p>
    </motion.div>
  )
  if (tab === 'Oil') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-10`}>
        <ResponsiveContainer><AreaChart data={oil}>
          <defs><linearGradient id="oG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" stopOpacity={0.15}/><stop offset="100%" stopColor="#ef4444" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke="#22222a" strokeDasharray="3 3"/><XAxis dataKey="d" tick={axisStyle} axisLine={false} tickLine={false}/><YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[70,120]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="wti" stroke="#ef4444" strokeWidth={2} fill="url(#oG)" name="WTI"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[16px] text-zinc-400 leading-[1.85] max-w-[680px]">WTI surged <strong className="text-red-400">+18.1% WoW</strong> to $112/bbl. Strait of Hormuz (~20M bbl/day) constrained post-Operation Epic Fury.</p>
    </motion.div>
  )
  if (tab === 'Gold') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-10`}>
        <ResponsiveContainer><AreaChart data={goldData}>
          <defs><linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c9a84c" stopOpacity={0.15}/><stop offset="100%" stopColor="#c9a84c" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke="#22222a" strokeDasharray="3 3"/><XAxis dataKey="d" tick={axisStyle} axisLine={false} tickLine={false}/><YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[4100,4800]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="gold" stroke="#c9a84c" strokeWidth={2} fill="url(#gG)" name="Gold $/oz"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[16px] text-zinc-400 leading-[1.85] max-w-[680px]">Gold at <strong className="text-gold">$4,703/oz</strong>, +6.8% WoW near all-time highs. ETF inflows 78 tonnes YTD (+73% YoY).</p>
    </motion.div>
  )
  if (tab === 'Bonds') return (
    <motion.div {...anim}>
      <div className={`${chartH} mb-10`}>
        <ResponsiveContainer><AreaChart data={yields}>
          <defs><linearGradient id="yG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity={0.12}/><stop offset="100%" stopColor="#6366f1" stopOpacity={0}/></linearGradient></defs>
          <CartesianGrid stroke="#22222a" strokeDasharray="3 3"/><XAxis dataKey="mat" tick={axisStyle} axisLine={false} tickLine={false}/><YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[3.4,5.2]}/><Tooltip content={<Tip/>}/>
          <Area type="monotone" dataKey="yield" stroke="#6366f1" strokeWidth={2} fill="url(#yG)" name="Yield %"/>
        </AreaChart></ResponsiveContainer>
      </div>
      <p className="text-[16px] text-zinc-400 leading-[1.85] max-w-[680px]">Curve steepened. 2s10s at +49bp. 10Y at 4.32%, 30Y at 4.92%. Zero Fed cuts priced through 2026.</p>
    </motion.div>
  )
  if (tab === 'FX & Crypto') return (
    <motion.div {...anim}>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-[16px] min-w-[500px]">
          <thead><tr className="border-b border-dark-border/60 text-zinc-500 text-[14px]"><th className="text-left py-4 font-medium">Pair</th><th className="text-right py-4 font-medium">Level</th><th className="text-right py-4 font-medium">WoW</th><th className="text-right py-4 font-medium">Trend</th></tr></thead>
          <tbody className="text-zinc-400">
            {[['DXY','100.22','+0.2%','Safe-haven',true],['EUR/USD','1.1522','-0.4%','Energy drag',false],['USD/JPY','159.63','+0.6%','Yen pressure',false],['BTC/USD','$66,957','+0.2%','Range-bound',true],['XRP/USD','$1.31','+0.1%','Flat',true]].map(([pair,lvl,wow,trend,up], i) => (
              <tr key={pair as string} className={i < 4 ? 'border-b border-dark-border/30' : ''}>
                <td className="py-4 font-medium text-zinc-300">{pair}</td><td className="text-right">{lvl}</td>
                <td className={`text-right ${up ? 'text-emerald-400' : 'text-red-400'}`}>{wow}</td>
                <td className="text-right text-zinc-500">{trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
  return (
    <motion.div {...anim}>
      <div className="space-y-6 text-[16px] text-zinc-400 leading-[1.85] max-w-[600px]">
        {[['Mon 7 Apr','ISM Services PMI; Fed\u2019s Waller speaks'],['Tue 8 Apr','JOLTS job openings; ECB minutes'],['Wed 9 Apr','FOMC minutes; 10Y auction'],['Thu 10 Apr','CPI (March); initial claims'],['Fri 11 Apr','PPI; UMich consumer sentiment']].map(([d,e]) => (
          <p key={d}><strong className="text-zinc-200">{d}</strong> — {e}</p>
        ))}
      </div>
      <p className="text-[15px] text-zinc-500 leading-[1.85] mt-10 max-w-[560px]">All eyes on Thursday's CPI. Consensus +0.3% MoM core — any upside surprise cements "no cuts in 2026."</p>
    </motion.div>
  )
}

export default function ResearchContent() {
  const [activeTab, setActiveTab] = useState<Tab>('Equities')
  return (
    <div>
      <p className="text-[15px] text-zinc-500 mb-10">28 March &ndash; 4 April 2026 &nbsp;|&nbsp; APJ Kapital Research Desk</p>
      <div className="flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((t) => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-5 py-2.5 text-[15px] rounded-xl border whitespace-nowrap transition-all duration-250 shrink-0 ${
              activeTab === t ? 'text-white border-current shadow-[0_0_12px_currentColor/10]' : 'text-zinc-500 border-dark-border/50 hover:border-zinc-600 hover:text-zinc-300 hover:bg-white/[0.02]'
            }`}
            style={activeTab === t ? { borderColor: tabColors[t], color: tabColors[t], background: `${tabColors[t]}0a` } : undefined}
          >{t}</button>
        ))}
      </div>
      <AnimatePresence mode="wait"><div key={activeTab}><Content tab={activeTab} /></div></AnimatePresence>
      <p className="text-[12px] text-zinc-600 mt-16 pt-10 border-t border-dark-border/40">Data: Yahoo Finance, Trading Economics. Not investment advice. &copy; APJ Kapital Research.</p>
    </div>
  )
}
