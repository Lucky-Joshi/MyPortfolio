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
        body = <p className="text-red-400">command not found: {command}</p>
    }

    setOutput(
      <>
        <p className="text-muted/70">&gt; {command}</p>
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
      className={`${open ? 'flex' : 'hidden'} fixed inset-0 z-50 items-center justify-center bg-black/60 p-4 backdrop-blur-sm`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
    >
      <div className="terminal-window w-full max-w-xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
          <span className="flex-grow text-center font-mono text-xs text-muted">
            command palette
          </span>
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-muted">
            esc
          </kbd>
        </div>
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
            className="w-full bg-transparent font-mono text-sm text-primary focus:outline-none"
            placeholder="> Enter command (e.g., help)..."
            aria-label="Portfolio command palette input"
          />
        </div>
        <div
          id="command-output"
          className="h-48 overflow-y-auto border-t border-white/10 p-4 font-mono text-sm leading-relaxed"
          aria-live="polite"
        >
          {output}
        </div>
      </div>
    </div>
  )
}
