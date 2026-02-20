import Container from '../components/Container'
import { Stagger, Item } from '../components/Effects'

import aboutGradient from '../assets/seo7/about-one-gradient-bg.png'

const features = [
  {
    title: 'OUR VISION ',
    desc: 'INGENIUM aims to be a trusted strategy and creative partner for organisations shaping the future across Africa and beyond, known for clarity, quality, and long-term impact. Trust is earned through consistency, sound judgment, and work that continues to perform over time.',
  },
  {
    title: 'OUR MISSION',
    desc: 'INGENIUM helps leaders and organisations turn clear ideas into strong brands, systems, and outcomes by combining strategic thinking, creative rigor, and modern technology. We operate at the intersection where ideas are made practical and creativity is held to professional standards.',
  },
]

export default function SeoHighlightsSection() {
  return (
    <section className="seo7-divider relative overflow-hidden py-14 md:py-20">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-24 left-[-120px] h-[460px] w-[460px] rounded-full bg-brand-600/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-32 right-[-140px] h-[520px] w-[520px] rounded-full bg-seoAccent-600/20 blur-3xl animate-blobSlow" />
      <Container>
        <Stagger>
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch">
            {/* Proof card (updated with vision/mission) */}
            <Item>
              <div className="relative overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900 p-8 shadow-soft">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    backgroundImage: `url(${aboutGradient})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="relative">
                  <div className="font-display text-[56px] leading-none text-seoAccent-600">920+</div>
                  <div className="mt-2 max-w-[22ch] text-[16px] leading-7 text-white/80">
                    Projects shipped with measurable lift across strategy, content, and growth systems.
                  </div>
                  <div className="mt-6 text-[12px] tracking-[0.22em] text-white/55">PROOF • DELIVERY • GOVERNANCE</div>
                </div>
              </div>
            </Item>

            {/* Vision/Mission and Marketing Features stacked vertically */}
            <div className="flex flex-col gap-4">
              {/* Vision and Mission cards */}
              <div className="grid flex-grow gap-4 md:grid-cols-2">
                {features.map((f) => (
                  <Item key={f.title}>
                    <div className="seo7-surface flex flex-col h-full p-6">
                      <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.22em] text-white/70">
                        <span className="h-2 w-2 rounded-full bg-seoAccent-600" />
                      </div>
                      <div className="mt-3 font-display text-[18px] leading-[1.2] text-white">{f.title}</div>
                      <p className="mt-3 text-[13px] leading-6 text-white/70 flex-grow">{f.desc}</p>
                    </div>
                  </Item>
                ))}
              </div>

              {/* Marketing features header - now positioned below vision/mission */}
              <Item>
                <div className="seo7-surface p-7">
                  <div className="text-[12px] font-semibold tracking-[0.26em] text-white/70">MODERN MARKETING FEATURES</div>
                  <h2 className="mt-3 font-display text-[28px] leading-[1.15] text-white md:text-[34px]">
                    Borrow the best UX patterns from SEO7—without losing Ingenium's voice.
                  </h2>
                  <p className="mt-3 text-[14px] leading-7 text-white/70">
                    You now have a darker, high-contrast hero, proof card styling, and reusable marketing blocks that can be
                    expanded into services, case studies, and pricing.
                  </p>
                </div>
              </Item>
            </div>
          </div>
        </Stagger>
      </Container>
    </section>
  )
}