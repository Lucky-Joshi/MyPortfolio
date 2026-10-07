export default function Toast({ message, visible }) {
  return (
    <div
      id="toast"
      className="fixed bottom-10 right-10 rounded-full border border-darkbg/20 bg-gradient-primary px-6 py-3 font-mono text-sm font-bold text-darkbg shadow-glow-lg opacity-0 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}
