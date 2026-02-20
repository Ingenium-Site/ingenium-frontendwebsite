import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { INTEGRITY_POINTS } from '../data/site'
import { Reveal, Stagger, Item } from '../components/Effects'
import visual from '../assets/integrity-visual.jpg'

export default function IntegritySection() {
  return (
    <section id="integrity" className="seo7-divider">
      <Container className="py-14">
        <Reveal>
          <SectionHeader
            kicker="Integrity"
            title="Integrity governs execution."
            body="Strategy without oversight weakens quickly. We remain accountable through vendor coordination, implementation control, and structured performance monitoring. Ambition is protected through governance."
          />
        </Reveal>

        <Stagger>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <Item>
              <div className="seo7-surface p-6">
                <div className="text-[12px] tracking-[0.28em] text-white/70 font-semibold">GOVERNANCE</div>
                <ul className="mt-4 space-y-3">
                  {INTEGRITY_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-seoAccent-600" />
                      <div className="text-[15px] leading-7 text-white/85">{p}</div>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[14px] leading-7 text-white/70">
                  We protect strategic intent during execution: coordinated partners, quality assurance, and disciplined
                  review.
                </p>
              </div>
            </Item>

            <Item>
              <div className="seo7-surface overflow-hidden">
                <img src={visual} alt="Governance visual" className="h-full w-full object-cover" />
              </div>
            </Item>
          </div>
        </Stagger>
      </Container>
    </section>
  )
}
