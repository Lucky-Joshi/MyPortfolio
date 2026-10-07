import { useState } from 'react'
import { skills } from '../data/skills'

export default function SkillsSection() {
  const [activeSkills, setActiveSkills] = useState(() => new Set())

  const toggleSkill = (id) => {
    setActiveSkills((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <section id="skills" className="relative px-6 py-28" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">02 // skills</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Skill <span className="text-gradient">matrix</span>
            </h2>
          </div>
          <p className="hidden max-w-xs pb-2 text-right font-mono text-xs leading-relaxed text-muted md:block">
            <span className="text-primary">$</span> click a cell to pin it
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`skill-cell group cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-glow${
                activeSkills.has(skill.id) ? ' active' : ''
              }`}
              data-skill={skill.id}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-mono text-sm font-bold text-ink">{skill.name}</h3>
                <span className="font-display text-xs font-bold text-primary">
                  {skill.level}
                </span>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-primary"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
