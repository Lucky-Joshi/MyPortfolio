import { SITE } from '../data/site'
import { projects } from '../data/projects'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-panel/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary font-display text-sm font-bold text-darkbg">
              LJ
            </span>
            <span className="font-display font-semibold text-ink">Lucky Joshi</span>
          </div>
          <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
            Full Stack Developer · MERN · AI
            <br />
            {SITE.location} · open to internships
          </p>
        </div>

        <nav aria-label="Footer portfolio navigation">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 font-mono text-xs text-muted">
            <li>
              <a href="/#about" className="transition hover:text-primary">
                about
              </a>
            </li>
            <li>
              <a href="/#skills" className="transition hover:text-primary">
                skills
              </a>
            </li>
            <li>
              <a href="/#projects" className="transition hover:text-primary">
                projects
              </a>
            </li>
            <li>
              <a href="/#faq" className="transition hover:text-primary">
                faq
              </a>
            </li>
            <li>
              <a href={SITE.resumePath} className="transition hover:text-primary">
                resume
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer project links">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Projects
          </h2>
          <ul className="mt-4 space-y-2 font-mono text-xs text-muted">
            {projects.map((project) => (
              <li key={project.slug}>
                <a href={`/projects/${project.slug}`} className="transition hover:text-primary">
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Connect
          </h2>
          <ul className="mt-4 space-y-2 font-mono text-xs text-muted">
            <li>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                github ↗
              </a>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                linkedin ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="transition hover:text-primary">
                email ↗
              </a>
            </li>
            <li>
              <a href="/#home" className="transition hover:text-primary">
                back_to_top ↑
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/5 px-6 py-6">
        <p className="font-mono text-xs text-muted">
          © 2026 Lucky Joshi. All systems operational.
          <span className="status-indicator ml-2" aria-hidden="true" />
          <span className="ml-2 text-muted/60">Last updated {SITE.lastUpdated}</span>
        </p>
      </div>
    </footer>
  )
}
