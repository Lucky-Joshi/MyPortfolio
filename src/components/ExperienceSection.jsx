import { gitLog } from '../data/gitLog'

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-28" data-aos="fade-up">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">04 // experience</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Commit <span className="text-gradient">stream</span>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            How the work gets done — improvements shipped the same way this
            portfolio runs: as clean, reviewed commits.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-mono text-xs text-muted">
            <span className="text-primary">$</span> git log --oneline -{gitLog.length}
          </div>
        </div>

        <div className="terminal-window overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
            <span className="flex-grow text-center font-mono text-xs text-muted">
              main — {gitLog.length} commits
            </span>
          </div>
          <div id="git-log" className="divide-y divide-white/5 font-mono text-sm">
            {gitLog.map((commit, index) => (
              <p
                key={index}
                className="grid grid-cols-[auto_1fr] items-baseline gap-3 px-5 py-3.5 transition hover:bg-white/[0.03]"
              >
                <span className={commit.color}>
                  ● {commit.type}
                </span>
                <span className="text-muted">{commit.message}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
