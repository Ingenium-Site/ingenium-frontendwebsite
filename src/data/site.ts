export type NavItem = {
  id: string
  label: string
  subtitle?: string
}

export const NAV: NavItem[] = [
  { id: 'insight', label: 'Insight' },
  { id: 'brand-systems', label: 'Brand Systems' },
  { id: 'influence', label: 'Influence' },
  { id: 'integrity', label: 'Integrity' },
  { id: 'impact', label: 'Impact' },
  { id: 'ingenium', label: 'Ingenium' },
]

export const HERO = {
  headline: 'INGENIUM is where insight, intelligence, and invention converge.',
  supporting:
    'This positioning applies across every discipline and medium. It defines how we think, how we build, and how our work is expected to perform.',
  secondary:
    'We combine insight, brand systems, influence strategy, and disciplined oversight to convert opportunity into performance.',
  primaryCta: 'Initiate',
  secondaryCta: 'View Impact',
}

export const QUIET_BANNERS = [
  {
    title: 'Over $100M in revenue generated for past partners.',
    sub: 'Multi-market growth. Cross-border strategy. Measured results.',
  },
  {
    title: 'Global Experience. Local Intelligence.',
    sub: 'Our work spans Africa, the EU, the UK, the US, and Asia — consistent standards, tuned to local realities.',
  },
  {
    title: 'Dream Wild. Execute with discipline.',
    sub: 'Expansive thinking, governed implementation, and outcomes that stand up to scrutiny.',
  },
]

export const INSIGHT_CARDS = [
  {
    title: 'Market Intelligence',
    body: 'We examine markets, performance signals, and operational realities before defining direction.',
    image: 'card-market-intelligence.jpg',
  },
  {
    title: 'Competitive Positioning',
    body: 'We map the landscape, identify whitespace, and clarify differentiated advantage.',
    image: 'card-competitive-positioning.jpg',
  },
  {
    title: 'Decision Architecture',
    body: 'We structure intelligence into decisions, frameworks, and a governed path forward.',
    image: 'card-decision-architecture.jpg',
  },
]

export const BRAND_POINTS = [
  'Positioning Frameworks',
  'Identity Architecture',
  'Cross‑Market Consistency',
]

export const INFLUENCE_POINTS = [
  'Campaign Architecture',
  'Market Entry Strategy',
  'Digital & Media Alignment',
]

export const INTEGRITY_POINTS = [
  'Implementation Governance',
  'QA Protocol',
  'Partner Alignment',
]

export type CasePreview = {
  challenge: string
  decision: string
  execution: string
  outcome: string
  metric: string
}

export const CASES: CasePreview[] = [
  {
    challenge: 'Market expansion across three regions with uneven demand signals.',
    decision: 'Re-segment by buyer intent and restructure GTM sequencing.',
    execution: 'Localized messaging system + governed channel rollout.',
    outcome: 'Improved conversion, shorter sales cycles, stronger retention.',
    metric: '+$18.4M incremental revenue',
  },
  {
    challenge: 'Brand inconsistency across markets diluted trust and recall.',
    decision: 'Build a scalable positioning and identity architecture.',
    execution: 'Unified system + cross-market governance and QA.',
    outcome: 'Higher awareness and better partner alignment at speed.',
    metric: '12 markets standardized',
  },
  {
    challenge: 'Competitive pressure eroded margin and perception.',
    decision: 'Reposition from price to performance and proof.',
    execution: 'Campaign architecture with controlled creative execution.',
    outcome: 'Improved win-rate and restored pricing confidence.',
    metric: '+9.6% margin recovery',
  },
]
