import { useState } from 'react'
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile, scenes } from '../data/portfolioData'
import { gentleSpring, magneticSpring } from '../motion/settings'
import { usePointerMotion, useParallaxLayer, usePointerEnabled } from '../motion/hooks'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'
import TextLink from './TextLink'
import ParallaxImage from './ParallaxImage'

export default function CinematicCTA() {
  const pointer = usePointerMotion(magneticSpring)
  const button = useParallaxLayer(pointer, 7)
  const enabled = usePointerEnabled()
  const [inside, setInside] = useState(false)
  const rawX = useMotionValue(0), rawY = useMotionValue(0)
  const x = useSpring(rawX, gentleSpring), y = useSpring(rawY, gentleSpring)
  function move(event) {
    if (!enabled || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    rawX.set(event.clientX - rect.left); rawY.set(event.clientY - rect.top)
  }
  return <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="contact-section section" onPointerMove={move} onPointerEnter={() => setInside(true)} onPointerLeave={() => setInside(false)}>
    <ParallaxImage scene={scenes.cta} /><div className="contact-shade" aria-hidden="true" /><div className="contact-orbit" aria-hidden="true" />
    <Motion.div className="contact-cursor-glow" aria-hidden="true" style={{ x, y }} animate={{ opacity: enabled && inside ? 1 : 0 }} transition={{ duration: .35 }} />
    <div className="shell contact-content"><SectionLabel number="07">MY NEXT CHAPTER</SectionLabel><div className="contact-layout"><div><MaskedHeading id="contact-heading" lines={['Good opportunities', 'start with a', { text: 'conversation.', muted: true }]} /><p className="contact-intro">{profile.copy.contactIntro}<br />Let’s start a conversation.</p></div>
      <Motion.a className="contact-circle" href={profile.linkedin} target="_blank" rel="noopener noreferrer" {...pointer.handlers} style={button}><ArrowUpRight size={52} strokeWidth={1} aria-hidden="true" /><span>Let’s connect</span></Motion.a></div>
      <div className="contact-bottom"><p>{profile.location}</p><TextLink href={profile.linkedin} external>Find me on LinkedIn</TextLink></div>
    </div>
  </section>
}
