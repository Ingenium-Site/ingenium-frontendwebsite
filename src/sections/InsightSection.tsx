import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { INSIGHT_CARDS } from '../data/site'
import { Reveal, Stagger, Item } from '../components/Effects'

function Card({ title, body, image }: { title: string; body: string; image: string }) {
  return (
    <div className="seo7-surface overflow-hidden">
      <div className="h-44 md:h-48">
        <img src={new URL(`../assets/${image}`, import.meta.url).toString()} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="font-display text-[18px] text-white">{title}</div>
        <p className="mt-2 text-[14px] leading-7 text-white/70">{body}</p>
      </div>
    </div>
  )
}

export default function InsightSection() {
  return (
    <section id="insight" className="seo7-divider">
      <Container className="py-14">
        <Reveal>
          <SectionHeader
            kicker="Insight"
            title="Insight defines direction."
            body="We examine markets, competitive environments, operational realities, and growth ambition before defining a path forward. Intelligence is structured into decisions."
          />
        </Reveal>

        <Stagger>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {INSIGHT_CARDS.map((c) => (
              <Item key={c.title}>
                <Card {...c} />
              </Item>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  )
}
