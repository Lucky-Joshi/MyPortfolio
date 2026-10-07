export default function Toast({ message, visible }) {
  return (
    <div
      id="toast"
      className="fixed bottom-10 right-10 bg-primary text-darkbg px-6 py-3 rounded-lg shadow-glow-lg opacity-0 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}
