import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { Reveal, Stagger, Item } from '../components/Effects'

const points = [
  { title: 'Global Perspective', body: 'Institutional range across markets, shaped by local realities.' },
  { title: 'Institutional Standards', body: 'World-class systems, consistently applied and governed.' },
  { title: 'Integrated Teams', body: 'Strategy, creative range, and operational discipline in one house.' },
]

export default function IngeniumSection() {
  return (
    <section id="ingenium" className="seo7-divider">
      <Container className="py-14">
        <Reveal>
          <SectionHeader
            kicker="Ingenium"
            title="Ingenium."
            body="Ingenium is a strategic house built on intelligence, creative range, and operational discipline. Our experience spans sectors and borders. Our standards are world class and consistently applied."
          />
        </Reveal>

        <Stagger>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {points.map((p) => (
              <Item key={p.title}>
                <div className="seo7-surface p-6">
                  <div className="font-display text-[18px] text-white">{p.title}</div>
                  <p className="mt-2 text-[14px] leading-7 text-white/70">{p.body}</p>
                </div>
              </Item>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  )
}
