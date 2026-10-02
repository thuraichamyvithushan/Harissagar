import { useReducedMotion } from '../motion/hooks'
import { useRef } from 'react'
import { motion as Motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { ease } from '../motion/settings'
import Reveal from './Reveal'
import TextLink from './TextLink'
import SectionLabel from './SectionLabel'

function TimelineEntry({ item, index }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: .25 })
  const reduced = useReducedMotion()
  return <div ref={ref} className="timeline-row">
    <Reveal direction="left" distance={15} className="timeline-date"><span>{item.period}</span><span className="micro-label">{item.arrangement}</span></Reveal>
    <Motion.span className="timeline-point" aria-hidden="true" initial={false} animate={{ scale: visible || reduced ? 1 : .5, opacity: visible || reduced ? 1 : .35, boxShadow: visible || reduced ? '0 0 14px rgba(56,214,210,.28)' : '0 0 0px rgba(56,214,210,0)' }} transition={{ duration: reduced ? 0 : .65, ease }}/>
    <Reveal direction="right" distance={20} delay={.08} className="timeline-content"><article><p className="company-label">{item.company}</p><h3>{item.role}</h3><p className="job-location">{item.location}</p><p className="job-description">{item.description}</p><div className="flex flex-wrap gap-2">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article></Reveal>
    <span className="timeline-index" aria-hidden="true">0{index + 1}<ArrowUpRight size={21}/></span>
  </div>
}
export default function Experience() {
  const timeline = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: timeline, offset: ['start 80%', 'end 65%'] })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])
  return <section id="experience" tabIndex={-1} aria-labelledby="experience-heading" className="section shell">
    <div className="section-intro"><div><SectionLabel number="03">EXPERIENCE</SectionLabel><Reveal><h2 id="experience-heading">Across markets,<br/><span className="muted">brands and people.</span></h2></Reveal></div><TextLink href={profile.linkedin} external>View my full profile</TextLink></div>
    <div className="timeline" ref={timeline}><div className="timeline-track" aria-hidden="true"><Motion.div style={{ scaleY: reduced ? 1 : progress }}/></div>{profile.experience.map((item,index) => <TimelineEntry key={`${item.company}-${item.role}-${item.startDate}`} item={item} index={index}/>)}</div>
  </section>
}
