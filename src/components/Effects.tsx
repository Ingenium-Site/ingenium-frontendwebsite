import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export function BackgroundEffects() {
  const { scrollYProgress } = useScroll()
  const y1 = useParallax(scrollYProgress, 60)
  const y2 = useParallax(scrollYProgress, 110)

  return (
    <>
      {/* Subtle noise texture */}
      <div className="seo7-noise" aria-hidden />

      {/* Parallax glow orbs */}
      <motion.div
        aria-hidden
        style={{ y: y1 }}
        className="pointer-events-none fixed left-[-120px] top-[140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(249,168,38,0.22),rgba(0,0,0,0)_60%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        style={{ y: y2 }}
        className="pointer-events-none fixed right-[-160px] top-[90px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(11,61,145,0.22),rgba(0,0,0,0)_60%)] blur-2xl"
      />

      {/* Floating particles */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        {Array.from({ length: 26 }).map((_, i) => (
          <span
            key={i}
            className="seo7-particle"
            style={
              {
                left: `${(i * 37) % 100}%`,
                top: `${(i * 19) % 100}%`,
                animationDelay: `${(i * 0.37) % 6}s`,
                animationDuration: `${6 + (i % 7)}s`,
                opacity: 0.12 + (i % 5) * 0.03,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  )
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-90px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function Item({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
