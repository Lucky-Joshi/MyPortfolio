import { projects } from '../data/projects'

export default function NotFound() {
  return (
    <section className="relative px-6 pb-28 pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">error</p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-ink md:text-7xl">
          404 <span className="text-gradient">not found</span>
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          That page does not exist. It may have moved, or the link was mistyped. Head back to the
          portfolio or jump straight to a project.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-mono text-sm font-bold text-darkbg shadow-glow-md transition hover:scale-105"
          >
            Back to home
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-sm text-ink transition hover:border-primary hover:text-primary"
          >
            Contact
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 font-mono text-xs">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-muted transition hover:border-primary/40 hover:text-primary"
            >
              {project.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
