import { metrics } from '../data/metrics'

export default function PerformanceSection() {
  return (
    <section id="performance" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 glitch-text" data-text="[ Live Performance Metrics ]">
          [ Live Performance Metrics ]
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <p>{metric.label}</p>
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
