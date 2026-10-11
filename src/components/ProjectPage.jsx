import { projects } from '../data/projects'

function List({ items }) {
  return (
    <ul className="mt-4 space-y-3 leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="text-primary">
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProjectPage({ project }) {
  const related = projects.filter((item) => item.slug !== project.slug)

  return (
    <article className="px-6 pb-28 pt-32">
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="transition hover:text-primary">
                home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a href="/#projects" className="transition hover:text-primary">
                projects
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        <header className="mt-8">
          <p className="eyebrow">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={project.liveTitle}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-mono text-sm font-bold text-darkbg shadow-glow-md transition hover:scale-105 hover:shadow-glow-lg"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={project.codeTitle}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-sm text-ink transition hover:border-primary hover:text-primary"
            >
              Source Code <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-sm text-ink transition hover:border-primary hover:text-primary"
            >
              Get in touch
            </a>
          </div>
        </header>

        <img
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          className="mt-12 w-full rounded-2xl border border-white/10 object-cover"
          decoding="async"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                The problem
              </h2>
              <List items={project.problem} />
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                How it was built
              </h2>
              <List items={project.approach} />
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Key features
              </h2>
              <List items={project.features} />
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Results
              </h2>
              <List items={project.results} />
            </section>
          </div>

          <aside className="space-y-8">
            <div className="terminal-window overflow-hidden">
              <div className="border-b border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs text-muted">
                stack.json
              </div>
              <div className="p-6">
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary">
                  Tech stack
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                My role
              </h2>
              <List items={project.role} />
            </div>
          </aside>
        </div>

        <section className="mt-20 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
            More projects
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <a
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {item.category}
                </span>
                <span className="mt-2 block font-display text-lg font-bold text-ink group-hover:text-primary">
                  {item.title}
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-muted">
                  {item.tagline}
                </span>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-12">
          <a
            href="/#projects"
            className="font-mono text-sm text-muted transition hover:text-primary"
          >
            ← Back to all projects
          </a>
        </p>
      </div>
    </article>
  )
}
