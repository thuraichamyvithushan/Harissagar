import { useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { philosophy } from '../data/portfolioData'
import { useReducedMotion } from '../motion/hooks'
import { ease } from '../motion/settings'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'
import RevealText from './RevealText'

function Chapter({ item, index }) {
  const ref = useRef(null)
  const active = useInView(ref, { once: true, amount: .25 })
  const reduced = useReducedMotion()
  return <article ref={ref} className="approach-chapter">
    <RevealText direction="curtain"><span className="chapter-number">0{index + 1}</span><h3>{item.title}</h3></RevealText>
    <Motion.div className="chapter-line" aria-hidden="true" initial={false} animate={{ scaleX: active || reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : .85, ease, delay: reduced ? 0 : .15 }} />
    <RevealText direction="dissolve" delay={.2}><p className="chapter-principle">{item.principle}</p><p className="chapter-description">{item.detail}</p><ul>{item.practices.map(practice => <li key={practice}>{practice}</li>)}</ul><p className="chapter-outcome">{item.outcome}<ArrowDownRight size={19} strokeWidth={1.2} aria-hidden="true" /></p></RevealText>
  </article>
}
export default function Approach() {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: .08 })
  const reduced = useReducedMotion()
  return <section ref={ref} id="approach" tabIndex={-1} className="approach-section section" aria-labelledby="approach-heading">
    <Motion.div className="approach-wipe" aria-hidden="true" initial={false} animate={{ scaleY: visible || reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : .8, ease }} />
    <Motion.div className="shell approach-content" initial={reduced ? false : { clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: visible || reduced ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)' }} transition={{ duration: reduced ? 0 : .85, ease }}><div className="approach-topline"><SectionLabel number="05">MY APPROACH</SectionLabel><span className="micro-label">A PEOPLE-FIRST PHILOSOPHY</span></div>
      <div className="section-intro"><MaskedHeading id="approach-heading" delay={.12} lines={['Strategy matters.', 'People make it work.']} /><p className="section-aside">I believe good business starts with understanding people: what they need, what they value and where we can move forward together.</p></div>
      <div className="approach-chapters">{philosophy.map((item, index) => <Chapter key={item.title} item={item} index={index} />)}</div>
      <div className="approach-footer"><span>THREE PRINCIPLES. ONE CONNECTED APPROACH.</span><a href="#contact">Start a conversation<ArrowDownRight size={19} aria-hidden="true" /></a></div>
    </Motion.div>
  </section>
}
