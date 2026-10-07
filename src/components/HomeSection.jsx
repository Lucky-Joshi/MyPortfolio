import { codeLines } from '../data/terminalLines'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { useTypewriter } from '../hooks/useTypewriter'

export default function HomeSection() {
  const typedCode = useTypewriter(codeLines)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
      data-aos="fade-in"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent2/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="status-indicator" aria-hidden="true" />
            Available for internships
          </p>

          <p className="mt-8 font-display text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight text-ink">
            Lucky <span className="text-gradient">Joshi</span>
          </p>

          <p className="mt-5 font-mono text-sm uppercase tracking-[0.25em] text-muted sm:text-base">
            Full Stack Developer <span className="text-primary">·</span> MERN{' '}
            <span className="text-primary">·</span> AI
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build responsive web apps, REST APIs, and recruiter-ready product
            experiences with React, Node.js, and friends.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-mono text-sm font-bold text-darkbg shadow-glow-md transition hover:scale-105 hover:shadow-glow-lg"
            >
              view_work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 font-mono text-sm text-ink transition hover:border-primary hover:text-primary"
            >
              resume.pdf <span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-white/10 pt-7 font-mono text-xs">
            <div>
              <dt className="text-muted">projects_shipped</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink">
                {String(projects.length).padStart(2, '0')}
              </dd>
            </div>
            <div>
              <dt className="text-muted">core_skills</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink">
                {String(skills.length).padStart(2, '0')}
              </dd>
            </div>
            <div>
              <dt className="text-muted">location</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink">IN</dd>
            </div>
          </dl>
        </div>

        <div className="terminal-window scan-lines overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
            <span className="flex-grow text-center font-mono text-xs text-muted">
              lucky@portfolio:~
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed sm:text-base">
            <h1 className="sr-only">Lucky Joshi — Full Stack Developer Portfolio</h1>
            <div id="terminal-code" dangerouslySetInnerHTML={{ __html: typedCode }} />
            <div className="mt-5 border-t border-white/10 pt-4 font-mono text-xs text-muted">
              <span className="text-primary">status:</span>
              <span className="status-indicator mx-2" />
              <span className="text-green-400"> ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce font-mono text-xs text-muted md:block"
        aria-hidden="true"
      >
        scroll ↓
      </div>
    </section>
  )
}
