import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const formData = new FormData(event.target);
    formData.append('access_key', '0809d8fe-dc3d-481e-8da9-b9a13b391d22');

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

        <form onSubmit={onSubmit} className="mt-10 text-left font-mono">
          <div className="mb-4">
            <label htmlFor="contact-name" className="block mb-2 text-sm text-primary/80">
              &gt; name
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
          <div className="mb-4">
            <label htmlFor="contact-email" className="block mb-2 text-sm text-primary/80">
              &gt; email
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
          <div className="mb-4">
            <label htmlFor="contact-message" className="block mb-2 text-sm text-primary/80">
              &gt; message
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
            className="w-full px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-darkbg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'sending...' : 'send_message'}
          </button>
          {status && (
            <p
              role="status"
              className={`mt-4 text-sm ${
                status.type === 'success' ? 'text-primary' : 'text-secondary'
              }`}
            >
              {status.type === 'success' ? '[ok] ' : '[error] '}
              {status.message}
            </p>
          )}
        </form>

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
