import { useState } from 'react'
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { gentleSpring, magneticSpring } from '../motion/settings'
import { usePointerMotion, useParallaxLayer, usePointerEnabled } from '../motion/hooks'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import TextLink from './TextLink'

export default function ContactCTA() {
  const pointer = usePointerMotion(magneticSpring)
  const button = useParallaxLayer(pointer, 7)
  const arrow = useParallaxLayer(pointer, 2.5)
  const enabled = usePointerEnabled()
  const [inside, setInside] = useState(false)
  const rawX = useMotionValue(0), rawY = useMotionValue(0)
  const x = useSpring(rawX, gentleSpring), y = useSpring(rawY, gentleSpring)
  function moveGlow(event) {
    if (!enabled || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    rawX.set(event.clientX - rect.left)
    rawY.set(event.clientY - rect.top)
  }
  return <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="contact-section section" onPointerMove={moveGlow} onPointerEnter={() => setInside(true)} onPointerLeave={() => setInside(false)}>
    <Motion.div className="contact-cursor-glow" aria-hidden="true" style={{ x, y }} animate={{ opacity: enabled && inside ? 1 : 0 }} transition={{ duration: .35 }}/>
    <div className="shell contact-content">
      <SectionLabel number="05">LET’S CONNECT</SectionLabel>
      <Reveal><div className="contact-layout">
        <div><h2 id="contact-heading">Good opportunities<br/>start with a<br/><span className="muted">conversation.</span></h2><p className="contact-intro">I’m always interested in new perspectives and shared ambitions. Let’s start a conversation.</p></div>
        <Motion.a className="contact-circle" href={profile.linkedin} target="_blank" rel="noopener noreferrer" {...pointer.handlers} style={button}><Motion.span className="contact-arrow" style={arrow}><ArrowUpRight size={52} strokeWidth={1} aria-hidden="true"/></Motion.span><span>Let’s connect</span></Motion.a>
      </div><div className="contact-bottom"><p>{profile.location}</p><TextLink href={profile.linkedin} external>Find me on LinkedIn</TextLink></div></Reveal>
    </div>
  </section>
}
