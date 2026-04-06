const insights = [
  { title: 'Liberation Day +1 Year', date: '2 April 2026', text: 'One year since sweeping tariffs. Markets recovered but global trade patterns have permanently shifted. Manufacturing employment down 89K since April 2025. The Supreme Court struck down the tariff regime in February, but the damage to investor confidence in U.S. exceptionalism persists.' },
  { title: 'Strait of Hormuz Crisis', date: '28 March 2026', text: 'Operation Epic Fury has effectively constrained the world\u2019s most critical oil chokepoint — 20 million barrels per day of crude now stranded. WTI surged 50% in a single month. Energy equities are outperforming all other sectors. Iran-Oman protocol talks offered brief mid-week relief before further escalation.' },
  { title: 'Gold\u2019s New Paradigm', date: '25 March 2026', text: 'Central bank purchases continue to accelerate — 78 tonnes of YTD ETF inflows represent a 73% increase year-over-year. The combination of geopolitical risk, structural USD weakness, and institutional FOMO is creating what may be a permanent new floor for gold prices.' },
  { title: 'Fed on Hold', date: '20 March 2026', text: 'Markets are now pricing zero rate cuts through the remainder of 2026 as energy-driven CPI pressures overwhelm the softening labour market narrative. Fed officials have indicated they "wouldn\u2019t be alarmed if job growth stopped," suggesting significant policy flexibility ahead.' },
]

export default function InsightsContent() {
  return (
    <div className="max-w-[720px]">
      <h2 className="text-[28px] md:text-[36px] mb-6">Market Insights</h2>
      <p className="text-[16px] leading-[1.85] mb-16 max-w-[560px]">
        Our perspective on the forces shaping global markets.
      </p>

      <div className="space-y-0 divide-y divide-dark-border">
        {insights.map((item) => (
          <div key={item.title} className="py-10 first:pt-0 last:pb-0">
            <p className="text-[13px] text-zinc-600 mb-3">{item.date}</p>
            <h3 className="text-[18px] mb-4">{item.title}</h3>
            <p className="text-[15px] leading-[1.85]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
