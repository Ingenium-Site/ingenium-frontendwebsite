import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { BRAND_POINTS } from '../data/site'
import { Reveal, Stagger, Item } from '../components/Effects'

import showcase from '../assets/brand-systems-showcase.jpg'

export default function BrandSystemsSection() {
  return (
    <section id="brand-systems" className="seo7-divider">
      <Container className="py-14">
        <Reveal>
          <SectionHeader
            kicker="Brand Systems"
            title="Brand systems engineered for scale."
            body="Identity is infrastructure. We design positioning frameworks, messaging systems, and visual architecture that hold across markets and over time. Creativity is applied with structural discipline."
          />
        </Reveal>

        <Stagger>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <Item>
              <div className="seo7-surface p-6">
                <div className="text-[12px] tracking-[0.28em] text-white/70 font-semibold">SYSTEM COMPONENTS</div>
                <ul className="mt-4 space-y-3">
                  {BRAND_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-seoAccent-600" />
                      <div className="text-[15px] leading-7 text-white/85">{p}</div>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[14px] leading-7 text-white/70">
                  We don’t “fake it until we make it.” We build brand infrastructure that can survive expansion, time,
                  and operational pressure.
                </p>
              </div>
            </Item>

            <Item>
              <div className="seo7-surface overflow-hidden">
                <img src={showcase} alt="Brand systems showcase" className="h-full w-full object-cover" />
              </div>
            </Item>
          </div>
        </Stagger>
      </Container>
    </section>
  )
}
