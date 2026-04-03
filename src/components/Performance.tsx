import { motion } from 'framer-motion'
import { useInView } from './hooks'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { useState } from 'react'

// Generate realistic cumulative return data
function generatePerformanceData() {
  const data = []
  let value = 100
  const months = [
    'Jan 23', 'Feb 23', 'Mar 23', 'Apr 23', 'May 23', 'Jun 23',
    'Jul 23', 'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23',
    'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24',
    'Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24',
    'Jan 25', 'Feb 25', 'Mar 25',
  ]
  const returns = [
    2.1, 1.8, -0.5, 3.2, 1.4, 2.8, -1.2, 4.1, 1.5, -2.3, 3.8, 2.6,
    1.9, 3.4, -0.8, 2.7, 1.1, 3.9, -1.5, 2.3, 4.2, -0.3, 3.1, 2.4,
    1.7, 3.6, 2.2,
  ]

  for (let i = 0; i < months.length; i++) {
    value *= 1 + returns[i] / 100
    data.push({
      month: months[i],
      portfolio: Math.round(value * 100) / 100,
      benchmark: 100 + i * 0.8 + Math.sin(i * 0.5) * 3,
    })
  }
  return data
}

const data = generatePerformanceData()

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-card border border-dark-border rounded-lg p-4 shadow-xl">
        <p className="text-xs text-zinc-500 mb-2">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} className="text-sm">
            <span className="text-zinc-400">{entry.name === 'portfolio' ? 'APJ Kapital' : 'Benchmark'}: </span>
            <span className={entry.name === 'portfolio' ? 'text-gold font-semibold' : 'text-zinc-500'}>
              {entry.value.toFixed(2)}
            </span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function Performance() {
  const [ref, inView] = useInView(0.1)
  const [timeRange, setTimeRange] = useState<'1Y' | '2Y' | 'ALL'>('ALL')

  const filteredData =
    timeRange === '1Y' ? data.slice(-12) : timeRange === '2Y' ? data.slice(-24) : data

  const totalReturn = ((data[data.length - 1].portfolio - 100) / 100 * 100).toFixed(1)

  return (
    <section id="performance" className="relative py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="text-gold text-sm tracking-widest uppercase">Performance</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Track{' '}
              <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
                Record
              </span>
            </h2>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0">
            {(['1Y', '2Y', 'ALL'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 text-sm rounded-lg transition-all ${
                  timeRange === range
                    ? 'bg-gold/20 text-gold border border-gold/30'
                    : 'text-zinc-500 border border-dark-border hover:border-zinc-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 md:p-10 rounded-2xl bg-dark-card border border-dark-border"
        >
          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div>
              <div className="text-2xl font-display font-bold text-green-400">+{totalReturn}%</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Total Return</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white">1.08</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Sharpe Ratio</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-red-400">-4.2%</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Max Drawdown</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white">72%</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Win Rate</div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c9a84c" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#c9a84c" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1a1a1a" strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#555', fontSize: 12 }}
                  axisLine={{ stroke: '#1a1a1a' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#555', fontSize: 12 }}
                  axisLine={{ stroke: '#1a1a1a' }}
                  tickLine={false}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="benchmark"
                  stroke="#333"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fill="transparent"
                  name="benchmark"
                />
                <Area
                  type="monotone"
                  dataKey="portfolio"
                  stroke="#c9a84c"
                  strokeWidth={2.5}
                  fill="url(#goldGradient)"
                  name="portfolio"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-6 mt-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-gold" />
              <span className="text-xs text-zinc-500">APJ Kapital</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-zinc-600 border-dashed" style={{ borderTop: '1.5px dashed #555' }} />
              <span className="text-xs text-zinc-500">S&P 500</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
