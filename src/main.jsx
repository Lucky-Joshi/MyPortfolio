import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App'

const pathname = window.location.pathname
const container = document.getElementById('root')

const app = (
  <StrictMode>
    <App pathname={pathname} />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}

const initAos = () => AOS.init({ once: true, duration: 800, easing: 'ease-in-out' })
if (document.readyState === 'complete') {
  requestAnimationFrame(initAos)
} else {
  window.addEventListener('load', initAos, { once: true })
}
