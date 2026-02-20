import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { cn } from './utils'

export default function Modal({
  open,
  title,
  children,
  onClose,
  className,
}: {
  open: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
  className?: string
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close"
            className="absolute inset-0 bg-ink-950/70"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className={cn(
              'relative w-full max-w-xl rounded-2xl border border-white/10 bg-ink-950/90 shadow-soft backdrop-blur overflow-hidden',
              className
            )}
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="font-display text-[20px] text-white">{title}</div>
              <button
                onClick={onClose}
                className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5"
              >
                Close
              </button>
            </div>
            <div className="px-6 py-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
