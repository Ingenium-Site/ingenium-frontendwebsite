import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { CASES } from '../data/site'
import { Reveal, Stagger, Item } from '../components/Effects'

function CaseCard({
  challenge,
  decision,
  execution,
  outcome,
  metric,
}: {
  challenge: string
  decision: string
  execution: string
  outcome: string
  metric: string
}) {
  return (
    <div className="seo7-surface p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="font-display text-[18px] text-white">Case Preview</div>
        <div className="rounded-xl bg-white/5 px-3 py-2 text-[12px] font-semibold text-seoAccent-600 border border-white/10">{metric}</div>
      </div>
      <div className="mt-4 grid gap-3 text-[14px] leading-7 text-white/70">
        <div><span className="font-semibold text-white">Challenge:</span> {challenge}</div>
        <div><span className="font-semibold text-white">Strategic Decision:</span> {decision}</div>
        <div><span className="font-semibold text-white">Execution:</span> {execution}</div>
        <div><span className="font-semibold text-white">Measured Outcome:</span> {outcome}</div>
      </div>
    </div>
  )
}

export default function ImpactSection() {
  return (
    <section id="impact" className="seo7-divider">
      <Container className="py-14">
        <Reveal>
          <SectionHeader
            kicker="Impact"
            title="Impact demonstrated."
            body="Our work is measured through outcomes, not presentations. Structured decisions, disciplined execution, and market intelligence have produced meaningful growth across industries."
          />
        </Reveal>

        <Stagger>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CASES.map((c, idx) => (
              <Item key={idx}>
                <CaseCard {...c} />
              </Item>
            ))}
          </div>
        </Stagger>

        <Reveal delay={0.12}>
          <div className="mt-10 flex items-center justify-center">
            <Button onClick={() => alert('Hook this CTA to a dedicated case studies page later.')}>Explore Full Impact</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
