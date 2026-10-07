import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const formData = new FormData(event.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: "Message sent! I'll get back to you soon." });
        event.target.reset();
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28" data-aos="fade-up">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">06 // contact</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Let&apos;s build <br />
            <span className="text-gradient">something great.</span>
          </h2>
          <p className="mt-7 max-w-md leading-relaxed text-muted">
            I&apos;m open to Software Engineering Intern, AI Intern, Machine Learning
            Intern, Full Stack Intern, Backend Developer Intern, Frontend Developer
            Intern, Research Intern, and freelance web developer opportunities.
          </p>

          <a
            href="mailto:luckyjoshi524@gmail.com"
            className="mt-8 inline-block font-mono text-lg text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary sm:text-xl"
          >
            luckyjoshi524@gmail.com
          </a>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="resume.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Lucky Joshi full stack developer resume"
              className="rounded-full bg-gradient-primary px-6 py-3 text-center font-mono text-sm font-bold text-darkbg shadow-glow-md transition hover:scale-105 hover:shadow-glow-lg"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Lucky-Joshi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Lucky Joshi GitHub projects and source code"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-mono text-sm text-ink transition hover:border-primary hover:text-primary"
            >
              View GitHub
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="terminal-window overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
            <span className="flex-grow text-center font-mono text-xs text-muted">
              message.sh
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-5">
              <label htmlFor="contact-name" className="mb-2 block font-mono text-xs text-muted">
                <span className="text-primary">&gt;</span> name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className="form-input"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="contact-email" className="mb-2 block font-mono text-xs text-muted">
                <span className="text-primary">&gt;</span> email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="form-input"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="contact-message" className="mb-2 block font-mono text-xs text-muted">
                <span className="text-primary">&gt;</span> message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className="form-input resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gradient-primary px-6 py-3.5 font-mono text-sm font-bold text-darkbg shadow-glow-md transition hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'sending...' : 'send_message'}
            </button>
            {status && (
              <p
                role="status"
                className={`mt-4 font-mono text-sm ${
                  status.type === 'success' ? 'text-primary' : 'text-secondary'
                }`}
              >
                {status.type === 'success' ? '[ok] ' : '[error] '}
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
