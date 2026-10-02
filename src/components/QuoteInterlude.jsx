import { useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { profile } from '../data/portfolioData'
import { useReducedMotion } from '../motion/hooks'
import { ease } from '../motion/settings'
import RevealText from './RevealText'

export default function QuoteInterlude() {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: .3 })
  const reduced = useReducedMotion()
  return <section ref={ref} className="quote-interlude" aria-label="A guiding principle"><div className="shell">
    <span className="quote-mark" aria-hidden="true">“</span>
    <RevealText direction="dissolve"><p className="eyebrow">MY GUIDING PRINCIPLE</p></RevealText>
    <blockquote>
      <span className="sr-only">{profile.quote}</span>
      <span aria-hidden="true">{profile.quote.split(' ').map((word, index) => <span key={index}><span className="intertitle-word"><Motion.span initial={false} animate={{ y: visible || reduced ? '0%' : '110%', opacity: visible || reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : .75, delay: reduced ? 0 : index * .035, ease }}>{word}</Motion.span></span>{' '}</span>)}</span>
    </blockquote>
    <div className="quote-bottom"><Motion.span className="quote-line" aria-hidden="true" initial={false} animate={{ scaleX: visible || reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 1.2, ease }} /><span>STRATEGY / COMMUNICATION / TRUST</span></div>
  </div></section>
}
