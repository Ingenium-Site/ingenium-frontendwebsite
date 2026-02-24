import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Container from '../components/Container'
import Button from '../components/Button'
import MorphingInWord from '../components/MorphingInWord'
import { HERO, QUIET_BANNERS } from '../data/site'
import { useInterval } from '../components/utils'
import HeroFlowmap from '../components/HeroFlowmap'

import bannerBg from '../assets/seo7/banner-one-bg.png'
import heroImg from '../assets/seo7/banner-one-img.png'
import element1 from '../assets/seo7/banner-one-element1.png'
import element2 from '../assets/seo7/banner-one-element2.png'
import rotateText from '../assets/seo7/totate-text.png'

function Floating({
  className,
  children,
  delay = 0,
  amplitude = 12,
  duration = 5.5,
}: {
  className?: string
  children: React.ReactNode
  delay?: number
  amplitude?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: [0, -amplitude, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function HeroSection({ onInitiate }: { onInitiate: () => void }) {
  const [bannerI, setBannerI] = React.useState(0)
  useInterval(() => setBannerI((v) => (v + 1) % QUIET_BANNERS.length), 5200)

  return (
    <section id="top" className="relative overflow-hidden bg-ink-900">
      {/* Background */}
      <HeroFlowmap image={bannerBg} className="seo7-flowmap absolute inset-0 z-0" opacity={0.55} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink-900/35 via-ink-900/55 to-ink-900" />
      <div className="absolute -top-28 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-44 right-[-120px] z-0 h-[520px] w-[520px] rounded-full bg-seoAccent-600/20 blur-3xl" />

      <Container className="relative z-10 pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="grid items-center gap-10 xl:grid-cols-2">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-[42px] leading-[1.05] text-white md:text-[62px]"
            >
              {HERO.headline}{' '}
              <span className="font-display text-seoAccent-600 italic">earned and repeatable</span>
              .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
              className="mt-6 text-[15px] leading-7 text-white/75"
            >
              We deliver ingenuity with intent through deep insight, emerging technology, and strategic execution to create solutions that endure.
              
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.22 }}
              className="mt-3 text-[14px] leading-7 text-white/65"
            >
              {HERO.supporting}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.34 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button onClick={onInitiate}>{HERO.primaryCta}</Button>
              <Button
                variant="ghost"
                className="text-white shadow-none border border-white/15 hover:bg-white/10"
                onClick={() => document.getElementById('insight')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {HERO.secondaryCta}
              </Button>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] text-white/70">
                <span className="h-2 w-2 rounded-full bg-seoAccent-600" />
                <span>Strategy • SEO • Growth Systems</span>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden min-h-[560px] xl:block">
            <div className="absolute inset-0">
              <Floating className="absolute bottom-0 right-0" delay={0.15} amplitude={10} duration={6.2}>
                <img src={heroImg} alt="Hero" className="max-h-[520px] w-auto select-none" draggable={false} />
              </Floating>

              <Floating className="absolute left-[-10px] top-1/2 -translate-y-1/2" delay={0.35} amplitude={14} duration={7.2}>
                <img src={element1} alt="Element" className="w-[220px] select-none" draggable={false} />
              </Floating>
              <Floating className="absolute bottom-[-125px] right-[-130px]" delay={0.45} amplitude={20} duration={5.8}>
                <img src={element2} alt="Element" className="w-[220px] select-none" draggable={false} />
              </Floating>

              {/* Morphing "In_____" word (SEO7-style flourish) */}
          <div className="absolute top-3 right-2">
  <div className="seo7-surface px-4 py-3">
    <div className="text-[12px] tracking-[0.22em] text-slate-900/60"></div>
    <div className="mt-2 text-[15px] text-white">We offer services in</div>
    <div className="mt-1 font-display text-[35px] font-bold leading-none">
      <MorphingInWord 
        words={['sight', 'fluence', 'tegrity', 'genium']}
        intervalMs={3500}
        className="inline-flex items-baseline gap-0.2"
      />
    </div>
  </div>
</div>

              {/* Rotate play button */}
              <motion.button
                type="button"
                onClick={onInitiate}
                className="group absolute bottom-6 left-8 flex h-[110px] w-[110px] items-center justify-center rounded-full"
                aria-label="Open consultation"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
              >
                <motion.img
                  src={rotateText}
                  alt=""
                  className="absolute inset-0 h-full w-full select-none"
                  draggable={false}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-seoAccent-600 text-ink-950 shadow-soft transition-transform duration-200 group-hover:scale-105">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </Container>

      {/* Quiet rotating banner */}
      <div className="relative border-t border-white/10 bg-ink-900/40 backdrop-blur">
        <Container className="py-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={bannerI}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="font-display text-[18px] text-white">{QUIET_BANNERS[bannerI].title}</div>
              <div className="mt-1 text-[13px] text-white/70">{QUIET_BANNERS[bannerI].sub}</div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* small mobile visual hint */}
      <div className="pointer-events-none absolute bottom-24 left-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent xl:hidden" />
    </section>
  )
}
