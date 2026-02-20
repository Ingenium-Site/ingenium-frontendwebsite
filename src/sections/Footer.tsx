import React from 'react'
import Container from '../components/Container'
import { NAV } from '../data/site'
import { Stagger, Item } from '../components/Effects'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-12">
        <Stagger>
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <Item>
          <div>
            <div className="font-display text-[22px] text-white">Dream Wild</div>
            <p className="mt-3 text-[14px] leading-7 text-white/70">
              Dream Wild is our working principle. It reflects our belief that expansive thinking and disciplined execution
              belong together. Creative and strategic ideas are examined thoroughly and shaped into clear direction.
            </p>
            <p className="mt-3 text-[14px] leading-7 text-white/70">
              At Ingenium, imagination is given room to develop, supported by the discipline required to carry it forward.
              It informs how our teams approach complex challenges and assures our clients that bold ideas translate into
              measurable progress.
            </p>
          </div>
          </Item>

          <Item>
          <div className="seo7-surface p-6">
            <div className="text-[12px] tracking-[0.28em] text-white/70 font-semibold">NAVIGATION</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
              {NAV.map((it) => (
                <a key={it.id} href={`#${it.id}`} className="text-white/70 hover:text-white">
                  {it.label}
                </a>
              ))}
              <a href="#initiate" className="text-white/70 hover:text-white">Initiate</a>
            </div>
            <div className="mt-6 h-px bg-white/10" />
            <div className="mt-6 text-[13px] text-white/60">
              <div className="font-semibold text-white">Global Contact</div>
              <div className="mt-2">hello@ingenium.example</div>
              <div>+1 (000) 000-0000</div>
              <div className="mt-4 text-[12px] text-white/45">Legal links • Privacy • Terms</div>
            </div>
          </div>
          </Item>
        </div>

        </Stagger>

        <div className="mt-10 text-[12px] text-white/45">© {new Date().getFullYear()} Ingenium. All rights reserved.</div>
      </Container>
    </footer>
  )
}
