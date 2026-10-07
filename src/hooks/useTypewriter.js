import { useEffect, useState } from 'react'

export function useTypewriter(lines, charDelay = 20, lineDelay = 200) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    let currentLine = 0
    let currentChar = 0
    let timer

    function typeLine() {
      if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
          setOutput(
            lines.slice(0, currentLine).join('<br>') +
              '<br>' +
              lines[currentLine].substring(0, currentChar + 1)
          )
          currentChar++
          timer = setTimeout(typeLine, charDelay)
        } else {
          currentChar = 0
          currentLine++
          timer = setTimeout(typeLine, lineDelay)
        }
      }
    }

    typeLine()

    return () => clearTimeout(timer)
  }, [lines, charDelay, lineDelay])

  return output
}
