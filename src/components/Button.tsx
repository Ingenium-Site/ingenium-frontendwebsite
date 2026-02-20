import React from 'react'
import { cn } from './utils'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'sm'
}

export default function Button({ variant = 'primary', size = 'md', className, ...props }: Props) {
  const ref = React.useRef<HTMLButtonElement | null>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    const clamp = (v: number, n: number) => Math.max(-n, Math.min(n, v))
    el.style.setProperty('--tx', `${clamp(x * 0.18, 7)}px`)
    el.style.setProperty('--ty', `${clamp(y * 0.22, 7)}px`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tx', `0px`)
    el.style.setProperty('--ty', `0px`)
  }

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'seo7-magnetic inline-flex items-center justify-center rounded-xl px-5 font-medium transition active:translate-y-[1px] disabled:opacity-60 disabled:pointer-events-none',
        size === 'md' ? 'h-11 text-[15px]' : 'h-9 text-[14px] px-4',
        variant === 'primary'
          ? 'bg-seoAccent-600 text-ink-950 shadow-soft hover:bg-seoAccent-500'
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10',
        className
      )}
      {...props}
    >
      <span className="seo7-magnetic-inner">{props.children}</span>
    </button>
  )
}
