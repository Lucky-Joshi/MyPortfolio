export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 glitch-text" data-text="[ Get In Touch ]">
          [ Get In Touch ]
        </h2>
        <p className="mb-8">
          I&apos;m open to Software Engineering Intern, AI Intern, Machine Learning Intern, Full Stack Intern, Backend
          Developer Intern, Frontend Developer Intern, Research Intern, and freelance web developer opportunities.
        </p>
        <div className="font-mono text-lg text-primary">luckyjoshi524@gmail.com</div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 font-mono">
          <a
            href="resume.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Lucky Joshi full stack developer resume"
            className="w-full sm:w-auto px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-darkbg transition-all duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/Lucky-Joshi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Lucky Joshi GitHub projects and source code"
            className="w-full sm:w-auto px-6 py-3 border border-primary/50 text-primary/80 rounded-md hover:bg-primary hover:text-darkbg hover:border-primary transition-all duration-300"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
