import { useCallback, useEffect, useRef, useState } from 'react'

export function useToast() {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const timer = useRef()

  const showToast = useCallback((text) => {
    setMessage(text)
    setVisible(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setVisible(false), 3000)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  return { message, visible, showToast }
}
