const ventures = [
  { name: 'Prediction Market Infrastructure', status: 'Active', text: 'Building systematic strategies on political, sports, and weather prediction markets. NLP-powered sentiment extraction from live news flow with automated position management across multiple platforms.' },
  { name: 'Crypto Market Making', status: 'Active', text: 'High-frequency market making across centralised and decentralised exchanges. Proprietary order flow toxicity models enable real-time spread optimisation and inventory management.' },
  { name: 'Climate Risk Analytics', status: 'In Development', text: 'Quantitative models for pricing climate-related financial risks. Partnering with academic institutions to develop next-generation ESG scoring frameworks with measurable predictive power.' },
]

export default function VenturesContent() {
  return (
    <div className="max-w-[720px]">
      <h2 className="text-[28px] md:text-[36px] mb-6">Ventures</h2>
      <p className="text-[16px] leading-[1.85] mb-16 max-w-[560px]">
        Early-stage initiatives where we're applying our quantitative
        capabilities to emerging opportunities.
      </p>

      <div className="space-y-0 divide-y divide-dark-border">
        {ventures.map((v) => (
          <div key={v.name} className="py-10 first:pt-0 last:pb-0">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-[18px]">{v.name}</h3>
              <span className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full ${
                v.status === 'Active' ? 'text-emerald-400/70 bg-emerald-400/5' : 'text-amber-400/70 bg-amber-400/5'
              }`}>{v.status}</span>
            </div>
            <p className="text-[15px] leading-[1.85]">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
