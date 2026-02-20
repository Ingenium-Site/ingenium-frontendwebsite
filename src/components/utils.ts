import { useEffect, useRef, useState } from 'react'

export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export function useInterval(callback: () => void, delayMs: number) {
  const cbRef = useRef(callback)
  useEffect(() => {
    cbRef.current = callback
  }, [callback])

  useEffect(() => {
    const id = window.setInterval(() => cbRef.current(), delayMs)
    return () => window.clearInterval(id)
  }, [delayMs])
}

export function useActiveSection(sectionIds: string[], rootMargin = '-45% 0px -50% 0px') {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      { root: null, rootMargin, threshold: [0.08, 0.12, 0.18, 0.22, 0.3] }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sectionIds, rootMargin])

  return active
}
