import { useRef, useState, useEffect } from 'react'
import { motion as Motion, useScroll } from 'framer-motion'
import { profile, scenes } from '../data/portfolioData'
import { useReducedMotion, useMediaQuery } from '../motion/hooks'
import { ease } from '../motion/settings'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'
import TextLink from './TextLink'
import ParallaxImage from './ParallaxImage'

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const entries = useRef([])
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const mobile = useMediaQuery('(max-width: 767px)')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 60%'] })
  useEffect(() => {
    if (mobile || reduced) return
    const observer = new IntersectionObserver(records => {
      records.forEach(record => { if (record.isIntersecting) setActive(Number(record.target.dataset.index)) })
    }, { rootMargin: '-25% 0px -35% 0px', threshold: 0 })
    entries.current.forEach(entry => { if (entry) observer.observe(entry) })
    return () => observer.disconnect()
  }, [mobile, reduced])
  return <section id="experience" tabIndex={-1} aria-labelledby="experience-heading" className="experience-section section">
    <ParallaxImage scene={active === 2 ? scenes.education : scenes.experience} tone={active} /><div className="experience-overlay" aria-hidden="true" />
    <div className="shell experience-layout"><div className="experience-heading"><SectionLabel number="04">MY JOURNEY</SectionLabel><MaskedHeading id="experience-heading" lines={['Experience', 'across markets,', { text: 'brands & people.', muted: true }]} /><p className="section-aside">My journey spans different markets, with connected thinking and people shaping the way I work.</p><TextLink href={profile.linkedin} external>View my full profile</TextLink><span className="experience-index" aria-hidden="true">{String(active + 1).padStart(2, '0')}<small> / {String(profile.experience.length).padStart(2, '0')}</small></span></div>
      <div className="timeline" ref={ref}><div className="timeline-track" aria-hidden="true"><Motion.div style={{ scaleY: reduced ? 1 : scrollYProgress }} /></div>
        {profile.experience.map((item, index) => <Motion.article ref={node => { entries.current[index] = node }} data-index={index} data-active={active === index} className="timeline-entry" key={item.company}
          initial={false} animate={{ opacity: reduced || mobile || active === index ? 1 : .35 }} transition={{ duration: reduced ? 0 : .65, ease }}>
          <span className="timeline-dot" aria-hidden="true" /><p className="timeline-number">CHAPTER {String(index + 1).padStart(2, '0')}</p><p className="timeline-date">{item.period}</p><p className="company-label">{item.company}</p><h3>{item.role}</h3><p className="job-location">{item.location} <span aria-hidden="true">/</span> {item.arrangement}</p><p className="job-description">{item.description}</p><div className="tags">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        </Motion.article>)}
      </div>
    </div>
  </section>
}
