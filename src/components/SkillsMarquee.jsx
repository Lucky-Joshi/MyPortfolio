import { skills } from '../data/skills'

export default function SkillsMarquee() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4"
    >
      <div className="flex w-max animate-marquee items-center whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted">
        {[...skills, ...skills].map((skill, index) => (
          <span key={`${skill.id}-${index}`} className="flex items-center">
            <span className="px-6 text-primary">✦</span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}
