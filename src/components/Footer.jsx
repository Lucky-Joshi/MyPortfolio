export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary font-display text-sm font-bold text-darkbg">
            LJ
          </span>
          <p className="font-mono text-xs text-muted">
            © 2026 Lucky Joshi. All systems operational.
            <span className="status-indicator ml-2" aria-hidden="true" />
          </p>
        </div>

        <nav className="flex items-center gap-5 font-mono text-xs" aria-label="Footer portfolio navigation">
          <a
            href="https://github.com/Lucky-Joshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-primary"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/lucky-joshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-primary"
          >
            linkedin ↗
          </a>
          <a href="#home" className="text-muted transition hover:text-primary">
            back_to_top ↑
          </a>
        </nav>
      </div>
    </footer>
  )
}
