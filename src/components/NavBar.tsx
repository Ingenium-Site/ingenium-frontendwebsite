import React from 'react'
import Container from './Container'
import Button from './Button'
import { NavItem } from '../data/site'
import { cn } from './utils'
import logo from '../assets/logo.jpeg'

export default function NavBar({
  items,
  activeId,
  onInitiate,
}: {
  items: NavItem[]
  activeId?: string
  onInitiate: () => void
}) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <header className="sticky top-0 z-50 bg-ink-900/95 backdrop-blur-sm border-b border-white/10">
      {/* Keep layout stable since nav is always fixed */}
      
      <div
        ref={ref}
        onMouseMove={onMove}
        className={cn(
          'seo7-nav fixed left-0 right-0 top-0 border-b border-white/10 backdrop-blur-xl transition-[transform,box-shadow,background-color] duration-300',
          scrolled
            ? 'bg-ink-950/75 shadow-[0_20px_60px_rgba(0,0,0,0.45)]'
            : 'bg-ink-950/35'
        )}
      >
        <Container className="relative flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Ingenium" className="h-8 w-28 object-cover rounded-md shadow-insetLine" />
          <span className="sr-only">Ingenium</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={cn(
                'text-[13px] tracking-wide text-white/70 hover:text-white transition',
                activeId === it.id && 'text-white font-semibold'
              )}
            >
              {it.label}
            </a>
          ))}
          <a
            href="#initiate"
            className={cn(
              'text-[13px] tracking-wide text-white/70 hover:text-white transition',
              activeId === 'initiate' && 'text-white font-semibold'
            )}
          >
            Initiate
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" onClick={onInitiate}>
            Initiate
          </Button>
        </div>
        </Container>
      </div>
    </header>
  )
}
