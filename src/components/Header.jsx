import { useState } from 'react'
import { navLinks } from '../data/navLinks'

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const desktopLinkClass = (href) =>
    `hover:text-primary hover:scale-105 transition-all${activeSection === href.slice(1) ? ' active' : ''}`

  const mobileLinkClass = (href) =>
    `hover:text-primary${activeSection === href.slice(1) ? ' active' : ''}`

  return (
    <header className="sticky top-0 z-50 bg-darkbg/80 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-primary glitch-text" data-text="LuckyJoshi" aria-label="Lucky Joshi portfolio home">
          LuckyJoshi
        </a>
        <nav className="hidden md:flex space-x-6 text-sm" aria-label="Primary portfolio navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={desktopLinkClass(link.href)} aria-label={link.ariaLabel}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden text-primary text-2xl"
          aria-label="Open portfolio navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${menuOpen ? '' : 'hidden '}md:hidden bg-darkbg/95 backdrop-blur-sm`}>
        <nav className="flex flex-col items-center space-y-4 py-4 text-lg" aria-label="Mobile portfolio navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={mobileLinkClass(link.href)} aria-label={link.ariaLabel}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
