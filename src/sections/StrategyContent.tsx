const strategies = [
  { name: 'Derivatives & Structured Products', text: 'Bespoke derivative solutions across equities, rates, FX, and commodities. Payoff structures precisely matched to each client\u2019s risk-return objectives — from straightforward hedging to complex multi-leg exotic strategies.' },
  { name: 'Systematic Quantitative Trading', text: 'Machine learning-driven strategies that systematically capture alpha across global markets. Every model is rigorously backtested, stress-tested, and validated out-of-sample before live deployment.' },
  { name: 'Digital Assets & Prediction Markets', text: 'Institutional discipline applied to cryptocurrency and event-driven prediction markets. High-frequency market making, statistical arbitrage, and systematic directional strategies.' },
  { name: 'Family Office Advisory', text: 'Advisory built around relationships, not transactions. Portfolio construction, risk management, wealth structuring, and direct investment origination — tailored to each client\u2019s unique objectives.' },
]

export default function StrategyContent() {
  return (
    <div className="max-w-[720px]">
      <h2 className="text-[28px] md:text-[36px] mb-6">Our Capabilities</h2>
      <p className="text-[16px] leading-[1.85] mb-16 max-w-[560px]">
        A full spectrum of investment and advisory solutions, each rooted in real
        market experience and a commitment to transparency.
      </p>

      <div className="space-y-0 divide-y divide-dark-border">
        {strategies.map((s) => (
          <div key={s.name} className="py-10 first:pt-0 last:pb-0">
            <h3 className="text-[18px] mb-4">{s.name}</h3>
            <p className="text-[15px] leading-[1.85]">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
