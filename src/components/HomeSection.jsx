import { codeLines } from '../data/terminalLines'
import { useTypewriter } from '../hooks/useTypewriter'

export default function HomeSection() {
  const typedCode = useTypewriter(codeLines)

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center p-4 scan-lines" data-aos="fade-in">
      <div className="w-full max-w-3xl mx-auto border border-primary/50 rounded-lg shadow-glow-md bg-darkbg/70 backdrop-blur-sm">
        <div className="terminal-header bg-gray-800/50 p-2 flex items-center rounded-t-lg border-b border-primary/20">
          <span className="dot w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span className="dot w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          <span className="dot w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="flex-grow text-center text-xs text-gray-400">/bin/bash -- lucky.joshi</span>
        </div>
        <div className="p-6 text-left font-mono text-sm sm:text-base">
          <h1 className="sr-only">Lucky Joshi — Full Stack Developer Portfolio</h1>
          <div id="terminal-code" dangerouslySetInnerHTML={{ __html: typedCode }} />
          <div className="mt-4">
            <span className="text-primary">status:</span>
            <span className="status-indicator"></span>
            <span className="text-green-400"> ONLINE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
