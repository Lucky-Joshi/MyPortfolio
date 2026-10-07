import { metrics } from '../data/metrics'

export default function PerformanceSection() {
  return (
    <section id="performance" className="relative px-6 py-28" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">05 // performance</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              By the <span className="text-gradient">numbers</span>
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="hidden select-none font-display text-8xl font-bold text-white/5 md:block"
          >
            05
          </span>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 text-left md:grid-cols-3">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {metric.label}
              </p>
              <div className="progress-bar">
                <div className="progress" style={{ width: metric.width }}></div>
              </div>
              <p className="score">{metric.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
