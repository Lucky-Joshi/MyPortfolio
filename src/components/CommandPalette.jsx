import { useEffect, useRef, useState } from 'react'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState(<p>Type &apos;help&apos; to see available commands.</p>)
  const inputRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((isOpen) => !isOpen)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  const executeCommand = (command) => {
    let body
    switch (command) {
      case 'help':
        body = <p>Available: portfolio | projects | contact | resume | skills | status</p>
        break
      case 'projects':
        body = <p>Loading 12 projects... Navigating to projects section.</p>
        window.location.hash = 'projects'
        break
      case 'contact':
        body = <p>Opening contact form... Navigating to contact section.</p>
        window.location.hash = 'contact'
        break
      case 'resume':
        body = <p>Downloading resume.pdf...</p>
        window.open('resume.html', '_blank')
        break
      case 'skills':
        body = <p>Displaying skill matrix... Navigating to skills section.</p>
        window.location.hash = 'skills'
        break
      case 'status':
        body = (
          <p>
            All systems operational. <span className="status-indicator"></span> ONLINE
          </p>
        )
        break
      default:
        body = <p className="text-red-500">command not found: {command}</p>
    }

    setOutput(
      <>
        <p className="text-gray-500">&gt; {command}</p>
        {body}
      </>
    )
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase()
      setInput('')
      executeCommand(command)
    }
  }

  return (
    <div
      id="command-palette"
      className={`${open ? 'flex' : 'hidden'} fixed inset-0 z-50 items-center justify-center bg-darkbg/80 backdrop-blur-sm`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
    >
      <div className="w-full max-w-lg border border-primary/50 rounded-lg shadow-glow-lg bg-darkbg scan-lines">
        <div className="p-4">
          <p id="command-palette-title" className="sr-only">
            Portfolio command palette
          </p>
          <input
            id="command-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="w-full bg-transparent text-primary focus:outline-none"
            placeholder="> Enter command (e.g., help)..."
            aria-label="Portfolio command palette input"
          />
        </div>
        <div id="command-output" className="p-4 border-t border-primary/20 h-48 overflow-y-auto text-sm" aria-live="polite">
          {output}
        </div>
      </div>
    </div>
  )
}
