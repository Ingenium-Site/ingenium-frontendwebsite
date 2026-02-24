import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import React, { useMemo, useState } from 'react'
import { useInterval } from './utils'

export default function MorphingInWord({
  words,
  intervalMs = 2500,
  className,
}: {
  words: string[]
  intervalMs?: number
  className?: string
}) {
  const safeWords = useMemo(() => (words.length ? words : ['Ingenium']), [words])
  const maxChars = useMemo(() => safeWords.reduce((max, word) => Math.max(max, word.length), 0), [safeWords])
  const reduceMotion = useReducedMotion()
  const [i, setI] = useState(0)

  useInterval(() => {
    setI((v) => (v + 1) % safeWords.length)
  }, intervalMs)

  const word = safeWords[i]
  const transitionDuration = Math.min(0.56, Math.max(0.34, intervalMs / 2600))

  return (
    <span className={className} aria-label={`In ${word}`}>
      <span className="inline-block font-semibold text-white">In</span>
<span className="inline-block w-[0.05ch]" /> {/* Reduced from 0.2ch to 0.05ch */}
<span className="relative inline-block align-baseline" style={{ minWidth: `${maxChars + 0.8}ch` }}>        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`${word}-${i}`}
            className="inline-block whitespace-nowrap text-seoAccent-600"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 8,
                    filter: 'blur(4px)',
                    clipPath: 'inset(0 100% 0 0)',
                  }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    clipPath: 'inset(0 0% 0 0)',
                  }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: -8,
                    filter: 'blur(4px)',
                    clipPath: 'inset(0 0 0 100%)',
                  }
            }
            transition={{
              duration: transitionDuration,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
        {/* Gradient underline */}
        <motion.span
          key={`line-${i}`}
          className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-transparent via-[#f97316]/70 to-transparent"
          initial={{ opacity: 0, scaleX: 0.2 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
    </span>
  )
}
