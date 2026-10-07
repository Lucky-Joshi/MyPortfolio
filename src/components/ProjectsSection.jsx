import { Fragment } from 'react'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-10 text-center text-primary">Portfolio Projects</h2>

      <div id="projects-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card bg-white/10 dark:bg-white/5 p-6 rounded-xl shadow-glass hover:scale-102 transition-transform duration-300"
            data-category={project.category}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              className="rounded-lg mb-4 w-full h-auto"
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            />
            <h3 className="text-xl font-bold text-accent">{project.title}</h3>
            <p className="text-sm mt-2 mb-4">{project.description}</p>
            <div className="text-xs mb-4">
              {project.tags.map((tag, index) => (
                <Fragment key={tag}>
                  {index > 0 ? ' ' : ''}
                  <span
                    className={`inline-block bg-gray-700 text-gray-200 rounded-full px-3 py-1${index < project.tags.length - 1 ? ' mr-2' : ''}`}
                  >
                    {tag}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-accent text-white rounded-md hover:bg-teal-600 transition"
                title={project.liveTitle}
              >
                Live Demo
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition"
                title={project.codeTitle}
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
