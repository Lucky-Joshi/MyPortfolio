import { gitLog } from '../data/gitLog'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center glitch-text" data-text="[ Git Log ]">
          [ Git Log ]
        </h2>
        <div className="p-6 border border-primary/30 rounded-lg shadow-glow scan-lines font-mono text-sm">
          <div id="git-log" className="space-y-2">
            {gitLog.map((commit, index) => (
              <p key={index}>
                <span className={commit.color}>● {commit.type}</span> {commit.message}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
