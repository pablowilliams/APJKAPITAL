export default function AboutContent() {
  return (
    <div className="max-w-[720px]">
      <h2 className="text-[28px] md:text-[36px] mb-10">About APJ Kapital</h2>

      <div className="space-y-7 text-[16px] leading-[1.85] mb-20">
        <p>
          APJ Kapital is a multi-asset investment and advisory firm founded by a family
          with deep roots in the financial markets. We combine institutional-level
          expertise in derivatives and structured products with the agility and personal
          attention of a family office.
        </p>
        <p>
          Our founding team brings over two decades of experience across the world's
          leading capital markets — from structured derivative desks in Milan to
          quantitative research labs in London. We've navigated every market cycle,
          and that experience shapes everything we do.
        </p>
        <p>
          The future of investment sits at the intersection of traditional finance
          and technology. We don't just run models — we understand the markets
          behind them. We don't just manage capital — we build long-term relationships
          founded on trust, transparency, and performance.
        </p>
      </div>

      <blockquote className="border-l-[3px] border-gold/30 pl-8 mb-20">
        <p className="text-[20px] md:text-[24px] font-display font-medium leading-[1.5] text-zinc-200">
          "To deliver institutional-quality investment solutions with the agility
          of a family office."
        </p>
      </blockquote>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12 pt-12 border-t border-dark-border">
        {[
          ['20+', 'Years Experience'],
          ['Multi-Asset', 'Derivatives Focus'],
          ['Global', 'Market Coverage'],
          ['Milan & London', 'Presence'],
        ].map(([v, l]) => (
          <div key={l}>
            <p className="text-[22px] font-display font-semibold text-gold mb-1">{v}</p>
            <p className="text-[12px] text-zinc-600 uppercase tracking-wider">{l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
