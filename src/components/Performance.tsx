import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useState } from 'react'

function gen() {
  const d = []; let v = 100
  const mo = ['Jan 23','Feb 23','Mar 23','Apr 23','May 23','Jun 23','Jul 23','Aug 23','Sep 23','Oct 23','Nov 23','Dec 23','Jan 24','Feb 24','Mar 24','Apr 24','May 24','Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24','Dec 24','Jan 25','Feb 25','Mar 25']
  const r = [2.1,1.8,-0.5,3.2,1.4,2.8,-1.2,4.1,1.5,-2.3,3.8,2.6,1.9,3.4,-0.8,2.7,1.1,3.9,-1.5,2.3,4.2,-0.3,3.1,2.4,1.7,3.6,2.2]
  for (let i = 0; i < mo.length; i++) { v *= 1 + r[i] / 100; d.push({ month: mo[i], portfolio: +(v.toFixed(2)), benchmark: +(100 + i * 0.8 + Math.sin(i * 0.5) * 3).toFixed(2) }) }
  return d
}
const data = gen()

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0b0b0d] border border-[#16161a] rounded-md px-3.5 py-2.5 text-[12px]">
      <p className="text-zinc-600 mb-1">{label}</p>
      {payload.map((e: any) => (
        <p key={e.name}>
          <span className="text-zinc-500">{e.name === 'portfolio' ? 'APJ' : 'S&P'}: </span>
          <span className={e.name === 'portfolio' ? 'text-gold' : 'text-zinc-500'}>{e.value}</span>
        </p>
      ))}
    </div>
  )
}

export default function Performance() {
  const [range, setRange] = useState<'1Y'|'2Y'|'ALL'>('ALL')
  const fd = range === '1Y' ? data.slice(-12) : range === '2Y' ? data.slice(-24) : data
  const ret = ((data[data.length-1].portfolio - 100) / 100 * 100).toFixed(1)

  return (
    <div>
      <div className="flex gap-1.5 mb-10">
        {(['1Y','2Y','ALL'] as const).map((r) => (
          <button key={r} onClick={() => setRange(r)}
            className={`px-3.5 py-1.5 text-[12px] rounded-md transition-all ${range === r ? 'bg-gold/10 text-gold' : 'text-zinc-600 hover:text-zinc-400'}`}
          >{r}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 pb-8 border-b border-dark-border">
        <div><div className="text-[22px] font-display font-semibold text-emerald-400">+{ret}%</div><div className="text-[11px] text-zinc-700 tracking-[0.1em] uppercase mt-1">Return</div></div>
        <div><div className="text-[22px] font-display font-semibold text-white/70">1.08</div><div className="text-[11px] text-zinc-700 tracking-[0.1em] uppercase mt-1">Sharpe</div></div>
        <div><div className="text-[22px] font-display font-semibold text-red-400/70">-4.2%</div><div className="text-[11px] text-zinc-700 tracking-[0.1em] uppercase mt-1">Max DD</div></div>
        <div><div className="text-[22px] font-display font-semibold text-white/70">72%</div><div className="text-[11px] text-zinc-700 tracking-[0.1em] uppercase mt-1">Win Rate</div></div>
      </div>

      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={fd}>
            <defs><linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c9a84c" stopOpacity={0.15} /><stop offset="100%" stopColor="#c9a84c" stopOpacity={0} /></linearGradient></defs>
            <CartesianGrid stroke="#16161a" strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: '#27272a', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#27272a', fontSize: 11 }} axisLine={false} tickLine={false} domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip content={<Tip />} />
            <Area type="monotone" dataKey="benchmark" stroke="#1c1c22" strokeWidth={1} strokeDasharray="4 4" fill="transparent" />
            <Area type="monotone" dataKey="portfolio" stroke="#c9a84c" strokeWidth={1.5} fill="url(#gG)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 mt-6 justify-center">
        <span className="flex items-center gap-2 text-[11px] text-zinc-600"><span className="w-3 h-[1px] bg-gold" />APJ Kapital</span>
        <span className="flex items-center gap-2 text-[11px] text-zinc-600"><span className="w-3 h-[1px] border-t border-dashed border-zinc-700" />S&P 500</span>
      </div>

      <p className="text-[11px] text-zinc-800 text-center mt-8">Past performance is not indicative of future results.</p>
    </div>
  )
}
