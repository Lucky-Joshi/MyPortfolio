import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import PerformanceSection from './components/PerformanceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import Toast from './components/Toast'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useToast } from './hooks/useToast'

let aosInitialized = false

export default function App() {
  const activeSection = useScrollSpy()
  const { message, visible } = useToast()

  useEffect(() => {
    if (!aosInitialized) {
      aosInitialized = true
      AOS.init({ once: true, duration: 800, easing: 'ease-in-out' })
    }
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:text-darkbg focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>
      <a
        href="#contact"
        aria-label="Contact Lucky Joshi for full stack developer and software engineering intern opportunities"
        className="fixed bottom-6 right-6 z-50 bg-primary text-darkbg px-4 py-2 rounded-md border border-primary shadow-glow-md hover:scale-105 hover:shadow-glow-lg transition-all duration-300"
      >
        root@lucky:~# hire-me
      </a>

      <Header activeSection={activeSection} />

      <main id="main-content">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <PerformanceSection />
        <ContactSection />
      </main>

      <Footer />

      <CommandPalette />

      <Toast message={message} visible={visible} />
    </>
  )
}
