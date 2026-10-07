import { useState } from 'react'
import { navLinks } from '../data/navLinks'

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const desktopLinkClass = (href) =>
    `rounded-full px-3.5 py-1.5 font-mono text-xs transition-all hover:text-primary${
      activeSection === href.slice(1) ? ' active' : ''
    }`

  const mobileLinkClass = (href) =>
    `font-mono text-sm hover:text-primary${activeSection === href.slice(1) ? ' active' : ''}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-darkbg/70 px-5 py-2.5 shadow-card backdrop-blur-xl">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Lucky Joshi portfolio home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary font-display text-sm font-bold text-darkbg">
            LJ
          </span>
          <span className="font-display font-semibold tracking-tight text-ink">
            Lucky Joshi
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary portfolio navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={desktopLinkClass(link.href)}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-ink transition hover:border-primary/50 hover:text-primary md:hidden"
          aria-label="Open portfolio navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${menuOpen ? '' : 'hidden '}mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-darkbg/95 p-5 shadow-card backdrop-blur-xl md:hidden`}
      >
        <nav
          className="flex flex-col items-center gap-4"
          aria-label="Mobile portfolio navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass(link.href)}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
