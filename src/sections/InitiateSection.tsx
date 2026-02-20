import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { Reveal } from '../components/Effects'

export default function InitiateSection({ onInitiate }: { onInitiate: () => void }) {
  return (
    <section id="initiate" className="seo7-divider">
      <Container className="py-14">
        <Reveal>
          <SectionHeader
            kicker="Initiate"
            title="Initiate."
            body="Begin a disciplined strategic engagement. Define the direction. Establish the framework. Move with intention."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center">
            <Button onClick={onInitiate}>Initiate Strategic Engagement</Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-[13px] leading-7 text-white/60">
            This opens a gated consultation request form. In production, route submissions to your CRM or email workflow.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
