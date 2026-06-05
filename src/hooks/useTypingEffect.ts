import { useEffect, useState } from 'react'

export function useTypingEffect(
  words: string[],
  typeSpeed = 90,
  deleteSpeed = 50,
  pauseMs = 1800,
) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const current = words[wordIdx % words.length]

    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseMs)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setIsPaused(true)
      } else {
        const next = text.slice(0, -1)
        setText(next)
        if (next === '') {
          setIsDeleting(false)
          setWordIdx(i => i + 1)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(t)
  }, [text, isDeleting, isPaused, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])

  return text
}
