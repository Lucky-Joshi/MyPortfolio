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
    <section id="skills" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center glitch-text" data-text="[ Skill Matrix ]">
          [ Skill Matrix ]
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`skill-cell text-center border border-primary/50 p-4 rounded-md hover:shadow-glow-md hover:border-primary transition-all duration-300 cursor-pointer${
                activeSkills.has(skill.id) ? ' active' : ''
              }`}
              data-skill={skill.id}
            >
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-secondary text-sm">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
