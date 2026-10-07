import { Fragment } from 'react'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-28" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">03 // selected work</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Featured <span className="text-gradient">projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/Lucky-Joshi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition hover:text-primary"
          >
            github.com/Lucky-Joshi
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <div id="projects-grid" className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card"
              data-category={project.category}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={project.imageWidth}
                  height={project.imageHeight}
                  sizes="(min-width: 640px) 45vw, 90vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-panel/90 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-4 font-display text-6xl font-bold text-white/10"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="absolute bottom-4 left-5 rounded-full border border-primary/40 bg-darkbg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
                  {project.category.split(' ')[0]}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink transition group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-gradient-primary px-4 py-2.5 text-center font-mono text-xs font-bold text-darkbg transition hover:scale-[1.03] hover:shadow-glow"
                    title={project.liveTitle}
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-center font-mono text-xs text-ink transition hover:border-primary hover:text-primary"
                    title={project.codeTitle}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
