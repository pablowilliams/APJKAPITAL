const contacts = [
  { name: 'Guido Williams', role: 'Managing Partner', email: 'guido@apjkapital.com', linkedin: 'https://www.linkedin.com/in/guido-williams-a471a11/' },
  { name: 'Andrea Williams', role: 'Partner & Head of Operations', email: 'andrea@apjkapital.com', linkedin: 'https://www.linkedin.com/in/andreapbwilliams/' },
  { name: 'Pablo Williams', role: 'Data Scientist', email: 'pablo@apjkapital.com', linkedin: 'https://www.linkedin.com/in/pablowilliams/' },
]

export default function ContactContent() {
  return (
    <div className="max-w-[720px]">
      <h2 className="text-[28px] md:text-[36px] mb-6">Contact</h2>
      <p className="text-[16px] leading-[1.85] mb-16 max-w-[560px]">
        We're always happy to have a conversation. Reach out to any of
        our team directly.
      </p>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <p className="text-[12px] text-zinc-600 uppercase tracking-wider mb-3">General Enquiries</p>
          <a href="mailto:info@apjkapital.com" className="text-[18px] text-zinc-300 hover:text-gold transition-colors">
            info@apjkapital.com
          </a>
        </div>
        <div>
          <p className="text-[12px] text-zinc-600 uppercase tracking-wider mb-3">Locations</p>
          <p className="text-[18px] text-zinc-300">Milan, Italy &middot; London, UK</p>
        </div>
      </div>

      <div className="border-t border-dark-border pt-12">
        <p className="text-[12px] text-zinc-600 uppercase tracking-wider mb-8">Team</p>
        <div className="space-y-0 divide-y divide-dark-border">
          {contacts.map((c) => (
            <div key={c.name} className="flex items-center justify-between py-6 first:pt-0 last:pb-0">
              <div>
                <p className="text-[16px] text-zinc-200">{c.name}</p>
                <p className="text-[13px] text-zinc-600 mt-0.5">{c.role}</p>
              </div>
              <div className="flex items-center gap-6 text-[13px]">
                <a href={`mailto:${c.email}`} className="text-zinc-600 hover:text-gold transition-colors">{c.email}</a>
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-gold transition-colors">LinkedIn &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
