export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-4xl mx-auto border border-primary/30 p-8 rounded-lg shadow-glow scan-lines">
        <h2 className="text-3xl font-bold mb-4 glitch-text" data-text="[ About Me ]">
          [ About Me ]
        </h2>
        <p className="leading-relaxed">
          <span className="text-code-keyword">const</span> <span className="text-primary">lucky</span> = {'{'} <br />
          &nbsp;&nbsp;<span className="text-code-string">'description'</span>:{' '}
          <span className="text-code-string">'A Full Stack Developer and MERN Stack Developer building responsive web apps, REST APIs, and recruiter-ready product experiences.'</span>,{' '}
          <br />
          &nbsp;&nbsp;<span className="text-code-string">'passion'</span>:{' '}
          <span className="text-code-string">'Working with React, Next.js, Node.js, Express.js, MongoDB, SQL, Python, TypeScript, DSA, and machine learning fundamentals.'</span>,{' '}
          <br />
          &nbsp;&nbsp;<span className="text-code-string">'mission'</span>:{' '}
          <span className="text-code-string">'Seeking Software Engineering Intern, Full Stack Intern, Backend Developer Intern, Frontend Developer Intern, AI Intern, and Research Intern opportunities.'</span>{' '}
          <br />
          {'};'}
        </p>
      </div>
    </section>
  )
}
