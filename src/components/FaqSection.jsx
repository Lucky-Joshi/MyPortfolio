import { FAQ_ITEMS } from '../data/site'

export default function FaqSection() {
  return (
    <section id="faq" className="relative px-6 py-28" data-aos="fade-up">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">07 // faq</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Frequently asked <span className="text-gradient">questions</span>
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {FAQ_ITEMS.map((item) => (
            <article key={item.question} className="py-6">
              <h3 className="font-display text-lg font-semibold text-ink">{item.question}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
