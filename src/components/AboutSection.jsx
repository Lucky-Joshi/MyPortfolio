import { skills } from '../data/skills'

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-28" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">01 // about</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              About <span className="text-gradient">me</span>
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="hidden select-none font-display text-8xl font-bold text-white/5 md:block"
          >
            01
          </span>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="terminal-window scan-lines overflow-hidden lg:col-span-7">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="flex-grow text-center font-mono text-xs text-muted">
                about.js
              </span>
            </div>
            <p className="overflow-x-auto p-6 font-mono text-sm leading-loose text-muted sm:text-base">
              <span className="text-code-keyword">const</span>{' '}
              <span className="text-primary">lucky</span> = {'{'} <br />
              &nbsp;&nbsp;<span className="text-code-string">'description'</span>:{' '}
              <span className="text-code-string">
                'A Full Stack Developer and MERN Stack Developer building responsive
                web apps, REST APIs, and recruiter-ready product experiences.'
              </span>
              , <br />
              &nbsp;&nbsp;<span className="text-code-string">'passion'</span>:{' '}
              <span className="text-code-string">
                'Working with React, Next.js, Node.js, Express.js, MongoDB, SQL,
                Python, TypeScript, DSA, and machine learning fundamentals.'
              </span>
              , <br />
              &nbsp;&nbsp;<span className="text-code-string">'mission'</span>:{' '}
              <span className="text-code-string">
                'Seeking Software Engineering Intern, Full Stack Intern, Backend
                Developer Intern, Frontend Developer Intern, AI Intern, and Research
                Intern opportunities.'
              </span>{' '}
              <br />
              {'};'}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-5">
            <p className="eyebrow">toolbox</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <a
                  key={skill.id}
                  href="#skills"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs text-muted transition hover:border-primary/50 hover:text-primary"
                >
                  {skill.name}
                </a>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 font-mono text-xs leading-relaxed text-muted">
              <span className="text-primary">$</span> cat ./stack.txt{' '}
              <span className="text-muted/60">— {skills.length} tools and counting</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
