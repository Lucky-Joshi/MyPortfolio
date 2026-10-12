import { useEffect } from 'react'
import { getRouteMeta, normalizePath } from './seo/routes'
import { useDocumentMeta } from './seo/useDocumentMeta'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import WhoIs from './components/WhoIs'
import SkillsMarquee from './components/SkillsMarquee'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import PerformanceSection from './components/PerformanceSection'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import ProjectPage from './components/ProjectPage'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import Toast from './components/Toast'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useToast } from './hooks/useToast'
import { getProjectBySlug } from './data/projects'

export default function App({ pathname = '/' }) {
  const meta = getRouteMeta(pathname)
  useDocumentMeta(meta)

  const activeSection = useScrollSpy()
  const { message, visible } = useToast()

  const path = normalizePath(pathname)
  const isHome = path === '/'
  const projectMatch = path.match(/^\/projects\/([^/]+)$/)
  const project = projectMatch ? getProjectBySlug(projectMatch[1]) : null

  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [path])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:text-darkbg focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>
      <a
        href={isHome ? '#contact' : '/#contact'}
        aria-label="Contact Lucky Joshi for full stack developer and software engineering intern opportunities"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-primary px-5 py-2.5 font-mono text-sm font-bold text-darkbg shadow-glow-md transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
      >
        root@lucky:~# hire-me
      </a>

      <Header activeSection={activeSection} isHome={isHome} />

      <main id="main-content">
        {isHome ? (
          <>
            <HomeSection />
            <WhoIs />
            <SkillsMarquee />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <PerformanceSection />
            <ContactSection />
            <FaqSection />
          </>
        ) : project ? (
          <ProjectPage project={project} />
        ) : (
          <NotFound />
        )}
      </main>

      <Footer />

      <CommandPalette />

      <Toast message={message} visible={visible} />
    </>
  )
}
