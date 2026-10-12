import { SITE, WHO_IS_LUCKY_JOSHI } from '../data/site'

export default function WhoIs() {
  return (
    <section id="intro" className="relative px-6 py-20" data-aos="fade-up">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">whoami</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Who is <span className="text-gradient">Lucky Joshi</span>?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">{WHO_IS_LUCKY_JOSHI}</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-xs text-muted">
          <li className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="text-primary">Role:</span> {SITE.jobTitle}
          </li>
          <li className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="text-primary">Stack:</span> MERN · Python · AI
          </li>
          <li className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="text-primary">Location:</span> {SITE.location}
          </li>
          <li className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="text-primary">Status:</span> Open to internships
          </li>
        </ul>
      </div>
    </section>
  )
}
